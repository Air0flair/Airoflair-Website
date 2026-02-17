import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = "G-CB9WEQEB2Y";

// IMPORTANT: this is read at build time (SWA injects env vars during build)
const RECAPTCHA_SITE_KEY = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim();

export const metadata = {
  title: "Airoflair",
  description: "Engineering tools and inspection solutions",
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

        {/* Expose site key to client code (page.tsx reads this) */}
        <Script id="recaptcha-site-key" strategy="beforeInteractive">
          {`
            window.__RECAPTCHA_SITE_KEY__ = ${JSON.stringify(RECAPTCHA_SITE_KEY)};
          `}
        </Script>

        {/* Load reCAPTCHA v3 globally */}
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
