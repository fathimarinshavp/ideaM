"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function ContactPage() {
  useReveal();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* ════ HERO ════ */}
      <section className="hero-dark">
        <div className="hero-dark-content">
          <div className="hero-badge hero-animate">
            <span className="hero-badge-dot" />
            Let&apos;s Connect
          </div>
          <h1 className="hero-headline headline-reveal">
            Need Digital Solutions or<br />
            <span className="amber-mark">Career Guidance?</span>
          </h1>
          <p className="hero-sub hero-animate hero-animate-delay-1">
         Whether you need creative digital solutions or want to begin your learning journey, our team is ready to help.
          </p>
        </div>
      </section>

      {/* ════ CONTACT FORM + INFO — light ════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>

            {/* Left — Info */}
            <div className="reveal">
              <span className="eyebrow">Contact Info</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "var(--ink)", marginBottom: "24px", marginTop: "6px" }}>
                Let&apos;s build something<br /><span className="amber-mark">together.</span>
              </h2>
              <p style={{ color: "var(--slate)", lineHeight: 1.7, marginBottom: "36px" }}>
               Have a business idea, project requirement, or learning goal? Reach out to our team and we'll help you find the right path. 
              </p>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: Mail,    label: "Email",    value: "hello@ideamedia.in" },
                  { icon: Phone,   label: "Phone",    value: "+91 98765 43210" },
                  { icon: MapPin,  label: "Location", value: "India — Available Remotely Worldwide" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "11px", background: "var(--amber-bg)", color: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", fontFamily: "'Space Mono',monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--slate)", marginBottom: "4px" }}>{c.label}</div>
                        <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.95rem" }}>{c.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick links */}
              <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/services"   className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>Our Services</Link>
                <Link href="/internship" className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>Internship</Link>
                <Link href="/courses"    className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>Courses</Link>
              </div>
            </div>

            {/* Right — Form */}
            <div className="reveal reveal-delay-1">
              {sent ? (
                <div style={{ padding: "48px 40px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
                  <h3 className="font-display" style={{ fontSize: "1.5rem", color: "var(--ink)", marginBottom: "12px" }}>Message Sent!</h3>
                  <p style={{ color: "var(--slate)", lineHeight: 1.65 }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ padding: "clamp(24px,4vw,40px)", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "18px" }}
                >
                  <h3 className="font-display" style={{ fontSize: "1.3rem", color: "var(--ink)", marginBottom: "4px" }}>
                    Send us a message
                  </h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>First Name *</label>
                      <input required className="input-field" placeholder="Jane" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>Last Name *</label>
                      <input required className="input-field" placeholder="Smith" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>Email Address *</label>
                    <input required type="email" className="input-field" placeholder="jane@company.com" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>I&apos;m interested in</label>
                    <select className="input-field" style={{ cursor: "pointer" }}>
                      <option value="">Select an option…</option>
                      <option>Agency Services (Branding / Marketing)</option>
                      <option>Internship Program</option>
                      <option>Courses / Training</option>
                      <option>Partnership / Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>Message *</label>
                    <textarea required className="input-field" rows={5} placeholder="Tell us about your project or what you're looking for…" style={{ resize: "vertical" }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════ ALTERNATE ENQUIRY PATHS — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-white">Quick Paths</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
              Not sure where to <span className="amber-mark">start?</span>
            </h2>
          </div>
          <div className="grid-3">
            {[
              { title: "For Businesses",       desc: "Book a free strategy call to explore how we can grow your brand.", href: "/services",   cta: "See Services" },
              { title: "For Students",         desc: "Apply for our internship program and start building your career.", href: "/internship", cta: "Apply Now" },
              { title: "For Course Learners",  desc: "Browse our professional skill tracks and find the right program.", href: "/courses",    cta: "View Courses" },
            ].map((p, i) => (
              <div key={p.title} className={`card-dark reveal reveal-delay-${i + 1}`} style={{ textAlign: "center" }}>
                <h3 className="font-display" style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "10px" }}>{p.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "20px" }}>{p.desc}</p>
                <Link href={p.href} className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "10px 22px" }}>
                  {p.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
