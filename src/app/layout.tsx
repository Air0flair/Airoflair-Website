// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = "G-CB9WEQEB2Y";

// NOTE: This is injected at build-time. You MUST redeploy after changing SWA env vars.
const RECAPTCHA_SITE_KEY = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim();

export const metadata = {
  title: "Airoflair",
  description: "Professional inspection software for companies, individual inspectors and fast field reporting.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Expose the key to client runtime (page.tsx reads window.__RECAPTCHA_SITE_KEY__) */}
        <Script id="recaptcha-site-key" strategy="beforeInteractive">
          {`window.__RECAPTCHA_SITE_KEY__ = ${JSON.stringify(RECAPTCHA_SITE_KEY)};`}
        </Script>

        {/* Load reCAPTCHA v3 (only if key exists) */}
        {RECAPTCHA_SITE_KEY ? (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        ) : null}
      </head>

      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
