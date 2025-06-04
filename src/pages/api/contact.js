
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another like 'hotmail', 'yahoo'
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: "vsdr naqe njpx uxqr",
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL, // Your email
      subject: `Portfolio Contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return res.status(500).json({ error: 'Mail not sent' });
  }
}
