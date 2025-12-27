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

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY is missing in environment variables');
    return res.status(500).json({ message: 'Server configuration error: Missing API Key' });
  }

  // Prepare the email payload for the owner (Jordi)
  const emailPayload = {
    sender: { name: "Farms Planet Web", email: "jordi@farmsplanet.es" },
    to: [{ email: "jordi@farmsplanet.es", name: "Jordi Giró" }],
    subject: `New B2B Inquiry from ${company || name}`,
    htmlContent: `
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
    `
  };

  try {
    // 1. Send Notification Email to Owner
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API Error (Owner Email):', data);
      return res.status(response.status).json({ 
        message: 'Failed to send email to owner', 
        error: data.message || data.code || 'Unknown Brevo Error' 
      });
    }

    // 2. Send Confirmation Email to User (Fire and forget - don't block response)
    const userEmailPayload = {
      sender: { name: "Farms Planet", email: "jordi@farmsplanet.es" },
      to: [{ email: email, name: name }],
      subject: "Thank you for contacting Farms Planet",
      htmlContent: `
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
      `
    };

    // Attempt to send confirmation email
    fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(userEmailPayload)
    }).catch(err => console.error('Confirmation email failed:', err));

    // 3. Add Contact to List (Optional)
    if (process.env.BREVO_LIST_ID) {
      const contactPayload = {
        email: email,
        attributes: {
          FIRSTNAME: name,
          SMS: phone
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID)],
        updateEnabled: true
      };

      fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify(contactPayload)
      }).catch(err => console.error('Contact creation failed:', err));
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Server Logic Error:', error);
    return res.status(500).json({ 
      message: 'Internal Server Error', 
      error: error.message 
    });
  }
}
