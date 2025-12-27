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
          <div className="footerLeft">
            <span>© {year} Airoflair</span>
            <span className="footerDot">•</span>
            <div className="footerLinks">
              <Link href="/terms-of-service">Terms of Service</Link>
              <span className="footerDot">•</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>

          <div className="footerRight">
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
                  width={135}
                  height={40}
                  style={{ height: 40, width: "auto" }}
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
                  width={135}
                  height={40}
                  style={{ height: 40, width: "auto" }}
                />
              </a>
            </div>

            <div className="socialRow" aria-label="Social links">
              <a
                href="https://www.facebook.com/airoflair"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Image src={facebook} alt="Facebook" width={18} height={18} />
              </a>
              <a
                href="https://twitter.com/airoflair"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <Image src={xIcon} alt="X" width={18} height={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/airoflair"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Image src={linkedin} alt="LinkedIn" width={18} height={18} />
              </a>
              <a
                href="https://www.instagram.com/airoflair/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Image src={instagram} alt="Instagram" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: 10 }} />
      </div>
    </footer>
  );
}
