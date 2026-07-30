import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-col">

          <div className="footer-logo">

  <Image
    src="/transpa.png"
    alt="Idea Media Logo"
    width={180}
    height={110}
    className="footer-logo-img"
    priority
  />

</div>

            <p>
              Helping businesses grow through branding, web development,
              digital marketing, and creative media while empowering
              students through practical internships and professional
              training.
            </p>

        <div className="footer-social">
  <a href="#"><FaFacebookF size={18} /></a>
  <a href="#"><FaInstagram size={18} /></a>
  <a href="#"><FaLinkedinIn size={18} /></a>
  <a href="#"><FaYoutube size={18} /></a>
</div>

          </div>

          {/* Quick Links */}

          <div className="footer-col">

            <h3>Quick Links</h3>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/internship">Internship</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>

          </div>

          {/* Services */}

          <div className="footer-col">

            <h3>Services</h3>

            <span>Branding</span>
            <span>Web Development</span>
            <span>Digital Marketing</span>
            <span>SEO</span>
            <span>Graphic Design</span>
            <span>Video Editing</span>

          </div>

          {/* Contact */}

          <div className="footer-col">

            <h3>Contact</h3>

            <div className="footer-contact">

              <p>
                <MapPin size={18} />
                Malappuram, Kerala
              </p>

              <p>
                <Phone size={18} />
                +91 XXXXX XXXXX
              </p>

              <p>
                <Mail size={18} />
                info@ideamedia.in
              </p>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Idea Media. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}