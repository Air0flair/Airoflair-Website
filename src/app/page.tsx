// ✅ REPLACE FILE
// src/app/page.tsx (FULL FILE – COPY EVERYTHING)

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Brand + product images (src/assets/images/*)
import Logo from "@/assets/images/logo.png";
import MacbookMain from "@/assets/images/macbookmain.png";
import InspectIcon from "@/assets/images/inspecticon.png";

import InspectLogo from "@/assets/images/inspectlogo.png";
import InspectMacbook from "@/assets/images/inspectmacbook.png";
import InspectIphone from "@/assets/images/inspectiphone.png";

import QuickIcon from "@/assets/images/quickicon.png";
import QuickInspectIphone from "@/assets/images/quickinspectiphone.png";

import DataLogo from "@/assets/images/Airoflairdatalogo.png";
import DataImage from "@/assets/images/data.png";

import SplitBillLogo from "@/assets/images/splitbilllogo.png";
import SplitBillImage from "@/assets/images/splitbill.png";

// Footer badges + icons (src/assets/images/*)
import GooglePlayBadge from "@/assets/images/google-play.svg";
import AppleStoreBadge from "@/assets/images/apple-store.svg";

import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import XIcon from "@/assets/images/X.svg";
import LinkedInIcon from "@/assets/images/linkedin.svg";
import WhatsAppIcon from "@/assets/images/whatsapp.svg";

const LINKS = {
  inspectLogin: "https://inspect.airoflair.com",
  quickAppGoogle: "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
  quickAppApple: "https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606",
  dataAppGoogle: "https://play.google.com/store/apps/details?id=com.airoflair.data",
  dataAppApple: "https://apps.apple.com/us/app/airoflair-data/id6749357700",
  splitBill: "https://splitbill.airoflair.com",
  social: {
    facebook: "https://www.facebook.com/airoflair",
    instagram: "https://www.instagram.com/airoflair/",
    x: "https://twitter.com/airoflair",
    linkedin: "https://www.linkedin.com/company/airoflair",
  },
  legal: {
    terms: "/terms-of-service",
    privacy: "/privacy-policy",
  },
};

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m6 8 6 4.25L18 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const year = useMemo(() => new Date().getFullYear(), []);

  function scrollToId(id: string) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message. Please try again.");
      }

      setStatus({ type: "success", message: "Message sent successfully. We’ll get back to you shortly." });
      setForm({ firstName: "", lastName: "", contactNo: "", email: "", message: "" });
    } catch (err: any) {
      setStatus({ type: "error", message: err?.message || "Failed to send message. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src={Logo} alt="Airoflair" priority className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
              <button onClick={() => scrollToId("products")} className="hover:text-zinc-900 transition">
                PRODUCTS
              </button>
              <button onClick={() => scrollToId("services")} className="hover:text-zinc-900 transition">
                SERVICES
              </button>
              <button onClick={() => scrollToId("contact")} className="hover:text-zinc-900 transition">
                CONTACT
              </button>

              <a
                href={LINKS.inspectLogin}
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center justify-center rounded-lg bg-[#2C2E8F] px-4 py-2 text-white shadow-sm hover:opacity-95 transition"
              >
                Inspect Login
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-50"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => scrollToId("products")}
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                >
                  PRODUCTS
                </button>
                <button
                  onClick={() => scrollToId("services")}
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                >
                  SERVICES
                </button>
                <button
                  onClick={() => scrollToId("contact")}
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                >
                  CONTACT
                </button>
                <a
                  href={LINKS.inspectLogin}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-sm font-semibold text-white bg-[#2C2E8F] hover:opacity-95"
                  onClick={() => setMenuOpen(false)}
                >
                  Inspect Login
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
                All your inspection{" "}
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-[#2C2E8F] via-[#1B7FE2] to-[#12B6FF] bg-clip-text text-transparent">
                    reporting &amp; data
                  </span>
                </span>
                <span className="block mt-2">ready to use</span>
              </h1>

              <p className="mt-6 text-sm md:text-base text-zinc-600 leading-relaxed">
                Transform the way your team captures, compiles and completes inspection reports faster than ever.
                <br />
                Available on iOS and Android
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToId("contact")}
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Make the hero image big and clean */}
              <div className="relative mx-auto w-full max-w-[720px]">
                <Image
                  src={MacbookMain}
                  alt="Airoflair platform preview"
                  priority
                  className="h-auto w-full object-contain"
                />
                <Image
                  src={InspectIcon}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 m-auto h-[92%] w-[92%] opacity-70 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-[#F6F8FC] border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Inspect band (full width background, centered text) */}
          <div className="py-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1.8fr] items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold">Inspect</h2>
                <p className="mt-3 text-zinc-600 max-w-md md:max-w-none">
                  Use powerful, flexible templates to create and deliver inspection reports faster than ever
                </p>

                <div className="mt-6 flex justify-center md:justify-start">
                  <a
                    href={LINKS.inspectLogin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#2C2E8F] px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition"
                  >
                    Inspect Login
                  </a>
                </div>
              </div>

              {/* Bigger images */}
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <Image
                  src={InspectLogo}
                  alt="Airoflair Inspect"
                  className="h-auto w-[180px] md:w-[240px] object-contain"
                />
                <Image
                  src={InspectMacbook}
                  alt="Inspect on desktop"
                  className="h-auto w-[320px] md:w-[440px] object-contain"
                />
                <Image
                  src={InspectIphone}
                  alt="Inspect on mobile"
                  className="h-auto w-[110px] md:w-[150px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inspect band */}
      <section className="bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1.9fr]">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold">Quick Inspect</h3>
              <p className="mt-3 text-zinc-600 max-w-xl">
                A fast, offline-ready inspection app for quick visual surveys and photo-rich reports
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center justify-center gap-8">
                <Image
                  src={QuickInspectIphone}
                  alt="Quick Inspect on iPhone"
                  className="h-auto w-[320px] md:w-[460px] object-contain"
                />
                <Image src={QuickIcon} alt="Quick Inspect" className="h-auto w-[150px] md:w-[210px] object-contain" />
              </div>

              <div className="flex items-center gap-3">
                <a href={LINKS.quickAppApple} target="_blank" rel="noreferrer" className="inline-flex">
                  <Image src={AppleStoreBadge} alt="Download on the App Store" className="h-9 w-auto" />
                </a>
                <a href={LINKS.quickAppGoogle} target="_blank" rel="noreferrer" className="inline-flex">
                  <Image src={GooglePlayBadge} alt="Get it on Google Play" className="h-9 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data band */}
      <section className="bg-[#F6F8FC] border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1.9fr] items-start">
            <div className="flex items-start gap-4">
              <Image src={DataLogo} alt="Airoflair Data" className="h-auto w-20 md:w-24 object-contain" />
              <div>
                <div className="text-xs font-bold tracking-[0.2em] text-zinc-500">AIROFLAIR</div>
                <div className="text-3xl md:text-4xl font-extrabold leading-tight">DATA</div>
                <div className="mt-1 text-sm text-zinc-600">Engineering calculators &amp; reference tools</div>

                <div className="mt-4 flex items-center gap-3">
                  <a href={LINKS.dataAppApple} target="_blank" rel="noreferrer" className="inline-flex">
                    <Image src={AppleStoreBadge} alt="Download on the App Store" className="h-9 w-auto" />
                  </a>
                  <a href={LINKS.dataAppGoogle} target="_blank" rel="noreferrer" className="inline-flex">
                    <Image src={GooglePlayBadge} alt="Get it on Google Play" className="h-9 w-auto" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src={DataImage}
                alt="Airoflair Data app previews"
                className="h-auto w-full max-w-[980px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SplitBill band */}
      <section className="bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Image src={SplitBillLogo} alt="SplitBill" className="mx-auto h-auto w-[180px] md:w-[220px] object-contain" />
            <p className="mt-3 text-zinc-600">Smart bill splitting for group events, trips and shared expenses</p>

            <div className="mt-6">
              <a
                href={LINKS.splitBill}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#2C2E8F] px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition"
              >
                Go to Split Bill
              </a>
            </div>

            <div className="mt-10 flex justify-center">
              <Image
                src={SplitBillImage}
                alt="SplitBill preview"
                className="h-auto w-full max-w-[760px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F6F8FC] border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Transform your inspections into impactful reports.</h2>
          <p className="mt-4 text-zinc-600 max-w-3xl">
            Data Collection made faster and easier with Airoflair inspection and data apps.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-bold">Inspection reporting, streamlined</div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Capture observations, photos and findings fast then generate professional reports with consistent formatting across teams and projects.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-bold">White-labeled portals &amp; apps</div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Rebrand the portal and mobile apps with your business name, logo and colours for a seamless, professional experience.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-bold">Custom workflows &amp; features</div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Tailor forms, templates and data fields to suit your operations from walkdowns to full campaign reporting.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-bold">Hosted &amp; managed</div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Focus on inspections while we handle hosting, security and support. Built for reliability and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Form */}
              <div className="p-8 md:p-10">
                {/* Left align heading + subtitle */}
                <h3 className="text-3xl font-extrabold">Contact Us</h3>
                <p className="mt-2 text-zinc-600 text-sm">
                  Please fill in the form below and we will get back to you.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      value={form.firstName}
                      onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
                      placeholder="First Name"
                      className="h-12 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-[#2C2E8F]"
                      required
                    />
                    <input
                      value={form.lastName}
                      onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))}
                      placeholder="Last Name"
                      className="h-12 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-[#2C2E8F]"
                      required
                    />
                    <input
                      value={form.contactNo}
                      onChange={(e) => setForm((s) => ({ ...s, contactNo: e.target.value }))}
                      placeholder="Contact No."
                      className="h-12 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-[#2C2E8F]"
                      required
                    />
                    <input
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      placeholder="Email"
                      type="email"
                      className="h-12 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-[#2C2E8F]"
                      required
                    />
                  </div>

                  {/* Shorten message box */}
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-xl border border-zinc-200 p-4 text-sm outline-none focus:border-[#2C2E8F] resize-none"
                    required
                  />

                  {status && (
                    <div
                      className={`rounded-xl px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="h-12 w-full md:w-[260px] rounded-xl bg-[#2C2E8F] text-white text-sm font-semibold shadow-md hover:opacity-95 transition disabled:opacity-60"
                  >
                    {submitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>

              {/* Contact details */}
              <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-zinc-200 bg-white">
                <div className="h-full flex items-center justify-center">
                  <div className="w-full max-w-sm space-y-6 text-zinc-800">
                    <div className="flex items-center gap-3">
                      {/* Use whatsapp.svg */}
                      <Image src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6" />
                      <a href="tel:+27647627501" className="font-semibold hover:underline">
                        +27 64 762 7501
                      </a>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MailIcon className="h-6 w-6 text-zinc-700" />
                        <a href="mailto:info@airoflair.com" className="hover:underline">
                          info@airoflair.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MailIcon className="h-6 w-6 text-zinc-700" />
                        <a href="mailto:support@airoflair.com" className="hover:underline">
                          support@airoflair.com
                        </a>
                      </div>
                    </div>

                    <div className="text-sm text-zinc-500">
                      For product support, please include your platform (iOS/Android/Web) and a short description of the issue.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
              <span className="font-semibold text-zinc-800">© {year} Airoflair</span>

              <span className="text-zinc-400">•</span>

              <Link className="hover:text-zinc-900" href={LINKS.legal.terms}>
                Terms of Service
              </Link>

              <span className="text-zinc-400">•</span>

              <Link className="hover:text-zinc-900" href={LINKS.legal.privacy}>
                Privacy Policy
              </Link>
            </div>

            {/* Badges smaller, social icons bigger & same size */}
            <div className="flex items-center justify-between md:justify-end gap-5">
              <div className="flex items-center gap-3">
                <a href={LINKS.dataAppGoogle} target="_blank" rel="noreferrer" className="inline-flex">
                  <Image src={GooglePlayBadge} alt="Google Play" className="h-7 w-auto" />
                </a>
                <a href={LINKS.dataAppApple} target="_blank" rel="noreferrer" className="inline-flex">
                  <Image src={AppleStoreBadge} alt="App Store" className="h-7 w-auto" />
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a href={LINKS.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Image src={FacebookIcon} alt="" className="h-6 w-6" />
                </a>
                <a href={LINKS.social.x} target="_blank" rel="noreferrer" aria-label="X">
                  <Image src={XIcon} alt="" className="h-6 w-6" />
                </a>
                <a href={LINKS.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Image src={LinkedInIcon} alt="" className="h-6 w-6" />
                </a>
                <a href={LINKS.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Image src={InstagramIcon} alt="" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
