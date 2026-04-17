import Image from "next/image";
import Link from "next/link";

/* =========================
   CONFIG — EASY TO EDIT
   ========================= */
const FOOTER_CONFIG = {
  companyName: "Airoflair",
  copyrightYear: 2026,

  legalLinks: {
    terms: "/terms-of-service",
    privacy: "/privacy-policy",
  },

  appLinks: {
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.airoflair.quickinspect",
    appleStore:
      "https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606",
  },

  socialLinks: {
    facebook: "https://www.facebook.com/",
    x: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },

  sizing: {
    badgeHeight: 32,
    badgeWidth: 120,
    socialSize: 22,
    xSize: 26,
  },
};

/* =========================
   ASSETS
   ========================= */
import appleStore from "@/assets/images/apple-store.svg";
import googlePlay from "@/assets/images/google-play.svg";

import facebook from "@/assets/images/facebook.svg";
import instagram from "@/assets/images/instagram.svg";
import xIcon from "@/assets/images/X.svg";
import linkedin from "@/assets/images/linkedin.svg";

export default function Footer() {
  const { companyName, copyrightYear, legalLinks, appLinks, socialLinks, sizing } =
    FOOTER_CONFIG;

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(15, 23, 42, 0.12)",
        background: "#fff",
      }}
    >
      <div className="container">
        <div
          style={{
            padding: "18px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                fontSize: 14,
                color: "rgba(11, 18, 32, 0.85)",
                fontWeight: 600,
              }}
            >
              <span>
                © {copyrightYear} {companyName}
              </span>

              <span style={{ opacity: 0.6 }}>•</span>

              <Link
                href={legalLinks.terms}
                style={{
                  color: "rgba(11, 18, 32, 0.85)",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Terms of Service
              </Link>

              <span style={{ opacity: 0.6 }}>•</span>

              <Link
                href={legalLinks.privacy}
                style={{
                  color: "rgba(11, 18, 32, 0.85)",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Privacy Policy
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <a
                  href={appLinks.googlePlay}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src={googlePlay}
                    alt="Google Play"
                    width={sizing.badgeWidth}
                    height={sizing.badgeHeight}
                    style={{ width: "auto", height: sizing.badgeHeight }}
                  />
                </a>

                <a
                  href={appLinks.appleStore}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src={appleStore}
                    alt="App Store"
                    width={sizing.badgeWidth}
                    height={sizing.badgeHeight}
                    style={{ width: "auto", height: sizing.badgeHeight }}
                  />
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                  <Image
                    src={facebook}
                    alt="Facebook"
                    width={sizing.socialSize}
                    height={sizing.socialSize}
                  />
                </a>

                <a href={socialLinks.x} target="_blank" rel="noreferrer">
                  <Image
                    src={xIcon}
                    alt="X"
                    width={sizing.xSize}
                    height={sizing.xSize}
                  />
                </a>

                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={sizing.socialSize}
                    height={sizing.socialSize}
                  />
                </a>

                <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={sizing.socialSize}
                    height={sizing.socialSize}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}