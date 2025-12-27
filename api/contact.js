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
    // Using jordi@farmsplanet.es as sender since it is likely the verified account email
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
    ownerEmail.sender = { name: "Farms Planet Web", email: "jordi@farmsplanet.es" };
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
    // Use the same verified sender
    userEmail.sender = { name: "Farms Planet", email: "jordi@farmsplanet.es" };
    userEmail.to = [{ email: email, name: name }];

    try {
        await apiInstance.sendTransacEmail(userEmail);
    } catch (emailError) {
        console.error('Confirmation email error:', emailError);
        // Continue execution even if confirmation email fails
    }

    // 3. Add Contact to Brevo List
    // Simplified to avoid attribute mapping errors
    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.attributes = {
      // Only using standard attributes usually available by default
      FIRSTNAME: name,
      SMS: phone
    };
    createContact.listIds = process.env.BREVO_LIST_ID ? [parseInt(process.env.BREVO_LIST_ID)] : [];
    createContact.updateEnabled = true;

    try {
      await contactsApi.createContact(createContact);
    } catch (contactError) {
      console.log('Contact creation warning:', contactError.message);
      // Don't fail the request if contact creation fails (e.g. duplicate)
    }

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });

  } catch (error) {
    console.error('Brevo API Critical Error:', error);
    // Return the actual error message for debugging
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message || JSON.stringify(error) });
  }
}
