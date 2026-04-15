"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Products", href: "/#products" },
      { label: "Platform", href: "/#platform" },
      { label: "Contact", href: "/#contact" },
    ],
    []
  );

  return (
    <header className="headerWrap">
      <div className="container">
        <div className="headerRow">
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
              style={{ width: 178, height: "auto" }}
            />
          </Link>

          <nav className="navRow" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} className="navLink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}