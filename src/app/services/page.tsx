"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, Briefcase, Sparkles, Video, MessageSquare } from "lucide-react";

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

const serviceCategories = [
  {
    slug: "branding", title: "Branding & Identity", icon: Briefcase,
    intro: "Your brand is the first thing people remember. We build identities that survive trends.",
    items: [
      { name: "Logo & Visual Identity",     desc: "Timeless logos, color systems, typography, and visual brand guidelines." },
      { name: "Brand Strategy",             desc: "Define your market positioning, core messaging, and audience persona." },
      { name: "Packaging & Print Design",   desc: "Physical packaging and print assets that stand out on retail shelves." },
    ],
  },
  {
    slug: "marketing", title: "Marketing Solutions", icon: TrendingUp,
    intro: "Data-driven campaigns that connect you with the right audience — and convert them.",
    items: [
      { name: "Social Media Marketing",           desc: "Consistent organic campaigns that build audience trust over time." },
      { name: "Performance Ads (Meta & Google)",  desc: "Paid advertising campaigns optimized for direct ROI and conversion." },
      { name: "Lead Generation Pipelines",        desc: "Qualified lead channels that fuel your sales and growth team." },
    ],
  },
  {
    slug: "digital", title: "Digital Marketing & SEO", icon: Sparkles,
    intro: "A complete digital presence that works even when you're off — ranking, retargeting, converting.",
    items: [
      { name: "Search Engine Optimization (SEO)", desc: "Organic search ranking strategies to capture high-intent traffic." },
      { name: "Digital Footprint Audit",          desc: "In-depth review of your digital channels to find growth gaps." },
      { name: "Growth Strategy & Analytics",      desc: "Actionable reporting that tells you exactly what to scale next." },
    ],
  },
  {
    slug: "creative", title: "Creative Design & Motion", icon: Video,
    intro: "Visual work that earns attention in a feed of noise — statics to high-impact video.",
    items: [
      { name: "Marketing Graphic Design",     desc: "High-converting ad graphics, social banners, and marketing collaterals." },
      { name: "Reels & Video Editing",        desc: "Polished short-form and long-form video editing for social channels." },
      { name: "Motion Graphics & Animation",  desc: "Animated logos, intros, lower thirds, and promo videos." },
    ],
  },
  {
    slug: "consulting", title: "Business Consulting", icon: MessageSquare,
    intro: "Strategic guidance that aligns your digital investment with real business outcomes.",
    items: [
      { name: "Go-to-Market Strategy",  desc: "Tailored launch and expansion roadmaps for new products & services." },
      { name: "Brand & Digital Audits", desc: "Honest assessment of your current marketing effectiveness." },
      { name: "Growth Roadmapping",     desc: "Step-by-step quarterly strategy with clear milestones and owners." },
    ],
  },
];

const process = [
  { n: "01", title: "Discovery",    desc: "We analyze your business model, market, and goals before any proposal." },
  { n: "02", title: "Strategy",     desc: "A custom strategic roadmap grounded in data and research, not assumptions." },
  { n: "03", title: "Execution",    desc: "High-quality creative and campaign delivery against defined milestones." },
  { n: "04", title: "Optimization", desc: "Continuous measurement, A/B testing, and performance refining." },
];

export default function ServicesPage() {
  useReveal();

  return (
    <div>
      {/* ════ HERO ════ */}
      <section className="hero-dark">
        <div className="hero-dark-content">
          <div className="hero-badge hero-animate">
            <span className="hero-badge-dot" />
            What We Offer
          </div>
          <h1 className="hero-headline headline-reveal">
            Digital services that<br />
            <span className="amber-mark">move the needle.</span>
          </h1>
          <p className="hero-sub hero-animate hero-animate-delay-1">
            End-to-end creative and marketing solutions for ambitious businesses
            that want a dominant digital presence.
          </p>
          <div className="hero-btns hero-animate hero-animate-delay-2">
            <Link href="/contact" className="btn btn-primary">Get a Free Quote <ArrowRight size={16} /></Link>
            <Link href="/about"   className="btn btn-ghost-dark">Our Approach</Link>
          </div>
        </div>
      </section>

      {/* ════ SERVICE CATEGORIES — light ════ */}
      <section className="section-light section-py">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {serviceCategories.map((cat, catIdx) => {
              const Icon = cat.icon;
              return (
              <div
  key={cat.slug}
  id={cat.slug}
  className="serviceCard reveal"
>
                  {/* Left */}
                  <div>
                 <div className="serviceIcon">
                      <Icon size={22} />
                    </div>
                    <span className="chip chip-amber" style={{ marginBottom: "12px" }}>{`0${catIdx + 1}`}</span>
                    <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "8px", marginBottom: "12px" }}>{cat.title}</h2>
                    <p style={{ color: "var(--slate)", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "24px" }}>{cat.intro}</p>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "10px 22px" }}>
                      Get a Quote <ArrowRight size={15} />
                    </Link>
                  </div>
                  {/* Right */}
                  <div className="serviceItems">
                    {cat.items.map((item) => (
                     <div key={item.name}  className="serviceItem">
                        <div>
                          <span style={{ fontWeight: 600, color: "var(--ink)", display: "block", marginBottom: "4px", fontSize: "0.95rem" }}>{item.name}</span>
                          <span style={{ color: "var(--slate)", fontSize: "0.85rem", lineHeight: 1.5, display: "block" }}>{item.desc}</span>
                        </div>
                        <ArrowUpRight size={16} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ PROCESS — dark ════ */}
      <section className="section-dark section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-white">How We Work</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
              A process built around <span className="amber-mark">results.</span>
            </h2>
          </div>
          <div className="grid-4">
            {process.map((step, i) => (
              <div key={step.n} className={`card-dark reveal reveal-delay-${i + 1}`}>
                <div style={{ fontSize: "0.75rem", fontFamily: "'Space Mono',monospace", color: "var(--amber)", fontWeight: 700, display: "block", marginBottom: "16px", letterSpacing: "0.1em" }}>{step.n}</div>
                <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="section-light" style={{ paddingBlock: "clamp(64px,8vw,96px)", textAlign: "center" }}>
        <div className="container-narrow">
          <div className="reveal">
            <span className="eyebrow" style={{ marginBottom: "20px" }}>Start Today</span>
            <h2 className="cta-headline" style={{ marginBottom: "20px" }}>
              Let&apos;s discuss what your<br /><span className="amber-mark">business needs.</span>
            </h2>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-primary">Book a Free Consultation <ArrowRight size={16} /></Link>
              <Link href="/about"   className="btn btn-ghost">Our Story</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
