import Link from "next/link";
import Image from "next/image";

// Images
import Logo from "@/assets/images/logo.png";

// HERO (new)
import MacbookMain from "@/assets/images/macbookmain.png";

// Inspect section images
import InspectMacbook from "@/assets/images/inspectmacbook.png";
import InspectIPhone from "@/assets/images/inspectiphone.png";
import InspectLogo from "@/assets/images/inspectlogo.png";

// Watermark X icon
import InspectIcon from "@/assets/images/inspecticon.png";

// Quick Inspect
import QuickInspectIPhone from "@/assets/images/quickinspectiphone.png";
import QuickIcon from "@/assets/images/quickicon.png";

// Data
import DataLogo from "@/assets/images/Airoflairdatalogo.png";
import DataImg from "@/assets/images/data.png";

// Split Bill
import SplitBillLogo from "@/assets/images/splitbilllogo.png";
import SplitBillImg from "@/assets/images/splitbill.png";

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
          <a href="#products" className="text-xs font-medium tracking-wide text-zinc-600 hover:text-black">
            PRODUCTS
          </a>
          <a href="#services" className="text-xs font-medium tracking-wide text-zinc-600 hover:text-black">
            SERVICES
          </a>
          <a href="#contact" className="text-xs font-medium tracking-wide text-zinc-600 hover:text-black">
            CONTACT
          </a>

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
            {/* Stores */}
            <FooterIconLink href={STORES.googlePlayDev} label="Google Play">
              <IconGooglePlay />
            </FooterIconLink>
            <FooterIconLink href={STORES.appleDev} label="Apple App Store">
              <IconApple />
            </FooterIconLink>

            <span className="mx-1 hidden h-6 w-px bg-zinc-200 md:inline-block" />

            {/* Socials */}
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

function WideContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-6 ${className}`}>{children}</div>;
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      {/* HERO */}
      <section className="bg-white">
        <WideContainer className="pt-10 pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                All your inspection
                <br />
                reporting &amp; data
                <br />
                ready to use
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                Transform the way your team captures, compiles and completes inspection
                <br />
                reports faster than ever.
                <br />
                <span className="text-zinc-700">Available on iOS and Android</span>
              </p>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                <Image src={MacbookMain} alt="Airoflair platform" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </WideContainer>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-zinc-50 py-12">
        {/* NOTE: FULL-WIDTH cards (stretch across page) */}
        <WideContainer>
          <div className="flex flex-col gap-8">
            {/* Inspect */}
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-zinc-800">Inspect</h2>
                  <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                    Use powerful, flexible templates to create and deliver inspection reports faster than ever
                  </p>
                </div>

                <Link
                  href="https://inspect.airoflair.com"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  Go to Inspect
                </Link>
              </div>

              <div className="mt-10 grid items-center gap-10 lg:grid-cols-3">
                <div className="relative h-20 w-full">
                  <Image src={InspectLogo} alt="Airoflair Inspect logo" fill className="object-contain" />
                </div>

                <div className="relative aspect-[16/9] w-full">
                  <Image src={InspectMacbook} alt="Inspect on web" fill className="object-contain" />
                </div>

                <div className="relative aspect-[16/9] w-full">
                  <Image src={InspectIPhone} alt="Inspect on mobile" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* Quick Inspect */}
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-zinc-800">Quick Inspect</h2>
                  <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                    A fast, offline-ready inspection app for quick visual surveys and photo-rich reports
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={STORES.appleDev}
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                  >
                    App Store
                  </Link>
                  <Link
                    href={STORES.googlePlayDev}
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                  >
                    Google Play
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={QuickInspectIPhone} alt="Quick Inspect on iPhone" fill className="object-contain" />
                </div>

                <div className="relative mx-auto aspect-square w-72">
                  <Image src={QuickIcon} alt="Quick Inspect icon" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* DATA */}
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14">
                    <Image src={DataLogo} alt="Airoflair Data logo" fill className="object-contain" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-semibold text-zinc-800">DATA</h2>
                    <p className="mt-1 text-sm text-zinc-600">Engineering calculators &amp; reference tools</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={STORES.appleDev}
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                  >
                    App Store
                  </Link>
                  <Link
                    href={STORES.googlePlayDev}
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
                  >
                    Google Play
                  </Link>
                </div>
              </div>

              <div className="mt-10 relative aspect-[16/9] w-full">
                <Image src={DataImg} alt="Airoflair Data screenshots" fill className="object-contain" />
              </div>
            </div>

            {/* Split Bill */}
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="relative h-12 w-44">
                    <Image src={SplitBillLogo} alt="Split Bill" fill className="object-contain" />
                  </div>
                  <p className="mt-3 max-w-2xl text-sm text-zinc-600">
                    Smart bill splitting for group events, trips and shared expenses
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  Go to Split Bill
                </Link>
              </div>

              <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                <Image src={SplitBillImg} alt="Split Bill screenshot" fill className="object-contain" />
              </div>
            </div>
          </div>
        </WideContainer>
      </section>

      {/* SERVICES with watermark */}
      <section id="services" className="relative bg-white py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <WideContainer>
            <div className="relative mx-auto mt-2 aspect-[16/6] w-full">
              <Image src={InspectIcon} alt="" fill className="object-contain" />
            </div>
          </WideContainer>
        </div>

        <WideContainer className="relative">
          <h2 className="text-2xl font-semibold text-zinc-800">Transform your inspections into impactful reports.</h2>

          <div className="mt-10 space-y-10 text-sm text-zinc-600">
            <div>
              <h3 className="font-semibold text-zinc-800">Airoflair Inspect</h3>
              <p className="mt-2 max-w-4xl">
                Airoflair Inspect is built to turn your inspection data into clear, secure, and fully accessible reports all in real time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">Whatever you&apos;re managing</h3>
              <p className="mt-2 max-w-4xl">
                Whether you&apos;re managing safety checks, compliance inspections, or asset assessments, our platform is fully adaptable to your workflow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">White-Labeled Portals &amp; Apps</h3>
              <p className="mt-2 max-w-4xl">
                Rebrand the Inspect portal and mobile apps with your business name, logo and colours, delivering a seamless, professional experience for your clients and teams.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">Custom Features &amp; Design</h3>
              <p className="mt-2 max-w-4xl">
                Tailor forms, workflows, and dashboards to fit your operational needs. From data capture to automated report generation — adapting to your industry, not the other way around.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">Hosted &amp; Managed by Airoflair</h3>
              <p className="mt-2 max-w-4xl">
                Focus on your inspections while we take care of the infrastructure. Fully cloud-hosted, secure, and backed by expert support.
              </p>
            </div>
          </div>
        </WideContainer>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-50 py-16">
        <WideContainer>
          <h2 className="text-2xl font-semibold text-zinc-800 text-center">Contact Us</h2>
          <p className="mt-2 text-center text-sm text-zinc-600">
            Please fill in the form below and we will get back to you.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="h-11 rounded-md border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    className="h-11 rounded-md border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="h-11 rounded-md border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="h-11 rounded-md border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
                    placeholder="Contact No."
                    type="tel"
                  />
                </div>

                <textarea
                  className="min-h-[120px] resize-none rounded-md border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  placeholder="Type here"
                />

                <button
                  type="button"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* CONTACT CARD — removed store + social links */}
            <div className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="space-y-5 text-sm text-zinc-700">
                <div className="font-semibold">+27 64 762 7501</div>
                <div className="space-y-1">
                  <div>info@airoflair.com</div>
                  <div>support@airoflair.com</div>
                </div>
              </div>
            </div>
          </div>
        </WideContainer>
      </section>

      <SiteFooter />
    </div>
  );
}
