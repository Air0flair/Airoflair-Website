import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airoflair",
  description: "Inspection reporting, engineering tools, and data workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        {children}
      </body>
    </html>
  );
}
