import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import styles from "./courses.module.css";
export const metadata: Metadata = {
  title: "Professional Courses | Idea Media",
  description: "AI, Digital Marketing, Graphic Design, and Video Editing — practical courses taught by industry professionals.",
};

const courses = [
  {
    id: "ai",
    category: "AI Tools & Automation",
    title: "Artificial Intelligence",
    desc: "Master the tools and workflows shaping every industry — from prompt engineering to business automation.",
    duration: "10 weeks",
    students: "120+",
    Format: "Online + Offline",
    modules: [
      { name: "Prompt Engineering", desc: "Communicate with AI systems effectively across all major LLMs." },
      { name: "AI Tools Mastery", desc: "ChatGPT, Midjourney, Gemini, and 20+ production tools." },
      { name: "Automation Workflows", desc: "Build systems that work autonomously around your business goals." },
      { name: "AI for Content Creation", desc: "Generate, edit, and publish marketing content at scale." },
      { name: "Business AI Strategy", desc: "Implement AI in real business contexts with measurable ROI." },
    ],
  },
  {
    id: "marketing",
    category: "Growth & SEO",
    title: "Digital Marketing",
    desc: "Every channel that drives real business growth — taught sequentially so each skill builds on the last.",
    duration: "10 weeks",
    students: "200+",
    rating: "4.8 ★",
    modules: [
      { name: "Search Engine Optimization", desc: "Rank for the terms your customers actually search for." },
      { name: "Google & Meta Advertising", desc: "Create search, display, and social campaigns optimized for ROI." },
      { name: "Social Media Strategy", desc: "Organic growth strategies across Instagram, LinkedIn & YouTube." },
      { name: "Content Marketing", desc: "Long-form content and lead magnets that build trust." },
      { name: "Analytics & Attribution", desc: "Read data, find actionable insights, and refine campaigns." },
    ],
  },
  {
    id: "design",
    category: "UI & Visual Branding",
    title: "Graphic Design",
    desc: "Develop a creative eye and master the tools used by working designers at agencies and in-house teams.",
    duration: "12 weeks",
    students: "150+",
    rating: "4.9 ★",
    modules: [
      { name: "Adobe Photoshop & Illustrator", desc: "Photo editing, vector design, icons, and visual assets." },
      { name: "Canva & Fast Creation", desc: "Rapid, high-quality designs for social media and marketing." },
      { name: "Brand Identity Systems", desc: "Logos, brand guidelines, color palettes, and typography." },
      { name: "UI/UX Layout Basics", desc: "Interface design principles, wireframing, and visual hierarchy." },
    ],
  },
  {
    id: "video",
    category: "Motion & Video Production",
    title: "Video Editing",
    desc: "Create video content that stops the scroll, tells your story, and builds engaged audiences across platforms.",
    duration: "10 weeks",
    students: "100+",
    rating: "4.8 ★",
    modules: [
      { name: "Adobe Premiere Pro", desc: "Professional video editing from import to color grading." },
      { name: "After Effects & Motion", desc: "Motion graphics, animated titles, and visual effects." },
      { name: "Short-Form Reel Editing", desc: "Retention-optimized editing techniques for Reels and Shorts." },
      { name: "YouTube Long-Form Editing", desc: "Pacing, story structure, and audio mixing for YouTube." },
    ],
  },
];

const included = [
  "Live project experience",
  "Industry mentorship",
  "Completion certificate",
  "Portfolio building support",
  "Placement assistance",
  "Recorded session access",
  "Community peer access",
  "Templates & resources",
];

export default function CoursesPage() {
  return (
    <div style={{ background: "var(--paper)", paddingTop: "64px" }}>

      {/* ─── Hero with Image ─── */}
      <section style={{ paddingBlock: "clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
         <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Professional Skill Tracks</span>
              <h1
                className="font-display"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "var(--ink)", maxWidth: "700px", marginTop: "12px", marginBottom: "20px" }}
              >
                Build skills that <span style={{ color: "var(--amber)" }}>get you hired.</span>
              </h1>
              <p style={{ maxWidth: "520px", color: "var(--slate)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Practical, industry-aligned courses taught by active agency specialists. Not theory — real skills, real tools, real projects.
              </p>
            </div>

            {/* Courses Visual Image */}
          <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
                alt="Idea Media Students Learning Design and AI"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Course Cards ─── */}
      <section style={{ paddingBlock: "64px 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {courses.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="card-clean"
                style={{
                  padding: "clamp(24px, 4vw, 40px)",
                  background: "var(--white)",
                  borderRadius: "20px",
                }}
              >
                {/* Course Header */}
                <div className={styles.courseHeader}>
                  <div>
                    <span className="chip chip-amber" style={{ marginBottom: "12px" }}>{course.category}</span>
                    <h2
                      className="font-display text-h2"
                      style={{ color: "var(--ink)", marginTop: "4px", marginBottom: "8px" }}
                    >
                      {course.title}
                    </h2>
                    <p style={{ color: "var(--slate)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "560px", margin: 0 }}>
                      {course.desc}
                    </p>
                  </div>

                  {/* Metadata Pills */}
                  <div className={styles.metaWrapper}>
                    {[
                      { label: "Duration", value: course.duration },
                      { label: "Students", value: course.students },
                      { label: "Rating", value: course.rating },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className={styles.metaCard}
                      >
                        <span className="font-label" style={{ display: "block", fontSize: "0.65rem", marginBottom: "2px" }}>
                          {m.label}
                        </span>
                        <span style={{ fontWeight: 700, color: "var(--ink)", fontSize: "0.95rem" }}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modules Grid */}
                <div style={{ marginBottom: "28px" }}>
                  <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--slate)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
                    What You&apos;ll Learn:
                  </h4>
                  <div className={styles.moduleGrid}>
                    {course.modules.map((m) => (
                      <div
                        key={m.name}
                       className={styles.moduleCard}
                      >
                        <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.9rem", display: "block", marginBottom: "4px" }}>
                          {m.name}
                        </span>
                        <span style={{ color: "var(--slate)", fontSize: "0.825rem", lineHeight: 1.5, display: "block" }}>
                          {m.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
              <div className={styles.courseFooter}>
                  <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: "0.875rem" }}>
                    Enroll in Course <ArrowRight size={15} />
                  </Link>
                  <span style={{ color: "var(--slate)", fontSize: "0.85rem", fontWeight: 500 }}>
                    Flexible timings · Live online & in-person options
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What's Included (Dark Section with Workspace Photo) ─── */}
      <section style={{ paddingBlock: "80px", background: "var(--ink)", color: "var(--white)" }}>
        <div className="container">
        <div className={styles.includeGrid}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>Every Course Includes</span>
              <h2
                className="font-display text-h2"
                style={{ color: "var(--white)", marginTop: "12px", marginBottom: "16px" }}
              >
                Not just lessons. A complete launchpad.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "24px" }}>
                Every program includes the practical support structure required to transition from student to working professional.
              </p>

              {/* Workspace Photo inside Dark Section */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  height: "190px",
                  marginBottom: "28px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Idea Media Learning Workspace"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <Link href="/contact" className="btn btn-primary">
                Start Your Journey <ArrowRight size={16} />
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {included.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
