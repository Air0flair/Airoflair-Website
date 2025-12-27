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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-14">
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
            <p>
              To the maximum extent permitted by applicable law, the aggregate liability of AIROFLAIR (PTY) LTD and its affiliates, officers, employees, agents, suppliers and licensors relating to the Services
              will be limited to an amount actually paid by you to AIROFLAIR (PTY) LTD for the prior one month period prior to the first event or occurrence giving rise to such liability.
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
              If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction,
              the remaining provisions or portions thereof shall remain in full force and effect.
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
