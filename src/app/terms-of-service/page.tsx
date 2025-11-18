import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="relative h-10 w-40">
            <Image
              src={Logo}
              alt="Airoflair Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Back link with dark-mode SVG arrow */}
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L8 12L15 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="8"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back</span>
          </Link>
        </div>

        {/* Page Heading */}
        <main className="mt-10 mb-12 flex-1">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Last updated: 03 September 2023
          </p>

          {/* Body Content */}
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200">
            <p className="text-zinc-300">
              These Terms of Service (“Agreement”) govern your access to and use
              of Airoflair services, including the Airoflair website, Inspect
              platform, and mobile applications.
            </p>

            <p>
              By accessing or using any Airoflair product or service, you agree
              to be bound by these terms. If you do not agree, you must not use
              the services.
            </p>

            <p className="text-xs text-zinc-500">
              <strong>Note:</strong> Terms of Use
              <br />
              <br />
              These Terms of Service (“Agreement”) set forth the general terms
              of services of your use of the airoflair.com website (“Website”),
              “inspect” mobile application (“Mobile Application”) and any of
              their related products and Services (collectively, “Services”).
              This Agreement is legally binding between you (“User”, “you” or
              “your”) and AIROFLAIR (PTY) LTD (“AIROFLAIR (PTY) LTD”, “we”, “us”
              or “our”). If you are entering into this agreement on behalf of a
              business or other legal entity, you represent that you have the
              authority to bind such entity to this agreement, in which case the
              terms “User”, “you” or “your” shall refer to such entity. If you
              do not have such authority, or if you do not agree with the terms
              of this agreement, you must not accept this agreement and may not
              access and use the Services. By accessing and using the Services,
              you acknowledge that you have read, understood, and agree to be
              bound by the terms of this Agreement. You acknowledge that this
              Agreement is a contract between you and AIROFLAIR (PTY) LTD, even
              though it is electronic and is not physically signed by you, and
              it governs your use of the Services.
              <br />
              <br />
              <strong>Accounts</strong>
              <br />
              If you create an account on the website, you are responsible for
              maintaining the security of your account and you are fully
              responsible for all activities that occur under the account and
              any other actions taken in connection with it. Providing false
              contact information of any kind may result in the termination of
              your account. You must immediately notify us of any unauthorized
              uses of your account or any other breaches of security. We will
              not be liable for any acts or omissions by you, including any
              damages of any kind incurred as a result of such acts or
              omissions. We may suspend, disable, or delete your account (or any
              part thereof) if we determine that you have violated any provision
              of this Agreement or that your conduct or content would tend to
              damage our reputation and goodwill. If we delete your account for
              the foregoing reasons, you may not re-register for our Services.
              <br />
              <br />
              <strong>User content</strong>
              <br />
              We do not own any data, information, or material (collectively,
              “Content”) that you submit on the Services in the course of using
              the Service. You shall have sole responsibility for the accuracy,
              quality, integrity, legality, reliability, appropriateness, and
              intellectual property ownership or right to use of all submitted
              Content. You grant us permission to store the content of your user
              account solely as required for the purpose of providing the
              Services to you.
              <br />
              <br />
              <strong>Billing and payments</strong>
              <br />
              You shall pay all fees or charges to your account in accordance
              with the fees, charges, and billing terms in effect at the time a
              fee or charge is due and payable after the free trial period ends,
              and not when you enter your billing details (which may be required
              prior to the commencement of the free trial period). If
              auto-renewal is enabled for the Services you have subscribed for,
              you will be charged automatically in accordance with the term you
              selected. We reserve the right to change products and product
              pricing at any time. We also reserve the right to refuse any order
              you place with us.
              <br />
              <br />
              <strong>Accuracy of information</strong>
              <br />
              Occasionally there may be information on the Services that
              contains typographical errors, inaccuracies or omissions that may
              relate to promotions and offers. We reserve the right to correct
              any errors, inaccuracies or omissions, and to change or update
              information or cancel orders if any information on the Service is
              inaccurate at any time without prior notice (including after you
              have submitted your order). We undertake no obligation to update,
              amend or clarify information on the Services including, without
              limitation, pricing information, except as required by law. No
              specified update or refresh date applied on the Services should be
              taken to indicate that all information on the Services has been
              modified or updated.
              <br />
              <br />
              <strong>Uptime</strong>
              <br />
              We offer a service uptime guarantee of 99% of available time per
              month. The service uptime guarantee does not apply to service
              interruptions caused by: (1) periodic scheduled maintenance we may
              undertake from time to time; (2) interruptions caused by you or
              your activities; (3) outages that do not affect core service
              functionality; (4) causes beyond our control or that are not
              reasonably foreseeable; and (5) outages related to the reliability
              of certain programming environments.
              <br />
              <br />
              <strong>Links to other resources</strong>
              <br />
              Although the Services may link to other resources (such as
              websites, mobile applications, etc.), we are not, directly or
              indirectly, implying any approval, association, sponsorship,
              endorsement, or affiliation with any linked resource, unless
              specifically stated herein. Some of the links on the Services may
              be “affiliate links”. This means if you click on the link and
              purchase an item, AIROFLAIR (PTY) LTD will receive an affiliate
              commission. We are not responsible for examining or evaluating,
              and we do not warrant the offerings of, any businesses or
              individuals or the content of their resources. We do not assume
              any responsibility or liability for the actions, products,
              Services, and content of any other third parties. You should
              carefully review the legal statements and other conditions of use
              of any resource which you access through a link on the Services.
              Your linking to any other off-site resources is at your own risk.
              <br />
              <br />
              <strong>Prohibited uses</strong>
              <br />
              In addition to other terms as set forth in the agreement, you are
              prohibited from using the Services or content: (a) for any
              unlawful purpose; (b) to solicit others to perform or participate
              in any unlawful acts; (c) to violate any international, federal,
              provincial or state regulations, rules, laws, or local ordinances;
              (d) to infringe upon or violate our intellectual property rights
              or the intellectual property rights of others; (e) to harass,
              abuse, insult, harm, defame, slander, disparage, intimidate, or
              discriminate based on gender, sexual orientation, religion,
              ethnicity, race, age, national origin, or disability; (f) to
              submit false or misleading information; (g) to upload or transmit
              viruses or any other type of malicious code that will or may be
              used in any way that will affect the functionality or operation of
              the Services, third party products and Services, or the Internet;
              (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i)
              for any obscene or immoral purpose; or (j) to interfere with or
              circumvent the security features of the services, third party
              products and Services, or the Internet. We reserve the right to
              terminate your use of the Services for violating any of the
              prohibited uses.
              <br />
              <br />
              <strong>Intellectual property rights</strong>
              <br />
              “Intellectual Property Rights” means all present and future rights
              conferred by statute, common law or equity in or in relation to
              any copyright and related rights, trademarks, designs, patents,
              inventions, goodwill and the right to sue for passing off, rights
              to inventions, rights to use, and all other intellectual property
              rights, in each case whether registered or unregistered and
              including all applications and rights to apply for and be granted,
              rights to claim priority from, such rights and all similar or
              equivalent rights or forms of protection and any other results of
              intellectual activity which subsist or will subsist now or in the
              future in any part of the world. This Agreement does not transfer
              to you any intellectual property owned by AIROFLAIR (PTY) LTD or
              third parties, and all rights, titles, and interests in and to
              such property will remain (as between the parties) solely with
              AIROFLAIR (PTY) LTD. All trademarks, Service marks, graphics and
              logos used in connection with the Services, are trademarks or
              registered trademarks of AIROFLAIR (PTY) LTD or its licensors.
              Other trademarks, Service marks, graphics and logos used in
              connection with the services may be the trademarks of other third
              parties. Your use of the Services grants you no right or license
              to reproduce or otherwise use any of AIROFLAIR (PTY) LTD or third
              party trademarks.
              <br />
              <br />
              <strong>Limitation of liability</strong>
              <br />
              To the fullest extent permitted by applicable law, in no event
              will AIROFLAIR (PTY) LTD, its affiliates, directors, officers,
              employees, agents, suppliers or licensors be liable to any person
              for any indirect, incidental, special, punitive, cover or
              consequential damages (including, without limitation, damages for
              lost profits, revenue, sales, goodwill, use of content, impact on
              business, business interruption, loss of anticipated savings, loss
              of business opportunity) however caused, under any theory of
              liability, including, without limitation, contract, tort,
              warranty, breach of statutory duty, negligence or otherwise, even
              if the liable party has been advised as to the possibility of such
              damages or could have foreseen such damages. To the maximum extent
              permitted by applicable law, the aggregate liability of AIROFLAIR
              (PTY) LTD and its affiliates, officers, employees, agents,
              suppliers and licensors relating to the Services will be limited
              to an amount actually paid by you to AIROFLAIR (PTY) LTD for the
              prior one month period prior to the first event or occurrence
              giving rise to such liability. The limitations and exclusions also
              apply if this remedy does not fully compensate you for any losses
              or fails of its essential purpose.
              <br />
              <br />
              <strong>Indemnification</strong>
              <br />
              You agree to indemnify and hold AIROFLAIR (PTY) LTD and its
              affiliates, directors, officers, employees, agents, suppliers and
              licensors harmless from and against any liabilities, losses,
              damages or costs, including reasonable attorneys’ fees, incurred
              in connection with or arising from any third party allegations,
              claims, actions, disputes, or demands asserted against any of them
              as a result of or relating to your Content, your use of the
              Services or any wilful misconduct on your part.
              <br />
              <br />
              <strong>Severability</strong>
              <br />
              All rights and restrictions contained in this Agreement may be
              exercised and shall be applicable and binding only to the extent
              that they do not violate any applicable laws and are intended to
              be limited to the extent necessary so that they will not render
              this agreement illegal, invalid or unenforceable. If any provision
              or portion of any provision of this Agreement shall be held to be
              illegal, invalid or unenforceable by a court of competent
              jurisdiction, it is the intention of the parties that the
              remaining provisions or portions thereof shall constitute their
              agreement with respect to the subject matter hereof, and all such
              remaining provisions or portions thereof shall remain in full
              force and effect.
              <br />
              <br />
              <strong>Changes and amendments</strong>
              <br />
              We reserve the right to modify this agreement or its terms related
              to the Services at any time at our discretion. When we do, we will
              send you an email to notify you. We may also provide notice to you
              in other ways at our discretion, such as through the contact
              information you have provided. An updated version of this
              Agreement will be effective immediately upon the posting of the
              revised Agreement unless otherwise specified. Your continued use
              of the services after the effective date of the revised agreement
              (or such other act specified at that time) will constitute your
              consent to those changes.
              <br />
              <br />
              <strong>Acceptance of these terms</strong>
              <br />
              You acknowledge that you have read this agreement and agree to all
              its terms of service. By accessing and using the services you
              agree to be bound by this agreement. If you do not agree to abide
              by the terms of this agreement, you are not authorized to access
              or use the services.
              <br />
              <br />
              <strong>Contacting us</strong>
              <br />
              If you have any questions, concerns, or complaints regarding this
              agreement, we encourage you to contact us using the details below:
              <br />
              enquiries@airoflair.com
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
