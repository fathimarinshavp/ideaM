"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, GraduationCap, Briefcase, Award,
  CheckCircle2, Users, Clock, Star,
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

const tracks = [
  {
    icon: GraduationCap, title: "Digital Marketing Track",
    desc: "Master SEO, Meta Ads, Google Ads, content strategy and social media management working on live client campaigns.",
    duration: "3 Months", badge: "Most Popular",
  },
  {
    icon: Award, title: "Graphic Design Track",
    desc: "Build your creative portfolio in branding, social media design, and visual identity using industry-standard tools.",
    duration: "3 Months", badge: "Creative",
  },
  {
    icon: Briefcase, title: "Video Editing Track",
    desc: "Learn Premiere Pro, After Effects, and short-form video strategy producing reels and motion graphics for real brands.",
    duration: "3 Months", badge: "High Demand",
  },
  {
    icon: Star, title: "AI & Automation Track",
    desc: "Leverage AI tools, prompt engineering, and workflow automation to deliver smarter, faster creative output.",
    duration: "2 Months", badge: "Cutting Edge",
  },
];

const included = [
  "Work on real client campaigns",
  "Daily senior mentor collaboration",
  "Build a verified portfolio",
  "Completion certificate",
  "Placement assistance & referrals",
  "Interview preparation",
  "Community & peer network",
  "Recorded resource library",
];

const faqs = [
  { q: "Is this a paid internship?", a: "Our practical internship program has a nominal enrollment fee that covers mentorship, tools access, and placement support." },
  { q: "Do I need prior experience?", a: "No prior experience is required. We take motivated beginners and build their skills from the ground up with real projects." },
  { q: "Will I work on real client projects?", a: "Yes — from week one, interns are assigned to live client briefs alongside senior agency professionals." },
  { q: "What certificate will I receive?", a: "You'll receive an Idea Media completion certificate and a verified portfolio of agency-quality work." },
];

export default function InternshipPage() {
  useReveal();

  return (
    <div>
      {/* ════ HERO ════ */}
      <section className="hero-dark">
        <div className="hero-dark-content">
          <div className="hero-badge hero-animate">
            <span className="hero-badge-dot" />
            Practical Internship Program
          </div>
          <h1 className="hero-headline headline-reveal">
            Learn by doing.<br />
            <span className="amber-mark">Get hired faster.</span>
          </h1>
          <p className="hero-sub hero-animate hero-animate-delay-1">
            Work on real agency campaigns, get mentored by active industry professionals,
            and graduate with a portfolio that proves you can do the job.
          </p>
          <div className="hero-btns hero-animate hero-animate-delay-2">
            <Link href="/contact" className="btn btn-primary">Apply Now <ArrowRight size={16} /></Link>
            <Link href="/courses" className="btn btn-ghost-dark">View Courses</Link>
          </div>
        </div>
      </section>

      {/* ════ STATS STRIP ════ */}
      <div className="section-white" style={{ paddingBlock: "40px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", textAlign: "center" }}>
            {[
              { stat: "100+", label: "Students Trained" },
              { stat: "3",    label: "Months Duration" },
              { stat: "20+",  label: "Partner Companies" },
              { stat: "4",    label: "Skill Tracks" },
            ].map((s) => (
              <div key={s.label} className="reveal">
                <div style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: "var(--amber)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.stat}</div>
                <div style={{ fontSize: "0.75rem", fontFamily: "'Space Mono',monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--slate)", marginTop: "8px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ INTERNSHIP TRACKS — light ════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="section-header reveal" style={{ marginBottom: "48px" }}>
            <span className="eyebrow">Choose Your Path</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "6px" }}>
              Internship <span className="amber-mark">Skill Tracks</span>
            </h2>
          </div>
          <div className="grid-2" style={{ gap: "24px", alignItems: "start" }}>
            {tracks.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className={`card-dark reveal reveal-delay-${(i % 4) + 1}`}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--amber-bg)", color: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} />
                    </div>
                    <span className="chip chip-amber">{t.badge}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: "1.2rem", color: "var(--ink)", marginBottom: "10px" }}>{t.title}</h3>
                  <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "20px" }}>{t.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Clock size={14} style={{ color: "var(--amber)" }} />
                    <span style={{ fontSize: "0.8rem", color: "var(--slate)", fontFamily: "'Space Mono',monospace" }}>{t.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-white">The Process</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
              How the <span className="amber-mark">program works.</span>
            </h2>
          </div>
         <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", display:"flex", flexDirection:"column" }}>

{
[
{ num:"01", title:"Apply & Enroll", desc:"Fill in a short application. Our advisors will reach out within 24 hours to walk you through the program options." },
{ num:"02", title:"Track Orientation", desc:"Join your cohort for an orientation session, tool setup, and meet your assigned senior mentor." },
{ num:"03", title:"Live Client Work", desc:"Work on real active client campaigns — social content, branding, ads — alongside your mentor every day." },
{ num:"04", title:"Portfolio & Placement", desc:"Complete your verified portfolio. Our placement team connects you with hiring partners and opens interview doors." },
].map((step)=>(
<div key={step.num} className="program-step reveal">

<span className="process-number">
{step.num}
</span>

<h3 className="process-title">
{step.title}
</h3>

<p className="process-desc">
{step.desc}
</p>

</div>
))

}

</div>
        </div>
      </section>

      {/* ════ WHAT'S INCLUDED — light ════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: "clamp(32px,5vw,64px)" }}>
            <div className="reveal">
              <span className="eyebrow">Everything Included</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "var(--ink)", marginBottom: "18px", marginTop: "6px" }}>
                Not just an internship.<br /><span className="amber-mark">A launchpad.</span>
              </h2>
              <p style={{ color: "var(--slate)", lineHeight: 1.7, marginBottom: "28px" }}>
                Every track includes the complete support structure needed to transition
                from student to working professional.
              </p>
              <Link href="/contact" className="btn btn-primary">Start Your Application <ArrowRight size={16} /></Link>
            </div>
            <div className="reveal reveal-delay-1">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {included.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--amber)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--ink)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: "64px", alignItems: "start" }}>
            <div className="reveal">
              <span className="eyebrow eyebrow-white">Common Questions</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
                Frequently<br /><span className="amber-mark">Asked.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ padding: "24px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <h3 style={{ color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>{faq.q}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
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
            <span className="eyebrow" style={{ marginBottom: "20px" }}>Apply Today</span>
            <h2 className="cta-headline" style={{ marginBottom: "20px" }}>
              Your career in digital starts<br /><span className="amber-mark">with one step.</span>
            </h2>
            <p style={{ color: "var(--slate)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "36px" }}>
              Applications are open. Cohort spots are limited — apply now to secure your place.
            </p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-primary">Apply for Internship <ArrowRight size={16} /></Link>
              <Link href="/courses" className="btn btn-ghost">View All Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
