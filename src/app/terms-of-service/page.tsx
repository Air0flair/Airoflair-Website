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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-[1320px] px-6 pb-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black">
          ← Back
        </Link>

        <h1 className="mt-8 text-2xl font-semibold text-zinc-800">Terms of Service</h1>
        <p className="mt-3 text-xs text-zinc-500">Last updated: 03 September 2023</p>

        <div className="mt-8 space-y-8">
          <P>
            These Terms of Service (“Agreement”) govern your access to and use of Airoflair services, including the Airoflair website, Inspect platform, and mobile applications.
          </P>
          <P>
            By accessing or using any Airoflair product or service, you agree to be bound by these terms. If you do not agree, you must not use the services.
          </P>

          <div className="space-y-5">
            <H2>Note: Terms of Use</H2>
            <P>
              These Terms of Service (“Agreement”) set forth the general terms of services for your use of the airoflair.com website (“Website”),
              “inspect” web portal, “inspect” mobile application (“Mobile Application”) and any of their related products and Services (collectively, “Services”).
              This Agreement is legally binding between you (“User”, “you” or “your”) and AIROFLAIR (PTY) LTD (“AIROFLAIR (PTY) LTD”, “we”, “us” or “our”).
            </P>
            <P>
              If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement,
              in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement,
              you must not accept this agreement and may not access and use the Services.
            </P>
            <P>
              By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.
              You acknowledge that this Agreement is a contract between you and AIROFLAIR (PTY) LTD, even though it is electronic and is not physically signed by you, and it governs your use of the Services.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Accounts</H2>
            <P>
              If you create an account on the website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account
              and any other actions taken in connection with it. Providing false contact information of any kind may result in the termination of your account.
            </P>
            <P>
              You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
              We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill.
              If we delete your account for the foregoing reasons, you may not re-register for our Services.
            </P>
          </div>

          <div className="space-y-5">
            <H2>User content</H2>
            <P>
              We do not own any data, information, or material (collectively, “Content”) that you submit on the Services in the course of using the Service.
              You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.
              You grant us permission to store the content of your user account solely as required for the purpose of providing the Services to you.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Billing and payment</H2>
            <P>
              You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable after the free trial period ends,
              and not when you enter your billing details (which may be required prior to the commencement of the free trial period).
              If auto-renewal is enabled for the Services you have subscribed for, you will be charged automatically in accordance with the term you selected.
              We reserve the right to change products and product pricing at any time. We also reserve the right to refuse any order you place with us.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Accuracy of information</H2>
            <P>
              Occasionally there may be information on the Services that contains typographical errors, inaccuracies or omissions that may relate to promotions and offers.
              We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information on the Service is inaccurate at any time without prior notice (including after you have submitted your order).
              We undertake no obligation to update, amend or clarify information on the Services including, without limitation, pricing information, except as required by law.
              No specified update or refresh date applied on the Services should be taken to indicate that all information on the Services has been modified or updated.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Uptime</H2>
            <P>
              We offer a service uptime guarantee of 99% of available time per month. The service uptime guarantee does not apply to service interruptions caused by:
              (1) periodic scheduled maintenance we may undertake from time to time; (2) interruptions caused by you or your activities; (3) outages that do not affect core service functionality;
              (4) causes beyond our control or that are not reasonably foreseeable; and (5) outages related to the reliability of certain programming environments.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Links to other resources</H2>
            <P>
              Although the Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein.
              Some of the links on the Services may be “affiliate links”. This means if you click on the link and purchase an item, AIROFLAIR (PTY) LTD will receive an affiliate commission.
              We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources.
              We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties.
              You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Services. Your linking to any other off-site resources is at your own risk.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Prohibited uses</H2>
            <P>
              In addition to other terms as set forth in the agreement, you are prohibited from using the Services or content: (a) for any unlawful purpose;
              (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;
              (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, national origin, age;
              (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code;
              (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the services, third party products and Services, or the Internet.
              We reserve the right to terminate your use of the Services for violating any of the prohibited uses.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Intellectual property rights</H2>
            <P>
              “Intellectual Property Rights” means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights,
              trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights,
              in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsists or will subsist now or in the future in any part of the world.
            </P>
            <P>
              This Agreement does not transfer to you any intellectual property owned by AIROFLAIR (PTY) LTD or third parties, and all rights, titles, and interests in and to such property remain (as between the parties) solely with AIROFLAIR (PTY) LTD.
              All trademarks, service marks, graphics and logos used in connection with the services, are trademarks or registered trademarks of AIROFLAIR (PTY) LTD or its licensors.
              Other trademarks, service marks, graphics and logos used in connection with the services may be the trademarks of other third parties. Your use of the Services grants you no right or license to reproduce or otherwise use any AIROFLAIR (PTY) LTD or third party trademarks.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Limitation of liability</H2>
            <P>
              To the fullest extent permitted by applicable law, in no event will AIROFLAIR (PTY) LTD, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages
              (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity)
              however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages.
            </P>
            <P>
              To the maximum extent permitted by applicable law, the aggregate liability of AIROFLAIR (PTY) LTD and its affiliates, officers, employees, agents, suppliers and licensors relating to the Services will be limited to an amount actually paid by you to AIROFLAIR (PTY) LTD for the prior one month period prior to the first event or occurrence giving rise to such liability.
              The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Indemnification</H2>
            <P>
              You agree to indemnify and hold AIROFLAIR (PTY) LTD and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs,
              including reasonable attorneys’ fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Services or any willful misconduct on your part.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Severability</H2>
            <P>
              All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable.
              If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction,
              it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Changes and amendments</H2>
            <P>
              We reserve the right to modify this agreement or its terms related to the Services at any time at our discretion. When we do, we will send you an email to notify you.
              We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
              An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified.
              Your continued use of the Services after the effective date of the revised agreement (or such other act specified at that time) will constitute your consent to those changes.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Acceptance of these terms</H2>
            <P>
              You acknowledge that you have read this agreement and agree to all its terms of service.
              By accessing and using the services you agree to be bound by this agreement.
              If you do not agree to abide by the terms of this agreement, you are not authorized to access or use the services.
            </P>
          </div>

          <div className="space-y-5">
            <H2>Contacting us</H2>
            <P>
              If you have any questions, concerns, or complaints regarding this agreement, we encourage you to contact us using the details below.
            </P>
            <p className="text-[12.5px] font-semibold text-zinc-900">enquiries@airoflair.com</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
