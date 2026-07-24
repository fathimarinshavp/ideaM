"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Globe } from "lucide-react";
import styles from "./contact.module.css";
const interests = [
  "Digital Marketing Services",
  "Branding & Identity",
  "Social Media Management",
  "Internship Program",
  "Course Enrollment",
  "Free Workshop",
  "Business Consulting",
  "Other Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div style={{ background: "var(--paper)", paddingTop: "64px" }}>

      {/* ─── Hero ─── */}
      <section style={{ paddingBlock: "clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "var(--ink)", maxWidth: "700px", marginTop: "12px", marginBottom: "20px" }}
          >
            Start your digital journey <span style={{ color: "var(--amber)" }}>today.</span>
          </h1>
          <p style={{ maxWidth: "520px", color: "var(--slate)", lineHeight: 1.65, fontSize: "1.05rem" }}>
            Whether you&apos;re looking for strategic agency services or career guidance — we&apos;d love to talk. Honest advice, zero hard pitch.
          </p>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section style={{ paddingBlock: "64px 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
        <div className={styles.pageGrid}>
            {/* Left: Contact Details & Image */}
            <div>
              <span className="eyebrow">Contact Information</span>
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX" },
                  { icon: Mail, label: "Email", value: "hello@ideamedia.in", href: "mailto:hello@ideamedia.in" },
                  { icon: Globe, label: "Website", value: "www.ideamedia.in", href: "/" },
                  { icon: MapPin, label: "Location", value: "India", href: "#" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                   <div className={styles.contactCard}  key={c.label}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(250, 175, 22, 0.12)", color: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="font-label" style={{ display: "block", fontSize: "0.65rem", marginBottom: "2px" }}>
                          {c.label}
                        </span>
                        <a
                          href={c.href}
                          style={{
                            color: "var(--ink)",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "0.925rem",
                          }}
                        >
                          {c.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Consultation Visual Card */}
            
            </div>

            {/* Right: Contact Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "20px",
                    padding: "48px 32px",
                    background: "var(--white)",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "rgba(250,175,22,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <CheckCircle size={28} style={{ color: "var(--amber)" }} />
                  </div>
                  <h2 className="font-display" style={{ fontSize: "1.75rem", color: "var(--ink)", marginBottom: "10px" }}>
                    Message Received.
                  </h2>
                  <p style={{ color: "var(--slate)", maxWidth: "320px", lineHeight: 1.6, marginBottom: "28px", fontSize: "0.95rem" }}>
                    Thank you for reaching out! Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", interest: "", message: "" }); }}
                    className="btn btn-ghost"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                 className={styles.formCard}
                >
                  <div>
                    <span className="eyebrow" style={{ marginBottom: "4px" }}>Send a Message</span>
                    <h2 className="font-display" style={{ fontSize: "1.5rem", color: "var(--ink)" }}>
                      Tell us what you&apos;re working on.
                    </h2>
                  </div>

                   <div className={styles.formGrid}>
                    <div>
                      <label style={{ display: "block", color: "var(--slate)", fontSize: "0.75rem", marginBottom: "6px", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "var(--slate)", fontSize: "0.75rem", marginBottom: "6px", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", color: "var(--slate)", fontSize: "0.75rem", marginBottom: "6px", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "var(--slate)", fontSize: "0.75rem", marginBottom: "6px", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        I&apos;m interested in
                      </label>
                      <select
                        id="contact-interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="input-field"
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Select interest...</option>
                        {interests.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "var(--slate)", fontSize: "0.75rem", marginBottom: "6px", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or questions..."
                      className="input-field"
                      style={{ resize: "none" }}
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ justifyContent: "center", width: "100%" }}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid rgba(30,33,36,0.3)",
                            borderTopColor: "var(--ink)",
                            borderRadius: "50%",
                            display: "inline-block",
                            animation: "spin 0.7s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p style={{ color: "var(--slate)", fontSize: "0.8rem", textAlign: "center", margin: 0 }}>
                    We respect your privacy and will never share your contact details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section style={{ paddingBlock: "64px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ maxWidth: "600px", marginInline: "auto" }}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--ink)", marginBottom: "16px" }}
            >
              The best time to start was yesterday. <br />
              <span style={{ color: "var(--amber)" }}>The next best time is now.</span>
            </h2>
            <p style={{ color: "var(--slate)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "28px" }}>
              Every great brand and digital career starts with a single decision. Take yours today.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link href="/internship" className="btn btn-ghost">
                Join Free Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
