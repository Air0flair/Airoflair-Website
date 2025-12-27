// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function required(value: string | undefined, name: string) {
  if (!value || !value.trim()) throw new Error(`Missing ${name}`);
  return value.trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const firstName = required(body.firstName, "firstName");
    const lastName = required(body.lastName, "lastName");
    const phone = required(body.phone, "phone");
    const email = required(body.email, "email");
    const message = required(body.message, "message");

    const smtpUser = process.env.M365_SMTP_USER;
    const smtpPass = process.env.M365_SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return new NextResponse(
        "Server is missing email configuration (M365_SMTP_USER / M365_SMTP_PASS).",
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.M365_SMTP_HOST || "smtp.office365.com",
      port: Number(process.env.M365_SMTP_PORT || 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const to = process.env.CONTACT_TO || "info@airoflair.com";

    const subject = `Airoflair Website Contact: ${firstName} ${lastName}`;

    const text = [
      `New website enquiry`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      `${message}`,
      ``,
      `Sent from: airoflair.com`,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin:0 0 10px;">New website enquiry</h2>
        <p style="margin:0 0 6px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin:0 0 6px;"><strong>Phone:</strong> ${phone}</p>
        <p style="margin:0 0 12px;"><strong>Email:</strong> ${email}</p>
        <p style="margin:0 0 6px;"><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #e6eaf2; border-radius: 10px; background: #f6f8fc;">
          ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
        </div>
        <p style="margin:14px 0 0; color:#667085; font-size:12px;">Sent from: airoflair.com</p>
      </div>
    `;

    await transporter.sendMail({
      from: smtpUser,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return new NextResponse(e?.message || "Failed to send", { status: 400 });
  }
}
