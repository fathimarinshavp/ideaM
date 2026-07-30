"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./about.module.css";
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
     
      
{/* ================= ABOUT HERO ================= */}

<section className={styles.aboutHero}>
  <div className="container">

    <div className={styles.breadcrumb}>
      <Link href="/"></Link>
      <span></span>
      <span></span>
    </div>

    <div className={styles.heroBanner}>

      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
        alt="About Idea Media"
        className={styles.bannerImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.heroCenter}>

        <span className={styles.heroTag}>
          ABOUT US
        </span>

        <h1>
          Building <span>Ideas</span>
          <br />
          Creating <span>Impact</span>
        </h1>

        <p>
          Empowering businesses through creativity, technology,
          and practical learning experiences that inspire growth.
        </p>

      </div>

    </div>

  </div>
</section>
    

<section className={styles.aboutSection}>
  <div className="container">

    <span className={styles.sectionTag}>OUR STORY</span>

    <h2 className={styles.sectionTitle}>
      Building Digital Experiences
      <span> That Inspire Growth.</span>
    </h2>

    <p className={styles.sectionLead}>
      Idea Media is a creative agency and learning platform dedicated to helping
      businesses grow while preparing future professionals through real-world
      experience.
    </p>

    <div className={styles.aboutGrid}>

      <div className={styles.aboutImage}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt="Idea Media Team"
        />
      </div>

      <div className={styles.aboutContent}>

        <h3>Our Story</h3>

        <p>
           Idea Media was founded with a vision to bridge creativity, technology, and
  practical learning. What started as a passion for building impactful digital
  solutions has grown into a creative agency dedicated to helping businesses
  strengthen their online presence and achieve sustainable growth.
        
        Alongside delivering professional services, we create opportunities for
  aspiring professionals to gain hands-on experience through real client
  projects. By combining innovation, collaboration, and continuous learning,
  we empower both businesses and future talent to succeed in the digital world.
        </p>

       

      </div>

    </div>

  </div>
</section>

      {/* ════ VISION & MISSION — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: "64px", alignItems: "start" }}>
            {/* Vision */}
            <div className={styles.visionContent}>
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
            <div className={styles.creativeContent}>
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
           <h2 className={styles.whyTitle}>
              What we <span className="amber-mark">stand for.</span>
            </h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={v.title} className={`card reveal reveal-delay-${i + 1}`}>
                <div className="accent-line" />
                <h3 className="font-display" style={{ fontSize: "1.15rem", color: "var(--ink)", marginBottom: "10px" }}>{v.title}</h3>
           <p className={styles.whyText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  {/* <section className="section-dark section-py">
        <div className="container">
          <div className="why-container">
           
            <div className={styles.whySticky}>
              <span className="eyebrow eyebrow-white">Why Idea Media</span>
             <h2 className={styles.visionTitle}>
                Why learners and businesses  <span className="amber-mark">choose us</span>
              </h2>
             <p className={styles.visionText}>
              Everything we do is built around practical experience, measurable results, and long-term career growth.
              </p>
              <Link href="/about" className="btn btn-primary">
                Our Approach <ArrowRight size={16} />
              </Link>
            </div>
           
            <div className={styles.whyCards}>
              {[
                { num: "01", label: "Industry Mentors",   desc: "Learn from professionals actively working with clients every day." },
                { num: "02", label: "Live Client Work",   desc: "Build practical experience by contributing to real agency assignments." },
                { num: "03", label: "Modern Curriculum",  desc: "Continuously updated with the latest digital marketing, design, and AI practices." },
                { num: "04", label: "Placement Support",  desc: "Receive portfolio feedback, interview preparation, and placement guidance." },
              ].map((item) => (
              <div
  key={item.label}
  className={`${styles.whyCard} reveal`}
>
           <span className={styles.whyNumber}>{item.num}</span>
                  <div>
                  <h3 className={styles.whyTitle}>{item.label}</h3>
                 <p className={styles.whyText}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
   
<section className={styles.whySection}>
  <div className="container">

    <div className={styles.whyGrid}>

      {/* Left Side */}
      <div className={styles.whyLeft}>

        <span className={styles.whyTag}>
          WHY IDEA MEDIA
        </span>

        <h2 className={styles.whyTitle}>
          Why learners and businesses
          <span> choose us</span>
        </h2>

        <p className={styles.whyText}>
          Everything we do is built around practical experience,
          measurable results, and long-term career growth.
        </p>

        <Link href="/about" className="btn btn-primary">
          Our Approach
          <ArrowRight size={16}/>
        </Link>
=
      </div>

      {/* Right Side */}

      <div className={styles.whyRight}>

        {[
          {
            num:"01",
            title:"Industry Mentors",
            desc:"Learn from professionals actively working with clients every day."
          },
          {
            num:"02",
            title:"Live Client Work",
            desc:"Build practical experience by contributing to real agency assignments."
          },
          {
            num:"03",
            title:"Modern Curriculum",
            desc:"Continuously updated with the latest digital marketing, design and AI practices."
          },
          {
            num:"04",
            title:"Placement Support",
            desc:"Receive portfolio feedback, interview preparation and placement guidance."
          }
        ].map((item)=>(
          <div
            key={item.num}
            className={styles.whyCard}
          >

            <span className={styles.number}>
              {item.num}
            </span>

            <div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>
      {/* ════ STORY IMAGE — light ════ */}
    
  <section className="section-white section-py">
        <div className="container">
          <div className="creativeGrid">
           <div className="img-box reveal bento-7">
              <img src="/creat.avif" alt="Idea Media Creative Workplace" />
            </div>
           <div className="creativeContent reveal reveal-delay-1 bento-5">
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