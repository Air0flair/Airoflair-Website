"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Why Airoflair", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Airoflair",
  url: "https://airoflair.com/",
  logo: "https://airoflair.com/logo.png",
  description:
    "Airoflair provides inspection reporting software, mobile apps and engineering tools.",
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head>
        <title>
          Airoflair – Inspection Reporting Software, Mobile Apps &amp; Data Tools
        </title>
        <meta
          name="description"
          content="Airoflair provides fast mobile inspection apps, full web platform for professional reporting and data tools."
        />
        {/* Explicit robots meta */}
        <meta name="robots" content="index,follow" />

        {/* Canonical URL pointing to main site (with trailing slash) */}
        <link rel="canonical" href="https://airoflair.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Airoflair – Inspection Reporting Software, Mobile Apps &amp; Data Tools"
        />
        <meta
          property="og:description"
          content="Airoflair connects inspection reporting, engineering tools, and data workflows into one ecosystem – from powerful mobile apps to a full web platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://airoflair.com/" />
        <meta property="og:site_name" content="Airoflair" />
        <meta property="og:image" content="https://airoflair.com/og-image.png" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-zinc-950 text-zinc-50">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          {/* NAVBAR */}
          <header
            className="flex items-center justify-between py-6"
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-11 w-40 sm:h-12 sm:w-48">
                  <Image
                    src={Logo}
                    alt="Airoflair logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <span className="hidden rounded-full border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 sm:inline-block">
                Inspection • Data • Workflow
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop nav */}
              <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-white"
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

              {/* Mobile menu toggle */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((open) => !open)}
                className="inline-flex items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 md:hidden"
              >
                {mobileOpen ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 7h16M4 12h16M4 17h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </header>

          {/* MOBILE NAV */}
          {mobileOpen && (
            <div className="mb-4 md:hidden">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/95 px-4 py-3 shadow-lg backdrop-blur">
                <nav
                  className="flex flex-col gap-2 text-sm"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="w-full rounded-xl px-2 py-2 text-left text-zinc-200 hover:bg-zinc-900"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Link
                    href="https://inspect.airoflair.com"
                    target="_blank"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-200"
                  >
                    Open Inspect
                  </Link>
                </nav>
              </div>
            </div>
          )}

          {/* MAIN */}
          <main className="flex flex-1 flex-col justify-center gap-16 py-6">
            {/* HERO */}
            <section className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Quick professional inspection reports
                </div>

                {/* H1 – 3 lines on all sizes, gradient only on “reporting & data” */}
                <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="block">All your inspection</span>
                  <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    reporting &amp; data
                  </span>
                  <span className="block">ready to use.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                  Airoflair connects your inspection reporting, engineering tools
                  and data workflows. From fast mobile apps to a full web platform,
                  streamlining your entire inspection process.
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
              </div>

              {/* PRODUCT STACK CARD */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
                <h2 className="text-sm font-semibold text-zinc-200">
                  Airoflair product stack
                </h2>
                <p className="mt-2 text-xs text-zinc-400">
                  Inspection reporting and data tools.
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
                          Web
                        </span>
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                          Mobile
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
                          Mobile
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
                          Mobile
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-400">
                        Engineering calculators &amp; tools.
                      </p>
                    </div>
                  </div>

                  {/* Split Bill */}
                  <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/10 text-xs font-semibold text-fuchsia-300">
                      SB
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-zinc-50">
                        Split Bill
                      </span>
                      <p className="mt-1 text-xs text-zinc-400">
                        Smart bill splitting for groups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SOLUTIONS */}
            <section id="solutions" className="mt-4 space-y-6">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Streamline your inspection workflow
              </h2>
              <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
                Collect data efficiently, stay organised and produce clean, consistent reports.
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
                      A fast, offline-ready inspection app for quick visual surveys and
                      photo-rich reports.
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

                {/* Data */}
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
                      Engineering calculators &amp; reference tools for inspection,
                      mechanical, electrical and HVAC work.
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

                {/* Split Bill */}
                <div className="flex flex-col justify-between rounded-3xl border border-fuchsia-700/50 bg-gradient-to-br from-fuchsia-950/70 via-zinc-950 to-black p-6">
                  <div>
                    <span className="text-sm font-semibold text-white">
                      Split Bill
                    </span>
                    <p className="mt-3 text-sm text-zinc-200">
                      Smart bill splitting for group events, trips and shared expenses.
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
            <section
              id="why"
              className="mt-10 space-y-6 border-t border-zinc-800 pt-10"
            >
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Why Airoflair?
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Built to inspect.
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Data collection made faster and easier with tools designed for
                    real-world inspection work. Quick – Efficient – Useful.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Start and scale later.
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Begin with Quick Inspect for simple jobs and grow into the full
                    management system with Airoflair Inspect.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Brand-quality reports.
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Clean, professional PDF inspection reports that carry your
                    company logo, layout and photo detail.
                  </p>
                </div>
              </div>
            </section>

            {/* CONTACT / FOOTER */}
            <section
              id="contact"
              className="mt-12 border-t border-zinc-800 pb-10 pt-8 text-sm text-zinc-400"
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
    </>
  );
}
