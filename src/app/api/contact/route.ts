import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    // Basic validation (match your form’s required fields)
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Your Logic App HTTP trigger URL (store in Azure SWA Configuration as an app setting)
    // Example value includes the ?sig=... token (do NOT expose this on the client)
    const LOGIC_APP_URL = process.env.AZURE_LOGIC_APP_CONTACT_URL;

    if (!LOGIC_APP_URL) {
      return NextResponse.json(
        { error: "Contact service not configured" },
        { status: 500 }
      );
    }

    // Forward to Logic App (server-to-server)
    const logicRes = await fetch(LOGIC_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Keep payload keys EXACTLY as your Logic App JSON schema expects
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    // Logic Apps commonly returns 202 Accepted on success
    if (!logicRes.ok) {
      const text = await logicRes.text().catch(() => "");
      console.error("Logic App error:", logicRes.status, text);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
