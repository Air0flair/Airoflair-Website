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
import mailIcon from "@/assets/images/mail.svg";

type Status = "idle" | "sending" | "success" | "error";

export default function HomePage() {
  const [status, setStatus] = useState<Status>("idle");
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
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <h1 className="heroTitle">
              All your inspection
              <br />
              <span className="heroAccent">reporting &amp; data</span>
              <br />
              ready to use
            </h1>

            <p className="heroSub">
              Transform the way your team captures, compiles and completes inspection
              reports faster than ever.
              <br />
              Available on iOS and Android
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="#contact">
                Contact Us
              </a>
            </div>
          </div>

          <div className="heroVisual">
            <Image
              src={macbookMain}
              alt="Airoflair platform preview"
              priority
              className="heroImage"
            />
          </div>
        </div>
      </section>

      {/* INSPECT (FULL-WIDTH STRIP, NO ROUNDED EDGES) */}
      <section id="products" className="strip stripTint">
        <div className="container">
          <div className="stripTop">
            <div className="stripLeft">
              <h2 className="stripTitle centerOnMobile">Inspect</h2>
              <p className="stripDesc centerOnMobile">
                Use powerful, flexible templates to create and deliver inspection reports faster
                than ever
              </p>
            </div>

            <div className="stripRight">
              <a
                className="btnPrimary"
                href="https://inspect.airoflair.com"
                target="_blank"
                rel="noreferrer"
              >
                Inspect Login
              </a>
            </div>
          </div>

          <div className="media3">
            <div className="media3Item media3Logo">
              <Image
                src={inspectLogo}
                alt="Airoflair Inspect"
                className="imgContain imgMax"
              />
            </div>

            <div className="media3Item media3Mac">
              <Image
                src={inspectMacbook}
                alt="Inspect web preview"
                className="imgContain imgMax"
              />
            </div>

            <div className="media3Item media3Phone">
              <Image
                src={inspectIphone}
                alt="Inspect mobile preview"
                className="imgContain imgMax"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INSPECT (FULL-WIDTH STRIP, NO ROUNDED EDGES) */}
      <section className="strip stripWhite">
        <div className="container">
          <div className="stripTop">
            <div className="stripLeft">
              <h2 className="stripTitle centerOnMobile">Quick Inspect</h2>
              <p className="stripDesc centerOnMobile">
                A fast, offline-ready inspection app for quick visual surveys and photo-rich
                reports
              </p>
            </div>

            <div className="stripRight">
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
                    width={132}
                    height={40}
                    className="storeBadge"
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
                    width={132}
                    height={40}
                    className="storeBadge"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="media2">
            <div className="media2Left">
              <Image
                src={quickInspectIphone}
                alt="Airoflair Quick Inspect"
                className="imgContain imgMax"
              />
            </div>
            <div className="media2Right">
              <Image
                src={quickIcon}
                alt="Quick Inspect icon"
                className="imgContain imgMax"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DATA (FULL-WIDTH STRIP, NO ROUNDED EDGES) */}
      <section className="strip stripTint">
        <div className="container">
          <div className="stripTop">
            <div className="stripLeft">
              <div className="dataHeading centerOnMobile">
                <Image
                  src={airoflairDataLogo}
                  alt="Airoflair Data"
                  className="dataLogo"
                />
                <div>
                  <div className="dataKicker">AIROFLAIR</div>
                  <h2 className="stripTitle" style={{ margin: 0 }}>
                    DATA
                  </h2>
                  <p className="stripDesc" style={{ marginTop: 6 }}>
                    Engineering calculators &amp; reference tools
                  </p>
                </div>
              </div>
            </div>

            <div className="stripRight">
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
                    width={132}
                    height={40}
                    className="storeBadge"
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
                    width={132}
                    height={40}
                    className="storeBadge"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mediaCenter">
            <Image
              src={dataShot}
              alt="Airoflair Data screens"
              className="imgContain imgMax"
            />
          </div>
        </div>
      </section>

      {/* SPLITBILL (FULL-WIDTH STRIP, NO ROUNDED EDGES) */}
      <section className="strip stripWhite">
        <div className="container">
          <div className="stripTop splitTop">
            <div className="stripLeft">
              <Image
                src={splitBillLogo}
                alt="SplitBill"
                className="splitLogo"
              />
              <p className="stripDesc centerOnMobile" style={{ marginTop: 10 }}>
                Smart bill splitting for group events, trips and shared expenses
              </p>
            </div>

            <div className="stripRight">
              <a
                className="btnPrimary"
                href="https://splitbill.airoflair.com"
                target="_blank"
                rel="noreferrer"
              >
                Go to Split Bill
              </a>
            </div>
          </div>

          <div className="mediaCenter">
            <Image
              src={splitBillShot}
              alt="SplitBill preview"
              className="imgContain imgMax"
            />
          </div>
        </div>
      </section>

      {/* SERVICES / FEATURES */}
      <section id="services" className="strip stripTint">
        <div className="container">
          <div className="features">
            <h2 className="featuresTitle">
              Transform your inspections into impactful reports.
            </h2>
            <p className="featuresSub">
              Airoflair Inspect turns field capture into clear, secure, and client-ready reporting — in real
              time. Designed to adapt to your workflow, not the other way around.
            </p>

            <div className="featuresGrid">
              <div className="featureCard">
                <h3>Inspection reporting, streamlined</h3>
                <p>
                  Capture observations, photos and findings fast — then generate professional reports with
                  consistent formatting across teams and projects.
                </p>
              </div>

              <div className="featureCard">
                <h3>White-labeled portals &amp; apps</h3>
                <p>
                  Rebrand the portal and mobile apps with your business name, logo and colours for a seamless,
                  professional experience.
                </p>
              </div>

              <div className="featureCard">
                <h3>Custom workflows &amp; features</h3>
                <p>
                  Tailor forms, templates and data fields to suit your operations — from walkdowns to full
                  campaign reporting.
                </p>
              </div>

              <div className="featureCard">
                <h3>Hosted &amp; managed</h3>
                <p>
                  Focus on inspections while we handle hosting, security and support. Built for reliability and
                  scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="strip stripWhite">
        <div className="container">
          <div className="contactPanel">
            <div className="contactHeader">
              <h2>Contact Us</h2>
              <p>Please fill in the form below and we will get back to you.</p>
            </div>

            <div className="contactGrid">
              <form onSubmit={onSubmit} className="contactForm">
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

                  <textarea
                    className="textarea"
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />

                  <div className="formBottom">
                    <button
                      type="submit"
                      className="btnPrimary"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                    </button>

                    {status === "success" && (
                      <span className="statusOk">Message sent successfully.</span>
                    )}

                    {status === "error" && (
                      <span className="statusErr">
                        {errorMsg || "Failed to send. Please try again."}
                      </span>
                    )}
                  </div>
                </div>
              </form>

              <aside className="contactInfo">
                <div className="infoRow">
                  <Image
                    src={whatsappIcon}
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="infoIcon"
                  />
                  <span className="infoText">+27 64 762 7501</span>
                </div>

                <div className="infoRow">
                  <div className="emailStack">
                    <span className="infoText">info@airoflair.com</span>
                    <div className="mailMid">
                      <Image
                        src={mailIcon}
                        alt="Email"
                        width={22}
                        height={22}
                        className="infoIcon"
                      />
                    </div>
                    <span className="infoText">support@airoflair.com</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE-LOCAL STYLES (keeps layout stable even if global CSS gets messy) */}
      <style jsx>{`
        .page {
          background: #ffffff;
          color: #0b1220;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* HERO */
        .hero {
          padding: 72px 0 56px;
          background: #ffffff;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .heroTitle {
          margin: 0;
          font-size: 52px;
          line-height: 1.06;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .heroAccent {
          background: linear-gradient(90deg, #2a2f8f 0%, #1a6bff 45%, #00b3ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          padding-bottom: 4px; /* prevents “cut off” look */
        }

        .heroSub {
          margin: 18px 0 0;
          max-width: 540px;
          color: #3b4557;
          font-size: 15px;
          line-height: 1.65;
        }

        .heroActions {
          margin-top: 22px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btnPrimary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 44px;
          padding: 0 18px;
          border-radius: 10px;
          border: 1px solid rgba(42, 47, 143, 0.25);
          background: #2a2f8f;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(42, 47, 143, 0.22);
          cursor: pointer;
        }

        .btnPrimary:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          box-shadow: none;
        }

        .heroVisual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heroImage {
          width: 100%;
          height: auto;
          max-width: 640px;
        }

        /* STRIPS */
        .strip {
          padding: 56px 0;
          width: 100%;
        }

        .stripTint {
          background: #f7f9ff;
        }

        .stripWhite {
          background: #ffffff;
        }

        .stripTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 26px;
        }

        .stripLeft {
          min-width: 0;
        }

        .stripRight {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stripTitle {
          margin: 0;
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .stripDesc {
          margin: 10px 0 0;
          color: #3b4557;
          font-size: 14px;
          line-height: 1.6;
          max-width: 640px;
        }

        /* MEDIA LAYOUTS */
        .imgContain {
          width: 100%;
          height: auto;
        }
        .imgMax {
          max-width: 100%;
        }

        .media3 {
          display: grid;
          grid-template-columns: 1fr 1.4fr 0.9fr;
          gap: 26px;
          align-items: center;
        }

        .media3Logo :global(img) {
          max-width: 360px;
          margin: 0 auto;
        }

        .media3Mac :global(img) {
          max-width: 760px;
          margin: 0 auto;
        }

        .media3Phone :global(img) {
          max-width: 320px;
          margin: 0 auto;
        }

        .media2 {
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 26px;
          align-items: center;
        }

        .media2Left :global(img) {
          max-width: 700px;
          margin: 0 auto;
        }

        .media2Right :global(img) {
          max-width: 320px;
          margin: 0 auto;
        }

        .mediaCenter {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mediaCenter :global(img) {
          max-width: 980px;
          width: 100%;
          height: auto;
        }

        /* DATA HEADING */
        .dataHeading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .dataLogo {
          width: 64px;
          height: auto;
        }

        .dataKicker {
          font-size: 12px;
          letter-spacing: 0.16em;
          font-weight: 900;
          color: #4b5565;
        }

        /* SPLITBILL */
        .splitTop {
          align-items: center;
        }

        .splitLogo {
          width: 170px;
          height: auto;
          display: block;
        }

        /* STORE BADGES + ROW */
        .badgeRow {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .storeBadge {
          height: 40px;
          width: auto;
          display: block;
        }

        /* FEATURES */
        .features {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 18px;
          padding: 34px 28px;
        }

        .featuresTitle {
          margin: 0;
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -0.02em;
          text-align: left;
        }

        .featuresSub {
          margin: 12px 0 0;
          color: #3b4557;
          line-height: 1.7;
          max-width: 980px;
        }

        .featuresGrid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .featureCard {
          background: #f7f9ff;
          border: 1px solid rgba(42, 47, 143, 0.08);
          border-radius: 14px;
          padding: 18px 18px;
        }

        .featureCard h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 900;
        }

        .featureCard p {
          margin: 8px 0 0;
          color: #3b4557;
          line-height: 1.6;
          font-size: 13px;
        }

        /* CONTACT */
        .contactPanel {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 28px 24px;
          background: #ffffff;
        }

        .contactHeader h2 {
          margin: 0;
          font-size: 26px;
          font-weight: 900;
          text-align: left; /* requested left aligned */
        }

        .contactHeader p {
          margin: 8px 0 0;
          color: #3b4557;
          text-align: left; /* requested left aligned */
        }

        .contactGrid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          align-items: start;
        }

        .contactForm {
          min-width: 0;
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .input {
          height: 44px;
          padding: 0 14px;
          border-radius: 10px;
          border: 1px solid rgba(15, 23, 42, 0.16);
          outline: none;
          font-size: 14px;
          width: 100%;
        }

        .textarea {
          grid-column: 1 / -1;
          height: 120px; /* shortened as requested */
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(15, 23, 42, 0.16);
          outline: none;
          font-size: 14px;
          width: 100%;
          resize: vertical;
        }

        .formBottom {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 2px;
        }

        .statusOk {
          font-weight: 800;
          color: #1f7a3b;
          font-size: 13px;
        }

        .statusErr {
          font-weight: 800;
          color: #b42318;
          font-size: 13px;
        }

        .contactInfo {
          border-left: 1px solid rgba(15, 23, 42, 0.08);
          padding-left: 18px;
          display: grid;
          gap: 14px;
        }

        .infoRow {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .infoIcon {
          display: block;
        }

        .infoText {
          font-weight: 900;
          color: #0b1220;
        }

        .emailStack {
          display: grid;
          justify-items: start;
          gap: 6px;
        }

        .mailMid {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 22px;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .heroGrid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .hero {
            padding: 56px 0 44px;
          }

          .heroTitle {
            font-size: 44px;
          }

          .stripTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .stripRight {
            justify-content: flex-start;
          }

          .media3 {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .media2 {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .featuresGrid {
            grid-template-columns: 1fr;
          }

          .contactGrid {
            grid-template-columns: 1fr;
          }

          .contactInfo {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(15, 23, 42, 0.08);
            padding-top: 14px;
          }

          .centerOnMobile {
            text-align: center;
          }

          .dataHeading.centerOnMobile {
            justify-content: center;
          }

          .stripLeft .stripDesc.centerOnMobile {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 560px) {
          .heroTitle {
            font-size: 38px;
          }

          .formGrid {
            grid-template-columns: 1fr;
          }

          .storeBadge {
            height: 36px;
          }
        }
      `}</style>
    </main>
  );
}
