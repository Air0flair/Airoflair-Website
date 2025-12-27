import { NextResponse } from "next/server";

type Payload = {
  firstName?: string;
  lastName?: string;
  contactNo?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
};

function isEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // Honeypot: if filled, treat as success but do nothing
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const firstName = (body.firstName ?? "").trim();
    const lastName = (body.lastName ?? "").trim();
    const contactNo = (body.contactNo ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    // Your Azure Logic App HTTP endpoint (set in Azure Static Web Apps env vars)
    const AZURE_CONTACT_WEBHOOK_URL = process.env.AZURE_CONTACT_WEBHOOK_URL;
    if (!AZURE_CONTACT_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Email service not configured (missing AZURE_CONTACT_WEBHOOK_URL)" },
        { status: 500 }
      );
    }

    // Forward to Logic App
    const res = await fetch(AZURE_CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // You can add a simple shared secret header if you want
      // headers: { "Content-Type": "application/json", "x-airoflair-key": process.env.AZURE_CONTACT_WEBHOOK_KEY ?? "" },
      body: JSON.stringify({
        source: "airoflair.com",
        submittedAt: new Date().toISOString(),
        firstName,
        lastName,
        contactNo,
        email,
        message,
      }),
    });

    if (!res.ok) {
      // optional: log response text for debugging
      const txt = await res.text().catch(() => "");
      return NextResponse.json({ error: "Failed to send", detail: txt }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
