// src/app/terms-of-service/page.tsx

export default function TermsOfServicePage() {
  return (
    <main className="section">
      <div className="container">
        <a href="/" className="muted" style={{ fontWeight: 800 }}>
          ← Back
        </a>

        <h1 style={{ margin: "16px 0 6px 0", fontSize: 34, fontWeight: 900 }}>
          Terms of Service
        </h1>

        <p className="small muted" style={{ marginTop: 0 }}>
          Last updated: 27 December 2025
        </p>

        <div style={{ height: 14 }} />

        <div className="panel" style={{ padding: 22 }}>
          <p className="p">
            These Terms of Service (“Agreement”) govern your access to and use of Airoflair
            services, including the Airoflair website, the Airoflair Inspect platform, and
            Airoflair mobile applications.
          </p>

          <p className="p">
            By accessing or using any Airoflair product or service, you agree to be bound by
            this Agreement. If you do not agree, you must not use the services.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            1. Services
          </h2>
          <p className="p">
            Airoflair provides inspection reporting tools, engineering utilities, and related
            workflows through web and mobile applications. Certain features may be subject to
            additional terms presented at the time you use them.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            2. Accounts and Access
          </h2>
          <p className="p">
            Where an account is required, you are responsible for maintaining the
            confidentiality of your credentials and for all activity that occurs under your
            account. You must notify us immediately of any unauthorized use or security
            breach.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            3. Acceptable Use
          </h2>
          <p className="p">
            You agree not to misuse the services. This includes attempting to gain unauthorized
            access, interfering with service operation, transmitting malicious code, scraping
            or harvesting data without permission, or using the services in violation of any
            applicable law.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            4. User Content
          </h2>
          <p className="p">
            You retain ownership of content you submit (“Content”). You grant Airoflair a
            limited license to host, store, process, and display your Content solely to provide
            the services. You are responsible for ensuring you have rights to upload Content.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            5. Fees and Billing
          </h2>
          <p className="p">
            Some services may be offered on a paid basis. If you purchase a paid plan, you
            agree to pay the applicable fees and taxes. We may update pricing from time to
            time; changes will apply at renewal or as otherwise communicated.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            6. Availability
          </h2>
          <p className="p">
            We aim to provide reliable services, but availability may be affected by
            maintenance, updates, or factors outside our control. We do not guarantee
            uninterrupted operation.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            7. Intellectual Property
          </h2>
          <p className="p">
            Airoflair and its licensors own all rights, title, and interest in the services,
            including software, designs, branding, and documentation. No rights are granted
            except as expressly stated.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            8. Disclaimer
          </h2>
          <p className="p">
            The services are provided “as is” and “as available.” To the maximum extent
            permitted by law, Airoflair disclaims all warranties, including implied warranties
            of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            9. Limitation of Liability
          </h2>
          <p className="p">
            To the maximum extent permitted by law, Airoflair will not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of
            profits, revenue, data, or goodwill, arising from or related to use of the
            services.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            10. Indemnity
          </h2>
          <p className="p">
            You agree to indemnify and hold harmless Airoflair and its affiliates from claims,
            liabilities, damages, losses, and expenses arising from your use of the services
            or your violation of this Agreement.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            11. Changes
          </h2>
          <p className="p">
            We may update these terms from time to time. If we do, we will post the revised
            terms on this page and update the “Last updated” date.
          </p>

          <h2 style={{ marginTop: 22, fontSize: 18, fontWeight: 900 }}>
            12. Contact
          </h2>
          <p className="p">
            Questions about these terms? Contact us at <strong>info@airoflair.com</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
