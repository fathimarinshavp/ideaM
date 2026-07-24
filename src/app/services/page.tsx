import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp, Briefcase, Sparkles, Video, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import styles from "./service.module.css";
export const metadata: Metadata = {
  title: "Services | Idea Media",
  description: "Branding, digital marketing, social media, creative design, and business consulting — end-to-end digital services for growing brands.",
};

const serviceCategories = [
  {
    slug: "branding",
    title: "Branding & Identity",
    icon: Briefcase,
    intro: "Your brand is the first thing people remember and the last thing they forget. We build identities that survive trends.",
    items: [
      { name: "Logo & Visual Identity", desc: "Timeless logos, color systems, typography, and visual brand guidelines." },
      { name: "Brand Strategy & Positioning", desc: "Define your market positioning, core messaging, and audience persona." },
      { name: "Packaging & Print Design", desc: "Physical packaging and print assets that stand out on retail shelves." },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing Solutions",
    icon: TrendingUp,
    intro: "Data-driven campaigns that connect you with the right audience at the right moment — and convert them.",
    items: [
      { name: "Social Media Marketing", desc: "Consistent organic content campaigns that build audience trust over time." },
      { name: "Performance Ads (Meta & Google)", desc: "Paid advertising campaigns optimized for direct ROI and conversion." },
      { name: "Lead Generation Pipelines", desc: "Qualified lead channels that fuel your sales and growth team." },
    ],
  },
  {
    slug: "digital",
    title: "Digital Marketing & SEO",
    icon: Sparkles,
    intro: "A complete digital presence that works even when you're off — ranking high, retargeting, and converting.",
    items: [
      { name: "Search Engine Optimization (SEO)", desc: "Organic search ranking strategies to capture high-intent traffic." },
      { name: "Digital Footprint Audit", desc: "In-depth review of your digital channels to find growth gaps." },
      { name: "Growth Strategy & Analytics", desc: "Actionable reporting that tells you exactly what to scale next." },
    ],
  },
  {
    slug: "creative",
    title: "Creative Design & Motion",
    icon: Video,
    intro: "Visual work that earns attention in a feed of noise — from static graphics to high-impact video.",
    items: [
      { name: "Marketing Graphic Design", desc: "High-converting ad graphics, social banners, and marketing collaterals." },
      { name: "Reels & Video Editing", desc: "Polished short-form and long-form video editing for social channels." },
      { name: "Motion Graphics & Animation", desc: "Animated logos, intros, lower thirds, and promo videos." },
    ],
  },
  {
    slug: "consulting",
    title: "Business Consulting",
    icon: MessageSquare,
    intro: "Strategic guidance that aligns your digital investment with real, measurable business outcomes.",
    items: [
      { name: "Go-to-Market Strategy", desc: "Tailored launch and expansion roadmaps for new products & services." },
      { name: "Brand & Digital Audits", desc: "Honest assessment of your current marketing effectiveness." },
      { name: "Growth Roadmapping", desc: "Step-by-step quarterly strategy with clear milestones and owners." },
    ],
  },
];

const process = [
  { n: "01", title: "Discovery", desc: "We analyze your business model, market, and goals before making any proposal." },
  { n: "02", title: "Strategy", desc: "A custom strategic roadmap grounded in data and research, not assumptions." },
  { n: "03", title: "Execution", desc: "High-quality creative and campaign delivery against defined milestones." },
  { n: "04", title: "Optimization", desc: "Continuous measurement, A/B testing, and performance refining." },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--paper)", paddingTop: "64px" }}>

      {/* ─── Hero ─── */}
      <section style={{ paddingBlock: "clamp(40px, 6vw, 72px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">What We Offer</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "var(--ink)", maxWidth: "700px", marginTop: "12px", marginBottom: "20px" }}
          >
            Digital services that <span style={{ color: "var(--amber)" }}>move the needle.</span>
          </h1>
          <p style={{ maxWidth: "520px", color: "var(--slate)", lineHeight: 1.65, fontSize: "1.05rem" }}>
            End-to-end creative and marketing solutions for ambitious businesses that want a dominant digital presence.
          </p>
        </div>
      </section>

      {/* ─── Service Categories ─── */}
      <section style={{ paddingBlock: "64px 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.slug}
                  id={cat.slug}
                 className={`${styles.serviceCard} card-clean`}
                 
                >
                  <div className={styles.serviceGrid}>
                    {/* Left: Category Header */}
                    <div>
                      <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(250, 175, 22, 0.12)", color: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                        <Icon size={22} />
                      </div>
                      <span className="eyebrow">{cat.title}</span>
                      <h2
                        className="font-display text-h2"
                        style={{ color: "var(--ink)", marginTop: "4px", marginBottom: "12px" }}
                      >
                        {cat.title}
                      </h2>
                      <p style={{ color: "var(--slate)", lineHeight: 1.6, fontSize: "0.95rem", marginBottom: "24px" }}>
                        {cat.intro}
                      </p>
                      <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "10px 22px" }}>
                        Get a Quote <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Right: Service Items List */}
                  <div className={styles.itemList}>
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          style={{
                            padding: "18px 20px",
                            borderRadius: "12px",
                            background: "var(--paper)",
                            border: "1px solid var(--border)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div>
                            <span style={{ fontWeight: 600, color: "var(--ink)", display: "block", marginBottom: "4px", fontSize: "0.95rem" }}>
                              {item.name}
                            </span>
                            <span style={{ color: "var(--slate)", fontSize: "0.85rem", lineHeight: 1.5, display: "block" }}>
                              {item.desc}
                            </span>
                          </div>
                          <ArrowUpRight size={16} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Process (Dark Section) ─── */}
      <section style={{ paddingBlock: "80px", background: "var(--ink)", color: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.35)", display: "inline-block" }}>How We Work</span>
            <h2 className="font-display text-h2" style={{ color: "var(--white)", marginTop: "8px" }}>
              A process built around results.
            </h2>
          </div>

       <div className={styles.processGrid}>
            {process.map((step) => (
              <div
                key={step.n}
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="font-label" style={{ color: "var(--amber)", display: "block", marginBottom: "16px", fontSize: "1.1rem", fontWeight: 700 }}>
                  {step.n}
                </span>
                <h3 className="font-display" style={{ fontSize: "1.2rem", color: "var(--white)", marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>
                  {step.desc}
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
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--ink)", maxWidth: "580px", marginBottom: "24px" }}
          >
            Let&apos;s discuss what <span style={{ color: "var(--amber)" }}>your business needs.</span>
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
