"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, GraduationCap, Briefcase, Award } from "lucide-react";
import { div } from "framer-motion/client";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const PHRASES = [
  "grow your business.",
  "elevate your brand.",
  "launch your career.",
  "master digital skills.",
];

function TypewriterSuffix() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const full = PHRASES[phraseIdx];
    if (!deleting && displayed.length < full.length) {
      timerRef.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 50);
    } else if (!deleting && displayed.length === full.length) {
      timerRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [displayed, deleting, phraseIdx]);

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
    <div style={{ background: "var(--paper)" }}>

      {/* ════════════════════════════════════════════════
          HERO SECTION
         ════════════════════════════════════════════════ */}
      <section
        style={{
          paddingBlock: "clamp(40px, 6vw, 72px)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Hero Text */}
            <div>
              <div className="reveal">
{/*               
                <h1
                  className="font-display text-display"
                  style={{
                    color: "var(--ink)",
                    marginBottom: "16px",
                    fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)",
                    lineHeight: 1.15,
                  }}
                >
                  Strategic media to <br />
                  <TypewriterSuffix />
                </h1> */}
                <h1
  className="font-display text-display"
  style={{
    color: "var(--ink)",
    marginBottom: "16px",
    fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)",
    lineHeight: 1.15,
  }}
>
  Strategic media to <TypewriterSuffix />
</h1>
              </div>

              <p
                className="reveal"
                style={{
                  transitionDelay: "150ms",
                  color: "var(--slate)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  maxWidth: "520px",
                  marginBottom: "32px",
                }}
              >
                Idea Media delivers measurable growth for businesses through strategic branding and digital marketing, while training the next generation of digital creators.
              </p>

              <div
                className="reveal"
                style={{ display: "flex", gap: "16px", flexWrap: "wrap", transitionDelay: "300ms" }}
              >
                <Link href="/services" className="btn btn-primary">
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link href="/internship" className="btn btn-ghost">
                  Join Program <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="hero-image reveal"
            
            >
              <img
                src="/about.png"
                alt="Idea Media Agency Team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT OVERVIEW
         ════════════════════════════════════════════════ */}
      <section style={{ paddingBlock: "64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
        <div className="about-grid">
            {/* Image */}
            <div
              className="reveal"
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(260px, 30vw, 360px)",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src="/about2.png"
                alt="Idea Media Workplace"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Content */}
            <div className="reveal">
              <span className="eyebrow">Who We Are</span>
              <h2 className="font-display text-h2" style={{ color: "var(--ink)", marginTop: "8px", marginBottom: "16px" }}>
                Bridging business growth with practical industry education.
              </h2>
              <p style={{ color: "var(--slate)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "24px" }}>
                We operate both as an active digital agency driving business results and as a hands-on training institute. Students work directly alongside industry experts on real client briefs.
              </p>
              <Link href="/about" className="btn btn-ghost" style={{ paddingInline: 0 }}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          AGENCY SERVICES (HIGH LEVEL STUDIO STYLE)
         ════════════════════════════════════════════════ */}
      <section style={{ paddingBlock: "72px", borderBottom: "1px solid var(--border)", background: "var(--white)" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span className="chip chip-amber" style={{ marginBottom: "12px" }}>Agency Capabilities</span>
              <h2 className="font-display text-h2" style={{ color: "var(--ink)", marginTop: "4px" }}>
                Strategic Agency Services
              </h2>
            </div>
            <Link href="/services" className="btn btn-ghost" style={{ fontSize: "0.9rem" }}>
              Explore All Capabilities <ArrowRight size={16} />
            </Link>
          </div>

          <div
  style={{
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid var(--border)",
  }}
>
  {[
    {
      title: "Performance Marketing",
      desc: "Helping businesses grow through SEO, Google Ads and data-driven campaigns.",
    },
    {
      title: "Brand Identity",
      desc: "Building memorable brands with logos, strategy and visual identity.",
    },
    {
      title: "Creative Production",
      desc: "Reels, video editing and social media content that captures attention.",
    },
    {
      title: "Website Design",
      desc: "Modern responsive websites built for speed, SEO and conversion.",
    },
  ].map((service, index) => (
    <Link
      key={service.title}
      href="/services"
     className="service-row reveal"
    
    >
      <span
        style={{
          color: "var(--amber)",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        0{index + 1}
      </span>

      <h3
        style={{
          margin: 0,
          color: "var(--ink)",
          fontSize: "30px",
          fontWeight: 600,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "var(--slate)",
          lineHeight: 1.6,
          fontSize: "15px",
        }}
      >
        {service.desc}
      </p>

      <ArrowUpRight
        size={24}
        style={{
          color: "var(--amber)",
        }}
      />
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PRACTICAL INTERNSHIP & TRAINING (HIGH LEVEL STUDIO LIST)
         ════════════════════════════════════════════════ */}
      <section style={{ paddingBlock: "72px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span className="chip chip-amber" style={{ marginBottom: "12px" }}>For Future Practitioners</span>
              <h2 className="font-display text-h2" style={{ color: "var(--ink)", marginTop: "4px" }}>
                Practical Internship & Training
              </h2>
            </div>
            <Link href="/internship" className="btn btn-ghost" style={{ fontSize: "0.9rem" }}>
              Explore Internship Program <ArrowRight size={16} />
            </Link>
          </div>

          {/* High Level Editorial List Layout */}
          <div style={{ borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
            {[
              {
                num: "01",
                icon: GraduationCap,
                title: "Live Client Campaigns",
                desc: "Execute actual agency briefs for real clients. Graduate with verifiable work experience on your resume.",
                badge: "100% Practical Experience",
              },
              {
                num: "02",
                icon: Award,
                title: "Senior Agency Mentorship",
                desc: "Direct daily collaboration with practicing visual designers, performance marketers, and creative directors.",
                badge: "Active Practitioners",
              },
              {
                num: "03",
                icon: CheckCircle2,
                title: "Placement Assistance",
                desc: "Industry-calibrated interview prep, direct portfolio reviews, and referral access to our partner network.",
                badge: "Job Ready Support",
              },
              {
  num: "04",
  icon: Briefcase,
  title: "Career Workshops",
  desc: "Industry-focused workshops covering resume building, interview preparation, communication skills, and career guidance.",
  badge: "Career Preparation",
},
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="internship-row reveal"
                 
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--amber)", fontFamily: "Space Grotesk, sans-serif" }}>
                      {item.num}
                    </span>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--white)", border: "1px solid var(--border)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display" style={{ fontSize: "1.25rem", color: "var(--ink)", marginBottom: "4px" }}>
                        {item.title}
                      </h3>
                      <span className="chip chip-amber" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>{item.badge}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                    <p style={{ color: "var(--slate)", fontSize: "0.925rem", lineHeight: 1.6, margin: 0, maxWidth: "480px" }}>
                      {item.desc}
                    </p>
                    <Link
                      href="/internship"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        background: "var(--white)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--ink)",
                        flexShrink: 0,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURED COURSES (HIGH LEVEL EDITORIAL ROWS)
         ════════════════════════════════════════════════ */}
      <section style={{ paddingBlock: "72px", borderBottom: "1px solid var(--border)", background: "var(--white)" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span className="eyebrow">Professional Skill Tracks</span>
              <h2 className="font-display text-h2" style={{ color: "var(--ink)", marginTop: "4px" }}>
                Featured Courses
              </h2>
            </div>
            <Link href="/courses" className="btn btn-ghost" style={{ fontSize: "0.9rem" }}>
              Explore All Tracks <ArrowRight size={16} />
            </Link>
          </div>

          {/* Minimalist Studio Rows */}
         <div
  style={{
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid var(--border)",
  }}
>
  {[
    {
      title: "Artificial Intelligence",
      desc: "AI Tools, Prompt Engineering & Automation",
      duration: "8 Weeks",
      image:
        "/ai.png",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, Google Ads & Social Media",
      duration: "10 Weeks",
      image:
        "/digital.png",
    },
    {
      title: "Graphic Design",
      desc: "Branding, UI & Creative Design",
      duration: "12 Weeks",
      image:
        "/graphic.png",
    },
    {
      title: "Video Editing",
      desc: "Premiere Pro, Reels & Motion Graphics",
      duration: "10 Weeks",
      image:
        "/video.png",
    },
  ].map((course) => (
    <Link
      key={course.title}
      href="/courses"
    className="course-row"
    >
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        style={{
          width: "110px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      {/* Content */}
      <div>
        <h3
          style={{
            margin: 0,
            fontSize: "1.4rem",
            color: "var(--ink)",
            fontWeight: 600,
          }}
        >
          {course.title}
        </h3>

        <p
          style={{
            margin: "8px 0",
            color: "var(--slate)",
            fontSize: "15px",
          }}
        >
          {course.desc}
        </p>

        <span
          style={{
            display: "inline-block",
            padding: "5px 12px",
            borderRadius: "999px",
            background: "var(--paper)",
            color: "var(--amber)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {course.duration}
        </span>
      </div>

      {/* Arrow */}
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: ".25s",
        }}
      >
        <ArrowUpRight size={18} />
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>
                
         

      {/* ════════════════════════════════════════════════
          WHY IDEA MEDIA (BLACK THEME STICKY SCROLLING)
         ════════════════════════════════════════════════ */}
      <section className="why-us-sticky-section">
        <div className="container">
          <div className="why-us-container">
            {/* Sticky Left Column */}
            <div className="why-us-sticky-left reveal">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Why Idea Media</span>
              <h2 className="font-display text-h2" style={{ color: "var(--white)", marginTop: "8px", marginBottom: "12px" }}>
               What Makes Idea Media Different
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.55, maxWidth: "340px", marginBottom: "20px" }}>
                Hundreds of alternatives exist. Here&apos;s what makes the difference when you work with us.
              </p>
              <Link href="/why-us" className="btn btn-primary" style={{ display: "inline-flex", gap: "8px" }}>
                See Why We Stand Out <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Column: Scrolling Item List */}
            <div className="why-us-scroll-right">
              {[
                { num: "01", label: "Industry Mentors", desc: "Active agency professionals who do the work every day, not full-time academics." },
                { num: "02", label: "Live Client Work", desc: "Real brand briefs that appear on your resume and portfolio as genuine work experience." },
                { num: "03", label: "Modern Curriculum", desc: "Updated quarterly — AI tools and prompt engineering are built into week one." },
                { num: "04", label: "Placement Support", desc: "Dedicated placement team actively opening doors and connecting you with hiring partners." },
                { num: "05", label: "Affordable Access", desc: "High-end agency services and practical education without inflated agency prices." },
                { num: "06", label: "1-on-1 Guidance", desc: "Personalized mentorship and direct campaign feedback every step of the way." },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className="why-item reveal"
                  
                >
                  <span style={{ color: "var(--amber)", fontWeight: 700, fontSize: "1.1rem", fontFamily: "Space Grotesk, sans-serif" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{ color: "var(--white)", fontWeight: 600, fontSize: "1.15rem", marginBottom: "6px" }}>
                      {item.label}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.925rem", lineHeight: 1.5, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CALL TO ACTION BANNER
         ════════════════════════════════════════════════ */}
      <section style={{ paddingBlock: "64px", background: "var(--paper)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: "600px", marginInline: "auto" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--ink)", marginBottom: "16px" }}>
              Ready to grow your brand or build your career?
            </h2>
            <p style={{ color: "var(--slate)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "32px" }}>
              Book a consultation with our team or talk to an advisor about our upcoming training cohorts.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "12px 28px" }}>
                Book a Free Call <ArrowUpRight size={16} />
              </Link>
              <Link href="/internship" className="btn btn-ghost" style={{ padding: "12px 28px" }}>
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
