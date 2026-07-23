"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";

const INSPECT_SIGNUP_URL = "https://inspect.airoflair.com/signup";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Products", href: "/#products" },
      { label: "Pricing", href: "/#inspect-company-plans" },
      { label: "Platform", href: "/#platform" },
      { label: "Contact", href: "/#contact" },
    ],
    []
  );

  return (
    <header className="headerWrap">
      <div className="container">
        <div className="headerRow">
          <div className="headerLeft">
            <Link
              href="/"
              aria-label="Airoflair Home"
              onClick={() => setOpen(false)}
              className="brandLink"
            >
              <Image
                src={logo}
                alt="Airoflair"
                priority
                className="headerLogo"
              />
            </Link>
          </div>

          <div className="headerCenter">
            <nav className="navRow" aria-label="Primary">
              {nav.map((item) => (
                <a key={item.href} className="navLink" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="headerRight">
            <div className="headerActions" aria-label="Account actions">
              <a className="headerButton headerButtonPrimary" href={INSPECT_SIGNUP_URL}>
                Sign Up
              </a>
              <a
                className="headerButton headerButtonGhost"
                href="https://inspect.airoflair.com"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
            </div>

            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="burgerLines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mobileMenu">
            <div className="mobileMenuInner">
              {nav.map((item) => (
                <a
                  key={item.href}
                  className="btn"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="btn btnPrimary"
                href={INSPECT_SIGNUP_URL}
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
              <a
                className="btn btnGhost"
                href="https://inspect.airoflair.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}