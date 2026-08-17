import Image from "next/image";
import Link from "next/link";

import facebookIcon from "@/assets/images/facebook.svg";
import instagramIcon from "@/assets/images/instagram.svg";
import xIcon from "@/assets/images/X.svg";
import linkedinIcon from "@/assets/images/linkedin.svg";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/airoflair", icon: facebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/airoflair/", icon: instagramIcon },
  { label: "X / Twitter", href: "https://twitter.com/airoflair", icon: xIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/airoflair", icon: linkedinIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerInner">
          <p className="footerCopyright">© {year} Airoflair. All rights reserved.</p>

          <div className="footerRight">
            <nav className="footerLinks" aria-label="Legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </nav>

            <div className="footerSocials" aria-label="Airoflair social media">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="footerSocialLink"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Airoflair on ${social.label}`}
                  title={social.label}
                >
                  <Image src={social.icon} alt="" aria-hidden="true" className="footerSocialIcon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
