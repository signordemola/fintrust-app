import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false, // SSL
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

export async function sendPasskeyEmail(to: string, passkey: string) {
  await transporter.sendMail({
    from: `"FinTrust Digital Bank" <${process.env.ZOHO_USER}>`,
    to,
    subject: "Your One-Time Passkey",
    text: `Your login passkey is: ${passkey}`,
    html: `<p>Your login passkey is: <strong>${passkey}</strong></p>`,
  });
}
