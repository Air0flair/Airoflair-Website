import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const BRAND_BLUE = "#2B2F8F";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/airoflair" },
  { name: "Instagram", href: "https://www.instagram.com/airoflair/" },
  { name: "X", href: "https://twitter.com/airoflair" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/airoflair" },
];

const STORES = {
  googlePlayDev: "https://play.google.com/store/apps/dev?id=5533742350655574841",
  appleDev: "https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656",
};

/** -------- Footer Icons (no external libs) -------- */
function IconFacebook({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H7.8v3h2.5v8h3.2Z" />
    </svg>
  );
}

function IconInstagram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5-2.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

function IconX({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.6 22H2.5l7.3-8.4L1 2h6.7l4.6 6.1L18.9 2Zm-1.1 18h1.7L6.8 3.9H5L17.8 20Z" />
    </svg>
  );
}

function IconLinkedIn({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
    </svg>
  );
}

function IconApple({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 2.3c-.8.1-1.8.6-2.4 1.3-.6.7-1.1 1.7-.9 2.7 1 .1 1.9-.5 2.5-1.2.6-.7 1-1.7.8-2.8ZM20.2 17.2c-.4.9-.8 1.4-1.4 2.2-.9 1.2-2.1 2.7-3.6 2.7-1.3 0-1.7-.8-3.3-.8s-2.1.8-3.3.8c-1.5 0-2.6-1.4-3.5-2.6C2.3 17 1 12.8 2.8 9.7c.9-1.6 2.4-2.5 4-2.5 1.3 0 2.5.9 3.2.9.7 0 2.1-1 3.6-.9.6 0 2.3.1 3.4 1.7-2.9 1.6-2.4 5.8.2 7.2Z" />
    </svg>
  );
}

function IconGooglePlay({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.7 3.3c-.4.4-.7 1-.7 1.8v13.8c0 .8.3 1.4.7 1.8l8.6-8.6L4.7 3.3Zm10 10 2.2 2.2 2.6 1.5c.7-.4 1.1-1 1.1-1.7 0-.6-.4-1.2-1.1-1.6l-2.6-1.5-2.2 1.1Zm0-2.6 2.2-2.2 2.6-1.5c.7.4 1.1 1 1.1 1.6 0 .7-.4 1.3-1.1 1.7l-2.6 1.5-2.2-1.1Zm-1.4.3L6 4.2l9.8 5.7-2.5 1.1Z" />
    </svg>
  );
}

function FooterIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:bg-white hover:text-black"
    >
      {children}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-zinc-50">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-10">
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

          <div className="flex flex-wrap items-center gap-2">
            <FooterIconLink href={STORES.googlePlayDev} label="Google Play">
              <IconGooglePlay />
            </FooterIconLink>
            <FooterIconLink href={STORES.appleDev} label="Apple App Store">
              <IconApple />
            </FooterIconLink>

            <span className="mx-1 hidden h-6 w-px bg-zinc-200 md:inline-block" />

            <FooterIconLink href={SOCIALS[0].href} label="Facebook">
              <IconFacebook />
            </FooterIconLink>
            <FooterIconLink href={SOCIALS[1].href} label="Instagram">
              <IconInstagram />
            </FooterIconLink>
            <FooterIconLink href={SOCIALS[2].href} label="X">
              <IconX />
            </FooterIconLink>
            <FooterIconLink href={SOCIALS[3].href} label="LinkedIn">
              <IconLinkedIn />
            </FooterIconLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6">
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
      <div className="space-y-3 text-[12.5px] leading-relaxed text-zinc-700">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-[1400px] px-6 pb-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black">
          ← Back
        </Link>

        <h1 className="mt-8 text-2xl font-semibold text-zinc-800">Privacy Policy</h1>
        <p className="mt-3 text-xs text-zinc-500">Last updated: 03 September 2023</p>

        <div className="mt-8 space-y-10">
          <Section title="Overview">
            <p>
              This Privacy Policy explains how AIROFLAIR collects, stores, and uses personal information when you use our website,
              Inspect platform, Quick Inspect App, Airoflair Data App, or related services.
            </p>
            <p>
              By accessing or using our services, you agree to this Privacy Policy and consent to the data practices described.
            </p>
            <p className="text-zinc-600">Note: Privacy policy</p>
          </Section>

          <Section title="We respect your privacy">
            <p>
              We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”).
              This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) on the
              airoflair.com website (“Website”), through mobile applications (“Mobile Application”), and any of their related products and services
              (collectively, “Services”), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information.
            </p>
            <p>
              It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.
              This Policy is a legally binding agreement between you (“User”, “you” or “your”) and AIROFLAIR (PTY) LTD (“AIROFLAIR (PTY) LTD”, “we”, “us” or “our”).
            </p>
            <p>
              If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement.
              If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Services.
            </p>
            <p>
              By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy.
              This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
            </p>
          </Section>

          <Section title="Automatic collection of information">
            <p>
              When you open the Website or use the Mobile Application, our servers automatically record information that your browser or device sends.
              This data may include information such as your device’s IP address and location, browser and device name and version, operating system type and version,
              language preferences, the pages of the Website that you visit, the time spent on those pages, the information you search for, access times and dates, and other statistics.
            </p>
          </Section>

          <Section title="Collection of personal information">
            <p>
              You can access and use the Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual.
              However, if you wish to use some of the features offered on the Services (for example, creating an account, receiving assistance, or receiving marketing communications),
              you may be asked to provide certain Personal Information. Depending on the context and legal basis, this may include:
            </p>
            <ul className="list-disc pl-5">
              <li>Contact information (such as email address, phone number, etc)</li>
              <li>Account details (such as user name, unique user ID, password, etc)</li>
              <li>Basic personal information (such as name, country of residence, etc)</li>
              <li>Geolocation data of your device (such as latitude and longitude)</li>
              <li>Certain features on the mobile device (such as gallery, etc)</li>
            </ul>
            <p>
              You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Services.
              Users who are uncertain about what information is mandatory are welcome to contact us.
            </p>
          </Section>

          <Section title="Privacy of children">
            <p>
              We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through the Services.
            </p>
            <p>
              If you have reason to believe that a child under the age of 13 has provided Personal Information to us through the Services, please contact us to request deletion.
              We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Services without their permission.
            </p>
          </Section>

          <Section title="Use and processing of collected information">
            <p>
              We act as a data controller and a data processor in terms of the GDPR and POPI when handling Personal Information, unless we have entered into a data processing agreement with you.
              In such cases, you would be the data controller and we would be the data processor.
            </p>
            <p>We may collect and use Personal Information for the following purposes:</p>
            <ul className="list-disc pl-5">
              <li>Create and manage user accounts</li>
              <li>Send administrative information</li>
              <li>Send marketing and promotional communications</li>
              <li>Send product and service updates</li>
              <li>Respond to inquiries and offer support</li>
              <li>Request user feedback</li>
              <li>Improve user experience</li>
              <li>Protect from abuse and malicious users</li>
              <li>Respond to legal requests and prevent harm</li>
              <li>Run and operate our Services</li>
            </ul>
            <p>
              Processing your Personal Information depends on how you interact with the Services, where you are located in the world and if one of the following applies:
              (i) you have given your consent for one or more specific purposes; (ii) provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof;
              (iii) processing is necessary for compliance with a legal obligation to which you are subject; (iv) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us;
              (v) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.
            </p>
            <p>
              Note that under some legislation we may be allowed to process information until you object to such processing (by opting out), without having to rely on consent or any other legal basis.
              In any case, we will be happy to clarify the specific legal basis that applies to the processing and whether the provision of Personal Information is a statutory or contractual requirement,
              or a requirement necessary to enter into a contract.
            </p>
          </Section>

          <Section title="Payment processing">
            <p>
              In case of Services requiring payment, we may request credit card or other payment account information, which will be used solely for processing payments.
              We use third party payment processors (“Payment Processors”) to assist us in processing your payment information securely.
            </p>
            <p>
              Payment Processors adhere to the latest security standards as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
              Sensitive and private data exchange happens over an SSL secured communication channel and is encrypted and protected with digital signatures.
            </p>
            <p>
              The Services are also in compliance with strict vulnerability standards in order to create as secure of an environment as possible for Users.
              We share payment data with the Payment Processors only to the extent necessary for the purposes of processing your payments, refunding such payments, and dealing with complaints and queries related to such payments and refunds.
            </p>
          </Section>

          <Section title="Managing information">
            <p>
              You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Services change.
              When you delete Personal Information, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners,
              and for the purposes described below.
            </p>
          </Section>

          <Section title="Disclosure of information">
            <p>
              Depending on the requested Services or as necessary to complete any transaction or provide any service you have requested, we may share your information with our affiliates,
              contracted companies, and service providers (collectively, “Service Providers”) we rely upon to assist in the operation of the Services.
            </p>
            <p>
              We do not share Personal Information with unaffiliated third parties. We may disclose any information we collect, use or receive if required or permitted by law,
              such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others,
              investigate fraud, or respond to a government request.
            </p>
            <p>
              In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, your user account and personal data will likely be among the assets transferred.
            </p>
            <p>
              We will retain and use your Personal Information for the period necessary to comply with our legal obligations, as long as your user account remains active,
              to enforce our agreements, to resolve disputes, and unless a longer retention period is required or permitted by law.
            </p>
          </Section>

          <Section title="Transfer of information">
            <p>
              Depending on your location, data transfers may involve transferring and storing your information in a country other than your own.
              The transfer of your Personal Information to countries outside the European Union will be made only if you have explicitly consented to it
              or in the cases provided for by the GDPR and will be made to a country deemed to provide an adequate level of protection.
            </p>
            <p>
              You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law
              or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information.
              If any such transfer takes place, you can find out more by checking the relevant sections of this Policy or inquire with us using the information provided in the contact section.
            </p>
          </Section>

          <Section title="Rights under GDPR and POPI">
            <p>
              If you are a resident of the European Economic Area (“EEA”) or South Africa, you have certain data protection rights.
              If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
            <p>In certain circumstances, you have the following data protection rights:</p>
            <ul className="list-disc pl-5">
              <li>You have the right to request access to your Personal Information.</li>
              <li>You have the right to request that we correct any Personal Information you believe is inaccurate or incomplete.</li>
              <li>You have the right to request that we erase your Personal Information under certain conditions.</li>
              <li>You have the right to object to our processing of your Personal Information.</li>
              <li>You have the right to request that we restrict the processing of your Personal Information.</li>
              <li>You have the right to data portability.</li>
              <li>You have the right to withdraw consent at any time where we relied on your consent to process your Personal Information.</li>
            </ul>
            <p>
              Please note that we may ask you to verify your identity before responding to such requests.
              Also note, your request might not be fully satisfied, for example, if you request the deletion of your Personal Information and we are legally required to keep it.
            </p>
          </Section>

          <Section title="How to exercise your rights">
            <p>
              Any requests to exercise your rights can be directed to us through the contact details provided in this document.
              Please note that we may ask you to verify your identity before responding to such requests.
            </p>
            <p>
              We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.
            </p>
          </Section>

          <Section title="Cookie and data analytics">
            <p>
              Our Services do not use third-party analytics tools that use cookies, web beacons, or other similar information-gathering technologies to collect standard internet activity and usage information.
            </p>
            <p>We do not use third-party analytics tools to track or collect any personally identifiable information in our Services.</p>
          </Section>

          <Section title="Email marketing">
            <p>
              We maintain your email address to keep you updated on service and offer-related information, and we may send marketing or promotional communications.
              You can unsubscribe from marketing communications at any time by following the unsubscribe link included in the email or by contacting us.
            </p>
          </Section>

          <Section title="Push notifications">
            <p>
              We offer push notifications to keep you updated on critical or product-related updates.
              If you do not wish to receive push notifications, you can disable them through your device settings.
            </p>
          </Section>

          <Section title="Links to other resources">
            <p>
              The Services may contain links to other resources that are not owned or controlled by us.
              Please be aware that we are not responsible for the privacy practices of such other resources or third parties.
            </p>
            <p>
              We encourage you to be aware when you leave the Services and to read the privacy statements of each and every resource that may collect Personal Information.
            </p>
          </Section>

          <Section title="Information security">
            <p>
              We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure.
              We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody.
            </p>
            <p>
              However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information,
              you acknowledge that: (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and the Services cannot be guaranteed;
              and (iii) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts.
            </p>
          </Section>

          <Section title="Data breach">
            <p>
              In the event we become aware that the security of the Services has been compromised or users’ Personal Information has been disclosed to unrelated third parties
              as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting,
              as well as notification to and cooperation with law enforcement authorities.
            </p>
            <p>
              In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach
              or if notice is otherwise required by law. When we do, we will post a notice on the Website, and you may also receive an email.
            </p>
          </Section>

          <Section title="Changes and amendments">
            <p>
              We reserve the right to modify this Policy or its terms related to the Services at any time at our discretion.
              When we do, we will revise the updated date at the bottom of this page.
            </p>
            <p>
              An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified.
              Your continued use of the Services after the effective date of the revised Policy will constitute your consent to those changes.
            </p>
          </Section>

          <Section title="Acceptance of this policy">
            <p>
              You acknowledge that you have read this Policy and agree to all its terms and conditions.
              By accessing and using the Services, and submitting your information you agree to be bound by this Policy.
              If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Services.
            </p>
          </Section>

          <Section title="Contacting us">
            <p>If you have any questions, concerns, or complaints regarding this Policy or information we may hold about you, we encourage you to contact us using the details below.</p>
            <p className="font-semibold text-zinc-900">enquiries@airoflair.com</p>
            <p>
              We will attempt to resolve complaints and disputes and make every reasonable effort to honour your wish to exercise your rights as quickly as possible and in any event,
              within the timescales provided by applicable data protection laws.
            </p>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
