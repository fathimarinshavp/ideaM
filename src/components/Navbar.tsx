"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Internship", href: "/internship" },
  { label: "Courses",    href: "/courses" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}>

          {/* ── Logo ── */}
          <Link href="/" className="logo-anim" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
           <Image
  src="/logo.png"
  alt="Idea Media Logo"
  width={90}
  height={28}
  className="footer-logo-img"
/>
          </Link>

          {/* ── Desktop links ── */}
          <div className="nav-links-desktop" style={{ alignItems: "center", gap: "2px" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "100px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: isActive ? "var(--ink)" : "var(--slate)",
                    background: isActive ? "var(--amber-bg)" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ── CTA + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              href="/contact"
              className="btn btn-primary nav-cta-desktop"
              style={{ padding: "9px 20px", fontSize: "0.875rem" }}
            >
              Talk to Us
            </Link>

            {/* Animated hamburger */}
            <button
              className={`hamburger nav-toggle-mobile ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "active" : ""}
              style={{
                fontWeight: isActive ? 600 : 500,
                animationDelay: `${0.05 + i * 0.05}s`,
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mobile-menu-cta">
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </header>
  );
}