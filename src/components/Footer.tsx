import Image from "next/image";
import Link from "next/link";

import appleStore from "@/assets/images/apple-store.svg";
import googlePlay from "@/assets/images/google-play.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid #e6eaf2",
        background: "#ffffff",
      }}
    >
      <div className="container">
        <div
          style={{
            padding: "28px 0 22px 0",
            display: "grid",
            gap: 22,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
              alignItems: "start",
            }}
          >
            <div style={{ display: "grid", gap: 10 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#0b1220",
                }}
              >
                Airoflair
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#5c677a",
                  fontSize: 14,
                  lineHeight: 1.6,
                  maxWidth: 320,
                }}
              >
                Professional digital tools for inspection, reporting, engineering data
                and practical mobile workflows.
              </p>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#0b1220",
                }}
              >
                Quick Links
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: 8,
                }}
              >
                <a href="/#products" style={linkStyle}>
                  Products
                </a>
                <a href="/#platform" style={linkStyle}>
                  Why Airoflair
                </a>
                <a href="/#contact" style={linkStyle}>
                  Contact
                </a>
                <Link href="/privacy-policy" style={linkStyle}>
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" style={linkStyle}>
                  Terms of Service
                </Link>
              </div>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#0b1220",
                }}
              >
                App Downloads
              </h3>

              <div style={{ display: "grid", gap: 14 }}>
                <div style={{ display: "grid", gap: 8 }}>
                  <span style={productLabelStyle}>Airoflair Inspect</span>
                  <div style={badgeRowStyle}>
                    <a
                      href="https://apps.apple.com/us/app/airoflair-inspect/id6443913558"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Airoflair Inspect on the App Store"
                    >
                      <Image
                        src={appleStore}
                        alt="App Store"
                        width={140}
                        height={42}
                        style={{ width: "auto", height: 42 }}
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.inspectmobile"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Airoflair Inspect on Google Play"
                    >
                      <Image
                        src={googlePlay}
                        alt="Google Play"
                        width={140}
                        height={42}
                        style={{ width: "auto", height: 42 }}
                      />
                    </a>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 8 }}>
                  <span style={productLabelStyle}>Airoflair Quick Inspect</span>
                  <div style={badgeRowStyle}>
                    <a
                      href="https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Airoflair Quick Inspect on the App Store"
                    >
                      <Image
                        src={appleStore}
                        alt="App Store"
                        width={140}
                        height={42}
                        style={{ width: "auto", height: 42 }}
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.airoflair.quickinspect"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Airoflair Quick Inspect on Google Play"
                    >
                      <Image
                        src={googlePlay}
                        alt="Google Play"
                        width={140}
                        height={42}
                        style={{ width: "auto", height: 42 }}
                      />
                    </a>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 8 }}>
                  <span style={productLabelStyle}>Airoflair Data</span>
                  <div style={badgeRowStyle}>
                    <a
                      href="https://apps.apple.com/us/app/airoflair-data/id6749357700"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Airoflair Data on the App Store"
                    >
                      <Image
                        src={appleStore}
                        alt="App Store"
                        width={140}
                        height={42}
                        style={{ width: "auto", height: 42 }}
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.airoflair.data"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Airoflair Data on Google Play"
                    >
                      <Image
                        src={googlePlay}
                        alt="Google Play"
                        width={140}
                        height={42}
                        style={{ width: "auto", height: 42 }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #e6eaf2",
              paddingTop: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#5c677a",
                fontSize: 14,
                lineHeight: 1.5,
              }}
            >
              © {year} Airoflair. All rights reserved.
            </p>

            <p
              style={{
                margin: 0,
                color: "#5c677a",
                fontSize: 14,
                lineHeight: 1.5,
              }}
            >
              Built for practical field work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#5c677a",
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "none",
} as const;

const productLabelStyle = {
  color: "#0b1220",
  fontSize: 14,
  fontWeight: 800,
} as const;

const badgeRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
} as const;