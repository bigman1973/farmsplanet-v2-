import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { company, name, email, phone, country, interest, message, requestCatalog } = req.body;

  // Validate required fields
  if (!email || !name || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure Brevo API Client
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const contactsApi = new SibApiV3Sdk.ContactsApi();

  try {
    // 1. Send Notification Email to Owner (Jordi)
    const ownerEmail = new SibApiV3Sdk.SendSmtpEmail();
    ownerEmail.subject = `New B2B Inquiry from ${company || name}`;
    ownerEmail.htmlContent = `
      <html>
        <body>
          <h2>New Contact Request</h2>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Catalog Requested:</strong> ${requestCatalog ? 'Yes' : 'No'}</p>
          <br/>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </body>
      </html>
    `;
    ownerEmail.sender = { name: "Farms Planet Web", email: "no-reply@farmsplanet.es" };
    ownerEmail.to = [{ email: "jordi@farmsplanet.es", name: "Jordi Giró" }];
    
    await apiInstance.sendTransacEmail(ownerEmail);

    // 2. Send Confirmation Email to User
    const userEmail = new SibApiV3Sdk.SendSmtpEmail();
    userEmail.subject = "Thank you for contacting Farms Planet";
    userEmail.htmlContent = `
      <html>
        <body>
          <h2>Thank you for your interest, ${name}!</h2>
          <p>We have received your inquiry regarding <strong>${interest}</strong>.</p>
          <p>Our team will review your request and get back to you shortly.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Farms Planet Team</strong></p>
          <p><a href="https://farmsplanet.es">www.farmsplanet.es</a></p>
        </body>
      </html>
    `;
    userEmail.sender = { name: "Farms Planet", email: "sales@farmsplanet.es" };
    userEmail.to = [{ email: email, name: name }];

    await apiInstance.sendTransacEmail(userEmail);

    // 3. Add Contact to Brevo List
    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.attributes = {
      NOM: name,
      COMPANY: company,
      PHONE: phone,
      COUNTRY: country,
      INTEREST: interest
    };
    createContact.listIds = process.env.BREVO_LIST_ID ? [parseInt(process.env.BREVO_LIST_ID)] : [];
    createContact.updateEnabled = true; // Update if exists

    try {
      await contactsApi.createContact(createContact);
    } catch (contactError) {
      // Ignore error if contact already exists or other minor issue, but log it
      console.log('Contact creation warning:', contactError.message);
    }

    return res.status(200).json({ success: true, message: 'Emails sent and contact saved' });

  } catch (error) {
    console.error('Brevo API Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to process request', error: error.message });
  }
}
