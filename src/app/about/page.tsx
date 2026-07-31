"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./about.module.css";
import {
  Eye,
  Target,
    Palette,
  Laptop,
  GraduationCap,
 


} from "lucide-react";
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
    

  {/* <section className={styles.aboutSection}>
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
  </section> */}
<section className={styles.storySection}>
  <div className="container">

    <div className={styles.storyHeader}>

      <span className={styles.storyTag}>
        OUR STORY
      </span>

      <h2 className={styles.storyTitle}>
        Building Digital Experiences
        <span> That Inspire Growth.</span>
      </h2>

      <p className={styles.storyLead}>
        Idea Media is a creative agency and learning platform dedicated to helping
        businesses grow while preparing future professionals through real-world
        experience.
      </p>

    </div>

    <div className={styles.storyGrid}>

      {/* Image */}

      <div className={styles.storyImage}>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt="Idea Media Team"
        />

      </div>

      {/* Content */}

      <div className={styles.storyCard}>

        <span className={styles.smallTitle}>
          WHO WE ARE
        </span>

        <h3>
          Turning Ideas Into
          <span> Digital Success.</span>
        </h3>

        <p>
          Idea Media was founded with a vision to bridge creativity,
          technology and practical learning. What started as a passion
          for digital innovation has evolved into a creative agency
          helping businesses establish strong digital identities.
        </p>

        <p>
          Alongside professional services, we provide aspiring creatives
          and marketers with real-world project experience, mentorship,
          and industry-focused training.
        </p>

        <div className={styles.storyStats}>

          <div>
            <h4>100+</h4>
            <span>Projects</span>
          </div>

          <div>
            <h4>50+</h4>
            <span>Students</span>
          </div>

          <div>
            <h4>3+</h4>
            <span>Years</span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* ════ VISION & MISSION — dark ════ */}
      {/* <section className="section-dark section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: "64px", alignItems: "start" }}>
           
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
      </section> */}
<section className={styles.vmSection}>
  <div className="container">

    <div className={styles.vmHeader}>
      <span className={styles.vmTag}>
        OUR PURPOSE
      </span>

      <h2 className={styles.vmHeading}>
        Vision that inspires.
        <span> Mission that delivers.</span>
      </h2>

      <p className={styles.vmIntro}>
        We combine creativity, technology and education to help businesses
        grow while preparing the next generation of digital professionals.
      </p>
    </div>

 <div className={styles.vmGrid}>

  <div className={styles.vmCard}>
    <div className={styles.vmIcon}>
      <Eye size={22} />
    </div>

    <span className={styles.cardTag}>Our Vision</span>

    <h3>Building a trusted ecosystem.</h3>

    <p>
      Helping businesses grow while creating career-focused learning
      opportunities through innovation and practical experience.
    </p>
  </div>

  <div className={styles.vmCard}>
    <div className={styles.vmIcon}>
      <Target size={22} />
    </div>

    <span className={styles.cardTag}>Our Mission</span>

    <p>
      <CheckCircle2 size={16}/> Deliver impactful digital solutions.
    </p>

    <p>
      <CheckCircle2 size={16}/> Provide real-world learning experiences.
    </p>

    <p>
      <CheckCircle2 size={16}/> Prepare future-ready professionals.
    </p>

    <p>
      <CheckCircle2 size={16}/> Build long-term client partnerships.
    </p>
  </div>

</div>

  </div>
</section>
      {/* ════ VALUES — light ════ */}
    
  
   
{/* <section className={styles.whySection}>
  <div className="container">

    <div className={styles.whyGrid}>

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
</section> */}
<section className={styles.whySection}>
  <div className="container">

    <div className={styles.whyHeader}>
      <span className={styles.whyTag}>
        WHY IDEA MEDIA
      </span>

      <h2 className={styles.whyHeading}>
        Why learners &
        <span> businesses choose us</span>
      </h2>

      <p className={styles.whyIntro}>
        Everything we build is focused on practical experience,
        measurable business growth and preparing future professionals.
      </p>
    </div>

    <div className={styles.whyCards}>

      {[
        {
          num: "01",
          title: "Industry Mentors",
          desc: "Learn directly from professionals working on real client projects every day."
        },
        {
          num: "02",
          title: "Live Client Projects",
          desc: "Gain hands-on experience by contributing to actual agency work instead of demo exercises."
        },
        {
          num: "03",
          title: "Future Ready Skills",
          desc: "Master branding, digital marketing, AI tools and creative technologies."
        },
        {
          num: "04",
          title: "Career Support",
          desc: "Portfolio reviews, interview preparation and placement guidance help launch your career."
        }
      ].map((item) => (

        <div
          key={item.num}
          className={styles.whyCard}
        >

          <div className={styles.cardNumber}>
            {item.num}
          </div>

          <div className={styles.cardContent}>
            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>

        </div>

      ))}

    </div>

 <div className={styles.whyButton}>
  <Link href="/about" className={styles.whyBtn}>
    <span>Learn More</span>
    <ArrowRight size={18} />
  </Link>
</div>

  </div>
</section>
      {/* ════ STORY IMAGE — light ════ */}
    
  {/* <section className="section-white section-py">
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
      </section> */}
   
<section className={styles.workspaceSection}>
  <div className="container">

    <div className={styles.workspaceGrid}>

      {/* Left Content */}

      <div className={styles.workspaceContent}>

        <span className={styles.workspaceTag}>
          BEHIND THE SCENES
        </span>

        <h2 className={styles.workspaceTitle}>
          Where creativity,
          <span> innovation & learning</span>
          come together.
        </h2>

        <p className={styles.workspaceText}>
          Every Idea Media project combines strategy, creativity and
          technology. Our workspace is where ideas become brands,
          students become professionals and businesses discover new
          opportunities for growth.
        </p>

        <div className={styles.workspaceFeatures}>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Palette size={22}/>
            </div>

            <div>
              <h4>Creative Thinking</h4>
              <p>Designs that inspire and communicate.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Laptop size={22}/>
            </div>

            <div>
              <h4>Digital Innovation</h4>
              <p>Modern technology for modern businesses.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <GraduationCap size={22}/>
            </div>

            <div>
              <h4>Practical Learning</h4>
              <p>Real projects with industry mentors.</p>
            </div>
          </div>

        </div>

     <Link href="/contact" className={styles.contactBtn}>
  <span>Get In Touch</span>
  <ArrowRight size={18} />
</Link>

      </div>

      {/* Right */}

      <div className={styles.workspaceImage}>

        <img
          src="/creat.avif"
          alt="Creative Workspace"
        />

      </div>

    </div>

  </div>
</section>
 
      {/* ════ CTA ════ */}
      {/* <section className="section-dark" style={{ paddingBlock: "clamp(64px,8vw,96px)", textAlign: "center" }}>
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
      </section> */}
      <section className={styles.ctaSection}>
  <div className="container">

    <div className={styles.ctaCard}>

      <span className={styles.ctaTag}>
        WORK WITH US
      </span>

      <h2 className={styles.ctaTitle}>
        Ready to build something
        <span> extraordinary?</span>
      </h2>

      <p className={styles.ctaText}>
        Whether you're looking to grow your business or start your digital
        career, Idea Media is here to help you take the next step with
        creativity, innovation and practical experience.
      </p>

      <div className={styles.ctaButtons}>
<Link href="/contact" className={styles.teamBtn}>
  <span>Contact Our Team</span>
  <ArrowRight size={18} />
</Link>

        <Link href="/internship" className={styles.ctaSecondary}>
          Join Our Programs
        </Link>

      </div>

    </div>

  </div>
</section>
    </div>
  );
}