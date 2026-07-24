import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Idea Media | Empowering Students & Businesses",
  description: "Ten reasons why students and businesses choose Idea Media over every alternative.",
};



const process = [
  { n: "01", title: "Learn", desc: "Expert instruction from practitioners doing this work today." },
  { n: "02", title: "Practice", desc: "Apply every concept immediately on real tools and environments." },
  { n: "03", title: "Create", desc: "Build original work — campaigns, designs, content — portfolio-ready." },
  { n: "04", title: "Experience", desc: "Handle live client projects before you graduate. Real stakes." },
  { n: "05", title: "Get Hired", desc: "Leave with portfolio, certificate, and an active placement team." },
];

export default function WhyUsPage() {
  return (
    <div style={{ background: "var(--paper)", paddingTop: "64px" }}>

      {/* ─── Hero ─── */}
      <section style={{ paddingBlock: "clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Why Choose Us</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "var(--ink)", maxWidth: "720px", marginTop: "12px", marginBottom: "20px" }}
          >
            Why students & businesses choose <span style={{ color: "var(--amber)" }}>Idea Media.</span>
          </h1>
          <p style={{ maxWidth: "520px", color: "var(--slate)", lineHeight: 1.65, fontSize: "1.05rem" }}>
            In a crowded market of agencies and training programs, these are the key factors that distinguish us in practice — not marketing copy, but day-to-day reality.
          </p>
        </div>
      </section>

      {/* ─── 10 Reasons Grid ─── */}
    

      {/* ─── Process — Dark Sticky Section ─── */}
      <section className="why-us-sticky-section">
        <div className="container">
          <div className="why-us-container">
            <div className="why-us-sticky-left">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)" }}>Our Process</span>
              <h2
                className="font-display text-h2"
                style={{ color: "var(--white)", marginTop: "8px" }}
              >
                From enrollment to employment.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", marginTop: "12px", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Five deliberately sequenced steps — every one inside a live working environment.
              </p>
            </div>

            <div className="why-us-scroll-right">
              {process.map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr",
                    gap: "16px",
                    paddingBlock: "20px",
                    borderBottom: i < process.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    alignItems: "start",
                  }}
                >
                  <span className="font-label" style={{ color: "var(--amber)", paddingTop: "3px" }}>
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "1.1rem", color: "var(--white)", marginBottom: "6px" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Philosophy Quote ─── */}
      <section style={{ paddingBlock: "64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p
            className="font-display"
            style={{
              fontSize: "clamp(1.35rem, 3vw, 2.25rem)",
              color: "var(--ink)",
              maxWidth: "800px",
              lineHeight: 1.3,
            }}
          >
            &ldquo;The best investment you can make is in yourself. The second best is working with people who have already made that journey — and want to help you make it too.&rdquo;
          </p>
          <span className="font-label" style={{ marginTop: "20px", display: "block", color: "var(--amber)" }}>
            — Idea Media Philosophy
          </span>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ paddingBlock: "64px" }}>
        <div className="container">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--ink)", maxWidth: "580px", marginBottom: "24px" }}
          >
            Ready to experience the <span style={{ color: "var(--amber)" }}>difference?</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Get Started <ArrowRight size={16} />
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
