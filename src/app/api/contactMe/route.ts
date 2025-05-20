import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, message,
        subject
    } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Message from ${name}`,
        html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0b0f; padding: 30px; color: #e5e5e5; min-height: 100vh;">
  <table width="100%" style="max-width: 620px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #121212); border-radius: 16px; box-shadow: 0 8px 24px rgba(104, 55, 255, 0.45); border: 1px solid #4c2889;">
    <tr>
      <td style="padding: 32px; text-align: center; background: linear-gradient(90deg, #7c3aed, #a855f7); border-top-left-radius: 16px; border-top-right-radius: 16px; box-shadow: inset 0 -4px 8px rgba(0,0,0,0.25);">
        <h1 style="color: #fff; margin: 0; font-size: 32px; letter-spacing: 1.2px; text-shadow: 0 0 8px #c084fc;">Sanjai Uthup Thomas</h1>
        <p style="color: #d8b4fe; margin-top: 6px; font-size: 18px; font-weight: 500;">📬 Portfolio Contact Form</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 36px; color: #ddd;">
        <h2 style="color: #c084fc; font-size: 22px; margin-bottom: 20px; border-bottom: 2px solid #9333ea; padding-bottom: 8px; font-weight: 600;">📨 New Message Received</h2>

        <p style="font-size: 16px; margin: 12px 0;"><strong style="color: #e0c3fc;">👤 Name:</strong> <span style="color: #fafafa;">${name}</span></p>
        <p style="font-size: 16px; margin: 12px 0;"><strong style="color: #e0c3fc;">📧 Email:</strong> <span style="color: #fafafa;">${email}</span></p>
        <p style="font-size: 16px; margin: 12px 0;"><strong style="color: #e0c3fc;">📝 Subject:</strong> <span style="color: #fafafa;">${subject}</span></p>
        
        <p style="font-size: 16px; margin-top: 24px; font-weight: 600; color: #d8b4fe;">💬 Message:</p>
        <p style="background-color: #2d2a4a; padding: 18px 20px; border-left: 5px solid #9333ea; border-radius: 8px; font-size: 15px; line-height: 1.5; color: #f5f3ff; box-shadow: 0 2px 6px rgba(147, 51, 234, 0.35); white-space: pre-wrap;">${message}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 18px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #3f3a6e; background: #0d0c16; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
        This message was sent from <a href="https://sanjaiuthupthomas.in" style="color: #a78bfa; text-decoration: none; font-weight: 600;">sanjaiuthupthomas.in</a>.<br />
        &copy; 2025 Sanjai Uthup Thomas. All rights reserved.
      </td>
    </tr>
  </table>
</div>
`

    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}