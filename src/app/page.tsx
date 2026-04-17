"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import inspectLogo from "@/assets/images/inspectlogo.png";
import inspectIcon from "@/assets/images/inspecticon.png";
import inspectShot1 from "@/assets/images/Airoflair Inspect 1.png";
import inspectShot2 from "@/assets/images/Airoflair Inspect 2.png";
import inspectShot3 from "@/assets/images/Airoflair Inspect 3.png";
import inspectShot4 from "@/assets/images/Airoflair Inspect 4.png";

import quickIcon from "@/assets/images/quickicon.png";
import quickShot1 from "@/assets/images/Airoflair Quick Inspect 1.png";
import quickShot2 from "@/assets/images/Airoflair Quick Inspect 2.png";

import dataLogo from "@/assets/images/Airoflairdatalogo.png";
import dataShot1 from "@/assets/images/Airoflair Data 1.png";
import dataShot2 from "@/assets/images/Airoflair Data 2.png";
import dataShot3 from "@/assets/images/Airoflair Data 3.png";

import splitBillLogo from "@/assets/images/splitbilllogo.png";
import splitBillShot from "@/assets/images/splitbill.png";

import appleStore from "@/assets/images/apple-store.svg";
import googlePlay from "@/assets/images/google-play.svg";

import whatsappIcon from "@/assets/images/whatsapp.svg";
import mailIcon from "@/assets/images/mail.svg";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
    __RECAPTCHA_SITE_KEY__?: string;
  }
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

  const appLinks = useMemo(
    () => ({
      inspect: {
        apple: "https://apps.apple.com/us/app/airoflair-inspect/id6443913558",
        google: "https://play.google.com/store/apps/details?id=com.inspectmobile",
      },
      quickInspect: {
        apple: "https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606",
        google: "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
      },
      data: {
        apple: "https://apps.apple.com/us/app/airoflair-data/id6749357700",
        google: "https://play.google.com/store/apps/details?id=com.airoflair.data",
      },
      splitBill: {
        web: "https://splitbill.airoflair.com",
      },
    }),
    []
  );

  const contactEndpoint = (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "").trim();

  function getSiteKey() {
    return (typeof window !== "undefined" ? window.__RECAPTCHA_SITE_KEY__ || "" : "").trim();
  }

  async function getRecaptchaToken(action: string) {
    const siteKey = getSiteKey();
    if (!siteKey) {
      throw new Error(
        "reCAPTCHA is not configured. Ensure NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set in Azure Static Web Apps → Environment variables (Production) and redeploy."
      );
    }

    const g = window.grecaptcha;
    if (!g) {
      throw new Error("reCAPTCHA failed to load. Please refresh and try again.");
    }

    const token = await new Promise<string>((resolve, reject) => {
      try {
        g.ready(() => {
          g.execute(siteKey, { action }).then(resolve).catch(reject);
        });
      } catch (e) {
        reject(e);
      }
    });

    if (!token) {
      throw new Error("reCAPTCHA token was empty. Please try again.");
    }

    return token;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      if (!contactEndpoint) {
        throw new Error(
          "Contact endpoint is not configured. Set NEXT_PUBLIC_CONTACT_ENDPOINT in Azure Static Web Apps → Environment variables (Production) and redeploy."
        );
      }

      const recaptchaAction = "contact";
      const recaptchaToken = await getRecaptchaToken(recaptchaAction);

      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          message: form.message,
          recaptchaToken,
          recaptchaAction,
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
      <section className="heroSection">
        <div className="container">
          <div className="heroShell">
            <div className="heroGrid">
              <div className="heroCopy">
                <h1 className="h1 heroMainTitle">
                  Engineering Data Systems
                  <br />
                  <span className="gradientText">
                    Making Inspection Reporting Faster, Simpler, and More Organized.
                  </span>
                </h1>

                <p className="p heroLead">
                  Airoflair develops clean, practical mobile tools for inspection teams, engineers and
                  field professionals who need reliable workflows, structured reporting and polished output.
                </p>

                <div className="heroActions">
                  <a className="btn btnPrimary" href="#products">
                    Explore Products
                  </a>
                  <a className="btn btnGhost" href="#contact">
                    Contact Us
                  </a>
                </div>

                <div className="heroStats">
                  <div className="statCard">
                    <strong>Inspect</strong>
                    <span>Advanced inspection workflows for professional reporting and structured field capture.</span>
                  </div>
                  <div className="statCard">
                    <strong>Quick Inspect</strong>
                    <span>Fast offline visual inspections with simple report creation on site.</span>
                  </div>
                  <div className="statCard">
                    <strong>Data &amp; SplitBill</strong>
                    <span>Useful engineering tools and practical everyday calculators in one ecosystem.</span>
                  </div>
                </div>
              </div>

              <div className="heroVisual">
                <div className="heroOpenStage" aria-hidden="true">
                  <div className="heroAmbientGlow heroAmbientGlowOne" />
                  <div className="heroAmbientGlow heroAmbientGlowTwo" />

                  <div className="heroMainIconWrap">
                    <Image
                      src={inspectIcon}
                      alt="Airoflair Inspect icon"
                      className="heroMainIcon"
                      priority
                    />
                  </div>

                  <div className="heroShard heroShard1">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard2">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard3">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard4">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard5">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard6">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard7">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard8">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard9">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard10">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard11">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                  <div className="heroShard heroShard12">
                    <Image src={inspectIcon} alt="" className="heroShardImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section productSection">
        <div className="container sectionStack">
          <div className="sectionIntro centerIntro">
            <span className="eyebrow productsEyebrow">Products</span>
            <h2 className="sectionTitle">Purpose-built apps for real work in the field</h2>
            <p className="sectionText">
              Airoflair products are designed to solve real workflow needs, from structured inspection
              reporting to fast offline capture, engineering calculations and simple utility tools.
            </p>
          </div>

          <article className="productPanel productPanelAccent">
            <div className="productPanelGrid">
              <div className="productContent">
                <div className="productBrandRow">
                  <Image src={inspectLogo} alt="Airoflair Inspect" className="brandLogo" />
                </div>
                <h3 className="productHeading">Airoflair Inspect</h3>
                <p className="productText">
                  Professional inspection reporting with structured templates, cleaner workflows and a
                  polished mobile experience for teams that need consistency, speed and professional output.
                </p>
                <ul className="productBullets">
                  <li>Structured inspection templates</li>
                  <li>Professional field data capture</li>
                  <li>Clear, consistent reporting output</li>
                </ul>
                <div className="badgeRow">
                  <a href={appLinks.inspect.apple} target="_blank" rel="noreferrer" aria-label="Airoflair Inspect on the App Store">
                    <Image src={appleStore} alt="App Store" width={140} height={42} style={{ height: 42, width: "auto" }} />
                  </a>
                  <a href={appLinks.inspect.google} target="_blank" rel="noreferrer" aria-label="Airoflair Inspect on Google Play">
                    <Image src={googlePlay} alt="Google Play" width={140} height={42} style={{ height: 42, width: "auto" }} />
                  </a>
                </div>
              </div>

              <div className="galleryGrid galleryGridFour">
                <div className="galleryItem">
                  <Image src={inspectShot1} alt="Airoflair Inspect preview 1" className="galleryImage" />
                </div>
                <div className="galleryItem">
                  <Image src={inspectShot2} alt="Airoflair Inspect preview 2" className="galleryImage" />
                </div>
                <div className="galleryItem">
                  <Image src={inspectShot3} alt="Airoflair Inspect preview 3" className="galleryImage" />
                </div>
                <div className="galleryItem">
                  <Image src={inspectShot4} alt="Airoflair Inspect preview 4" className="galleryImage" />
                </div>
              </div>
            </div>
          </article>

          <article className="productPanel">
            <div className="productPanelGrid reverseOnDesktop">
              <div className="galleryGrid galleryGridTwo">
                <div className="galleryItem galleryItemLarge">
                  <Image src={quickShot1} alt="Airoflair Quick Inspect preview 1" className="galleryImage" />
                </div>
                <div className="galleryItem galleryItemLarge">
                  <Image src={quickShot2} alt="Airoflair Quick Inspect preview 2" className="galleryImage" />
                </div>
              </div>

              <div className="productContent">
                <div className="productBrandRow compactBrandRow">
                  <Image src={quickIcon} alt="Airoflair Quick Inspect" className="brandIcon" />
                  <span className="brandLabel">Quick Inspect</span>
                </div>
                <h3 className="productHeading">Airoflair Quick Inspect</h3>
                <p className="productText">
                  A simpler inspection app focused on fast visual reporting, photo capture and efficient
                  offline use when you need to work quickly without losing professionalism.
                </p>
                <ul className="productBullets">
                  <li>Quick offline inspection workflows</li>
                  <li>Photo-rich reporting for site use</li>
                  <li>Simple, clean mobile-first experience</li>
                </ul>
                <div className="badgeRow">
                  <a href={appLinks.quickInspect.apple} target="_blank" rel="noreferrer" aria-label="Airoflair Quick Inspect on the App Store">
                    <Image src={appleStore} alt="App Store" width={140} height={42} style={{ height: 42, width: "auto" }} />
                  </a>
                  <a href={appLinks.quickInspect.google} target="_blank" rel="noreferrer" aria-label="Airoflair Quick Inspect on Google Play">
                    <Image src={googlePlay} alt="Google Play" width={140} height={42} style={{ height: 42, width: "auto" }} />
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="productPanel">
            <div className="productPanelGrid">
              <div className="productContent">
                <div className="productBrandRow compactBrandRow">
                  <Image src={dataLogo} alt="Airoflair Data" className="brandIcon" />
                  <span className="brandLabel">Data</span>
                </div>
                <h3 className="productHeading">Airoflair Data</h3>
                <p className="productText">
                  A practical engineering toolkit with calculators, technical reference data and field-friendly
                  utilities across inspection, mechanical, electrical, HVAC and more.
                </p>
                <ul className="productBullets">
                  <li>Engineering calculators and conversions</li>
                  <li>Inspection and radiography utilities</li>
                  <li>Consistent mobile access to trusted data</li>
                </ul>
                <div className="badgeRow">
                  <a href={appLinks.data.apple} target="_blank" rel="noreferrer" aria-label="Airoflair Data on the App Store">
                    <Image src={appleStore} alt="App Store" width={140} height={42} style={{ height: 42, width: "auto" }} />
                  </a>
                  <a href={appLinks.data.google} target="_blank" rel="noreferrer" aria-label="Airoflair Data on Google Play">
                    <Image src={googlePlay} alt="Google Play" width={140} height={42} style={{ height: 42, width: "auto" }} />
                  </a>
                </div>
              </div>

              <div className="galleryGrid galleryGridThree">
                <div className="galleryItem">
                  <Image src={dataShot1} alt="Airoflair Data preview 1" className="galleryImage" />
                </div>
                <div className="galleryItem">
                  <Image src={dataShot2} alt="Airoflair Data preview 2" className="galleryImage" />
                </div>
                <div className="galleryItem">
                  <Image src={dataShot3} alt="Airoflair Data preview 3" className="galleryImage" />
                </div>
              </div>
            </div>
          </article>

          <article className="productPanel">
            <div className="productPanelGrid reverseOnDesktop">
              <div className="galleryGrid galleryGridSingle">
                <div className="galleryItem galleryItemWide">
                  <Image src={splitBillShot} alt="SplitBill preview" className="galleryImage" />
                </div>
              </div>

              <div className="productContent">
                <div className="productBrandRow compactBrandRow">
                  <Image src={splitBillLogo} alt="SplitBill" className="splitBillLogo" />
                </div>
                <h3 className="productHeading">SplitBill</h3>
                <p className="productText">
                  A clean and simple way to split shared expenses, manage group costs and make bill
                  calculations easier for travel, events and everyday use.
                </p>
                <ul className="productBullets">
                  <li>Fast shared expense calculation</li>
                  <li>Simple and clean experience</li>
                  <li>Useful everyday companion tool</li>
                </ul>
                <div className="heroActions">
                  <a className="btn btnPrimary" href={appLinks.splitBill.web} target="_blank" rel="noreferrer">
                    Open SplitBill
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="platform" className="section platformSection">
        <div className="container">
          <div className="platformShell panel">
            <div className="sectionIntro">
              <span className="eyebrow">Why Airoflair</span>
              <h2 className="sectionTitle">Built around practical field work, not unnecessary complexity</h2>
              <p className="sectionText">
                Airoflair focuses on professional digital tools that are useful in real environments.
                The products are designed to help users work faster, stay organised and create cleaner output
                whether they are carrying out inspections, managing site information or using technical tools on the go.
              </p>
            </div>

            <div className="featuresGrid enhancedFeaturesGrid">
              <div className="featureCard">
                <h3>Designed for real workflows</h3>
                <p>
                  Airoflair tools are built around practical use in the field, with clean layouts,
                  straightforward actions and fast access to the functions that matter.
                </p>
              </div>

              <div className="featureCard">
                <h3>Professional output</h3>
                <p>
                  From inspection reporting to technical calculations, the focus is on helping users
                  produce work that looks clear, organised and professional.
                </p>
              </div>

              <div className="featureCard">
                <h3>Simple to use</h3>
                <p>
                  The experience is designed to feel modern and easy to navigate, without clutter or
                  overcomplicated workflows getting in the way.
                </p>
              </div>

              <div className="featureCard">
                <h3>Growing product family</h3>
                <p>
                  Inspect, Quick Inspect, Data and SplitBill each serve a different purpose while still
                  feeling part of one consistent Airoflair ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <button type="submit" className="btn btnPrimary" disabled={status === "sending"} style={{ minWidth: 260 }}>
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
                      <Image src={mailIcon} alt="Email" width={18} height={18} style={{ display: "block" }} />
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