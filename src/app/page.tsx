// src/app/page.tsx

"use client";

import { useMemo, useState } from "react";
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

function IconWhatsApp({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 3C9.1 3 3.5 8.5 3.5 15.3c0 2.6.8 5 2.2 7.1L4 29l6.9-1.8c2 1.1 4.3 1.7 6.8 1.7 6.9 0 12.5-5.5 12.5-12.3C30.2 8.5 22.9 3 16 3Z"
        fill="#EAF2FF"
      />
      <path
        d="M16 5.5c5.6 0 10.2 4.5 10.2 10.1 0 5.6-4.6 10.1-10.2 10.1-2.2 0-4.3-.7-6-1.8l-3.9 1 1-3.7c-1.2-1.7-1.9-3.8-1.9-6 0-5.6 4.6-10.1 10.2-10.1Z"
        fill="#2A2F8F"
        opacity="0.10"
      />
      <path
        d="M13.4 11.7c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l1.1 2.6c.1.3.1.5-.1.7l-.8 1c-.1.2-.1.4 0 .6.7 1.2 1.8 2.3 3.1 3 .2.1.4.1.6 0l1-.7c.2-.1.5-.2.8-.1l2.7 1c.3.1.4.3.4.5 0 .7-.3 1.6-.9 2-.7.5-1.6.7-2.4.5-1.6-.4-3.3-1.3-5-2.9-1.6-1.5-2.8-3.4-3.2-4.9-.2-.8 0-1.7.5-2.4.4-.6 1.2-.9 1.7-1Z"
        fill="#0B1220"
        opacity="0.75"
      />
    </svg>
  );
}

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.8c0-1 0.8-1.8 1.8-1.8h12.4C19.2 5 20 5.8 20 6.8v10.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V6.8Z"
        stroke="#0B1220"
        strokeWidth="1.6"
      />
      <path
        d="M5.5 7.5 12 12l6.5-4.5"
        stroke="#2A2F8F"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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
      google:
        "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to send message.");
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
                Transform the way your team captures, compiles and completes inspection
                reports faster than ever.
                <br />
                Available on iOS and Android
              </p>

              <div className="heroActions">
                {/* Remove View Products button as requested */}
                <a className="btn btnPrimary" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="heroImageWrap">
              <Image
                src={macbookMain}
                alt="Airoflair platform preview"
                priority
                style={{ width: "100%", height: "auto" }}
              />
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
                Use powerful, flexible templates to create and deliver inspection reports
                faster than ever
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
                <Image
                  src={inspectLogo}
                  alt="Airoflair Inspect"
                  style={{ width: "100%", height: "auto", maxWidth: 320 }}
                />
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
              <a
                className="btn btnPrimary"
                href="https://inspect.airoflair.com"
                target="_blank"
                rel="noreferrer"
              >
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
                A fast, offline-ready inspection app for quick visual surveys and
                photo-rich reports
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
                <a
                  href={quickInspectLinks.apple}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Quick Inspect on App Store"
                >
                  <Image
                    src={appleStore}
                    alt="App Store"
                    width={140}
                    height={42}
                    style={{ height: 42, width: "auto" }}
                  />
                </a>
                <a
                  href={quickInspectLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Quick Inspect on Google Play"
                >
                  <Image
                    src={googlePlay}
                    alt="Google Play"
                    width={140}
                    height={42}
                    style={{ height: 42, width: "auto" }}
                  />
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
                <Image
                  src={airoflairDataLogo}
                  alt="Airoflair Data"
                  style={{ width: 60, height: "auto" }}
                />
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
                <a
                  href={dataLinks.apple}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Airoflair Data on App Store"
                >
                  <Image
                    src={appleStore}
                    alt="App Store"
                    width={140}
                    height={42}
                    style={{ height: 42, width: "auto" }}
                  />
                </a>
                <a
                  href={dataLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Airoflair Data on Google Play"
                >
                  <Image
                    src={googlePlay}
                    alt="Google Play"
                    width={140}
                    height={42}
                    style={{ height: 42, width: "auto" }}
                  />
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
              <Image
                src={splitBillLogo}
                alt="SplitBill"
                style={{ width: 170, height: "auto", marginBottom: 10 }}
              />
              <p className="productDesc">
                Smart bill splitting for group events, trips and shared expenses
              </p>
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
              <a
                className="btn btnPrimary"
                href="https://splitbill.airoflair.com"
                target="_blank"
                rel="noreferrer"
              >
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
                <h2 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>
                  Transform your inspections into impactful reports.
                </h2>
                <p className="p" style={{ maxWidth: 900, marginTop: 10 }}>
                  Airoflair turns your inspections into clear, secure reporting in real time.
                  Data Collection made faster and easier.
                </p>
              </div>

              <div className="featuresGrid">
                <div className="featureCard">
                  <h3>Inspection reporting, streamlined</h3>
                  <p>
                    Capture observations, photos and findings fast then generate professional
                    reports with consistent formatting across teams and projects.
                  </p>
                </div>

                <div className="featureCard">
                  <h3>White-labeled portals &amp; apps</h3>
                  <p>
                    Rebrand the portal and mobile apps with your business name, logo and colours
                    for a seamless, professional experience.
                  </p>
                </div>

                <div className="featureCard">
                  <h3>Custom workflows &amp; features</h3>
                  <p>
                    Tailor forms, templates and data fields to suit your operations from
                    walkdowns to full campaign reporting.
                  </p>
                </div>

                <div className="featureCard">
                  <h3>Hosted &amp; managed</h3>
                  <p>
                    Focus on inspections while we handle hosting, security and support. Built
                    for reliability and scale.
                  </p>
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
                      <IconWhatsApp />
                      <span style={{ color: "#0b1220", fontWeight: 800 }}>
                        +27 64 762 7501
                      </span>
                    </div>

                    <div className="infoRow">
                      <IconMail />
                      <div style={{ display: "grid", gap: 2 }}>
                        <span style={{ color: "#0b1220", fontWeight: 800 }}>info@airoflair.com</span>
                        <span style={{ color: "#0b1220", fontWeight: 800 }}>support@airoflair.com</span>
                      </div>
                    </div>

                    {/* Remove store + social links from contact section as requested */}
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
