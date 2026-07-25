"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

const missions = [
  "Create impactful digital solutions that help businesses grow and connect with their audience.",
  "Provide practical learning experiences through real client projects.",
  "Empower businesses with innovative digital strategies.",
  "Prepare professionals with practical skills, mentorship and industry exposure.",
];

const values = [
  { title: "Innovation",  text: "We constantly explore new ideas and technologies to create meaningful digital experiences." },
  { title: "Creativity",  text: "Every project is crafted with originality, strategy and attention to detail." },
  { title: "Collaboration",   text: "Honest communication and transparency guide every client relationship." },
  { title: "Learning",      text: "We believe businesses and individuals grow through continuous learning." },
];

const milestones = [
  { year: "2022", text: "Idea Media was founded with a vision to bridge creativity and digital business." },
  { year: "2023", text: "Started hands-on training programs focused on real industry projects." },
  { year: "2024", text: "Expanded digital marketing, branding and creative production services." },
  { year: "2025", text: "Building a stronger ecosystem connecting businesses and future professionals." },
];

export default function AboutPage() {
  useReveal();

  return (
    <div>
      {/* ════ HERO ════ */}
      <section className="hero-dark">
        <div className="hero-dark-content">
          <div className="hero-badge hero-animate">
            <span className="hero-badge-dot" />
            Who We Are
          </div>
          <h1 className="hero-headline headline-reveal">
            Building <span className="amber-mark">Brands.</span><br />
            Creating <span className="amber-mark">Careers.</span>
          </h1>
          <p className="hero-sub hero-animate hero-animate-delay-1">
           Idea Media is a creative agency and digital learning platform helping businesses grow through branding, marketing and technology while preparing future professionals with practical industry experience.
          </p>
          <div className="hero-btns hero-animate hero-animate-delay-2">
            <Link href="/contact"    className="btn btn-primary">Work With Us <ArrowRight size={16} /></Link>
            <Link href="/internship" className="btn btn-ghost-dark">Join Programs</Link>
          </div>
        </div>
      </section>

      {/* ════ STORY — light ════ */}
      <section className="section-light section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
            {/* Text */}
            <div className="reveal bento-5">
              <span className="eyebrow">Our Story</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--ink)", marginBottom: "24px", lineHeight: 1.1 }}>
                A creative agency and learning ecosystem,<br />
                <span className="amber-mark">built together.</span>
              </h2>
              <p style={{ color: "var(--slate)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "20px" }}>
               Idea Media was created to bridge the gap between learning and industry by combining real client projects with practical skill development.
              </p>
              <p style={{ color: "var(--slate)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Our agency handles active client projects while trainees work alongside senior
                mentors on those exact deliverables. Businesses receive creative digital solutions while learners gain hands-on experience through real-world projects.
              </p>
            </div>
            {/* Image */}
            <div className="reveal reveal-delay-1 bento-7">
           <div className="story-image">
                <img src="/home1.png.avif" alt="Idea Media Team Collaboration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ VISION & MISSION — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: "64px", alignItems: "start" }}>
            {/* Vision */}
            <div className="reveal">
              <span className="eyebrow eyebrow-white">Our Vision</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginBottom: "18px", marginTop: "6px" }}>
               Building a trusted ecosystem for digital solutions and &amp; <span className="amber-mark">career-focused learning.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                We measure success by the careers launched and brands transformed, providing
                real value across every partnership.
              </p>
            </div>
            {/* Mission */}
            <div className="reveal reveal-delay-1">
              <span className="eyebrow eyebrow-white">Our Mission</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "6px" }}>
                {missions.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ VALUES — light ════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow">Our Core Principles</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "6px" }}>
              What we <span className="amber-mark">stand for.</span>
            </h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={v.title} className={`card reveal reveal-delay-${i + 1}`}>
                <div className="accent-line" />
                <h3 className="font-display" style={{ fontSize: "1.15rem", color: "var(--ink)", marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ color: "var(--slate)", lineHeight: 1.6, margin: 0, fontSize: "0.875rem" }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ MILESTONES — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-white">Our Journey</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
              Growing <span className="amber-mark">step by step.</span>
            </h2>
          </div>
          <div className="grid-4" style={{ gap: "20px" }}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`card-dark reveal reveal-delay-${i + 1}`}>
                <div style={{ fontSize: "2.2rem", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: "var(--amber)", letterSpacing: "-0.04em", marginBottom: "12px" }}>{m.year}</div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ STORY IMAGE — light ════ */}
      <section className="section-white section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
           <div className="img-box reveal bento-7">
              <img src="/creat.avif" alt="Idea Media Creative Workplace" />
            </div>
            <div className="reveal reveal-delay-1 bento-5">
              <span className="eyebrow">Behind the Scenes</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--ink)", marginBottom: "24px", lineHeight: 1.1 }}>
                Where creativity meets <span className="amber-mark">growth.</span>
              </h2>
              <p style={{ color: "var(--slate)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "32px" }}>
              Our workspace connects creativity, technology and learning. Every project becomes an opportunity to create value for clients and build real skills.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                Get In Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="section-dark" style={{ paddingBlock: "clamp(64px,8vw,96px)", textAlign: "center" }}>
        <div className="container-narrow">
          <div className="reveal">
            <span className="eyebrow eyebrow-white" style={{ marginBottom: "20px" }}>Work With Us</span>
            <h2 className="cta-headline" style={{ color: "#fff", marginBottom: "20px" }}>
              Ready to build something<br /><span className="amber-mark">extraordinary?</span>
            </h2>
            <div className="hero-btns">
              <Link href="/contact"    className="btn btn-primary">Contact Our Team <ArrowRight size={16} /></Link>
              <Link href="/internship" className="btn btn-ghost-dark">Join Our Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}