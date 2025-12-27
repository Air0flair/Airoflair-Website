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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-[1400px] px-6 pb-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black">
          ← Back
        </Link>

        <h1 className="mt-8 text-2xl font-semibold text-zinc-800">Terms of Service</h1>
        <p className="mt-3 text-xs text-zinc-500">Last updated: 03 September 2023</p>

        <div className="mt-8 space-y-10">
          <Section title="Overview">
            <p>
              These Terms of Service (“Agreement”) govern your access to and use of Airoflair services,
              including the Airoflair website, Inspect platform, and mobile applications.
            </p>
            <p>
              By accessing or using any Airoflair product or service, you agree to be bound by these terms.
              If you do not agree, you must not use the services.
            </p>
          </Section>

          <Section title="Agreement">
            <p>
              These Terms of Service (“Agreement”) set forth the general terms of services of your use of the airoflair.com website (“Website”),
              “inspect” mobile application (“Mobile Application”) and any of their related products and Services (collectively, “Services”).
              This Agreement is legally binding between you (“User”, “you” or “your”) and AIROFLAIR (PTY) LTD (“AIROFLAIR (PTY) LTD”, “we”, “us” or “our”).
            </p>
            <p>
              If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity
              to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity.
            </p>
            <p>
              If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Services.
              By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.
            </p>
            <p>
              You acknowledge that this Agreement is a contract between you and AIROFLAIR (PTY) LTD, even though it is electronic and is not physically signed by you,
              and it governs your use of the Services.
            </p>
          </Section>

          <Section title="Accounts">
            <p>
              If you create an account on the website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur
              under the account and any other actions taken in connection with it.
            </p>
            <p>
              Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account
              or any other breaches of security.
            </p>
            <p>
              We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
              We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content
              would tend to damage our reputation and goodwill.
            </p>
            <p>If we delete your account for the foregoing reasons, you may not re-register for our Services.</p>
          </Section>

          <Section title="User content">
            <p>
              We do not own any data, information, or material (collectively, “Content”) that you submit on the Services in the course of using the Service.
              You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.
            </p>
            <p>
              You grant us permission to store the content of your user account solely as required for the purpose of providing the Services to you.
            </p>
          </Section>

          <Section title="Billing and payments">
            <p>
              You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable after the free trial period ends,
              and not when you enter your billing details (which may be required prior to the commencement of the free trial period).
            </p>
            <p>
              If auto-renewal is enabled for the Services you have subscribed for, you will be charged automatically in accordance with the term you selected.
              We reserve the right to change products and product pricing at any time. We also reserve the right to refuse any order you place with us.
            </p>
          </Section>

          <Section title="Accuracy of information">
            <p>
              Occasionally there may be information on the Services that contains typographical errors, inaccuracies or omissions that may relate to promotions and offers.
              We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information on the Service is inaccurate at any time without prior notice
              (including after you have submitted your order).
            </p>
            <p>
              We undertake no obligation to update, amend or clarify information on the Services including, without limitation, pricing information, except as required by law.
              No specified update or refresh date applied on the Services should be taken to indicate that all information on the Services has been modified or updated.
            </p>
          </Section>

          <Section title="Uptime">
            <p>
              We offer a service uptime guarantee of 99% of available time per month. The service uptime guarantee does not apply to service interruptions caused by:
              (1) periodic scheduled maintenance we may undertake from time to time; (2) interruptions caused by you or your activities; (3) outages that do not affect core service functionality;
              (4) causes beyond our control or that are not reasonably foreseeable; and (5) outages related to the reliability of certain programming environments.
            </p>
          </Section>

          <Section title="Links to other resources">
            <p>
              Although the Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship,
              endorsement, or affiliation with any linked resource, unless specifically stated herein.
            </p>
            <p>
              Some of the links on the Services may be “affiliate links”. This means if you click on the link and purchase an item, AIROFLAIR (PTY) LTD will receive an affiliate commission.
              We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources.
              Your linking to any other off-site resources is at your own risk.
            </p>
          </Section>

          <Section title="Prohibited uses">
            <p>
              In addition to other terms as set forth in the agreement, you are prohibited from using the Services or content:
              (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts;
              (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;
              (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others;
              (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;
              (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape;
              (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the services, third party products and Services, or the Internet.
            </p>
            <p>We reserve the right to terminate your use of the Services for violating any of the prohibited uses.</p>
          </Section>

          <Section title="Intellectual property rights">
            <p>
              “Intellectual Property Rights” means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights,
              trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights,
              in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights
              or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world.
            </p>
            <p>
              This Agreement does not transfer to you any intellectual property owned by AIROFLAIR (PTY) LTD or third parties, and all rights, titles, and interests in and to such property
              will remain (as between the parties) solely with AIROFLAIR (PTY) LTD.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the fullest extent permitted by applicable law, in no event will AIROFLAIR (PTY) LTD, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable
              to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill,
              use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability,
              including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages.
            </p>
          </Section>

          <Section title="Indemnification">
            <p>
              You agree to indemnify and hold AIROFLAIR (PTY) LTD and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses,
              damages or costs, including reasonable attorneys’ fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them
              as a result of or relating to your Content, your use of the Services or any wilful misconduct on your part.
            </p>
          </Section>

          <Section title="Severability">
            <p>
              If any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction,
              the remaining provisions shall remain in full force and effect.
            </p>
          </Section>

          <Section title="Changes and amendments">
            <p>
              We reserve the right to modify this agreement or its terms related to the Services at any time at our discretion.
              An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified.
              Your continued use of the services after the effective date of the revised agreement will constitute your consent to those changes.
            </p>
          </Section>

          <Section title="Acceptance of these terms">
            <p>
              By accessing and using the services you agree to be bound by this agreement. If you do not agree to abide by the terms of this agreement,
              you are not authorized to access or use the services.
            </p>
          </Section>

          <Section title="Contacting us">
            <p>If you have any questions, concerns, or complaints regarding this agreement, we encourage you to contact us using the details below.</p>
            <p className="font-semibold text-zinc-900">enquiries@airoflair.com</p>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
