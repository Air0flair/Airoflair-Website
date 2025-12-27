// src/app/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images (src/assets/images)
import Logo from "@/assets/images/logo.png";
import MacbookMain from "@/assets/images/macbookmain.png";

import InspectLogo from "@/assets/images/inspectlogo.png";
import InspectMacbook from "@/assets/images/inspectmacbook.png";
import InspectIphone from "@/assets/images/inspectiphone.png";

import QuickIcon from "@/assets/images/quickicon.png";
import QuickInspectIphone from "@/assets/images/quickinspectiphone.png";

import AiroflairDataLogo from "@/assets/images/Airoflairdatalogo.png";
import DataImage from "@/assets/images/data.png";

import SplitBillLogo from "@/assets/images/splitbilllogo.png";
import SplitBillImage from "@/assets/images/splitbill.png";

// Footer / icons (svg)
import GooglePlayBadge from "@/assets/images/google-play.svg";
import AppleStoreBadge from "@/assets/images/apple-store.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import LinkedinIcon from "@/assets/images/linkedin.svg";
import XIcon from "@/assets/images/X.svg";
import WhatsappIcon from "@/assets/images/whatsapp.svg";

const LINKS = {
  inspectLogin: "https://inspect.airoflair.com",
  quickInspectGoogle:
    "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
  quickInspectApple:
    "https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606",
  dataGoogle: "https://play.google.com/store/apps/details?id=com.airoflair.data",
  dataApple: "https://apps.apple.com/us/app/airoflair-data/id6749357700",
  splitBill: "https://splitbill.airoflair.com",
  facebook: "https://www.facebook.com/airoflair",
  instagram: "https://www.instagram.com/airoflair/",
  x: "https://twitter.com/airoflair",
  linkedin: "https://www.linkedin.com/company/airoflair",
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cx(
        "w-full border-t border-zinc-200/70 bg-white",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center rounded-xl bg-[#1f2a8a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#1f2a8a]/30",
        className
      )}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400/20",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Contact form
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Airoflair",
      url: "https://airoflair.com/",
      sameAs: [LINKS.facebook, LINKS.instagram, LINKS.x, LINKS.linkedin],
    }),
    []
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const msg =
          data?.error ||
          data?.message ||
          "Something went wrong sending your message. Please try again.";
        setStatus({ type: "error", message: msg });
        setSubmitting(false);
        return;
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. We will get back to you shortly.",
      });
      setForm({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-8 w-[150px] sm:h-9 sm:w-[170px]">
              <Image
                src={Logo}
                alt="Airoflair"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#products"
              className="text-xs font-semibold tracking-wide text-zinc-700 hover:text-zinc-950"
            >
              PRODUCTS
            </a>
            <a
              href="#services"
              className="text-xs font-semibold tracking-wide text-zinc-700 hover:text-zinc-950"
            >
              SERVICES
            </a>
            <a
              href="#contact"
              className="text-xs font-semibold tracking-wide text-zinc-700 hover:text-zinc-950"
            >
              CONTACT
            </a>
            <PrimaryButton href={LINKS.inspectLogin} className="h-9 px-4 py-0">
              Inspect Login
            </PrimaryButton>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <span className="mr-2">Menu</span>
            <span className="grid gap-1">
              <span className="h-0.5 w-5 bg-zinc-900" />
              <span className="h-0.5 w-5 bg-zinc-900" />
              <span className="h-0.5 w-5 bg-zinc-900" />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cx("md:hidden", mobileOpen ? "block" : "hidden")}>
          <div className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8">
            <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
              <a
                href="#products"
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                onClick={() => setMobileOpen(false)}
              >
                Products
              </a>
              <a
                href="#services"
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
              <div className="px-2 pt-2">
                <PrimaryButton
                  href={LINKS.inspectLogin}
                  className="w-full"
                >
                  Inspect Login
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl">
              All your inspection{" "}
              <span className="block">
                <span className="bg-gradient-to-r from-[#1f2a8a] to-[#159ad7] bg-clip-text text-transparent">
                  reporting &amp; data
                </span>
              </span>
              <span className="block">ready to use</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600">
              Transform the way your team captures, compiles and completes
              inspection reports faster than ever.
              <br />
              Available on iOS and Android
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <SecondaryButton href="#contact">Contact Us</SecondaryButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[720px]">
            <Image
              src={MacbookMain}
              alt="Airoflair platform preview"
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <Section id="products" className="bg-[#f6f7fb]">
        <div className="py-14 sm:py-16">
          {/* Inspect */}
          <div className="w-full py-12 sm:py-14">
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_2fr_.9fr]">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-extrabold tracking-tight text-zinc-950">
                    Inspect
                  </h2>
                  <p className="mt-3 max-w-md text-base text-zinc-600 lg:mx-0">
                    Use powerful, flexible templates to create and deliver
                    inspection reports faster than ever
                  </p>
                </div>

                <div className="relative mx-auto w-full max-w-[760px]">
                  <div className="grid items-center gap-6 sm:grid-cols-2">
                    <div className="relative w-full">
                      <Image
                        src={InspectLogo}
                        alt="Airoflair Inspect"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <div className="relative w-full">
                      <Image
                        src={InspectMacbook}
                        alt="Inspect on desktop"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="flex w-full max-w-xs flex-col items-center gap-5">
                    <div className="relative w-full max-w-[210px]">
                      <Image
                        src={InspectIphone}
                        alt="Inspect on mobile"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <PrimaryButton href={LINKS.inspectLogin} className="w-full">
                      Go to Inspect
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inspect */}
          <div className="w-full border-t border-zinc-200/70 bg-white py-12 sm:py-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-extrabold tracking-tight text-zinc-950">
                  Quick Inspect
                </h2>
                <p className="mt-3 max-w-md text-base text-zinc-600 lg:mx-0">
                  A fast, offline-ready inspection app for quick visual surveys
                  and photo-rich reports
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[820px]">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <div className="relative w-full">
                    <Image
                      src={QuickInspectIphone}
                      alt="Airoflair Quick Inspect"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <div className="relative mx-auto w-full max-w-[420px]">
                    <Image
                      src={QuickIcon}
                      alt="Quick Inspect icon"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="flex w-full max-w-xs flex-col items-center gap-4">
                  <Link href={LINKS.quickInspectApple} className="relative block">
                    <Image
                      src={AppleStoreBadge}
                      alt="Download on the App Store"
                      className="h-auto w-[175px] object-contain"
                    />
                  </Link>
                  <Link
                    href={LINKS.quickInspectGoogle}
                    className="relative block"
                  >
                    <Image
                      src={GooglePlayBadge}
                      alt="Get it on Google Play"
                      className="h-auto w-[175px] object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="w-full border-t border-zinc-200/70 bg-[#f6f7fb] py-12 sm:py-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_2.2fr_1fr]">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14">
                    <Image
                      src={AiroflairDataLogo}
                      alt="Airoflair Data"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.2em] text-zinc-600">
                      AIROFLAIR
                    </div>
                    <div className="text-4xl font-extrabold tracking-tight text-zinc-950">
                      DATA
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Engineering calculators &amp; reference tools
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[900px]">
                <Image
                  src={DataImage}
                  alt="Airoflair Data preview"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="flex w-full max-w-xs flex-col items-center gap-4">
                  <Link href={LINKS.dataApple} className="relative block">
                    <Image
                      src={AppleStoreBadge}
                      alt="Download on the App Store"
                      className="h-auto w-[175px] object-contain"
                    />
                  </Link>
                  <Link href={LINKS.dataGoogle} className="relative block">
                    <Image
                      src={GooglePlayBadge}
                      alt="Get it on Google Play"
                      className="h-auto w-[175px] object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SplitBill */}
          <div className="w-full border-t border-zinc-200/70 bg-white py-12 sm:py-14">
            <div className="text-center">
              <div className="relative mx-auto h-14 w-[220px]">
                <Image
                  src={SplitBillLogo}
                  alt="SplitBill"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-base text-zinc-600">
                Smart bill splitting for group events, trips and shared expenses
              </p>

              <div className="mt-8 flex justify-center">
                <div className="relative w-full max-w-[760px]">
                  <Image
                    src={SplitBillImage}
                    alt="SplitBill preview"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <PrimaryButton href={LINKS.splitBill}>Go to Split Bill</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-[#f6f7fb]">
        <div className="py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-950">
              Transform your inspections into impactful reports.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600">
              Airoflair Inspect turns field capture into clear, secure, and
              client-ready reporting — in real time. Designed to adapt to your
              workflow, not the other way around.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: "Inspection reporting, streamlined",
                  body: "Capture observations, photos and findings fast — then generate professional reports with consistent formatting across teams and projects.",
                },
                {
                  title: "White-labeled portals & apps",
                  body: "Rebrand the portal and mobile apps with your business name, logo and colours for a seamless, professional experience.",
                },
                {
                  title: "Custom workflows & features",
                  body: "Tailor forms, templates and data fields to suit your operations — from walkdowns to full campaign reporting.",
                },
                {
                  title: "Hosted & managed",
                  body: "Focus on inspections while we handle hosting, security and support. Built for reliability and scale.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-zinc-950">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white">
        <div className="py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8">
              <h2 className="text-4xl font-extrabold tracking-tight text-zinc-950">
                Contact Us
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                Please fill in the form below and we will get back to you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
              <form
                onSubmit={onSubmit}
                className="w-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, firstName: e.target.value }))
                    }
                    placeholder="First Name"
                    className="h-12 w-full rounded-xl border border-zinc-300 px-4 text-sm outline-none focus:border-[#1f2a8a]"
                    required
                  />
                  <input
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, lastName: e.target.value }))
                    }
                    placeholder="Last Name"
                    className="h-12 w-full rounded-xl border border-zinc-300 px-4 text-sm outline-none focus:border-[#1f2a8a]"
                    required
                  />
                  <input
                    value={form.contactNumber}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, contactNumber: e.target.value }))
                    }
                    placeholder="Contact No."
                    className="h-12 w-full rounded-xl border border-zinc-300 px-4 text-sm outline-none focus:border-[#1f2a8a]"
                  />
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, email: e.target.value }))
                    }
                    placeholder="Email"
                    type="email"
                    className="h-12 w-full rounded-xl border border-zinc-300 px-4 text-sm outline-none focus:border-[#1f2a8a]"
                    required
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder="Send Mail"
                    className="min-h-[110px] w-full resize-none rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-[#1f2a8a]"
                    required
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cx(
                      "inline-flex h-11 items-center justify-center rounded-xl bg-[#1f2a8a] px-8 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#1f2a8a]/30",
                      submitting && "opacity-60"
                    )}
                  >
                    {submitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>

                  {status.type === "success" && (
                    <p className="text-sm font-semibold text-emerald-700">
                      {status.message}
                    </p>
                  )}
                  {status.type === "error" && (
                    <p className="text-sm font-semibold text-red-600">
                      {status.message}
                    </p>
                  )}
                </div>
              </form>

              <div className="w-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="relative mt-1 h-6 w-6">
                    <Image
                      src={WhatsappIcon}
                      alt="WhatsApp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm font-semibold text-zinc-900">
                    +27 64 762 7501
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-4">
                  {/* Email icon between the two email lines */}
                  <div className="relative mt-[18px] h-6 w-6">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-zinc-900"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6h16v12H4V6z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 7l8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="text-sm font-semibold text-zinc-900">
                    <div>info@airoflair.com</div>
                    <div className="mt-2">support@airoflair.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* subtle spacing */}
            <div className="mt-10" />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200/70 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-700">
            <span className="font-semibold text-zinc-900">© 2025 Airoflair</span>
            <span className="text-zinc-400">•</span>
            <Link
              href="/terms-of-service"
              className="font-semibold text-zinc-800 hover:text-zinc-950"
            >
              Terms of Service
            </Link>
            <span className="text-zinc-400">•</span>
            <Link
              href="/privacy-policy"
              className="font-semibold text-zinc-800 hover:text-zinc-950"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Store badges smaller */}
            <Link href={LINKS.dataGoogle} className="relative">
              <Image
                src={GooglePlayBadge}
                alt="Google Play"
                className="h-auto w-[140px] object-contain"
              />
            </Link>
            <Link href={LINKS.dataApple} className="relative">
              <Image
                src={AppleStoreBadge}
                alt="App Store"
                className="h-auto w-[140px] object-contain"
              />
            </Link>

            <div className="ml-2 flex items-center gap-4">
              {/* Social icons slightly bigger + same size */}
              {[
                { href: LINKS.facebook, icon: FacebookIcon, label: "Facebook" },
                { href: LINKS.x, icon: XIcon, label: "X" },
                { href: LINKS.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                {
                  href: LINKS.instagram,
                  icon: InstagramIcon,
                  label: "Instagram",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="relative block h-6 w-6 opacity-90 hover:opacity-100"
                >
                  <Image src={s.icon} alt={s.label} fill className="object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
