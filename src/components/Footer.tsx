// // import Link from "next/link";
// // import Image from "next/image";

// // const links = [
// //   { label: "Home",       href: "/" },
// //   { label: "About",      href: "/about" },
// //   { label: "Services",   href: "/services" },
// //   { label: "Internship", href: "/internship" },
// //   { label: "Courses",    href: "/courses" },
// //   { label: "Contact",    href: "/contact" },
// // ];

// // export default function Footer() {
// //   return (
// //     <footer
// //       style={{
// //         background: "var(--ink)",
// //         color: "rgba(255,255,255,0.6)",
// //         borderTop: "1px solid rgba(255,255,255,0.07)",
// //         paddingBlock: "clamp(48px,6vw,72px) 28px",
// //       }}
// //     >
// //       <div className="container">
// //         {/* Top row */}
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "1fr auto",
// //             gap: "40px",
// //             alignItems: "start",
// //             marginBottom: "48px",
// //           }}
// //         >
// //           {/* Brand */}
// //           <div style={{ maxWidth: "420px" }}>
// //             <Link href="/" className="logo-anim footer-logo">
// //  <Image
// //   src="/white.png"
// //   alt="Idea Media Logo"
// //   width={220}
// //   height={70}
// //   style={{
// //     width: "150px",
// //     height: "auto",
// //   }}
// // />
// // </Link>
// //             <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
// //               A creative digital agency and practical training school helping businesses grow
// //               and building the next generation of digital professionals.
// //             </p>
// //           </div>

// //           {/* Nav links */}
// //           <nav
// //             style={{
// //               display: "flex",
// //               flexWrap: "wrap",
// //               gap: "6px 4px",
// //               maxWidth: "360px",
// //               justifyContent: "flex-end",
// //             }}
// //           >
// //             {links.map((l) => (
// //               <Link
// //                 key={l.href}
// //                 href={l.href}
// //                 className="footer-nav-link"
// //               >
// //                 {l.label}
// //               </Link>
// //             ))}
// //           </nav>
// //         </div>

// //         {/* Divider */}
// //         <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
// //           <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
// //             © {new Date().getFullYear()} Idea Media. All rights reserved.
// //           </p>
// //           <div style={{ display: "flex", gap: "20px" }}>
// //             {["Privacy Policy", "Terms of Use"].map((t) => (
// //               <Link
// //                 key={t}
// //                 href="#"
// //                 className="footer-bottom-link"
// //               >
// //                 {t}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }




// import Link from "next/link";
// import Image from "next/image";

// const links = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Internship", href: "/internship" },
//   { label: "Courses", href: "/courses" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         {/* Top Section */}
//         <div className="footer-top">
//           {/* Brand */}
//           <div className="footer-brand">
//            <Link href="/" className="footer-logo">
//   <Image
//     src="/white.png"
//     alt="Idea Media"
//     width={320}
//     height={100}
//     priority
//     className="footer-logo-img"
//   />
// </Link>

//             <p className="footer-desc">
//               We help businesses grow through creative digital marketing,
//               branding, web development, and industry-focused training
//               programs that prepare the next generation of professionals.
//             </p>

//             <div className="footer-social">
//               <Link href="#">Instagram</Link>
//               <Link href="#">Facebook</Link>
//               <Link href="#">LinkedIn</Link>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="footer-links">
//             <h4>Quick Links</h4>

//             <nav className="footer-nav">
//               {links.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="footer-nav-link"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Contact */}
//           <div className="footer-contact">
//             <h4>Contact</h4>

//             <p>Malappuram, Kerala</p>
//             <p>+91 98765 43210</p>
//             <p>hello@ideamedia.in</p>

//             <Link href="/contact" className="footer-btn">
//               Get Started →
//             </Link>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="footer-bottom">
//           <p className="footer-copy">
//             © {new Date().getFullYear()} Idea Media. All rights reserved.
//           </p>

//           <div className="footer-bottom-links">
//             <Link href="#" className="footer-bottom-link">
//               Privacy Policy
//             </Link>

//             <Link href="#" className="footer-bottom-link">
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

















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

      <div className="container">
        {/* <div className="footer-cta">

          <span>LET'S BUILD SOMETHING AMAZING</span>

          <h2>
            Grow Your Brand
            <br />
            With Idea Media
          </h2>

          <p>
            From branding and digital marketing to web development and
            professional training, we help businesses and students achieve
            measurable growth.
          </p>

          <Link href="/contact" className="footer-btn">
            Start Your Project
            <FaArrowRight />
          </Link>

        </div> */}
      </div>

      {/* ================= MAIN ================= */}

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          {/* <div className="footer-brand">

            <Link href="/" className="footer-logo">
             
              
 

<div className="footer-logo-box">

  <Link href="/" className="footer-logo">

    <Image
      src="/white.png"
      alt="Idea Media"
      width={180}
      height={70}
      className="footer-logo-img"
      priority
    />

  </Link>



  <p>
    Idea Media is a creative digital agency delivering branding,
    marketing, web development and industry-focused training
    programs that empower businesses and future professionals.
  </p>


  <div className="footer-social">

    <Link href="#">
      <FaInstagram />
    </Link>

    <Link href="#">
      <FaFacebookF />
    </Link>

    <Link href="#">
      <FaLinkedinIn />
    </Link>

  </div>

</div>
            </Link>

           

           

          </div> */}
<div className="footer-brand">

  <div className="footer-logo-box">

    <Link href="/" className="footer-logo">

      <Image
        src="/white.png"
        alt="Idea Media"
        width={180}
        height={70}
        className="footer-logo-img"
        priority
      />

    </Link>

    <p>
      Idea Media is a creative digital agency delivering branding,
      marketing, web development and industry-focused training
      programs that empower businesses and future professionals.
    </p>


    <div className="footer-social">

      <Link href="#">
        <FaInstagram />
      </Link>

      <Link href="#">
        <FaFacebookF />
      </Link>

      <Link href="#">
        <FaLinkedinIn />
      </Link>

    </div>

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