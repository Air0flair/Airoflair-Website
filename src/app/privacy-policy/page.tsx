import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const BRAND_BLUE = "#2B2F8F";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/airoflair" },
  { name: "Instagram", href: "https://www.instagram.com/airoflair/" },
  { name: "Twitter", href: "https://twitter.com/airoflair" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/airoflair" },
];

const STORES = {
  googlePlayDev: "https://play.google.com/store/apps/dev?id=5533742350655574841",
  appleDev: "https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656",
};

function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-48">
            <Image src={Logo} alt="Airoflair" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/#products" className="text-xs font-medium tracking-wide text-zinc-600 hover:text-black">
            PRODUCTS
          </Link>
          <Link href="/#services" className="text-xs font-medium tracking-wide text-zinc-600 hover:text-black">
            SERVICES
          </Link>
          <Link href="/#contact" className="text-xs font-medium tracking-wide text-zinc-600 hover:text-black">
            CONTACT
          </Link>

          <Link
            href="https://inspect.airoflair.com"
            target="_blank"
            className="ml-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            inspect
          </Link>
        </nav>
      </div>
    </header>
  );
}

function StoreButtons({ compact = false }: { compact?: boolean }) {
  const base =
    "inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white font-semibold text-zinc-700 hover:bg-zinc-50";
  const size = compact ? "h-9 px-3 text-xs" : "h-10 px-4 text-xs";

  return (
    <div className="flex items-center gap-3">
      <Link href={STORES.appleDev} target="_blank" className={`${base} ${size}`}>
        App Store
      </Link>
      <Link href={STORES.googlePlayDev} target="_blank" className={`${base} ${size}`}>
        Google Play
      </Link>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {SOCIALS.map((s) => (
        <Link
          key={s.name}
          href={s.href}
          target="_blank"
          className="text-sm font-semibold text-zinc-600 hover:text-black"
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 border-t border-zinc-200 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-zinc-500">© {new Date().getFullYear()} AIROFLAIR</div>

          <div className="flex items-center gap-6 text-xs font-semibold text-zinc-600">
            <Link href="/terms-of-service" className="hover:text-black">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <StoreButtons compact />
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
      <div className="space-y-3 text-[12.5px] leading-relaxed text-zinc-700">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-[12.5px] leading-relaxed text-zinc-700">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black">
          ← Back
        </Link>

        <h1 className="mt-8 text-2xl font-semibold text-zinc-800">Privacy Policy</h1>
        <p className="mt-3 text-xs text-zinc-500">Last updated: 03 September 2023</p>

        <div className="mt-8 space-y-10">
          <Section title="Overview">
            <p>
              This Privacy Policy explains how Airoflair collects, stores, and uses personal information when you use our website, Inspect platform,
              Quick Inspect App, Airoflair Data App, or related services.
            </p>
            <p>
              By accessing or using our services, you agree to this Privacy Policy and consent to the data practices described.
            </p>
          </Section>

          <Section title="Policy Scope">
            <p>
              We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”).
              This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) on the airoflair.com website (“Website”),
              “inspect” mobile application (“Mobile Application”), and any of their related products and services (collectively, “Services”),
              and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information.
            </p>
            <p>
              This Policy is a legally binding agreement between you (“User”, “you” or “your”) and AIROFLAIR (PTY) LTD (“AIROFLAIR (PTY) LTD”, “we”, “us” or “our”).
              This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
            </p>
          </Section>

          <Section title="Automatic Collection of Information">
            <p>
              When you open the Website or use the Mobile Application, our servers automatically record information that your browser or device sends.
              This data may include information such as your device’s IP address and location, browser and device name and version,
              operating system type and version, and language preferences.
            </p>
          </Section>

          <Section title="Collection of Personal Information">
            <p>
              You can’t access and use the Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual.
              You will be asked to provide certain Personal Information (for example, your name and e-mail address). We receive and store any information you knowingly provide to us.
            </p>

            <p>When required, this information may include the following:</p>
            <BulletList
              items={[
                "Contact information (such as email address, phone number, etc)",
                "Account details (such as user name, unique user ID, password, etc)",
                "Basic personal information (such as name, country of residence, etc)",
                "Geolocation data of your device (such as latitude and longitude)",
                "Certain features on the mobile device (such as gallery, etc)",
              ]}
            />

            <p>
              You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of most of the features on the Services.
              Users who are uncertain about what information is mandatory are welcome to contact us.
            </p>
          </Section>

          <Section title="Privacy of Children">
            <p>
              We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through the Services.
              If you have reason to believe that a child under the age of 13 has provided Personal Information to us through the Services, please contact us to request deletion.
            </p>
          </Section>

          <Section title="Use and Processing of Collected Information (GDPR / POPI)">
            <p>
              We act as a data controller and a data processor in terms of the GDPR and POPI when handling Personal Information, unless we have entered into a data processing agreement with you
              in which case you would be the data controller and we would be the data processor.
            </p>

            <p>We may use collected information to:</p>
            <BulletList
              items={[
                "Create and manage user accounts",
                "Improve products and services",
                "Send administrative information",
                "Send marketing and promotional communications",
                "Send product and service updates",
                "Respond to inquiries and offer support",
                "Request user feedback",
                "Improve user experience",
                "Protect from abuse and malicious users",
                "Respond to legal requests and prevent harm",
                "Run and operate the Services",
              ]}
            />

            <p>We rely on the following legal bases:</p>
            <BulletList items={["User’s consent", "Compliance with the law and legal obligations"]} />
          </Section>

          <Section title="Payment Processing">
            <p>
              If the Services require payment processing, you will need to provide payment details, which will be used solely for processing payments.
              We use third-party payment processors (“Payment Processors”) who handle payment information securely.
            </p>
          </Section>

          <Section title="Information Security">
            <p>
              We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure.
              However, no data transmission over the Internet or wireless network can be guaranteed.
            </p>
          </Section>

          <Section title="Changes and Amendments">
            <p>
              We reserve the right to modify this Policy at any time. An updated version will be effective immediately upon posting unless otherwise specified.
              We will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected.
            </p>
          </Section>

          <Section title="Acceptance of This Policy">
            <p>
              By accessing and using the Services and submitting your information you agree to be bound by this Policy.
              If you do not agree to abide by the terms of this Policy, you are not authorised to access or use the Services.
            </p>
          </Section>

          <Section title="Contacting Us">
            <p>
              If you have any other questions, concerns, or complaints regarding this Policy or information we may hold about you, contact:
            </p>
            <p className="font-semibold text-zinc-900">enquiries@airoflair.com</p>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
