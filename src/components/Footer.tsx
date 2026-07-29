

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Internship", href: "/internship" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Digital Marketing",
  "Branding",
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "UI/UX Design",
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* ================= CTA ================= */}

      

      {/* ================= MAIN ================= */}

      <div className="container">

        <div className="footer-grid">

        
<div className="footer-brand-section">

  <Link href="/" className="footer-brand-logo">
    <Image
      src="/white.png"
      alt="Idea Media"
      width={140}
      height={55}
      className="footer-brand-image"
      priority
    />
  </Link>

  <p className="footer-brand-text">
    Idea Media is a creative digital agency delivering branding,
    marketing, web development and industry-focused training
    programs that empower businesses and future professionals.
  </p>

  <div className="footer-brand-social">

    <Link href="/" className="footer-brand-social-link">
      <FaInstagram />
    </Link>

    <Link href="/" className="footer-brand-social-link">
      <FaFacebookF />
    </Link>

    <Link href="/" className="footer-brand-social-link">
      <FaLinkedinIn />
    </Link>

  </div>

</div>
          {/* Quick Links */}

          <div>

            <h4 className="footer-title">
              Quick Links
            </h4>

            <div className="footer-links">

              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="footer-title">
              Services
            </h4>

            <div className="footer-links">

              {services.map((service) => (
                <Link
                  href="/services"
                  key={service}
                >
                  {service}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="footer-title">
              Contact
            </h4>

            <div className="footer-contact">

              <p>
                <FaPhoneAlt />
                +91 98765 43210
              </p>

              <p>
                <FaEnvelope />
                hello@ideamedia.in
              </p>

              <p>
                <FaMapMarkerAlt />
                Malappuram, Kerala
              </p>

            </div>

            <Link
              href="/contact"
              className="footer-contact-btn"
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Idea Media.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms & Conditions
            </Link>

            <Link href="#">
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}