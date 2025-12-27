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
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3C9.1 3 3.5 8.5 3.5 15.3c0 2.6.8 5 2.2 7.1L4 29l6.9-1.8c2 1.1 4.3 1.7 6.8 1.7 6.9 0 12.5-5.5 12.5-12.3C30.2 8.5 22.9 3 16 3Z"
        fill="#EAF2FF"
      />
      <path
        d="M16 5.5c5.6 0 10.2 4.5 10.2 10.1 0 5.6-4.6 10.1-10.2 10.1-2.2 0-4.3-.7-6-1.8l-3.9 1 1-3.7c-1.2-1.7-1.9-3.8-1.9-6 0-5.6 4.6-10.1 10.2-10.1Z"
        fill="#2A2F8F"
        opacity="0.1"
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6.8c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8v10.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V6.8Z"
        stroke="#0B1220"
        strokeWidth="1.6"
      />
      <path
        d="M5.5 7.5 12 12l6.5-4.5"
        stroke="#2A2F8F"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function HomePage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const quickInspectLinks = useMemo(
    () => ({
      apple:
        "https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606",
      google:
        "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
    }),
    []
  );

  const dataLinks = useMemo(
    () => ({
      apple: "https://apps.apple.com/us/app/airoflair-data/id6749357700",
      google:
        "https://play.google.com/store/apps/details?id=com.airoflair.data",
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

      if (!res.ok) throw new Error("Failed to send message.");

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
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
                Transform the way your team captures, compiles and completes
                inspection reports faster than ever.
                <br />
                Available on iOS and Android
              </p>

              <a className="btn btnPrimary" href="#contact">
                Contact Us
              </a>
            </div>

            {/* HERO IMAGE – ENLARGED */}
            <div
              className="heroImageWrap"
              style={{
                maxWidth: 980,
                transform: "scale(1.18)",
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
      </section>

      {/* INSPECT */}
      <section id="products" className="strip">
        <div className="container">
          <div className="productGrid">
            <div>
              <h2 className="productTitle">Inspect</h2>
              <p className="productDesc">
                Use powerful, flexible templates to create and deliver inspection
                reports faster than ever
              </p>
            </div>

            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.9fr 1.2fr 0.9fr",
                  gap: 22,
                  alignItems: "center",
                }}
              >
                <Image src={inspectLogo} alt="Inspect" style={{ maxWidth: 320 }} />
                <Image
                  src={inspectMacbook}
                  alt="Inspect Web"
                  style={{ maxWidth: 520 }}
                />
                <Image
                  src={inspectIphone}
                  alt="Inspect Mobile"
                  style={{ maxWidth: 260 }}
                />
              </div>
            </div>

            <div className="productRight">
              <a
                className="btn btnPrimary"
                href="https://inspect.airoflair.com"
                target="_blank"
              >
                Go to Inspect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INSPECT */}
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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 28,
              }}
            >
              <Image src={quickInspectIphone} alt="Quick Inspect" />
              <Image src={quickIcon} alt="Quick Icon" />
            </div>

            <div className="productRight badgeRow">
              <a href={quickInspectLinks.apple} target="_blank">
                <Image src={appleStore} alt="App Store" height={42} />
              </a>
              <a href={quickInspectLinks.google} target="_blank">
                <Image src={googlePlay} alt="Google Play" height={42} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DATA */}
      <section className="strip">
        <div className="container">
          <div className="productGrid">
            <div style={{ display: "flex", gap: 12 }}>
              <Image src={airoflairDataLogo} alt="Data" width={60} />
              <div>
                <h2 className="productTitle">DATA</h2>
                <p className="productDesc">
                  Engineering calculators &amp; reference tools
                </p>
              </div>
            </div>

            <Image src={dataShot} alt="Data App" style={{ maxWidth: 820 }} />

            <div className="productRight badgeRow">
              <a href={dataLinks.apple} target="_blank">
                <Image src={appleStore} alt="App Store" height={42} />
              </a>
              <a href={dataLinks.google} target="_blank">
                <Image src={googlePlay} alt="Google Play" height={42} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT BILL */}
      <section className="stripWhite">
        <div className="container">
          <div className="productGrid">
            <div>
              <Image src={splitBillLogo} alt="SplitBill" width={170} />
              <p className="productDesc">
                Smart bill splitting for group events, trips and shared expenses
              </p>
            </div>

            <Image src={splitBillShot} alt="SplitBill App" />

            <div className="productRight">
              <a
                className="btn btnPrimary"
                href="https://splitbill.airoflair.com"
                target="_blank"
              >
                Go to Split Bill
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="stripWhite">
        <div className="container">
          <div className="panel contactPanel">
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit} className="formGrid">
              <input
                className="input"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                required
              />
              <input
                className="input"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                required
              />
              <input
                className="input"
                placeholder="Contact No."
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />
              <input
                className="input"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
              <textarea
                className="textarea"
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
              <button className="btn btnPrimary" type="submit">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && <p>{errorMsg}</p>}
              {status === "success" && <p>Message sent successfully.</p>}
            </form>

            <div className="infoRow">
              <IconWhatsApp /> +27 64 762 7501
            </div>
            <div className="infoRow">
              <IconMail /> info@airoflair.com
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
