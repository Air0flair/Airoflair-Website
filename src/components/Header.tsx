// src/components/Header.tsx

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
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/#contact" },
    ],
    []
  );

  return (
    <header className="headerWrap">
      <div className="container">
        <div className="headerRow">
          <Link href="/" aria-label="Airoflair Home" onClick={() => setOpen(false)}>
            <Image
              src={logo}
              alt="Airoflair"
              priority
              style={{ width: 170, height: "auto" }}
            />
          </Link>

          <nav className="navRow" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} className="navLink" href={n.href}>
                {n.label}
              </a>
            ))}
            <a
              className="inspectBtn"
              href="https://inspect.airoflair.com"
              target="_blank"
              rel="noreferrer"
            >
              inspect
            </a>
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
              {nav.map((n) => (
                <a
                  key={n.href}
                  className="btn"
                  href={n.href}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}

              <a
                className="btn btnPrimary"
                href="https://inspect.airoflair.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                inspect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
