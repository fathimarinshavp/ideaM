import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const cols = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
  ],
  Programs: [
    { label: "Internship", href: "/internship" },
    { label: "Courses", href: "/courses" },
    { label: "Free Workshop", href: "/internship" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--white)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <style>{`.footer-link:hover { color: rgba(255,255,255,0.9) !important; }`}</style>
      <div className="container" style={{ paddingBlock: "64px 40px" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px" }}>
              <div style={{ position: "relative", width: "34px", height: "34px", background: "white", borderRadius: "8px", overflow: "hidden", padding: "3px", flexShrink: 0 }}>
                <Image src="/logo.png" alt="Idea Media" fill sizes="34px" style={{ objectFit: "contain" }} />
              </div>
              <span
                className="font-display"
                style={{ fontSize: "1.05rem", color: "var(--white)", letterSpacing: "-0.01em" }}
              >
                Idea Media
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "260px", margin: "0 0 24px" }}>
              A creative branding and digital marketing studio that also runs
              India&apos;s most practical training and internship programs.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                { label: "Email", value: "hello@ideamedia.in" },
                { label: "Phone", value: "+91 XXXXX XXXXX" },
                { label: "Location", value: "India" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", gap: "10px" }}>
                  <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", minWidth: "60px", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {c.label}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem" }}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.25)",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {section}
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 150ms ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "40px",
            marginBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            className="font-display"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "var(--white)", margin: 0 }}
          >
            Start your digital journey today.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Book a Free Call <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", margin: 0 }}>
            © {year} Idea Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
