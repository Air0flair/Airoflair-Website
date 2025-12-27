"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* Logos & hero */
import logo from "@/assets/images/logo.png";
import macbookmain from "@/assets/images/macbookmain.png";

/* Inspect */
import inspectlogo from "@/assets/images/inspectlogo.png";
import inspectmacbook from "@/assets/images/inspectmacbook.png";
import inspectiphone from "@/assets/images/inspectiphone.png";

/* Quick Inspect */
import quickinspectiphone from "@/assets/images/quickinspectiphone.png";
import quickicon from "@/assets/images/quickicon.png";

/* Data */
import Airoflairdatalogo from "@/assets/images/Airoflairdatalogo.png";
import data from "@/assets/images/data.png";

/* SplitBill */
import splitbilllogo from "@/assets/images/splitbilllogo.png";
import splitbill from "@/assets/images/splitbill.png";

/* Footer icons (SVGs in assets/images) */
import facebookIcon from "@/assets/images/facebook.svg";
import instagramIcon from "@/assets/images/instagram.svg";
import xIcon from "@/assets/images/X.svg";
import linkedinIcon from "@/assets/images/linkedin.svg";
import googlePlay from "@/assets/images/google-play.svg";
import appleStore from "@/assets/images/apple-store.svg";

export default function HomePage() {
  const styles = useMemo(() => makeStyles(), []);

  return (
    <main style={styles.page}>
      <SiteHeader />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.containerHero}>
          <div style={styles.heroGrid}>
            <div style={styles.heroLeft}>
              <h1 style={styles.heroTitle}>
                All your inspection <br />
                <span style={styles.heroAccent}>reporting &amp; data</span>
                <br />
                ready to use
              </h1>

              <p style={styles.heroText}>
                Transform the way your team captures, compiles and completes inspection reports faster than ever.
                <br />
                Available on iOS and Android
              </p>

              <div style={styles.heroButtons}>
                <a
                  href="#products"
                  style={styles.btnPrimary}
                  aria-label="View products"
                >
                  View Products
                </a>
                <a
                  href="#contact"
                  style={styles.btnGhost}
                  aria-label="Contact Airoflair"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div style={styles.heroRight}>
              <Image
                src={macbookmain}
                alt="Airoflair platform preview"
                priority
                style={styles.heroImage as any}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={styles.section}>
        <div style={styles.containerWide}>
          {/* INSPECT */}
          <ProductPanel
            title="Inspect"
            subtitle="Use powerful, flexible templates to create and deliver inspection reports faster than ever"
            rightTop={
              <a
                href="https://inspect.airoflair.com/"
                target="_blank"
                rel="noreferrer"
                style={styles.btnPrimary}
              >
                Go to Inspect
              </a>
            }
          >
            <div style={styles.panelGrid3}>
              <div style={styles.panelColCenter}>
                <Image src={inspectlogo} alt="Airoflair Inspect" style={styles.productLogo as any} />
              </div>

              <div style={styles.panelColCenter}>
                <Image src={inspectmacbook} alt="Inspect web portal" style={styles.productShot as any} />
              </div>

              <div style={styles.panelColCenter}>
                <Image src={inspectiphone} alt="Inspect mobile app" style={styles.productShot as any} />
              </div>
            </div>
          </ProductPanel>

          {/* QUICK INSPECT */}
          <ProductPanel
            title="Quick Inspect"
            subtitle="A fast, offline-ready inspection app for quick visual surveys and photo-rich reports"
            rightTop={
              <div style={styles.badgeRow}>
                <a
                  href="https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Airoflair on Apple App Store"
                  style={styles.badgeLink}
                >
                  <Image src={appleStore} alt="App Store" style={styles.storeBadge as any} />
                </a>
                <a
                  href="https://play.google.com/store/apps/dev?id=5533742350655574841"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Airoflair on Google Play"
                  style={styles.badgeLink}
                >
                  <Image src={googlePlay} alt="Google Play" style={styles.storeBadge as any} />
                </a>
              </div>
            }
          >
            <div style={styles.panelGrid2}>
              <div style={styles.panelColCenter}>
                <Image src={quickinspectiphone} alt="Quick Inspect preview" style={styles.productShotLarge as any} />
              </div>

              <div style={styles.panelColCenter}>
                <Image src={quickicon} alt="Quick Inspect icon" style={styles.productLogoLarge as any} />
              </div>
            </div>
          </ProductPanel>

          {/* DATA */}
          <ProductPanel
            title="DATA"
            subtitle="Engineering calculators & reference tools"
            leftTop={
              <div style={styles.dataTitleRow}>
                <Image src={Airoflairdatalogo} alt="Airoflair Data" style={styles.dataLogo as any} />
                <div>
                  <div style={styles.dataKicker}>Airoflair</div>
                  <div style={styles.dataTitle}>DATA</div>
                </div>
              </div>
            }
            rightTop={
              <div style={styles.badgeRow}>
                <a
                  href="https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Airoflair on Apple App Store"
                  style={styles.badgeLink}
                >
                  <Image src={appleStore} alt="App Store" style={styles.storeBadge as any} />
                </a>
                <a
                  href="https://play.google.com/store/apps/dev?id=5533742350655574841"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Airoflair on Google Play"
                  style={styles.badgeLink}
                >
                  <Image src={googlePlay} alt="Google Play" style={styles.storeBadge as any} />
                </a>
              </div>
            }
          >
            <div style={styles.panelSingleCenter}>
              <Image src={data} alt="Airoflair Data preview" style={styles.dataShot as any} />
            </div>
          </ProductPanel>

          {/* SPLITBILL */}
          <ProductPanel
            title="SplitBill"
            subtitle="Smart bill splitting for group events, trips and shared expenses"
            leftTop={
              <div style={styles.splitTitleRow}>
                <Image src={splitbilllogo} alt="SplitBill logo" style={styles.splitLogo as any} />
              </div>
            }
            rightTop={
              <a
                href="https://splitbill.airoflair.com/"
                target="_blank"
                rel="noreferrer"
                style={styles.btnPrimary}
              >
                Go to SplitBill
              </a>
            }
          >
            <div style={styles.panelSingleCenter}>
              <Image src={splitbill} alt="SplitBill preview" style={styles.splitShot as any} />
            </div>
          </ProductPanel>
        </div>
      </section>

      {/* SERVICES (improved last section) */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.containerWide}>
          <div style={styles.servicesCard}>
            <h2 style={styles.servicesTitle}>Transform your inspections into impactful reports.</h2>
            <p style={styles.servicesIntro}>
              Airoflair Inspect turns field capture into clear, secure, and client-ready reporting — in real time.
              Designed to adapt to your workflow, not the other way around.
            </p>

            <div style={styles.servicesGrid}>
              <ServiceItem
                title="Inspection reporting, streamlined"
                body="Capture observations, photos and findings fast — then generate professional reports with consistent formatting across teams and projects."
              />
              <ServiceItem
                title="White-labeled portals & apps"
                body="Rebrand the portal and mobile apps with your business name, logo and colours for a seamless, professional experience."
              />
              <ServiceItem
                title="Custom workflows & features"
                body="Tailor forms, templates and data fields to suit your operations — from walkdowns to full campaign reporting."
              />
              <ServiceItem
                title="Hosted & managed"
                body="Focus on inspections while we handle hosting, security and support. Built for reliability and scale."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.containerWide}>
          <div style={styles.contactCard}>
            <div style={styles.contactHeader}>
              <h2 style={styles.contactTitle}>Contact Us</h2>
              <p style={styles.contactSubtitle}>Please fill in the form below and we will get back to you.</p>
            </div>

            <div style={styles.contactGrid}>
              <ContactForm />

              <div style={styles.contactInfo}>
                <div style={styles.infoRow}>
                  <span style={styles.iconCircle} aria-hidden="true">
                    {/* WhatsApp icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"
                        stroke="#111827"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.2 8.1c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.8c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.3.8 1.3 2.2 2.8 2.9.2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .8-.3 1.5-.9 1.9-.5.4-1.1.5-1.8.3-1.4-.4-3.1-1.5-4.4-2.8-1.3-1.3-2.4-3-2.8-4.4-.2-.7-.1-1.3.3-1.8.4-.6 1.1-.9 1.9-.9z"
                        fill="#111827"
                      />
                    </svg>
                  </span>
                  <div>
                    <div style={styles.infoStrong}>+27 64 762 7501</div>
                  </div>
                </div>

                <div style={styles.infoRow}>
                  <span style={styles.iconCircle} aria-hidden="true">
                    {/* Email icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 6h16v12H4V6z"
                        stroke="#111827"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 7l7.5 6 7.5-6"
                        stroke="#111827"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div style={styles.emailStack}>
                    <div style={styles.infoStrong}>info@airoflair.com</div>
                    <div style={styles.infoStrong}>support@airoflair.com</div>
                  </div>
                </div>

                {/* Social / Store links REMOVED from contact section per your instruction */}
              </div>
            </div>
          </div>

          <SiteFooter />
        </div>
      </section>
    </main>
  );
}

/* =========================
   HEADER / FOOTER COMPONENTS
========================= */

function SiteHeader() {
  const styles = useMemo(() => makeStyles(), []);

  return (
    <header style={styles.header}>
      <div style={styles.containerWide}>
        <div style={styles.headerInner}>
          <Link href="/" aria-label="Airoflair Home" style={styles.brandLink}>
            <Image src={logo} alt="Airoflair" priority style={{ width: "auto", height: 42 }} />
          </Link>

          <nav style={styles.nav}>
            <a href="#products" style={styles.navLink}>PRODUCTS</a>
            <a href="#services" style={styles.navLink}>SERVICES</a>
            <a href="#contact" style={styles.navLink}>CONTACT</a>

            <a
              href="https://inspect.airoflair.com/"
              target="_blank"
              rel="noreferrer"
              style={styles.inspectPill}
            >
              Inspect
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const styles = useMemo(() => makeStyles(), []);

  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        <div style={styles.footerLeft}>
          <div style={styles.footerCopy}>© {new Date().getFullYear()} Airoflair</div>
          <div style={styles.footerLinks}>
            <Link href="/terms-of-service" style={styles.footerLink}>Terms of Service</Link>
            <span style={styles.footerDot}>•</span>
            <Link href="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link>
          </div>
        </div>

        <div style={styles.footerRight}>
          <a
            href="https://www.facebook.com/airoflair"
            target="_blank"
            rel="noreferrer"
            aria-label="Airoflair on Facebook"
            style={styles.iconLink}
          >
            <Image src={facebookIcon} alt="Facebook" style={styles.footerIcon as any} />
          </a>

          <a
            href="https://www.instagram.com/airoflair/"
            target="_blank"
            rel="noreferrer"
            aria-label="Airoflair on Instagram"
            style={styles.iconLink}
          >
            <Image src={instagramIcon} alt="Instagram" style={styles.footerIcon as any} />
          </a>

          <a
            href="https://twitter.com/airoflair"
            target="_blank"
            rel="noreferrer"
            aria-label="Airoflair on X"
            style={styles.iconLink}
          >
            <Image src={xIcon} alt="X" style={styles.footerIcon as any} />
          </a>

          <a
            href="https://www.linkedin.com/company/airoflair"
            target="_blank"
            rel="noreferrer"
            aria-label="Airoflair on LinkedIn"
            style={styles.iconLink}
          >
            <Image src={linkedinIcon} alt="LinkedIn" style={styles.footerIcon as any} />
          </a>

          <span style={styles.footerDivider} />

          <a
            href="https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656"
            target="_blank"
            rel="noreferrer"
            aria-label="Airoflair on Apple App Store"
            style={styles.iconLink}
          >
            <Image src={appleStore} alt="App Store" style={styles.storeBadgeFooter as any} />
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=5533742350655574841"
            target="_blank"
            rel="noreferrer"
            aria-label="Airoflair on Google Play"
            style={styles.iconLink}
          >
            <Image src={googlePlay} alt="Google Play" style={styles.storeBadgeFooter as any} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   PRODUCT / SERVICES COMPONENTS
========================= */

function ProductPanel({
  title,
  subtitle,
  leftTop,
  rightTop,
  children,
}: {
  title: string;
  subtitle: string;
  leftTop?: React.ReactNode;
  rightTop?: React.ReactNode;
  children: React.ReactNode;
}) {
  const styles = useMemo(() => makeStyles(), []);

  return (
    <div style={styles.panel}>
      <div style={styles.panelTop}>
        <div style={styles.panelTopLeft}>
          {leftTop ? (
            leftTop
          ) : (
            <>
              <h2 style={styles.panelTitle}>{title}</h2>
              <p style={styles.panelSubtitle}>{subtitle}</p>
            </>
          )}
        </div>

        <div style={styles.panelTopRight}>{rightTop}</div>
      </div>

      <div>{children}</div>
    </div>
  );
}

function ServiceItem({ title, body }: { title: string; body: string }) {
  const styles = useMemo(() => makeStyles(), []);
  return (
    <div style={styles.serviceItem}>
      <div style={styles.serviceTitle}>{title}</div>
      <div style={styles.serviceBody}>{body}</div>
    </div>
  );
}

/* =========================
   CONTACT FORM (POSTS TO /api/contact)
========================= */

function ContactForm() {
  const styles = useMemo(() => makeStyles(), []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // honeypot
  const [company, setCompany] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusText, setStatusText] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("sending");
    setStatusText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          contactNo,
          email,
          message,
          company, // honeypot
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setStatusText(json?.error || "Failed to send. Please try again.");
        return;
      }

      setStatus("sent");
      setStatusText("Message sent successfully. We will get back to you shortly.");

      // clear fields after successful send
      setFirstName("");
      setLastName("");
      setContactNo("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setStatus("error");
      setStatusText("Failed to send. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGrid}>
        <input
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div style={styles.formGrid}>
        <input
          style={styles.input}
          placeholder="Contact No."
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Honeypot (hidden) */}
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={styles.honeypot}
      />

      {/* Shorter message box per your screenshot */}
      <textarea
        style={styles.textareaShort}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={4}
      />

      <div style={styles.formActions}>
        <button
          type="submit"
          style={{
            ...styles.btnPrimary,
            opacity: status === "sending" ? 0.7 : 1,
            cursor: status === "sending" ? "not-allowed" : "pointer",
          }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
        </button>

        <div
          style={{
            ...styles.statusText,
            color: status === "error" ? "#b42318" : status === "sent" ? "#067647" : "#6b7280",
          }}
          aria-live="polite"
        >
          {statusText}
        </div>
      </div>
    </form>
  );
}

/* =========================
   STYLES (inline, no external deps)
========================= */

function makeStyles() {
  const MAX_WIDE = 1320;

  return {
    page: {
      background: "#ffffff",
      color: "#0b0f19",
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    } as React.CSSProperties,

    /* containers */
    containerWide: {
      maxWidth: MAX_WIDE,
      margin: "0 auto",
      padding: "0 20px",
    } as React.CSSProperties,

    containerHero: {
      maxWidth: MAX_WIDE,
      margin: "0 auto",
      padding: "0 20px",
    } as React.CSSProperties,

    /* header */
    header: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #eef0f3",
    } as React.CSSProperties,

    headerInner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 0",
    } as React.CSSProperties,

    brandLink: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
    } as React.CSSProperties,

    nav: {
      display: "flex",
      gap: 22,
      alignItems: "center",
    } as React.CSSProperties,

    navLink: {
      textDecoration: "none",
      fontSize: 13,
      letterSpacing: "0.08em",
      fontWeight: 700,
      color: "#111827",
    } as React.CSSProperties,

    inspectPill: {
      textDecoration: "none",
      padding: "10px 16px",
      borderRadius: 999,
      background: "#2E3192",
      color: "#ffffff",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "0.02em",
      boxShadow: "0 10px 24px rgba(46,49,146,0.18)",
    } as React.CSSProperties,

    /* hero */
    hero: {
      padding: "64px 0 28px",
    } as React.CSSProperties,

    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.08fr 1fr",
      gap: 36,
      alignItems: "center",
    } as React.CSSProperties,

    heroLeft: {
      paddingTop: 10,
    } as React.CSSProperties,

    heroTitle: {
      margin: 0,
      fontSize: 52,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontWeight: 900,
    } as React.CSSProperties,

    heroAccent: {
      background: "linear-gradient(90deg, #2E3192 0%, #1E88E5 52%, #0EA5E9 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      display: "inline-block",
    } as React.CSSProperties,

    heroText: {
      marginTop: 16,
      fontSize: 16,
      lineHeight: 1.6,
      color: "#4b5563",
      maxWidth: 560,
    } as React.CSSProperties,

    heroButtons: {
      marginTop: 22,
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
    } as React.CSSProperties,

    heroRight: {
      display: "flex",
      justifyContent: "center",
    } as React.CSSProperties,

    heroImage: {
      width: "100%",
      maxWidth: 760,
      height: "auto",
      borderRadius: 18,
    } as React.CSSProperties,

    /* common buttons */
    btnPrimary: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      padding: "12px 18px",
      borderRadius: 10,
      background: "#2E3192",
      color: "#ffffff",
      fontWeight: 900,
      fontSize: 13,
      letterSpacing: "0.04em",
      border: "1px solid rgba(46,49,146,0.25)",
      boxShadow: "0 12px 26px rgba(46,49,146,0.20)",
      whiteSpace: "nowrap",
    } as React.CSSProperties,

    btnGhost: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      padding: "12px 18px",
      borderRadius: 10,
      background: "#ffffff",
      color: "#111827",
      fontWeight: 900,
      fontSize: 13,
      letterSpacing: "0.04em",
      border: "1px solid #e5e7eb",
      boxShadow: "0 12px 26px rgba(17,24,39,0.06)",
      whiteSpace: "nowrap",
    } as React.CSSProperties,

    /* sections */
    section: {
      padding: "22px 0 50px",
    } as React.CSSProperties,

    /* panels (full-width stretched) */
    panel: {
      width: "100%",
      background: "#f7f8fb",
      border: "1px solid #eef0f3",
      borderRadius: 20,
      padding: "30px 26px",
      marginBottom: 20,
      boxShadow: "0 20px 48px rgba(17,24,39,0.06)",
    } as React.CSSProperties,

    panelTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 18,
      marginBottom: 18,
      flexWrap: "wrap",
    } as React.CSSProperties,

    panelTopLeft: {
      minWidth: 280,
      flex: 1,
    } as React.CSSProperties,

    panelTopRight: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    } as React.CSSProperties,

    panelTitle: {
      margin: 0,
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: "-0.01em",
    } as React.CSSProperties,

    panelSubtitle: {
      margin: "8px 0 0",
      fontSize: 15,
      lineHeight: 1.6,
      color: "#4b5563",
      maxWidth: 720,
    } as React.CSSProperties,

    panelGrid3: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr 0.9fr",
      gap: 18,
      alignItems: "center",
      marginTop: 10,
    } as React.CSSProperties,

    panelGrid2: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 18,
      alignItems: "center",
      marginTop: 10,
    } as React.CSSProperties,

    panelColCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    } as React.CSSProperties,

    panelSingleCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 8,
    } as React.CSSProperties,

    productLogo: {
      width: "auto",
      height: 120,
      objectFit: "contain",
    } as React.CSSProperties,

    productLogoLarge: {
      width: "auto",
      height: 220,
      objectFit: "contain",
    } as React.CSSProperties,

    productShot: {
      width: "100%",
      maxWidth: 520,
      height: "auto",
      objectFit: "contain",
    } as React.CSSProperties,

    productShotLarge: {
      width: "100%",
      maxWidth: 620,
      height: "auto",
      objectFit: "contain",
    } as React.CSSProperties,

    dataShot: {
      width: "100%",
      maxWidth: 980,
      height: "auto",
      objectFit: "contain",
    } as React.CSSProperties,

    splitShot: {
      width: "100%",
      maxWidth: 980,
      height: "auto",
      objectFit: "contain",
    } as React.CSSProperties,

    /* Store badges */
    badgeRow: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap",
    } as React.CSSProperties,

    badgeLink: {
      display: "inline-flex",
      alignItems: "center",
    } as React.CSSProperties,

    storeBadge: {
      width: "auto",
      height: 38,
      objectFit: "contain",
    } as React.CSSProperties,

    /* DATA title row */
    dataTitleRow: {
      display: "flex",
      gap: 12,
      alignItems: "center",
    } as React.CSSProperties,

    dataLogo: {
      width: 56,
      height: 56,
      objectFit: "contain",
    } as React.CSSProperties,

    dataKicker: {
      fontSize: 12,
      letterSpacing: "0.12em",
      fontWeight: 900,
      color: "#6b7280",
      textTransform: "uppercase",
    } as React.CSSProperties,

    dataTitle: {
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: "-0.01em",
      marginTop: 2,
    } as React.CSSProperties,

    /* SplitBill header */
    splitTitleRow: {
      display: "flex",
      alignItems: "center",
    } as React.CSSProperties,

    splitLogo: {
      width: "auto",
      height: 48,
      objectFit: "contain",
    } as React.CSSProperties,

    /* services */
    servicesSection: {
      padding: "34px 0 54px",
    } as React.CSSProperties,

    servicesCard: {
      background: "#ffffff",
      border: "1px solid #eef0f3",
      borderRadius: 22,
      padding: "34px 28px",
      boxShadow: "0 20px 48px rgba(17,24,39,0.06)",
    } as React.CSSProperties,

    servicesTitle: {
      margin: 0,
      fontSize: 30,
      fontWeight: 950,
      letterSpacing: "-0.02em",
    } as React.CSSProperties,

    servicesIntro: {
      margin: "10px 0 0",
      color: "#4b5563",
      fontSize: 15,
      lineHeight: 1.7,
      maxWidth: 920,
    } as React.CSSProperties,

    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 16,
      marginTop: 20,
    } as React.CSSProperties,

    serviceItem: {
      background: "#f7f8fb",
      border: "1px solid #eef0f3",
      borderRadius: 16,
      padding: "18px 16px",
    } as React.CSSProperties,

    serviceTitle: {
      fontWeight: 900,
      fontSize: 15,
      color: "#111827",
      marginBottom: 6,
    } as React.CSSProperties,

    serviceBody: {
      color: "#4b5563",
      fontSize: 14,
      lineHeight: 1.65,
    } as React.CSSProperties,

    /* contact */
    contactSection: {
      padding: "44px 0 0",
      background: "#ffffff",
    } as React.CSSProperties,

    contactCard: {
      background: "#f7f8fb",
      border: "1px solid #eef0f3",
      borderRadius: 22,
      padding: "28px 22px",
      boxShadow: "0 20px 48px rgba(17,24,39,0.06)",
    } as React.CSSProperties,

    contactHeader: {
      textAlign: "center",
      marginBottom: 18,
    } as React.CSSProperties,

    contactTitle: {
      margin: 0,
      fontSize: 28,
      fontWeight: 950,
    } as React.CSSProperties,

    contactSubtitle: {
      margin: "8px 0 0",
      color: "#6b7280",
      fontSize: 14,
    } as React.CSSProperties,

    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1.25fr 0.75fr",
      gap: 18,
      alignItems: "start",
      marginTop: 12,
    } as React.CSSProperties,

    form: {
      background: "#ffffff",
      border: "1px solid #eef0f3",
      borderRadius: 18,
      padding: "16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 0,
    } as React.CSSProperties,

    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
    } as React.CSSProperties,

    input: {
      width: "100%",
      borderRadius: 12,
      border: "1px solid #e5e7eb",
      padding: "12px 12px",
      fontSize: 14,
      outline: "none",
      background: "#ffffff",
    } as React.CSSProperties,

    textareaShort: {
      width: "100%",
      borderRadius: 12,
      border: "1px solid #e5e7eb",
      padding: "12px 12px",
      fontSize: 14,
      outline: "none",
      background: "#ffffff",
      resize: "vertical",
      minHeight: 110,
      maxHeight: 160,
    } as React.CSSProperties,

    honeypot: {
      position: "absolute",
      left: "-10000px",
      top: "auto",
      width: 1,
      height: 1,
      overflow: "hidden",
    } as React.CSSProperties,

    formActions: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 2,
    } as React.CSSProperties,

    statusText: {
      fontSize: 13,
      fontWeight: 700,
    } as React.CSSProperties,

    contactInfo: {
      background: "#ffffff",
      border: "1px solid #eef0f3",
      borderRadius: 18,
      padding: "16px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
    } as React.CSSProperties,

    infoRow: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
    } as React.CSSProperties,

    iconCircle: {
      width: 34,
      height: 34,
      borderRadius: 999,
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      boxShadow: "0 10px 22px rgba(17,24,39,0.05)",
    } as React.CSSProperties,

    infoStrong: {
      fontWeight: 900,
      fontSize: 14,
      color: "#111827",
    } as React.CSSProperties,

    emailStack: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      paddingTop: 2,
    } as React.CSSProperties,

    /* footer */
    footer: {
      marginTop: 22,
      borderTop: "1px solid #eef0f3",
      padding: "18px 0 26px",
    } as React.CSSProperties,

    footerInner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      maxWidth: MAX_WIDE,
      margin: "0 auto",
      padding: "0 20px",
    } as React.CSSProperties,

    footerLeft: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap",
    } as React.CSSProperties,

    footerCopy: {
      fontSize: 13,
      fontWeight: 800,
      color: "#374151",
    } as React.CSSProperties,

    footerLinks: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap",
    } as React.CSSProperties,

    footerLink: {
      fontSize: 13,
      fontWeight: 800,
      color: "#374151",
      textDecoration: "none",
    } as React.CSSProperties,

    footerDot: {
      color: "#9ca3af",
      fontWeight: 900,
    } as React.CSSProperties,

    footerRight: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
    } as React.CSSProperties,

    iconLink: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
    } as React.CSSProperties,

    footerIcon: {
      width: 18,
      height: 18,
      objectFit: "contain",
    } as React.CSSProperties,

    footerDivider: {
      width: 1,
      height: 18,
      background: "#e5e7eb",
      margin: "0 6px",
    } as React.CSSProperties,

    storeBadgeFooter: {
      width: "auto",
      height: 28,
      objectFit: "contain",
    } as React.CSSProperties,
  };
}
