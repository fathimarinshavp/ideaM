"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight,
  CheckCircle2, GraduationCap, Briefcase, Award, MonitorPlay, Sparkles
} from "lucide-react";

/* ── Scroll reveal hook ── */
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

/* ── Typewriter ── */
const PHRASES = ["grow your business.", "elevate your brand.", "launch your career.", "master digital skills."];
function TypewriterSuffix() {
  const [idx, setIdx]           = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const full = PHRASES[idx];
    if (!deleting && displayed.length < full.length) {
      timer.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 52);
    } else if (!deleting && displayed.length === full.length) {
      timer.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timer.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [displayed, deleting, idx]);

  return (
    <span>
      <span style={{ color: "var(--amber)" }}>{displayed}</span>
      <span className="cursor-blink" aria-hidden="true" />
    </span>
  );
}

export default function HomePage() {
  useReveal();

  return (
    <div>
      {/* ════════════ HERO — dark, centered, pill badge ════════════ */}
      <section className="hero-dark" style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-dark-content" style={{ width: "100%" }}>
          <div className="hero-badge hero-animate">
            <span className="hero-badge-dot" />
            Digital Agency &amp; Training School
          </div>

          <h1 className="hero-headline headline-reveal">
            We help you<br />
            <TypewriterSuffix />
          </h1>

          <p className="hero-sub hero-animate hero-animate-delay-1" style={{ fontSize: "1.15rem" }}>
            A creative agency and digital learning studio helping businesses grow while preparing the next generation of designers, marketers, and creators through practical, industry-focused training.
          </p>

          <div className="hero-btns hero-animate hero-animate-delay-2">
            <Link href="/services" className="btn btn-primary">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link href="/internship" className="btn btn-ghost-dark">
              Join Program <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ MARQUEE — trust ticker ════════════ */}
      <div
        className="section-white"
        style={{ paddingBlock: "32px", borderBottom: "1px solid var(--border)" }}
      >
        <div className="marquee-wrap">
          <div className="marquee-track">
            {["Branding", "SEO", "Video Editing", "Graphic Design", "AI Tools",
              "Meta Ads", "Social Media", "Motion Graphics", "Web Design", "Internship",
              "Branding", "SEO", "Video Editing", "Graphic Design", "AI Tools",
              "Meta Ads", "Social Media", "Motion Graphics", "Web Design", "Internship",
            ].map((t, i) => (
              <span key={i} className="marquee-item" style={{ fontSize: "1.4rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ WHO WE ARE — Redesigned Bento Grid ════════════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "var(--ink)", marginTop: "6px" }}>
            Real projects. <span className="amber-mark">Real mentors.</span><br />
              Real career growth. 
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px" }}>
            {/* Main Image */}
            <div className="reveal bento-8">
              <div className="story-image" style={{ height: "400px", borderRadius: "24px" }}>
                <img src="/home1.png.avif" alt="Idea Media Workplace" />
              </div>
            </div>
            
            {/* Core Mission */}
            <div className="card reveal reveal-delay-1 bento-4" style={{ background: "var(--amber)", borderColor: "var(--amber)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 className="font-display" style={{ fontSize: "2rem", color: "var(--ink)", lineHeight: 1.1, marginBottom: "16px" }}>Learn from professionals.</h3>
              <p style={{ color: "rgba(30,33,36,0.8)", fontSize: "0.95rem" }}>
               
               We combine agency experience with practical training, giving every learner the opportunity to build a portfolio that employers actually value.
              </p>
            </div>

            {/* Stats */}
            <div className="card reveal bento-4" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div>
                <div style={{ fontSize: "3.5rem", fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", color: "var(--ink)", lineHeight: 1 }}>50+</div>
                <div className="eyebrow" style={{ margin: 0, marginTop: "8px" }}>Live Projects</div>
              </div>
            </div>
            
            <div className="card reveal reveal-delay-1 bento-4" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div>
                <div style={{ fontSize: "3.5rem", fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", color: "var(--ink)", lineHeight: 1 }}>100+</div>
                <div className="eyebrow" style={{ margin: 0, marginTop: "8px" }}>Trained Creators</div>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="reveal reveal-delay-2 bento-4">
              <div className="story-image" style={{ height: "100%", minHeight: "180px", borderRadius: "24px" }}>
                <img src="/home2.avif" alt="Team meeting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ LATEST WORKS (NEW) ════════════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="section-header-row">
            <div className="reveal">
              <span className="eyebrow eyebrow-white">Our Portfolio</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
                 <span className="amber-mark">Selected Projects</span>
              </h2>
            </div>
            <Link href="/services" className="btn btn-ghost-dark reveal reveal-delay-1">
              View All Work <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              {
  img: "/brand.avif",
  title: "Complete Brand Identity System",
  tag: "Branding",
},
{
  img: "/smil.avif",
  title: "Social Media Marketing Campaign",
  tag: "Marketing",
},
{
  img: "/photo.avif",
  title: "Commercial Video Production",
  tag: "Media",
},
            ].map((work, i) => (
              <div key={work.title} className={`reveal reveal-delay-${i + 1}`} style={{ cursor: "pointer",group: true }}>
                <div style={{ overflow: "hidden", borderRadius: "16px", marginBottom: "16px", aspectRatio: "4/3", position: "relative" }}>
                  <img src={work.img} alt={work.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="hover-scale" />
                </div>
                <span className="chip chip-amber" style={{ marginBottom: "8px" }}>{work.tag}</span>
                <h3 className="font-display" style={{ fontSize: "1.25rem", color: "#fff" }}>{work.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES (ADDED BACK) ════════════ */}
      <section className="section-dark section-py" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="reveal">
              <span className="eyebrow eyebrow-white">Agency Capabilities</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
                Digital Services Built <span className="amber-mark">for Growth</span>
              </h2>
            </div>
            <Link href="/services" className="btn btn-ghost-dark reveal reveal-delay-1" style={{ fontSize: "0.875rem" }}>
              All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column" }}>
            {[
              { num: "01", title: "Performance Marketing", desc: "SEO, paid advertising, and conversion-focused campaigns designed to generate measurable business results." },
              { num: "02", title: "Brand Identity",        desc: "Memorable visual identities, logo systems, and brand guidelines that help businesses stand out." },
              { num: "03", title: "Creative Production",   desc: "Professional photography, video editing, motion graphics, and social-first creative content." },
              { num: "04", title: "Website Design",        desc: "Fast, responsive websites focused on performance, user experience, and lead generation." },
            ].map((s) => (
              <Link
  key={s.title}
  href="/services"
  className="service-row reveal"
>
                <span style={{ color: "var(--amber)", fontWeight: 700, fontSize: "0.85rem", fontFamily: "'Space Mono',monospace" }}>{s.num}</span>
                <h3 style={{ margin: 0, color: "#fff", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                <ArrowUpRight size={22} style={{ color: "var(--amber)", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ INTERNSHIP & TRAINING — Redesigned ════════════ */}
    <section className="section-dark section-py">
  <div className="container">

    <div className="internship-layout">

      {/* Left */}

      <div className="internship-left reveal">
        <span className="eyebrow eyebrow-white">
          Practical Internship
        </span>

        <h2 className="font-display internship-title">
          Learn with experts.<br />
          <span className="amber-mark">Work on real projects.</span>
        </h2>

        <p className="internship-desc">
          Build practical experience through live client work,
          expert mentorship, portfolio development, and career
          support—all inside a real agency environment.
        </p>

        <Link href="/internship" className="btn btn-primary">
          Explore Internship
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right */}

      <div className="internship-list reveal reveal-delay-1">

        <div className="internship-item">
          <span>01</span>

          <div>
            <h3>Live Client Projects</h3>
            <p>Work on real campaigns from day one.</p>
          </div>
        </div>

        <div className="internship-item">
          <span>02</span>

          <div>
            <h3>Industry Mentorship</h3>
            <p>Learn alongside experienced professionals.</p>
          </div>
        </div>

        <div className="internship-item">
          <span>03</span>

          <div>
            <h3>Portfolio Building</h3>
            <p>Create work that employers actually value.</p>
          </div>
        </div>

        <div className="internship-item">
          <span>04</span>

          <div>
            <h3>Placement Support</h3>
            <p>Resume reviews, interview prep and guidance.</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* ════════════ FEATURED COURSES — Unique Immersive Style ════════════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="section-header-row">
            <div className="reveal">
              <span className="eyebrow">Professional Skill Tracks</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "6px" }}>
                Professional Learning  <span className="amber-mark">Paths</span>
              </h2>
            </div>
            <Link href="/courses" className="btn btn-ghost reveal reveal-delay-1" style={{ fontSize: "0.875rem" }}>
              View All Tracks <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {[
              { title: "Artificial Intelligence", desc: "Learn practical AI tools, prompt engineering, automation, and productivity workflows.", tag: "8 Weeks", image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80" },
              { title: "Digital Marketing",       desc: "Master SEO, Meta Ads, Google Ads, analytics, and content marketing.", tag: "10 Weeks", image: "/digita.jpg" },
              { title: "Graphic Design",          desc: "Develop branding, visual identity, UI design, and professional design workflows.", tag: "12 Weeks", image: "/graphic.avif" },
              { title: "Video Editing",           desc: "Create engaging commercial videos, motion graphics, and social media content.", tag: "10 Weeks", image: "/video.avif" },
            ].map((c, i) => (
              <div key={c.title} className={`reveal course-card-hover reveal-delay-${(i % 2) + 1}`} style={{ position: "relative", borderRadius: "24px", overflow: "hidden", minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "32px", color: "#fff", textDecoration: "none" } as any}>
                <img src={c.image} alt={c.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} className="course-bg" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)", zIndex: 1 }} />
                
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "100px", background: "var(--amber)", color: "var(--ink)", fontSize: "0.75rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.tag}</span>
                  <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{c.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px", maxWidth: "90%" }}>{c.desc}</p>
                  
                  <Link href="/courses" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--amber)", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                    View Course Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY IDEA MEDIA ════════════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="why-container">
            {/* Sticky left */}
            <div className="why-sticky reveal">
              <span className="eyebrow eyebrow-white">Why Idea Media</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "#fff", marginBottom: "14px" }}>
                Why learners and businesses  <span className="amber-mark">choose us</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "24px", fontSize: "0.95rem" }}>
              Everything we do is built around practical experience, measurable results, and long-term career growth.
              </p>
              <Link href="/about" className="btn btn-primary">
                Our Approach <ArrowRight size={16} />
              </Link>
            </div>
            {/* Scrolling right */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { num: "01", label: "Industry Mentors",   desc: "Learn from professionals actively working with clients every day." },
                { num: "02", label: "Live Client Work",   desc: "Build practical experience by contributing to real agency assignments." },
                { num: "03", label: "Modern Curriculum",  desc: "Continuously updated with the latest digital marketing, design, and AI practices." },
                { num: "04", label: "Placement Support",  desc: "Receive portfolio feedback, interview preparation, and placement guidance." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="reveal"
                  style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "16px", padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span style={{ color: "var(--amber)", fontWeight: 700, fontSize: "0.8rem", fontFamily: "'Space Mono',monospace", paddingTop: "2px" }}>{item.num}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", marginBottom: "8px" }}>{item.label}</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="section-white" style={{ paddingBlock: "clamp(80px,10vw,120px)", textAlign: "center" }}>
        <div className="container-narrow">
          <div className="reveal">
            <span className="eyebrow" style={{ marginBottom: "20px" }}>Ready to Start?</span>
            <h2 className="cta-headline" style={{ color: "var(--ink)", marginBottom: "24px", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Let's build something meaningful <br />
              <span className="amber-mark">together.</span>
            </h2>
            <p style={{ color: "var(--slate)", fontSize: "1.1rem", lineHeight: 1.65, marginBottom: "40px" }}>
             Whether you're looking to grow your business or start a creative career, our team is ready to help you take the next step.
            </p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-primary" style={{ padding: "14px 32px", fontSize: "1rem" }}>
               Talk to Our Team<ArrowUpRight size={18} />
              </Link>
              <Link href="/internship" className="btn btn-ghost" style={{ padding: "14px 32px", fontSize: "1rem" }}>
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
