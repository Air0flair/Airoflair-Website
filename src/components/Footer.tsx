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

  return (
    <footer className="footerWrap">
      <div className="container">
        <div className="hr" />
        <div style={{ height: 14 }} />

        <div className="footerRow">
          {/* LEFT */}
          <div className="footerLeft">
            <span>© {year} Airoflair</span>
            <span className="footerDot">•</span>
            <div className="footerLinks">
              <Link href="/terms-of-service">Terms of Service</Link>
              <span className="footerDot">•</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footerRight">
            {/* App store badges – slightly smaller */}
            <div className="badgeRow" aria-label="App stores">
              <a
                href="https://play.google.com/store/apps/dev?id=5533742350655574841"
                target="_blank"
                rel="noreferrer"
                aria-label="Airoflair on Google Play"
              >
                <Image
                  src={googlePlay}
                  alt="Get it on Google Play"
                  width={120}
                  height={36}
                  style={{ height: 36, width: "auto" }}
                />
              </a>

              <a
                href="https://apps.apple.com/us/developer/airoflair-pty-ltd/id1650534656"
                target="_blank"
                rel="noreferrer"
                aria-label="Airoflair on the App Store"
              >
                <Image
                  src={appleStore}
                  alt="Download on the App Store"
                  width={120}
                  height={36}
                  style={{ height: 36, width: "auto" }}
                />
              </a>
            </div>

            {/* Social icons – bigger & consistent */}
            <div className="socialRow" aria-label="Social links">
              {[
                {
                  href: "https://www.facebook.com/airoflair",
                  src: facebook,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/airoflair",
                  src: xIcon,
                  label: "X",
                },
                {
                  href: "https://www.linkedin.com/company/airoflair",
                  src: linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/airoflair/",
                  src: instagram,
                  label: "Instagram",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={22}
                    height={22}
                    style={{ width: 22, height: 22 }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 10 }} />
      </div>
    </footer>
  );
}
