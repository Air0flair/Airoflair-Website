import Link from "next/link";
import Image from "next/image";
import MainLogo from "@/assets/images/logo.png";

// Footer badges + icons (SVGS)
import GooglePlayBadge from "@/assets/images/google-play.svg";
import AppleStoreBadge from "@/assets/images/apple-store.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import XIcon from "@/assets/images/X.svg";
import LinkedInIcon from "@/assets/images/linkedin.svg";

const BRAND_BLUE = "#2B2F8F";

const LINKS = {
  inspect: "https://inspect.airoflair.com",
  googlePlayDev: "https://play.google.com/store/apps/dev?id=5533742350655574841",
  appleDev: "https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656",
  socials: {
    facebook: "https://www.facebook.com/airoflair",
    instagram: "https://www.instagram.com/airoflair/",
    x: "https://twitter.com/airoflair",
    linkedin: "https://www.linkedin.com/company/airoflair",
  },
};

function Header() {
  return (
    <header className="w-full border-b border-zinc-100 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-[190px]">
            <Image src={MainLogo} alt="Airoflair" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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
            href={LINKS.inspect}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            inspect
          </Link>
        </nav>

        <Link
          href={LINKS.inspect}
          target="_blank"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm md:hidden"
          style={{ backgroundColor: BRAND_BLUE }}
        >
          inspect
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-100 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-600">
            <span>© {new Date().getFullYear()} Airoflair</span>
            <Link href="/terms-of-service" className="hover:text-black">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href={LINKS.googlePlayDev} target="_blank" aria-label="Google Play">
              <Image src={GooglePlayBadge} alt="Get it on Google Play" height={36} className="h-9 w-auto" />
            </Link>
            <Link href={LINKS.appleDev} target="_blank" aria-label="Apple App Store">
              <Image src={AppleStoreBadge} alt="Download on the App Store" height={36} className="h-9 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href={LINKS.socials.facebook} target="_blank" aria-label="Facebook" className="opacity-80 hover:opacity-100">
              <Image src={FacebookIcon} alt="Facebook" width={18} height={18} className="h-[18px] w-[18px]" />
            </Link>
            <Link href={LINKS.socials.x} target="_blank" aria-label="X" className="opacity-80 hover:opacity-100">
              <Image src={XIcon} alt="X" width={18} height={18} className="h-[18px] w-[18px]" />
            </Link>
            <Link href={LINKS.socials.linkedin} target="_blank" aria-label="LinkedIn" className="opacity-80 hover:opacity-100">
              <Image src={LinkedInIcon} alt="LinkedIn" width={18} height={18} className="h-[18px] w-[18px]" />
            </Link>
            <Link href={LINKS.socials.instagram} target="_blank" aria-label="Instagram" className="opacity-80 hover:opacity-100">
              <Image src={InstagramIcon} alt="Instagram" width={18} height={18} className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-semibold text-zinc-900">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[12.5px] leading-relaxed text-zinc-700">{children}</p>;
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-[1320px] px-6 pb-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black">
          ← Back
        </Link>

        <h1 className="mt-8 text-2xl font-semibold text-zinc-800">Privacy Policy</h1>
        <p className="mt-3 text-xs text-zinc-500">Last updated: 03 September 2023</p>

        <div className="mt-8 space-y-8">
          <P>
            This Privacy Policy explains how AIROFLAIR collects, stores, and uses personal information when you use our website, Inspect platform, Quick Inspect App, Airoflair Data App, or related services.
          </P>
          <P>By accessing or using our services, you agree to this Privacy Policy and consent to the data practices described.</P>

          <div className="space-y-5">
            <H2>Note: Privacy policy</H2>
            <P>
              We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”).
              This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) on the airoflair.com website (“Website”),
              through mobile applications (“Mobile Application”), and any of their related products and services (collectively, “Services”), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information.
            </P>
            <P>
              It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.
              This Policy is a legally binding agreement between you (“User”, “you” or “your”) and AIROFLAIR (PTY) LTD (“AIROFLAIR (PTY) LTD”, “we”, “us” or “our”).
            </P>
            <P>
              If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement.
              If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Services.
            </P>
            <P>
              By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy.
              This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Automatic collection of information</H2>
            <P>
              When you open the Website or use the Mobile Application, our servers automatically record information that your browser or device sends.
              This data may include your device’s IP address and location, browser/device name and version, operating system type and version,
              language preferences, the pages you visit, the time spent on those pages, access times and dates, and other statistics.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Collection of personal information</H2>
            <P>
              You can access and use the Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual.
              However, if you wish to use some features offered on the Services, you may be asked to provide certain Personal Information. This may include:
            </P>
            <ul className="list-disc pl-5 text-[12.5px] leading-relaxed text-zinc-700">
              <li>Contact information (email address, phone number, etc.)</li>
              <li>Account details (user name, unique user ID, password, etc.)</li>
              <li>Basic personal information (name, country of residence, etc.)</li>
              <li>Geolocation data of your device (latitude and longitude)</li>
              <li>Certain mobile device features (such as gallery access)</li>
            </ul>
            <P>
              You can choose not to provide Personal Information, but then you may not be able to take advantage of some of the features on the Services.
              If you are uncertain about what information is mandatory, you are welcome to contact us.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Privacy of children</H2>
            <P>
              We do not knowingly collect Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through the Services.
            </P>
            <P>
              If you have reason to believe that a child under the age of 13 has provided Personal Information to us through the Services, please contact us so we can delete that information.
              We encourage parents and guardians to monitor children’s internet usage and help enforce this Policy.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Use and processing of collected information</H2>
            <P>
              We act as a data controller and data processor in terms of the GDPR and POPI when handling Personal Information, unless we have entered into a data processing agreement with you.
              In such cases, you would be the data controller and we would be the data processor.
            </P>
            <P>We may use Personal Information to:</P>
            <ul className="list-disc pl-5 text-[12.5px] leading-relaxed text-zinc-700">
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
            <P>
              Processing depends on how you interact with the Services, where you are located, and if one of the following applies:
              (i) you have given consent for one or more purposes; (ii) provision is necessary for performance of an agreement; (iii) processing is necessary for compliance with a legal obligation;
              (iv) processing is related to a task carried out in the public interest or in the exercise of official authority; (v) processing is necessary for legitimate interests pursued by us or a third party.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Payment processing</H2>
            <P>
              In case of Services requiring payment, we may request payment account information, which will be used solely for processing payments.
              We use third-party payment processors (“Payment Processors”) to assist us in processing payment information securely.
              Payment Processors adhere to security standards such as PCI DSS.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Managing information</H2>
            <P>
              You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Services change.
              When you delete Personal Information, we may maintain a copy of unrevised Personal Information in our records for the duration necessary to comply with obligations and for the purposes described in this Policy.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Disclosure of information</H2>
            <P>
              Depending on the requested Services or as necessary to complete any transaction or provide any service you have requested, we may share your information with our affiliates, contracted companies and service providers (collectively, “Service Providers”) we rely upon.
              We do not share Personal Information with unaffiliated third parties except as required or permitted by law.
            </P>
            <P>
              We may disclose information to comply with a subpoena or similar legal process and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
              In the event of a business transition (e.g., merger, acquisition), user accounts and personal data may be among the assets transferred.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Transfer of information</H2>
            <P>
              Depending on your location, data transfers may involve transferring and storing information in a country other than your own.
              Transfers outside the European Union will be made only if you have explicitly consented or as otherwise permitted under GDPR.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Rights under GDPR and POPI</H2>
            <P>
              If you are a resident of the European Economic Area (“EEA”) or South Africa, you have certain data protection rights.
              If you wish to be informed what Personal Information we hold about you and if you want it removed, please contact us.
            </P>
            <ul className="list-disc pl-5 text-[12.5px] leading-relaxed text-zinc-700">
              <li>Request access to your Personal Information</li>
              <li>Request correction of inaccurate or incomplete Personal Information</li>
              <li>Request erasure under certain conditions</li>
              <li>Object to processing</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent where consent is the legal basis</li>
            </ul>
          </div>

          <div className="space-y-5">
            <H2>Cookie and data analytics</H2>
            <P>
              Our Services do not use third-party analytics tools that use cookies, web beacons, or similar technologies to collect standard internet activity and usage information.
              We do not use third-party analytics tools to track or collect personally identifiable information in our Services.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Email marketing</H2>
            <P>
              You can unsubscribe from marketing communications at any time by following the unsubscribe link included in the email or by contacting us.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Links to other resources</H2>
            <P>
              The Services may contain links to other resources not owned or controlled by us. We are not responsible for the privacy practices of other resources.
              We encourage you to read the privacy statements of each resource that may collect Personal Information.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Information security</H2>
            <P>
              We secure information on servers in a controlled, secure environment and maintain reasonable safeguards to protect against unauthorized access, use, modification and disclosure.
              However, no internet or wireless transmission can be guaranteed to be fully secure.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Data breach</H2>
            <P>
              In the event of a breach, we will make reasonable efforts to notify affected individuals if there is a reasonable risk of harm or if notice is otherwise required by law.
              We may post a notice on the Website and/or send an email.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Changes and amendments</H2>
            <P>
              We reserve the right to modify this Policy at any time. When we do, we will revise the updated date at the bottom of this page.
              Your continued use of the Services after changes become effective constitutes acceptance of those changes.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Acceptance of this policy</H2>
            <P>
              By accessing and using the Services, you acknowledge that you have read and agree to this Policy. If you do not agree, you are not authorized to access or use the Services.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Contacting us</H2>
            <P>
              If you have any questions, concerns, or complaints regarding this Policy, please contact us.
            </P>
            <p className="text-[12.5px] font-semibold text-zinc-900">enquiries@airoflair.com</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
