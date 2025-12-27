// src/app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <main className="section">
      <div className="container">
        <a href="/" className="muted" style={{ fontWeight: 800 }}>
          ← Back
        </a>

        <h1 style={{ margin: "16px 0 6px 0", fontSize: 34, fontWeight: 900 }}>
          Privacy Policy
        </h1>

        <p className="small muted" style={{ marginTop: 0 }}>
          Last updated: 27 December 2025
        </p>

        <div style={{ height: 14 }} />

        <div className="panel" style={{ padding: 22 }}>
          <p className="p">
            This Privacy Policy explains how Airoflair (“we”, “us”, “our”) collects, uses, and
            protects personal information when you use our website and applications (including
            Airoflair Inspect and Airoflair mobile apps).
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            1. Information We Collect
          </h2>
          <p className="p">
            We may collect information you provide directly (for example, when submitting a
            contact request), including your name, email address, phone number, and message.
          </p>
          <p className="p">
            We may also collect limited technical information such as device/browser type,
            approximate location (city/country), and usage analytics to improve performance and
            reliability.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            2. How We Use Information
          </h2>
          <p className="p">
            We use personal information to:
          </p>
          <ul className="p" style={{ marginTop: 8 }}>
            <li>Respond to enquiries and provide support.</li>
            <li>Operate and improve our website and applications.</li>
            <li>Maintain security, prevent abuse, and troubleshoot issues.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            3. Legal Basis (where applicable)
          </h2>
          <p className="p">
            Where required by law, we process personal information based on consent, contract
            necessity, legitimate interests (e.g., improving services and security), and/or
            compliance with legal obligations.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            4. Sharing of Information
          </h2>
          <p className="p">
            We do not sell personal information. We may share information with service
            providers who help us operate our services (e.g., hosting, email delivery, analytics),
            under appropriate confidentiality and security obligations.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            5. Data Retention
          </h2>
          <p className="p">
            We retain personal information only as long as necessary to fulfill the purposes
            described in this policy, unless a longer retention period is required or permitted
            by law.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            6. Security
          </h2>
          <p className="p">
            We use reasonable administrative, technical, and physical safeguards designed to
            protect information against unauthorized access, disclosure, alteration, or
            destruction. No method of transmission or storage is completely secure.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            7. Your Rights
          </h2>
          <p className="p">
            Depending on your location, you may have rights to access, correct, delete, or
            restrict processing of your personal information, and to object to certain
            processing. You may also have the right to lodge a complaint with a regulator.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            8. Cookies
          </h2>
          <p className="p">
            Our website may use cookies or similar technologies to operate, improve performance,
            and understand usage. You can control cookies through your browser settings.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            9. Changes to this Policy
          </h2>
          <p className="p">
            We may update this policy from time to time. We will post changes here and update
            the “Last updated” date.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            10. Contact Us
          </h2>
          <p className="p">
            If you have questions about this policy, contact us at{" "}
            <strong>info@airoflair.com</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
