import Link from "next/link";
import { ArrowRight,  CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import styles from "./about.module.css";
export const metadata: Metadata = {
  title: "About Us | Idea Media",
  description:
    "Idea Media is a creative media and digital solutions company bridging education and employment through hands-on training, internships, and real-world experience.",
};

const values = [
  { label: "Innovation", desc: "New challenges require fresh approaches, not recycled playbooks." },
  { label: "Integrity", desc: "We state what we deliver, then execute with excellence." },
  { label: "Creativity", desc: "Strategic visual thinking that elevates brand identity." },
  { label: "Continuous Learning", desc: "Every campaign is an opportunity to refine and improve our craft." },
  { label: "Measurable Growth", desc: "For our clients and trainees — driving real progress always." },
];

const missions = [
  "Deliver strategic marketing work that produces clear business ROI.",
  "Train digital creators who are job-ready from day one.",
  "Build an environment where creative innovation is the default standard.",
  "Make high-quality digital education and agency services accessible.",
];

const milestones = [
  { year: "2022", event: "Founded as a specialized digital growth & media agency." },
  { year: "2023", event: "Launched live client internship cohort with 50+ students." },
  { year: "2024", event: "Expanded to 4 core skill tracks and 100+ business partnerships." },
  { year: "2025", event: "

Building a strong foundation in digital services and practical career training through continuous learning and innovation." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--paper)", paddingTop: "64px" }}>

      {/* ─── Hero with Visual Image ─── */}
      <section
        style={{
          paddingBlock: "clamp(40px, 6vw, 72px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">About Idea Media</span>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                  color: "var(--ink)",
                  maxWidth: "760px",
                  marginTop: "12px",
                  marginBottom: "20px",
                }}
              >
                Bridging the gap between <span style={{ color: "var(--amber)" }}>education</span> and industry.
              </h1>
              <p
                style={{
                  maxWidth: "540px",
                  color: "var(--slate)",
                  lineHeight: 1.65,
                  fontSize: "1.05rem",
                  marginBottom: "24px",
                }}
              >
                We operate both as an active digital agency driving business results and as a hands-on training institute. Students work directly alongside industry experts on real client briefs.
              </p>
            </div>

            {/* Hero Office Visual Image */}
           <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Idea Media Studio Team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Story + Image + Timeline ─── */}
      <section style={{ paddingBlock: "64px 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
         <div className={styles.storyGrid}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2
                className="font-display text-h2"
                style={{ color: "var(--ink)", marginTop: "12px", marginBottom: "20px" }}
              >
                An agency and a school, built together.
              </h2>
              <div className={styles.ctaButtons}>
                <p>
                  Idea Media was founded to solve a critical gap: traditional education was teaching theory, but employers needed candidates who could handle real campaigns from day one.
                </p>
                <p>
                  We solved both problems simultaneously. Our agency handles active client projects, while our trainees work alongside senior mentors on those exact deliverables. Clients get sharp visual work; students get verifiable portfolio experience.
                </p>
              </div>

              {/* Story Visual Image */}
             <div className={styles.imageBox}>
                <img
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1000&q=80"
                  alt="Idea Media Creative Workplace"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <span className="eyebrow">Our Milestones</span>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {milestones.map((m) => (
                  <div
                    key={m.year}
                    style={{
                      padding: "20px",
                      borderRadius: "12px",
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      className="font-label"
                      style={{ color: "var(--amber)", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}
                    >
                      {m.year}
                    </span>
                    <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission (Dark Section) ─── */}
      <section style={{ paddingBlock: "80px", background: "var(--ink)", color: "var(--white)" }}>
        <div className="container">
        <div className={styles.darkGrid}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>Vision</span>
              <h2
                className="font-display text-h2"
                style={{ color: "var(--white)", marginTop: "12px", marginBottom: "16px" }}
              >
                A trusted hub for digital agency work & practical career training.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65, fontSize: "0.95rem" }}>
                We measure success by the careers launched and brands transformed, providing real value across every partnership.
              </p>
            </div>

            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>Mission</span>
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {missions.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values Grid ─── */}
      <section style={{ paddingBlock: "64px 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "36px" }}>
            <span className="eyebrow">Our Core Principles</span>
            <h2 className="font-display text-h2" style={{ color: "var(--ink)", marginTop: "8px" }}>
              What we stand for.
            </h2>
          </div>

         <div className={styles.valueGrid}>
            {values.map((v) => (
              <div
                key={v.label}
                className="card-clean"
                style={{
                  padding: "24px",
                  background: "var(--white)",
                  borderRadius: "14px",
                }}
              >
                <h3 className="font-display" style={{ fontSize: "1.1rem", color: "var(--ink)", marginBottom: "8px" }}>
                  {v.label}
                </h3>
                <p style={{ color: "var(--slate)", lineHeight: 1.55, margin: 0, fontSize: "0.875rem" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ paddingBlock: "64px" }}>
        <div className="container">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--ink)", maxWidth: "600px", marginBottom: "24px" }}
          >
            Ready to build something <span style={{ color: "var(--amber)" }}>extraordinary?</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Work With Us <ArrowRight size={16} />
            </Link>
            <Link href="/internship" className="btn btn-ghost">
              Join Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
