import Link from "next/link";
import Image from "next/image";

// Images
import Logo from "@/assets/images/logo.png";

import InspectMacbook from "@/assets/images/inspectmacbook.png";
import InspectIPhone from "@/assets/images/inspectiphone.png";
import InspectLogo from "@/assets/images/inspectlogo.png";

// Watermark X
import InspectIcon from "@/assets/images/inspecticon.png";

import QuickInspectIPhone from "@/assets/images/quickinspectiphone.png";
import QuickIcon from "@/assets/images/quickicon.png";

import DataLogo from "@/assets/images/Airoflairdatalogo.png";
import DataImg from "@/assets/images/data.png";

import SplitBillLogo from "@/assets/images/splitbilllogo.png";
import SplitBillImg from "@/assets/images/splitbill.png";

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-14">
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
              Transform the way your team captures, compiles and completes inspection reports faster than ever.
              <br />
              <span className="text-zinc-700">Available on iOS and Android</span>
            </p>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src={InspectMacbook}
                alt="Airoflair Inspect platform"
                fill
                className="object-contain"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.05),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.04),transparent_55%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-zinc-50 py-10">
        {/* Inspect */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-semibold text-zinc-800">Inspect</h2>
                <p className="mt-2 max-w-xl text-sm text-zinc-600">
                  Use powerful, flexible templates to create and deliver inspection reports faster than ever
                </p>
              </div>

              <Link
                href="https://inspect.airoflair.com"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Go to Inspect
              </Link>
            </div>

            <div className="mt-8 grid items-center gap-8 md:grid-cols-3">
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
        </div>

        {/* Quick Inspect */}
        <div className="mx-auto mt-10 max-w-7xl px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-semibold text-zinc-800">Quick Inspect</h2>
                <p className="mt-2 max-w-xl text-sm text-zinc-600">
                  A fast, offline-ready inspection app for quick visual surveys and photo-rich reports
                </p>
              </div>

              <StoreButtons compact />
            </div>

            <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
              <div className="relative aspect-[16/9] w-full">
                <Image src={QuickInspectIPhone} alt="Quick Inspect on iPhone" fill className="object-contain" />
              </div>

              <div className="relative mx-auto aspect-square w-64">
                <Image src={QuickIcon} alt="Quick Inspect icon" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* DATA */}
        <div className="mx-auto mt-10 max-w-7xl px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14">
                  <Image src={DataLogo} alt="Airoflair Data logo" fill className="object-contain" />
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-zinc-800">DATA</h2>
                  <p className="mt-1 text-sm text-zinc-600">Engineering calculators &amp; reference tools</p>
                </div>
              </div>

              <StoreButtons compact />
            </div>

            <div className="mt-8 relative aspect-[16/9] w-full">
              <Image src={DataImg} alt="Airoflair Data screenshots" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Split Bill */}
        <div className="mx-auto mt-10 max-w-7xl px-6 pb-10">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <div className="relative mx-auto h-12 w-44 md:mx-0">
                  <Image src={SplitBillLogo} alt="Split Bill" fill className="object-contain" />
                </div>
                <p className="mt-3 max-w-xl text-sm text-zinc-600">
                  Smart bill splitting for group events, trips and shared expenses
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Go to Split Bill
              </Link>
            </div>

            <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
              <Image src={SplitBillImg} alt="Split Bill screenshot" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES with watermark */}
      <section id="services" className="relative bg-white py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative mx-auto mt-2 aspect-[16/6] w-full">
              <Image src={InspectIcon} alt="" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-zinc-800">
            Transform your inspections into impactful reports.
          </h2>

          <div className="mt-10 space-y-10 text-sm text-zinc-600">
            <div>
              <h3 className="font-semibold text-zinc-800">Airoflair Inspect</h3>
              <p className="mt-2 max-w-3xl">
                Airoflair Inspect is built to turn your inspection data into clear, secure,
                and fully accessible reports all in real time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">Whatever you&apos;re managing</h3>
              <p className="mt-2 max-w-3xl">
                Whether you&apos;re managing safety checks, compliance inspections, or asset assessments,
                our platform is fully adaptable to your workflow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">White-Labeled Portals &amp; Apps</h3>
              <p className="mt-2 max-w-3xl">
                Rebrand the Inspect portal and mobile apps with your business name, logo and colours,
                delivering a seamless, professional experience for your clients and teams.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">Custom Features &amp; Design</h3>
              <p className="mt-2 max-w-3xl">
                Tailor forms, workflows, and dashboards to fit your operational needs.
                From data capture to automated report generation — adapting to your industry,
                not the other way around.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800">Hosted &amp; Managed by Airoflair</h3>
              <p className="mt-2 max-w-3xl">
                Focus on your inspections while we take care of the infrastructure.
                Fully cloud-hosted, secure, and backed by expert support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-zinc-800 text-center">Contact Us</h2>
          <p className="mt-2 text-center text-sm text-zinc-600">
            Please fill in the form below and we will get back to you.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
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

            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="space-y-5 text-sm text-zinc-700">
                <div className="font-semibold">+27 64 762 7501</div>
                <div className="space-y-1">
                  <div>info@airoflair.com</div>
                  <div>support@airoflair.com</div>
                </div>

                <div className="pt-2">
                  <StoreButtons />
                </div>

                <div className="pt-2">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
