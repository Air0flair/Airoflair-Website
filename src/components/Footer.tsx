import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid #e6eaf2",
        background: "#ffffff",
      }}
    >
      <div className="container">
        <div
          style={{
            minHeight: 78,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            padding: "18px 0",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#5c677a",
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            © {year} Airoflair. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/privacy-policy"
              style={{
                color: "#5c677a",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              style={{
                color: "#5c677a",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}