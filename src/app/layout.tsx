import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

// Adjust these paths if needed
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Airoflair",
  description: "Engineering tools and inspection solutions",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CB9WEQEB2Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CB9WEQEB2Y');
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
