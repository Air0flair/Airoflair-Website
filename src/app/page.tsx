"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import inspectLogo from "@/assets/images/inspectlogo.png";
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
                <span className="eyebrow">Airoflair digital tools</span>
                <h1 className="h1">
                  Inspection, reporting
                  <br />
                  and field tools built
                  <br />
                  <span className="gradientText">to look professional</span>
                </h1>

                <p className="p heroLead">
                  Airoflair brings together professional inspection workflows, fast mobile reporting,
                  engineering calculators and everyday utility tools in one polished ecosystem.
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
                    <span>Flexible professional inspection workflows</span>
                  </div>
                  <div className="statCard">
                    <strong>Quick Inspect</strong>
                    <span>Fast offline visual reporting</span>
                  </div>
                  <div className="statCard">
                    <strong>Data &amp; SplitBill</strong>
                    <span>Engineering tools and simple utilities</span>
                  </div>
                </div>
              </div>

              <div className="heroVisual">
                <div className="heroVisualGrid">
                  <div className="showcaseCard showcaseTall">
                    <Image src={inspectShot1} alt="Airoflair Inspect screen" className="showcaseImage" priority />
                  </div>
                  <div className="showcaseCard">
                    <Image src={quickShot1} alt="Airoflair Quick Inspect screen" className="showcaseImage" priority />
                  </div>
                  <div className="showcaseCard">
                    <Image src={dataShot1} alt="Airoflair Data screen" className="showcaseImage" priority />
                  </div>
                  <div className="showcaseCard showcaseWide">
                    <Image src={splitBillShot} alt="SplitBill preview" className="showcaseImage" priority />
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
            <span className="eyebrow">Products</span>
            <h2 className="sectionTitle">Purpose-built apps for real work in the field</h2>
            <p className="sectionText">
              Each product has a clear role, consistent branding and a cleaner presentation so the
              website feels like one professional product family.
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
                  polished mobile experience for teams that need consistent output.
                </p>
                <ul className="productBullets">
                  <li>Structured inspection templates</li>
                  <li>Professional field data capture</li>
                  <li>Designed for operational teams and reporting consistency</li>
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
                  A simpler inspection app focused on quick visual reports, photo capture and fast
                  offline use when you need to get the job done without extra complexity.
                </p>
                <ul className="productBullets">
                  <li>Quick offline inspection workflows</li>
                  <li>Photo-rich reporting for fast site use</li>
                  <li>Clean mobile-first experience</li>
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
                  A practical engineering toolkit with calculators, technical reference data and
                  workflow-friendly utilities across inspection, mechanical, electrical, HVAC and more.
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
                  A clean and simple way to split group expenses, manage shared costs and keep bill
                  calculations easy for trips, events and teams.
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
              <h2 className="sectionTitle">A cleaner, stronger presentation for the full brand</h2>
              <p className="sectionText">
                The site now focuses on the active products and presents them as a polished suite,
                instead of pointing visitors to the old portal workflow.
              </p>
            </div>

            <div className="featuresGrid enhancedFeaturesGrid">
              <div className="featureCard">
                <h3>Clear product positioning</h3>
                <p>Each app has its own dedicated section, visuals and call to action.</p>
              </div>
              <div className="featureCard">
                <h3>More premium look</h3>
                <p>Stronger layout structure, improved spacing and more polished image presentation.</p>
              </div>
              <div className="featureCard">
                <h3>Mobile-first product showcase</h3>
                <p>The uploaded screenshots are used properly to highlight the apps and tools.</p>
              </div>
              <div className="featureCard">
                <h3>Portal content removed</h3>
                <p>Inspect Login and the old portal-focused MacBook hero are taken out completely.</p>
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

                    <div className="formGridFull" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
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