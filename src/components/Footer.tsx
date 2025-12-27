// src/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

import appleStore from "@/assets/images/apple-store.svg";
import googlePlay from "@/assets/images/google-play.svg";

import facebook from "@/assets/images/facebook.svg";
import instagram from "@/assets/images/instagram.svg";
import xIcon from "@/assets/images/X.svg";
import linkedin from "@/assets/images/linkedin.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  // Badge sizing (smaller than before)
  const badgeHeight = 32;
  const badgeWidth = 120;

  // Social sizing (bigger + consistent)
  const socialSize = 22;

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(15, 23, 42, 0.12)",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "18px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          {/* Left: copyright + legal links */}
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
            <span>© {year} Airoflair</span>
            <span style={{ opacity: 0.65 }}>•</span>

            <Link
              href="/terms-of-service"
              style={{
                color: "rgba(11, 18, 32, 0.85)",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Terms of Service
            </Link>

            <span style={{ opacity: 0.65 }}>•</span>

            <Link
              href="/privacy-policy"
              style={{
                color: "rgba(11, 18, 32, 0.85)",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Right: store badges + social icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {/* Store badges (smaller) */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.airoflair.quickinspect"
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
                style={{ display: "inline-flex" }}
              >
                <Image
                  src={googlePlay}
                  alt="Google Play"
                  width={badgeWidth}
                  height={badgeHeight}
                  style={{ width: "auto", height: badgeHeight }}
                />
              </a>

              <a
                href="https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606"
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
                style={{ display: "inline-flex" }}
              >
                <Image
                  src={appleStore}
                  alt="App Store"
                  width={badgeWidth}
                  height={badgeHeight}
                  style={{ width: "auto", height: badgeHeight }}
                />
              </a>
            </div>

            {/* Social icons (bigger + same size) */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{ display: "inline-flex" }}
              >
                <Image
                  src={facebook}
                  alt="Facebook"
                  width={socialSize}
                  height={socialSize}
                  style={{ width: socialSize, height: socialSize }}
                />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                style={{ display: "inline-flex" }}
              >
                <Image
                  src={xIcon}
                  alt="X"
                  width={socialSize}
                  height={socialSize}
                  style={{ width: socialSize, height: socialSize }}
                />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{ display: "inline-flex" }}
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  width={socialSize}
                  height={socialSize}
                  style={{ width: socialSize, height: socialSize }}
                />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{ display: "inline-flex" }}
              >
                <Image
                  src={instagram}
                  alt="Instagram"
                  width={socialSize}
                  height={socialSize}
                  style={{ width: socialSize, height: socialSize }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
