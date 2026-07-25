import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Award, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import styles from "./internship.module.css";

export const metadata: Metadata = {
  title: "Internship & Training | Idea Media",
  description: "Practical internship and training programs that turn students into job-ready digital professionals through real client work.",
};

const programs = [
  {
    tag: "Free",
    title: "Orientation Workshop",
    desc: "A one-day immersion into the digital industry landscape — tools, roles, salaries, and how to break in. No prerequisites required.",
    duration: "1 day",
  },
  {
    tag: "Free",
    title: "Orientation Program",
    desc: "One week of structured overview covering all major digital disciplines. Helps you pick the right specialisation before committing.",
    duration: "1 week",
  },
  {
    tag: "Most Popular",
    title: "Job-Oriented Internship",
    desc: "Our flagship program. Work inside the agency on live client projects, guided by working professionals. Leave with a portfolio and certificate.",
    duration: "3–6 months",
  },
  {
  tag: "For Organizations",
  title: "Corporate Training",
  desc: "Customized training programs designed for companies to improve employee skills in digital marketing, AI tools, branding, and creative technologies.",
  duration: "Flexible"
}
 
];

const activities = [
  { label: "Live Client Projects", desc: "Real campaigns, real clients, real deliverables from week one." },
  { label: "Portfolio Building", desc: "You leave with tangible work to show employers, not certificates alone." },
  { label: "Mock Interviews", desc: "Preparation sessions with honest, industry-calibrated feedback." },
  { label: "Career Guidance", desc: "Personalised roadmaps based on your background and career ambitions." },
];

const benefits = [
  "Industry mentorship from active practitioners",
  "Real client experience on your resume",
  "Recognised internship certificate",
  "Skill development in in-demand digital tools",
  "Placement assistance from our partner network",
  "Active community of peers and alumni",
];

export default function InternshipPage() {
  return (
    <div style={{ background: "var(--paper)", paddingTop: "64px" }}>

      {/* ─── Hero with Image ─── */}
      <section style={{ paddingBlock: "clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Internship & Training</span>
              <h1
                className="font-display"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "var(--ink)", maxWidth: "720px", marginTop: "12px", marginBottom: "20px" }}
              >
                Learn. Practice. <span style={{ color: "var(--amber)" }}>Grow.</span>
              </h1>
              <p style={{ maxWidth: "520px", color: "var(--slate)", lineHeight: 1.65, fontSize: "1.05rem", marginBottom: "32px" }}>
                Not a course. Not a bootcamp. A working agency environment where you do real work from week one — and build the portfolio to prove it.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Join Free Workshop
                </Link>
              </div>
            </div>

            {/* Internship Classroom/Mentorship Image */}
           
           
           <div className={styles.heroImage}>
              <img
                src="/internship1.png"
                alt="Idea Media Mentorship and Training"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Programs ─── */}
      <section style={{ paddingBlock: "64px 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: "40px" }}>
            <span className="eyebrow">Available Programs</span>
            <h2 className="font-display text-h2" style={{ color: "var(--ink)", marginTop: "8px" }}>
              Choose your path.
            </h2>
          </div>

       <div className={styles.programGrid}>
            {programs.map((p) => (
              <div
                key={p.title}
                className="card-clean"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "var(--white)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span className={`chip${p.tag === "Most Popular" ? " chip-amber" : ""}`}>{p.tag}</span>
                    <span className="font-label" style={{ color: "var(--slate)" }}>{p.duration}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: "1.2rem", color: "var(--ink)", marginBottom: "10px" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-ghost"
                  style={{ marginTop: "24px", width: "100%", justifyContent: "center", fontSize: "0.85rem", padding: "8px 16px" }}
                >
                  Apply for Track <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What Happens Inside (Dark Section with Team Visual) ─── */}
      <section style={{ paddingBlock: "80px", background: "var(--ink)", color: "var(--white)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Left: What You'll Do */}
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>What You&apos;ll Do</span>
              <h2 className="font-display text-h2" style={{ color: "var(--white)", marginTop: "12px", marginBottom: "16px" }}>
                Hands-on from day one.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "28px" }}>
                Forget passive learning. You&apos;ll be working on live campaigns, designing real assets, and solving actual business problems within your first week.
              </p>

              {/* Workshop Image inside dark section */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  height: "200px",
                  marginBottom: "28px",
                }}
              >
                <img
                  src="/internship2.png"
                  alt="Idea Media Team Workshop"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {activities.map((a) => (
                  <div
                    key={a.label}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <h4 style={{ color: "var(--white)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "4px" }}>
                      {a.label}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Benefits */}
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>Key Benefits</span>
              <h3 className="font-display" style={{ fontSize: "1.4rem", color: "var(--white)", marginTop: "12px", marginBottom: "24px" }}>
                What you get out of the program.
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.925rem", lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: "24px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <p className="font-display" style={{ fontSize: "1.1rem", color: "var(--white)", lineHeight: 1.4, marginBottom: "8px" }}>
                  &ldquo;Stop studying marketing. Start doing it.&rdquo;
                </p>
                <span className="font-label" style={{ color: "var(--amber)" }}>— Idea Media</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ paddingBlock: "64px" }}>
        <div className="container">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--ink)", maxWidth: "580px", marginBottom: "20px" }}
          >
            Your career starts <span style={{ color: "var(--amber)" }}>today.</span>
          </h2>
          <p style={{ color: "var(--slate)", maxWidth: "460px", lineHeight: 1.65, marginBottom: "32px", fontSize: "0.95rem" }}>
            Don&apos;t wait for the right time. Apply now and our team will connect with you for a guidance call.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/courses" className="btn btn-ghost">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
