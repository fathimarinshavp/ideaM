import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Internship", href: "/internship" },
  { label: "Courses",    href: "/courses" },
  { label: "Contact",    href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(255,255,255,0.6)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingBlock: "clamp(48px,6vw,72px) 28px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "start",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "420px" }}>
            <Link href="/" className="logo-anim footer-logo">
  <Image
    src="/logo.png"
    alt="Idea Media Logo"
    width={120}
    height={48}
  />
</Link>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
              A creative digital agency and practical training school helping businesses grow
              and building the next generation of digital professionals.
            </p>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 4px",
              maxWidth: "360px",
              justifyContent: "flex-end",
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="footer-nav-link"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Idea Media. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <Link
                key={t}
                href="#"
                className="footer-bottom-link"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
