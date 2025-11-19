"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Why Airoflair", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {/* NAVBAR */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              {/* Logo (25% bigger) */}
              <div className="relative h-11 w-40 sm:h-12 sm:w-48">
                <Image
                  src={Logo}
                  alt="Airoflair Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
            </Link>
            <span className="hidden rounded-full border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 sm:inline-block">
              Inspection • Data • Workflow
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="https://inspect.airoflair.com"
              target="_blank"
              className="rounded-full bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-zinc-200"
            >
              Open Inspect
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <main className="flex flex-1 flex-col justify-center gap-16 py-6">
          <section className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Quick professional inspection reports
              </div>

              <h1 className="mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                All your inspection{" "}
                <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                  reporting & data
                </span>{" "}
                in one ecosystem.
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
                Airoflair connects all types of inspections data
                and reporting into one professional toolset from mobile apps
                to a full web platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="https://inspect.airoflair.com"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
                >
                  Explore Inspect platform
                </Link>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
                >
                  View all Airoflair products
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Offline-ready mobile apps
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
                  Inspection data
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
                  Photo-rich, branded PDF reports
                </div>
              </div>
            </div>

            {/* PRODUCT STACK CARD */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
              <h2 className="text-sm font-semibold text-zinc-200">
                Airoflair product stack
              </h2>
              <p className="mt-2 text-xs text-zinc-400">
                Inspection and data tools.
              </p>

              <div className="mt-5 space-y-4">
                {/* Inspect */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400">
                    IN
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-50">
                        Inspect
                      </span>
                      <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-300">
                        WEB
                      </span>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                        MOBILE
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Fully customisable inspection and reporting portal.
                    </p>
                  </div>
                </div>

                {/* Quick Inspect */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-400">
                    QI
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-50">
                        Quick Inspect
                      </span>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                        MOBILE
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Fast, offline-ready inspections for iOS &amp; Android.
                    </p>
                  </div>
                </div>

                {/* Data */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-xs font-semibold text-indigo-300">
                    DA
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-50">
                        Data
                      </span>
                      <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-indigo-300">
                        MOBILE
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Engineering calculators &amp; reference data for the
                      field.
                    </p>
                  </div>
                </div>

                {/* SplitBill */}
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/10 text-xs font-semibold text-fuchsia-300">
                    SB
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-50">
                        Split Bill
                      </span>
                      <span className="rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[10px] tracking-wide text-fuchsia-300">
                        Web
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Smart bill splitting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SOLUTIONS */}
          <section id="solutions" className="mt-4 space-y-6">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              One ecosystem for real inspection work.
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
              Built for speed, accuracy and professional inspection reporting.
            </p>
          </section>

          {/* PRODUCTS GRID */}
          <section id="products" className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Airoflair products
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Inspect */}
              <div className="flex flex-col justify-between rounded-3xl border border-sky-700/50 bg-gradient-to-br from-sky-950/70 via-zinc-950 to-black p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      Inspect
                    </span>
                    <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[11px] text-sky-200">
                      Web platform
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-200">
                    A fully customisable inspection reporting platform.
                  </p>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    href="https://inspect.airoflair.com"
                    target="_blank"
                    className="rounded-full bg-sky-500 px-4 py-2 text-[11px] font-semibold text-zinc-950 hover:bg-sky-400"
                  >
                    Go to Inspect
                  </Link>
                </div>
              </div>

              {/* Quick Inspect */}
              <div className="flex flex-col justify-between rounded-3xl border border-emerald-700/50 bg-gradient-to-br from-emerald-950/70 via-zinc-950 to-black p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      Quick Inspect
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] text-emerald-200">
                      Mobile
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-200">
                    A fast, offline-ready inspection app for quick tasks.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606"
                    target="_blank"
                    className="rounded-full bg-zinc-50 px-4 py-2 text-[11px] font-semibold text-zinc-950 hover:bg-zinc-200"
                  >
                    App Store
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.airoflair.quickinspect&pcampaignid=web_share"
                    target="_blank"
                    className="rounded-full border border-zinc-400/60 bg-zinc-900 px-4 py-2 text-[11px] font-semibold text-zinc-50 hover:border-zinc-200"
                  >
                    Google Play
                  </Link>
                </div>
              </div>

              {/* Airoflair Data */}
              <div className="flex flex-col justify-between rounded-3xl border border-indigo-700/50 bg-gradient-to-br from-indigo-950/70 via-zinc-950 to-black p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      Data
                    </span>
                    <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[11px] text-indigo-200">
                      Mobile
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-200">
                    Calculators &amp; engineering tools.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="https://apps.apple.com/us/app/airoflair-data/id6749357700"
                    target="_blank"
                    className="rounded-full bg-zinc-50 px-4 py-2 text-[11px] font-semibold text-zinc-950 hover:bg-zinc-200"
                  >
                    App Store
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.airoflair.data&pcampaignid=web_share"
                    target="_blank"
                    className="rounded-full border border-zinc-400/60 bg-zinc-900 px-4 py-2 text-[11px] font-semibold text-zinc-50 hover:border-zinc-200"
                  >
                    Google Play
                  </Link>
                </div>
              </div>

              {/* SplitBill */}
              <div className="flex flex-col justify-between rounded-3xl border border-fuchsia-700/50 bg-gradient-to-br from-fuchsia-950/70 via-zinc-950 to-black p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      Split Bill
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-200">
                    Smart bill splitting.
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href="https://splitbill.airoflair.com"
                    target="_blank"
                    className="rounded-full bg-fuchsia-500 px-4 py-2 text-[11px] font-semibold text-zinc-50 hover:bg-fuchsia-400"
                  >
                    Open Split Bill
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* WHY AIROFLAIR */}
          <section id="why" className="mt-10 space-y-6 border-t border-zinc-800 pt-10">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Why Airoflair?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Built to inspect.
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Data Collection made faster and easier.
                  <br />
                  Quick – Efficient – Useful
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Start and scale later.
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Quick Inspect for fast inspection reporting.
                  Management system with Airoflair Inspect.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Brand-quality reports.
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Clean, professional PDF inspection reports.
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="mt-12 border-t border-zinc-800 pt-8 pb-10 text-sm text-zinc-400"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Get in touch
                </p>
                <p className="mt-1 max-w-xl text-sm text-zinc-300">
                  Ready to modernise your reporting and data workflow?
                </p>
              </div>

              <a
                href="mailto:info@airoflair.com"
                className="rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-300 hover:bg-zinc-900"
              >
                Email Airoflair
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2 border-t border-zinc-900 pt-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Airoflair. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/privacy-policy" className="hover:text-zinc-300">
                  Privacy Policy
                </Link>
                <span className="text-zinc-700">|</span>
                <Link href="/terms-of-service" className="hover:text-zinc-300">
                  Terms of Service
                </Link>
                <span className="text-zinc-700">|</span>
                <span className="text-zinc-500">
                  Powered by Airoflair inspection &amp; data tools.
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
