// src/app/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import macbookMain from "@/assets/images/macbookmain.png";

import inspectLogo from "@/assets/images/inspectlogo.png";
import inspectMacbook from "@/assets/images/inspectmacbook.png";
import inspectIphone from "@/assets/images/inspectiphone.png";

import quickInspectIphone from "@/assets/images/quickinspectiphone.png";
import quickIcon from "@/assets/images/quickicon.png";

import airoflairDataLogo from "@/assets/images/Airoflairdatalogo.png";
import dataShot from "@/assets/images/data.png";

import splitBillLogo from "@/assets/images/splitbilllogo.png";
import splitBillShot from "@/assets/images/splitbill.png";

import appleStore from "@/assets/images/apple-store.svg";
import googlePlay from "@/assets/images/google-play.svg";

import whatsappIcon from "@/assets/images/whatsapp.svg";

function IconMail({ size = 18 }: { size?: number }) {
  // Designed to visually match the WhatsApp icon size/weight at 18x18
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Outer rounded square for consistent icon presence */}
      <path
        d="M4.25 7.25c0-1.66 1.34-3 3-3h9.5c1.66 0 3 1.34 3 3v9.5c0 1.66-1.34 3-3 3h-9.5c-1.66 0-3-1.34-3-3v-9.5Z"
        stroke="#0B1220"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Envelope */}
      <path
        d="M7.1 8.2h9.8c.6 0 1.1.5 1.1 1.1v.25c0 .36-.18.7-.48.9L12.6 13.8a1.05 1.05 0 0 1-1.2 0L6.48 10.45A1.1 1.1 0 0 1 6 9.55V9.3c0-.6.5-1.1 1.1-1.1Z"
        stroke="#2A2F8F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6.4 10.2 10.9 13.4c.7.5 1.6.5 2.3 0l4.5-3.2"
        stroke="#2A2F8F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const quickInspectLinks = useMemo(
    () => ({
      apple: "https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606",
      google: "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
    }),
    []
  );

  const dataLinks = useMemo(
    () => ({
      apple: "https://apps.apple.com/us/app/airoflair-data/id6749357700",
      google: "https://play.google.com/store/apps/details?id=com.airoflair.data",
    }),
    []
  );

  // This must be set in Azure SWA Configuration:
  // NEXT_PUBLIC_CONTACT_ENDPOINT = <Logic App HTTP trigger URL>
  const contactEndpoint = (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "").trim();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      if (!contactEndpoint) {
        throw new Error(
          "Contact endpoint is not configured. Set NEXT_PUBLIC_CONTACT_ENDPOINT in Azure Static Web Apps Configuration."
        );
      }

      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // must match the schema you added in the Logic App trigger
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Failed to send message (HTTP ${res.status}).`);
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send message.");
    }
  }

  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="heroGrid">
            <div className="heroCopy">
              <h1 className="h1">
                All your inspection
                <br />
                <span className="gradientText">reporting &amp; data</span>
                <br />
                ready to use
              </h1>

              <p className="p" style={{ maxWidth: 520 }}>
                Transform the way your team captures, compiles and completes inspection reports faster than ever.
                <br />
                Available on iOS and Android
              </p>

              <div className="heroActions">
                <a className="btn btnPrimary" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Larger hero image */}
            <div
              className="heroImageWrap"
              style={{
                justifySelf: "end",
                width: "100%",
                maxWidth: 980,
              }}
            >
              <div
                style={{
                  width: "115%",
                  marginLeft: "auto",
                }}
              >
                <Image
                  src={macbookMain}
                  alt="Airoflair platform preview"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSPECT STRIP - full width, no rounded edges */}
      <section id="products" className="strip">
        <div className="container">
          <div className="productGrid">
            <div>
              <h2 className="productTitle">Inspect</h2>
              <p className="productDesc">
                Use powerful, flexible templates to create and deliver inspection reports faster than ever
              </p>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.9fr 1.2fr 0.9fr",
                  gap: 22,
                  alignItems: "center",
                }}
              >
                <Image src={inspectLogo} alt="Airoflair Inspect" style={{ width: "100%", height: "auto", maxWidth: 320 }} />
                <Image
                  src={inspectMacbook}
                  alt="Inspect web"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 520,
                    justifySelf: "center",
                  }}
                />
                <Image
                  src={inspectIphone}
                  alt="Inspect mobile"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 260,
                    justifySelf: "end",
                  }}
                />
              </div>
            </div>

            <div className="productRight">
              <a className="btn btnPrimary" href="https://inspect.airoflair.com" target="_blank" rel="noreferrer">
                Go to Inspect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INSPECT STRIP - full width, no rounded edges */}
      <section className="stripWhite">
        <div className="container">
          <div className="productGrid">
            <div>
              <h2 className="productTitle">Quick Inspect</h2>
              <p className="productDesc">
                A fast, offline-ready inspection app for quick visual surveys and photo-rich reports
              </p>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: 28,
                  alignItems: "center",
                }}
              >
                <Image
                  src={quickInspectIphone}
                  alt="Airoflair Quick Inspect"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 520,
                  }}
                />
                <Image
                  src={quickIcon}
                  alt="Quick Inspect icon"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 260,
                    justifySelf: "end",
                  }}
                />
              </div>
            </div>

            <div className="productRight">
              <div className="badgeRow">
                <a href={quickInspectLinks.apple} target="_blank" rel="noreferrer" aria-label="Quick Inspect on App Store">
                  <Image src={appleStore} alt="App Store" width={140} height={42} style={{ height: 42, width: "auto" }} />
                </a>
                <a href={quickInspectLinks.google} target="_blank" rel="noreferrer" aria-label="Quick Inspect on Google Play">
                  <Image src={googlePlay} alt="Google Play" width={140} height={42} style={{ height: 42, width: "auto" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA STRIP - full width, no rounded edges */}
      <section className="strip">
        <div className="container">
          <div className="productGrid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image src={airoflairDataLogo} alt="Airoflair Data" style={{ width: 60, height: "auto" }} />
                <div>
                  <h2 className="productTitle" style={{ marginBottom: 0 }}>
                    DATA
                  </h2>
                  <p className="productDesc">Engineering calculators &amp; reference tools</p>
                </div>
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <Image
                src={dataShot}
                alt="Airoflair Data screens"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 820,
                  margin: "0 auto",
                }}
              />
            </div>

            <div className="productRight">
              <div className="badgeRow">
                <a href={dataLinks.apple} target="_blank" rel="noreferrer" aria-label="Airoflair Data on App Store">
                  <Image src={appleStore} alt="App Store" width={140} height={42} style={{ height: 42, width: "auto" }} />
                </a>
                <a href={dataLinks.google} target="_blank" rel="noreferrer" aria-label="Airoflair Data on Google Play">
                  <Image src={googlePlay} alt="Google Play" width={140} height={42} style={{ height: 42, width: "auto" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPLITBILL STRIP - full width, no rounded edges */}
      <section className="stripWhite">
        <div className="container">
          <div className="productGrid">
            <div>
              <Image src={splitBillLogo} alt="SplitBill" style={{ width: 170, height: "auto", marginBottom: 10 }} />
              <p className="productDesc">Smart bill splitting for group events, trips and shared expenses</p>
            </div>

            <div style={{ width: "100%" }}>
              <Image
                src={splitBillShot}
                alt="SplitBill preview"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 760,
                  margin: "0 auto",
                }}
              />
            </div>

            <div className="productRight">
              <a className="btn btnPrimary" href="https://splitbill.airoflair.com" target="_blank" rel="noreferrer">
                Go to Split Bill
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / FEATURES */}
      <section id="services" className="strip">
        <div className="container">
          <div className="featuresWrap panel">
            <div className="featuresInner">
              <div className="featuresHeader">
                <h2 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>Transform your inspections into impactful reports.</h2>
                <p className="p" style={{ maxWidth: 900, marginTop: 10 }}>
                  Airoflair turns your inspections into clear, secure reporting in real time. Data Collection made faster and
                  easier.
                </p>
              </div>

              <div className="featuresGrid">
                <div className="featureCard">
                  <h3>Inspection reporting, streamlined</h3>
                  <p>
                    Capture observations, photos and findings fast then generate professional reports with consistent formatting
                    across teams and projects.
                  </p>
                </div>

                <div className="featureCard">
                  <h3>White-labeled portals &amp; apps</h3>
                  <p>
                    Rebrand the portal and mobile apps with your business name, logo and colours for a seamless, professional
                    experience.
                  </p>
                </div>

                <div className="featureCard">
                  <h3>Custom workflows &amp; features</h3>
                  <p>
                    Tailor forms, templates and data fields to suit your operations from walkdowns to full campaign reporting.
                  </p>
                </div>

                <div className="featureCard">
                  <h3>Hosted &amp; managed</h3>
                  <p>Focus on inspections while we handle hosting, security and support. Built for reliability and scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="stripWhite">
        <div className="container">
          <div className="contactWrap">
            <div className="panel contactPanel">
              <div className="contactHeader">
                <h2>Contact Us</h2>
                <p>Please fill in the form below and we will get back to you.</p>
              </div>

              <div className="contactGrid">
                <form onSubmit={onSubmit}>
                  <div className="formGrid">
                    <input
                      className="input"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      required
                    />
                    <input
                      className="input"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      required
                    />

                    <input
                      className="input"
                      placeholder="Contact No."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                    <input
                      className="input"
                      placeholder="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />

                    <div className="formGridFull">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      />
                    </div>

                    <div
                      className="formGridFull"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexWrap: "wrap",
                        marginTop: 4,
                      }}
                    >
                      <button
                        type="submit"
                        className="btn btnPrimary"
                        disabled={status === "sending"}
                        style={{ minWidth: 260 }}
                      >
                        {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                      </button>

                      {status === "success" && (
                        <span className="small" style={{ color: "#1f7a3b", fontWeight: 700 }}>
                          Message sent successfully.
                        </span>
                      )}

                      {status === "error" && (
                        <span className="small" style={{ color: "#b42318", fontWeight: 700 }}>
                          {errorMsg || "Failed to send. Please try again."}
                        </span>
                      )}
                    </div>
                  </div>
                </form>

                <aside className="contactRight">
                  <div className="contactRightInner">
                    <div className="infoRow">
                      <Image src={whatsappIcon} alt="WhatsApp" width={18} height={18} style={{ display: "block" }} />
                      <span style={{ color: "#0b1220", fontWeight: 800 }}>+27 64 762 7501</span>
                    </div>

                    <div className="infoRow">
                      <IconMail size={18} />
                      <div style={{ display: "grid", gap: 2 }}>
                        <span style={{ color: "#0b1220", fontWeight: 800 }}>info@airoflair.com</span>
                        <span style={{ color: "#0b1220", fontWeight: 800 }}>support@airoflair.com</span>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
