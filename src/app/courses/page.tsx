"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import styles from "./courses.module.css";
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

const courses = [
  {
    id: "ai", category: "AI Tools & Automation", title: "Artificial Intelligence",
    desc: "Master the tools and workflows shaping every industry — from prompt engineering to business automation.",
    duration: "10 weeks", rating: "4.5 ★", image: "ai.jpg",
    modules: [
      { name: "Prompt Engineering",       desc: "Communicate with AI systems effectively across all major LLMs." },
      { name: "AI Tools Mastery",          desc: "ChatGPT, Midjourney, Gemini, and 20+ production tools." },
      { name: "Automation Workflows",      desc: "Build systems that work autonomously around your business goals." },
      { name: "AI for Content Creation",   desc: "Generate, edit, and publish marketing content at scale." },
      { name: "Business AI Strategy",      desc: "Implement AI in real business contexts with measurable ROI." },
    ],
  },
  {
    id: "marketing", category: "Growth & SEO", title: "Digital Marketing",
    desc: "Every channel that drives real business growth — taught sequentially so each skill builds on the last.",
    duration: "10 weeks", rating: "4.8 ★", image: "/digita.jpg",
    modules: [
      { name: "Search Engine Optimization", desc: "Rank for the terms your customers actually search for." },
      { name: "Google & Meta Advertising",  desc: "Search, display, and social campaigns optimized for ROI." },
      { name: "Social Media Strategy",      desc: "Organic growth strategies across Instagram, LinkedIn & YouTube." },
      { name: "Content Marketing",          desc: "Long-form content and lead magnets that build trust." },
      { name: "Analytics & Attribution",    desc: "Read data, find actionable insights, and refine campaigns." },
    ],
  },
  {
    id: "design", category: "UI & Visual Branding", title: "Graphic Design",
    desc: "Develop a creative eye and master the tools used by working designers at agencies and in-house teams.",
    duration: "12 weeks", rating: "4.9 ★", image: "/graphic.avif"
,
    modules: [
      { name: "Adobe Photoshop & Illustrator", desc: "Photo editing, vector design, icons, and visual assets." },
      { name: "Canva & Fast Creation",          desc: "Rapid, high-quality designs for social media and marketing." },
      { name: "Brand Identity Systems",         desc: "Logos, brand guidelines, color palettes, and typography." },
      { name: "UI/UX Layout Basics",            desc: "Interface design principles, wireframing, and visual hierarchy." },
    ],
  },
  {
    id: "video", category: "Motion & Video Production", title: "Video Editing",
    desc: "Create video content that stops the scroll, tells your story, and builds engaged audiences.",
    duration: "10 weeks", rating: "4.8 ★", image: "/video.avif",
    modules: [
      { name: "Adobe Premiere Pro",       desc: "Professional video editing from import to color grading." },
      { name: "After Effects & Motion",   desc: "Motion graphics, animated titles, and visual effects." },
      { name: "Short-Form Reel Editing",  desc: "Retention-optimized editing techniques for Reels and Shorts." },
      { name: "YouTube Long-Form Editing", desc: "Pacing, story structure, and audio mixing for YouTube." },
    ],
  },
];

const included = [
  "Live project experience", "Industry mentorship", "Completion certificate",
  "Portfolio building support", "Placement assistance", "Recorded session access",
  "Community peer access", "Templates & resources",
];

export default function CoursesPage() {
  useReveal();

  return (
    <div>
      {/* ════ HERO ════ */}
      {/* <section className="hero-dark">
        <div className="hero-dark-content">
          <div className="hero-badge hero-animate">
            <span className="hero-badge-dot" />
            Professional Skill Tracks
          </div>
          <h1 className="hero-headline headline-reveal">
            Build skills that<br />
            <span className="amber-mark">get you hired.</span>
          </h1>
          <p className="hero-sub hero-animate hero-animate-delay-1">
            Practical, industry-aligned courses taught by active agency specialists.
            Not theory — real skills, real tools, real projects.
          </p>
          <div className="hero-btns hero-animate hero-animate-delay-2">
            <Link href="/contact"    className="btn btn-primary">Enrol Now <ArrowRight size={16} /></Link>
            <Link href="/internship" className="btn btn-ghost-dark">View Internship</Link>
          </div>
        </div>
      </section> */}
     {/* <section className="courseHero">

  <div className="courseBreadcrumb">
   
  </div>


  <div className="courseHeroImage">

    <div className="courseHeroOverlay"></div>


    <div className="courseHeroContent">

      <span className="courseLabel">
        COURSES
      </span>


      <h1>
        Learn Skills.
        <br/>
        <span>
          Create Your Future
        </span>
      </h1>


      <p>
        Industry focused courses designed to build
        practical skills and career opportunities.
      </p>


    </div>


  </div>

</section> */}
{/* <section className={styles.courseHero}>

  <div className={styles.courseBreadcrumb}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div className={styles.courseHeroImage}>

    <div className={styles.courseHeroOverlay}></div>

    <div className={styles.courseHeroContent}>

      <span className={styles.courseLabel}>
        COURSES
      </span>

      <h1>
        Learn Skills.
        <br />
        <span>Create Your Future</span>
      </h1>

      <p>
        Industry focused courses designed to build
        practical skills and career opportunities.
      </p>

    </div>

  </div>

</section> */}


<section className={styles.courseHero}>

  <div className={styles.courseHeroImage}>

    <img
      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
      alt="Courses Hero"
      className={styles.heroImage}
    />

    <div className={styles.courseHeroOverlay}></div>

    <div className={styles.courseHeroContent}>

      <span className={styles.courseLabel}>
        COURSES
      </span>

      <h1>
        Learn Skills.
        <br />
        <span>Create Your Future</span>
      </h1>

      <p>
        Industry focused courses designed to build
        practical skills and career opportunities.
      </p>

    </div>

  </div>

</section>
{/* "var(--ink)", */}
      {/* ════ COURSE CARDS — dark theme ════ */}
      <div style={{ background: "var(--ink)", paddingBlock: "20px" }}>
        <div
  style={{
    textAlign: "center",
    padding: "clamp(32px, 6vw, 70px) 20px clamp(20px, 4vw, 40px)",
  }}
>
  <span
    style={{
      display: "inline-block",
      color: "var(--amber)",
      fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}
  >
    Our Courses
  </span>

  <h2
    className="font-display"
    style={{
      color: "#fff",
      fontSize: "clamp(2rem, 5vw, 3.2rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      margin: "10px 0 16px",
    }}
  >
    Explore Our <span style={{ color: "var(--amber)" }}>Programs</span>
  </h2>

  <p
    style={{
      maxWidth: "650px",
      margin: "0 auto",
      color: "rgba(255,255,255,0.65)",
      fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
      lineHeight: 1.7,
      padding: "0 10px",
    }}
  >
    Industry-focused courses designed to build practical skills and prepare you
    for a successful career.
  </p>
</div>
        {courses.map((course, idx) => (
          <section
            key={course.id}
            id={course.id}
            className="section-dark"
            style={{ paddingBlock: "clamp(48px,6vw,80px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="container">
              {/* Header row */}
              <div className="grid-2" style={{ gap: "clamp(32px,5vw,64px)", alignItems: "start" }}>
                {/* Left */}
                <div className={idx % 2 === 0 ? "reveal" : "reveal reveal-delay-1"}>
                  <div className="img-box" style={{ height: "clamp(240px,32vw,400px)", marginBottom: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <img src={course.image} alt={course.title} style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <span className="chip chip-amber">{course.category}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontFamily: "'Space Mono',monospace" }}>
                      <Clock size={12} style={{ color: "var(--amber)" }} />{course.duration}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontFamily: "'Space Mono',monospace" }}>{course.rating}</span>
                  </div>
                </div>
                {/* Right */}
                <div className={idx % 2 === 0 ? "reveal reveal-delay-1" : "reveal"}>
                  <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "#fff", marginBottom: "14px" }}>
                    {course.title}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "28px", fontSize: "1.05rem" }}>{course.desc}</p>

                  {/* Modules */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                    {course.modules.map((m) => (
                      <div key={m.name} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
                        <CheckCircle2 size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                        <div>
                          <span style={{ fontWeight: 600, color: "#fff", fontSize: "0.95rem", display: "block", marginBottom: "2px" }}>{m.name}</span>
                          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.5 }}>{m.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.95rem", padding: "12px 28px" }}>
                      Enrol in Course <ArrowRight size={15} />
                    </Link>
                    <span style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                      Flexible timings · Live &amp; online options
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ════ WHAT'S INCLUDED — dark ════ */}
      <section className="section-dark section-py" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(40px,5vw,72px)", alignItems: "start" }}>
            <div className="reveal">
              <span className="eyebrow eyebrow-white">Every Course Includes</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "#fff", marginBottom: "18px", marginTop: "6px" }}>
                Not just lessons.<br /><span className="amber-mark">A complete launchpad.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "28px", fontSize: "0.95rem" }}>
                Every program includes the practical support needed to transition from student to working professional.
              </p>
              <div className="img-box" style={{ height: "240px", marginBottom: "28px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/smil.avif" alt="Idea Media Learning Workspace" style={{ objectFit: "cover" }} />
              </div>
              <Link href="/contact" className="btn btn-primary">Start Your Journey <ArrowRight size={16} /></Link>
            </div>
            <div className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {included.map((item) => (
                <div key={item} style={{ padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="section-light" style={{ paddingBlock: "clamp(64px,8vw,96px)", textAlign: "center" }}>
        <div className="container-narrow">
          <div className="reveal">
            <span className="eyebrow" style={{ marginBottom: "20px" }}>Enrol Today</span>
            <h2 className="cta-headline" style={{ marginBottom: "20px" }}>
              Ready to build skills that<br /><span className="amber-mark">actually matter?</span>
            </h2>
            <div className="hero-btns">
              <Link href="/contact"    className="btn btn-primary">Book a Free Call <ArrowRight size={16} /></Link>
              <Link href="/internship" className="btn btn-ghost">View Internship</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
