"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Main brand assets (your folder: src/assets/images)
import MainLogo from "@/assets/images/logo.png";

// Hero + product images
import MacbookMain from "@/assets/images/macbookmain.png";
import InspectIconWatermark from "@/assets/images/inspecticon.png";

import InspectLogo from "@/assets/images/inspectlogo.png";
import InspectMacbook from "@/assets/images/inspectmacbook.png";
import InspectPhone from "@/assets/images/inspectphone.png";

import QuickIcon from "@/assets/images/quickicon.png";
import QuickInspectIphone from "@/assets/images/quickinspectiphone.png";

import AiroflairDataLogo from "@/assets/images/Airoflairdatalogo.png";
import DataImage from "@/assets/images/data.png";

import SplitBillLogo from "@/assets/images/splitbilllogo.png";
import SplitBillImage from "@/assets/images/splitbill.png";

// Footer badge images + icons (SVGS)
import GooglePlayBadge from "@/assets/images/google-play.svg";
import AppleStoreBadge from "@/assets/images/apple-store.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import XIcon from "@/assets/images/X.svg";
import LinkedInIcon from "@/assets/images/linkedin.svg";

const BRAND_BLUE = "#2B2F8F"; // button + accent
const TEXT_MUTED = "text-zinc-600";
const BORDER = "border-zinc-200";

const LINKS = {
  inspect: "https://inspect.airoflair.com",
  splitbill: "https://splitbill.airoflair.com",

  // Developer store pages (as you provided)
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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-[190px]">
            <Image src={MainLogo} alt="Airoflair" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

          {/* Store badges */}
          <div className="flex items-center gap-3">
            <Link href={LINKS.googlePlayDev} target="_blank" aria-label="Google Play">
              <Image src={GooglePlayBadge} alt="Get it on Google Play" height={36} className="h-9 w-auto" />
            </Link>
            <Link href={LINKS.appleDev} target="_blank" aria-label="Apple App Store">
              <Image src={AppleStoreBadge} alt="Download on the App Store" height={36} className="h-9 w-auto" />
            </Link>
          </div>

          {/* Social icons */}
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

function PrimaryButton({
  href,
  children,
  target = "_blank",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
      style={{ backgroundColor: BRAND_BLUE }}
    >
      {children}
    </Link>
  );
}

function GhostButton({
  href,
  children,
  target = "_blank",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
    >
      {children}
    </Link>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1320px] px-6">{children}</div>;
}

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "fail">(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    message: "",
    // honeypot:
    company: "",
  });

  const canSubmit = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      emailOk &&
      form.message.trim().length > 10
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(null);

    if (!canSubmit) return;

    try {
      setSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setSent("ok");
      setForm({ firstName: "", lastName: "", contactNo: "", email: "", message: "", company: "" });
    } catch {
      setSent("fail");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      {/* HERO */}
      <section className="pt-14">
        <SectionShell>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-balance text-[44px] font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-[56px]">
                <span className="block">All your inspection</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #2B2F8F 0%, #2459D6 55%, #11A8FF 100%)",
                  }}
                >
                  reporting &amp; data
                </span>
                <span className="block">ready to use</span>
              </h1>

              <p className={`mt-6 max-w-xl text-[15px] leading-relaxed ${TEXT_MUTED}`}>
                Transform the way your team captures, compiles and completes inspection reports faster than ever.
                <br />
                Available on iOS and Android
              </p>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-[640px]">
                {/* watermark X */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]">
                  <Image
                    src={InspectIconWatermark}
                    alt=""
                    className="h-auto w-[90%] object-contain"
                    priority={false}
                  />
                </div>

                {/* hero macbook main */}
                <Image
                  src={MacbookMain}
                  alt="Airoflair platform preview"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="pt-14">
        <SectionShell>
          <div className="space-y-10">
            {/* Inspect */}
            <div className={`rounded-2xl border ${BORDER} bg-white p-8 shadow-sm`}>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Inspect</h2>
                  <p className={`mt-2 max-w-2xl text-sm ${TEXT_MUTED}`}>
                    Use powerful, flexible templates to create and deliver inspection reports faster than ever
                  </p>
                </div>
                <PrimaryButton href={LINKS.inspect}>Go to Inspect</PrimaryButton>
              </div>

              <div className="mt-8 grid items-center gap-6 lg:grid-cols-[320px_1fr_360px]">
                <div className="flex items-center justify-start">
                  <Image src={InspectLogo} alt="Airoflair Inspect logo" className="h-auto w-[240px] object-contain" />
                </div>

                <div className="flex justify-center">
                  <Image
                    src={InspectMacbook}
                    alt="Inspect web view"
                    className="h-auto w-full max-w-[520px] object-contain"
                  />
                </div>

                <div className="flex justify-center lg:justify-end">
                  <Image
                    src={InspectPhone}
                    alt="Inspect mobile view"
                    className="h-auto w-full max-w-[320px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Quick Inspect */}
            <div className={`rounded-2xl border ${BORDER} bg-white p-8 shadow-sm`}>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Quick Inspect</h2>
                  <p className={`mt-2 max-w-2xl text-sm ${TEXT_MUTED}`}>
                    A fast, offline-ready inspection app for quick visual surveys and photo-rich reports
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <GhostButton href={LINKS.appleDev}>App Store</GhostButton>
                  <GhostButton href={LINKS.googlePlayDev}>Google Play</GhostButton>
                </div>
              </div>

              <div className="mt-8 grid items-center gap-6 lg:grid-cols-2">
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src={QuickInspectIphone}
                    alt="Quick Inspect preview"
                    className="h-auto w-full max-w-[520px] object-contain"
                  />
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image src={QuickIcon} alt="Quick Inspect icon" className="h-auto w-[260px] object-contain" />
                </div>
              </div>
            </div>

            {/* DATA */}
            <div className={`rounded-2xl border ${BORDER} bg-white p-8 shadow-sm`}>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <Image src={AiroflairDataLogo} alt="Airoflair Data" className="h-auto w-[54px] object-contain" />
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight">DATA</h2>
                    <p className={`mt-1 text-sm ${TEXT_MUTED}`}>Engineering calculators &amp; reference tools</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GhostButton href={LINKS.appleDev}>App Store</GhostButton>
                  <GhostButton href={LINKS.googlePlayDev}>Google Play</GhostButton>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Image src={DataImage} alt="Airoflair Data preview" className="h-auto w-full max-w-[980px] object-contain" />
              </div>
            </div>

            {/* SplitBill */}
            <div className={`rounded-2xl border ${BORDER} bg-white p-8 shadow-sm`}>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <Image src={SplitBillLogo} alt="Split Bill" className="h-auto w-[160px] object-contain" />
                  </div>
                  <p className={`mt-3 max-w-2xl text-sm ${TEXT_MUTED}`}>
                    Smart bill splitting for group events, trips and shared expenses
                  </p>
                </div>
                <PrimaryButton href={LINKS.splitbill}>Go to Split Bill</PrimaryButton>
              </div>

              <div className="mt-8 flex justify-center">
                <Image
                  src={SplitBillImage}
                  alt="Split Bill preview"
                  className="h-auto w-full max-w-[720px] object-contain"
                />
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      {/* SERVICES (improved from your last screenshot section) */}
      <section id="services" className="pt-16">
        <SectionShell>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-10">
            {/* subtle watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
              <Image src={InspectIconWatermark} alt="" className="h-auto w-[1200px] object-contain" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Transform Your Inspections into Impactful Reports.</h3>
                <p className={`mt-3 max-w-xl text-sm leading-relaxed ${TEXT_MUTED}`}>
                  Airoflair Inspect is built to turn your inspection data into clear, secure, and fully accessible reports — in real time.
                  Whether you’re managing safety checks, compliance inspections, or asset assessments, our platform fits your workflow.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h4 className="text-sm font-semibold text-zinc-900">White-Labeled Portals &amp; Apps</h4>
                  <p className={`mt-2 text-sm leading-relaxed ${TEXT_MUTED}`}>
                    Rebrand the Inspect portal and mobile apps with your business name, logo and colours — delivering a seamless, professional experience for your clients and teams.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h4 className="text-sm font-semibold text-zinc-900">Custom Features &amp; Design</h4>
                  <p className={`mt-2 text-sm leading-relaxed ${TEXT_MUTED}`}>
                    Tailor forms, workflows and dashboards to fit your operational needs — from data capture to automated report generation.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-5 md:col-span-2">
                  <h4 className="text-sm font-semibold text-zinc-900">Hosted &amp; Managed by Airoflair</h4>
                  <p className={`mt-2 text-sm leading-relaxed ${TEXT_MUTED}`}>
                    Focus on inspections while we handle infrastructure. Fully cloud-hosted, secure, and backed by expert support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pt-16">
        <SectionShell>
          <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-10 shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-semibold tracking-tight">Contact Us</h3>
              <p className={`mt-2 text-sm ${TEXT_MUTED}`}>Please fill in the form below and we will get back to you.</p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1px_0.65fr]">
              {/* FORM */}
              <form onSubmit={onSubmit} className="space-y-4">
                {/* honeypot */}
                <input
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    value={form.firstName}
                    onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
                    placeholder="First Name"
                    className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-zinc-500"
                  />
                  <input
                    value={form.lastName}
                    onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))}
                    placeholder="Last Name"
                    className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-zinc-500"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    value={form.contactNo}
                    onChange={(e) => setForm((s) => ({ ...s, contactNo: e.target.value }))}
                    placeholder="Contact No."
                    className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-zinc-500"
                  />
                  <input
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    placeholder="Email"
                    className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-zinc-500"
                  />
                </div>

                {/* Shorter message box (as per your first screenshot) */}
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Message"
                  rows={3}
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-500"
                />

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={!canSubmit || submitting}
                    className="inline-flex h-11 w-[260px] items-center justify-center rounded-md text-sm font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    {submitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>

                  {sent === "ok" && (
                    <p className="mt-3 text-sm text-emerald-700">Message sent. We will get back to you shortly.</p>
                  )}
                  {sent === "fail" && (
                    <p className="mt-3 text-sm text-red-600">Send failed. Please try again or email info@airoflair.com.</p>
                  )}
                </div>
              </form>

              {/* Divider */}
              <div className="hidden bg-zinc-200 lg:block" />

              {/* CONTACT DETAILS (no store/social links here) */}
              <div className="flex flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  {/* WhatsApp icon (inline, no new file needed) */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M20.52 3.48A11.73 11.73 0 0 0 12.07 0C5.52 0 .2 5.32.2 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.8 11.8 0 0 0 5.67 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.14-3.43-8.34Zm-8.45 18.3h-.01a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.86 9.86 0 0 1-1.51-5.25C2.15 6.43 6.63 1.95 12.07 1.95c2.64 0 5.12 1.03 6.99 2.89a9.82 9.82 0 0 1 2.88 6.99c0 5.44-4.48 9.95-9.87 9.95Z"
                      fill="#111827"
                      opacity="0.85"
                    />
                    <path
                      d="M17.8 14.3c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.18.28-.73.91-.9 1.1-.16.18-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.18 0-.5.07-.76.35-.26.28-1 1-1 2.45 0 1.44 1.03 2.84 1.18 3.04.14.21 2.03 3.1 4.9 4.35.68.3 1.22.48 1.63.61.69.22 1.32.19 1.81.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.55-.33Z"
                      fill="#111827"
                      opacity="0.85"
                    />
                  </svg>

                  <a className="text-sm text-zinc-800 hover:text-black" href="tel:+27647627501">
                    +27 64 762 7501
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  {/* Email icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                      stroke="#111827"
                      strokeWidth="1.5"
                      opacity="0.85"
                    />
                    <path
                      d="m6.5 7.5 5.2 4.05a1 1 0 0 0 1.2 0L18.1 7.5"
                      stroke="#111827"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.85"
                    />
                  </svg>

                  <div className="flex flex-col gap-2">
                    <a className="text-sm text-zinc-800 hover:text-black" href="mailto:info@airoflair.com">
                      info@airoflair.com
                    </a>
                    <a className="text-sm text-zinc-800 hover:text-black" href="mailto:support@airoflair.com">
                      support@airoflair.com
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-zinc-500">
                    Alternatively, you can email us directly and we will respond as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      <Footer />
    </div>
  );
}
