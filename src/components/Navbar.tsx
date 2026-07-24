"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Internship", href: "/internship" },
  { label: "Courses", href: "/courses" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`navbar${scrolled ? " scrolled" : ""}`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.png"
              alt="Idea Media Logo"
              width={40}
              height={40}
              priority
              style={{
                objectFit: "contain",
              }}
            />
            <span
              className="font-display"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              Idea Media
            </span>
          </Link>

          {/* Desktop & Laptop Navigation — Horizontal display for laptop and desktop screens */}
          <div
            className="nav-links-desktop"
            style={{
              alignItems: "center",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: isActive ? "#C28A00" : "var(--slate)",
                    background: isActive ? "rgba(245, 158, 11, 0.12)" : "transparent",
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

          {/* CTA Button + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/contact"
              className="btn btn-primary nav-cta-desktop"
              style={{
                padding: "9px 20px",
                fontSize: "0.875rem",
                borderRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Talk to Our Team
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-toggle-mobile"
              aria-label="Toggle Menu"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                color: "var(--ink)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu (only on mobile screens < 768px) */}
        {isOpen && (
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "16px 0",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: isActive ? "#C28A00" : "var(--ink)",
                    background: isActive ? "rgba(245, 158, 11, 0.15)" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              style={{
                paddingTop: "14px",
                marginTop: "8px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}