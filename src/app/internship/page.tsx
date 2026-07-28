// // //   // "use client";

// // //   // import { useEffect } from "react";
// // //   // import Link from "next/link";
// // //   // import {
// // //   //   ArrowRight, GraduationCap, Briefcase, Award,
// // //   //   CheckCircle2, Users, Clock, Star,
// // //   // } from "lucide-react";

// // //   // function useReveal() {
// // //   //   useEffect(() => {
// // //   //     const els = document.querySelectorAll(".reveal");
// // //   //     const io = new IntersectionObserver(
// // //   //       (entries) => entries.forEach((e) => {
// // //   //         if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
// // //   //       }),
// // //   //       { threshold: 0.12 }
// // //   //     );
// // //   //     els.forEach((el) => io.observe(el));
// // //   //     return () => io.disconnect();
// // //   //   }, []);
// // //   // }

// // //   // const tracks = [
// // //   //   {
// // //   //     icon: GraduationCap, title: "Digital Marketing Track",
// // //   //     desc: "Master SEO, Meta Ads, Google Ads, content strategy and social media management working on live client campaigns.",
// // //   //     duration: "3 Months", badge: "Most Popular",
// // //   //   },
// // //   //   {
// // //   //     icon: Award, title: "Graphic Design Track",
// // //   //     desc: "Build your creative portfolio in branding, social media design, and visual identity using industry-standard tools.",
// // //   //     duration: "3 Months", badge: "Creative",
// // //   //   },
// // //   //   {
// // //   //     icon: Briefcase, title: "Video Editing Track",
// // //   //     desc: "Learn Premiere Pro, After Effects, and short-form video strategy producing reels and motion graphics for real brands.",
// // //   //     duration: "3 Months", badge: "High Demand",
// // //   //   },
// // //   //   {
// // //   //     icon: Star, title: "AI & Automation Track",
// // //   //     desc: "Leverage AI tools, prompt engineering, and workflow automation to deliver smarter, faster creative output.",
// // //   //     duration: "2 Months", badge: "Cutting Edge",
// // //   //   },
// // //   // ];

// // //   // const included = [
// // //   //   "Work on real client campaigns",
// // //   //   "Daily senior mentor collaboration",
// // //   //   "Build a verified portfolio",
// // //   //   "Completion certificate",
// // //   //   "Placement assistance & referrals",
// // //   //   "Interview preparation",
// // //   //   "Community & peer network",
// // //   //   "Recorded resource library",
// // //   // ];

// // //   // const faqs = [
// // //   //   { q: "Is this a paid internship?", a: "Our practical internship program has a nominal enrollment fee that covers mentorship, tools access, and placement support." },
// // //   //   { q: "Do I need prior experience?", a: "No prior experience is required. We take motivated beginners and build their skills from the ground up with real projects." },
// // //   //   { q: "Will I work on real client projects?", a: "Yes — from week one, interns are assigned to live client briefs alongside senior agency professionals." },
// // //   //   { q: "What certificate will I receive?", a: "You'll receive an Idea Media completion certificate and a verified portfolio of agency-quality work." },
// // //   // ];

// // //   // export default function InternshipPage() {
// // //   //   useReveal();

// // //   //   return (
// // //   //     <div>
// // //   //       {/* ════ HERO ════ */}
// // //   //       <section className="hero-dark">
// // //   //         <div className="hero-dark-content">
// // //   //           <div className="hero-badge hero-animate">
// // //   //             <span className="hero-badge-dot" />
// // //   //             Practical Internship Program
// // //   //           </div>
// // //   //           <h1 className="hero-headline headline-reveal">
// // //   //             Learn by doing.<br />
// // //   //             <span className="amber-mark">Get hired faster.</span>
// // //   //           </h1>
// // //   //           <p className="hero-sub hero-animate hero-animate-delay-1">
// // //   //             Work on real agency campaigns, get mentored by active industry professionals,
// // //   //             and graduate with a portfolio that proves you can do the job.
// // //   //           </p>
// // //   //           <div className="hero-btns hero-animate hero-animate-delay-2">
// // //   //             <Link href="/contact" className="btn btn-primary">Apply Now <ArrowRight size={16} /></Link>
// // //   //             <Link href="/courses" className="btn btn-ghost-dark">View Courses</Link>
// // //   //           </div>
// // //   //         </div>
// // //   //       </section>

// // //   //       {/* ════ STATS STRIP ════ */}
// // //   //       <div className="section-white" style={{ paddingBlock: "40px", borderBottom: "1px solid var(--border)" }}>
// // //   //         <div className="container">
// // //   //           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", textAlign: "center" }}>
// // //   //             {[
// // //   //               { stat: "100+", label: "Students Trained" },
// // //   //               { stat: "3",    label: "Months Duration" },
// // //   //               { stat: "20+",  label: "Partner Companies" },
// // //   //               { stat: "4",    label: "Skill Tracks" },
// // //   //             ].map((s) => (
// // //   //               <div key={s.label} className="reveal">
// // //   //                 <div style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: "var(--amber)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.stat}</div>
// // //   //                 <div style={{ fontSize: "0.75rem", fontFamily: "'Space Mono',monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--slate)", marginTop: "8px" }}>{s.label}</div>
// // //   //               </div>
// // //   //             ))}
// // //   //           </div>
// // //   //         </div>
// // //   //       </div>

// // //   //       {/* ════ INTERNSHIP TRACKS — light ════ */}
// // //   //       <section className="section-light section-py">
// // //   //         <div className="container">
// // //   //           <div className="section-header reveal" style={{ marginBottom: "48px" }}>
// // //   //             <span className="eyebrow">Choose Your Path</span>
// // //   //             <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "6px" }}>
// // //   //               Internship <span className="amber-mark">Skill Tracks</span>
// // //   //             </h2>
// // //   //           </div>
// // //   //           <div className="grid-2" style={{ gap: "24px", alignItems: "start" }}>
// // //   //             {tracks.map((t, i) => {
// // //   //               const Icon = t.icon;
// // //   //               return (
// // //   //                 <div key={t.title} className={`card-dark reveal reveal-delay-${(i % 4) + 1}`}>
// // //   //                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
// // //   //                     <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--amber-bg)", color: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //   //                       <Icon size={22} />
// // //   //                     </div>
// // //   //                     <span className="chip chip-amber">{t.badge}</span>
// // //   //                   </div>
// // //   //                   <h3 className="font-display" style={{ fontSize: "1.2rem", color: "var(--ink)", marginBottom: "10px" }}>{t.title}</h3>
// // //   //                   <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "20px" }}>{t.desc}</p>
// // //   //                   <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // //   //                     <Clock size={14} style={{ color: "var(--amber)" }} />
// // //   //                     <span style={{ fontSize: "0.8rem", color: "var(--slate)", fontFamily: "'Space Mono',monospace" }}>{t.duration}</span>
// // //   //                   </div>
// // //   //                 </div>
// // //   //               );
// // //   //             })}
// // //   //           </div>
// // //   //         </div>
// // //   //       </section>

// // //   //       {/* ════ HOW IT WORKS — dark ════ */}
// // //   //       <section className="section-dark section-py">
// // //   //         <div className="container">
// // //   //           <div className="section-header reveal" style={{ textAlign: "center" }}>
// // //   //             <span className="eyebrow eyebrow-white">The Process</span>
// // //   //             <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
// // //   //               How the <span className="amber-mark">program works.</span>
// // //   //             </h2>
// // //   //           </div>
// // //   //          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", display:"flex", flexDirection:"column" }}>

// // //   // {
// // //   // [
// // //   // { num:"01", title:"Apply & Enroll", desc:"Fill in a short application. Our advisors will reach out within 24 hours to walk you through the program options." },
// // //   // { num:"02", title:"Track Orientation", desc:"Join your cohort for an orientation session, tool setup, and meet your assigned senior mentor." },
// // //   // { num:"03", title:"Live Client Work", desc:"Work on real active client campaigns — social content, branding, ads — alongside your mentor every day." },
// // //   // { num:"04", title:"Portfolio & Placement", desc:"Complete your verified portfolio. Our placement team connects you with hiring partners and opens interview doors." },
// // //   // ].map((step)=>(
// // //   // <div key={step.num} className="program-step reveal">

// // //   // <span className="process-number">
// // //   // {step.num}
// // //   // </span>

// // //   // <h3 className="process-title">
// // //   // {step.title}
// // //   // </h3>

// // //   // <p className="process-desc">
// // //   // {step.desc}
// // //   // </p>

// // //   // </div>
// // //   // ))

// // //   // }

// // //   // </div>
// // //   //         </div>
// // //   //       </section>

// // //   //       {/* ════ WHAT'S INCLUDED — light ════ */}
// // //   //       <section className="section-light section-py">
// // //   //         <div className="container">
// // //   //           <div className="grid-2" style={{ gap: "clamp(32px,5vw,64px)" }}>
// // //   //             <div className="reveal">
// // //   //               <span className="eyebrow">Everything Included</span>
// // //   //               <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "var(--ink)", marginBottom: "18px", marginTop: "6px" }}>
// // //   //                 Not just an internship.<br /><span className="amber-mark">A launchpad.</span>
// // //   //               </h2>
// // //   //               <p style={{ color: "var(--slate)", lineHeight: 1.7, marginBottom: "28px" }}>
// // //   //                 Every track includes the complete support structure needed to transition
// // //   //                 from student to working professional.
// // //   //               </p>
// // //   //               <Link href="/contact" className="btn btn-primary">Start Your Application <ArrowRight size={16} /></Link>
// // //   //             </div>
// // //   //             <div className="reveal reveal-delay-1">
// // //   //               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
// // //   //                 {included.map((item) => (
// // //   //                   <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "10px" }}>
// // //   //                     <CheckCircle2 size={16} style={{ color: "var(--amber)", flexShrink: 0 }} />
// // //   //                     <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--ink)" }}>{item}</span>
// // //   //                   </div>
// // //   //                 ))}
// // //   //               </div>
// // //   //             </div>
// // //   //           </div>
// // //   //         </div>
// // //   //       </section>

// // //   //       {/* ════ FAQ — dark ════ */}
// // //   //       <section className="section-dark section-py">
// // //   //         <div className="container">
// // //   //           <div className="grid-2" style={{ gap: "64px", alignItems: "start" }}>
// // //   //             <div className="reveal">
// // //   //               <span className="eyebrow eyebrow-white">Common Questions</span>
// // //   //               <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
// // //   //                 Frequently<br /><span className="amber-mark">Asked.</span>
// // //   //               </h2>
// // //   //             </div>
// // //   //             <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
// // //   //               {faqs.map((faq) => (
// // //   //                 <div key={faq.q} style={{ padding: "24px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
// // //   //                   <h3 style={{ color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>{faq.q}</h3>
// // //   //                   <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
// // //   //                 </div>
// // //   //               ))}
// // //   //             </div>
// // //   //           </div>
// // //   //         </div>
// // //   //       </section>

// // //   //       {/* ════ CTA ════ */}
// // //   //       <section className="section-light" style={{ paddingBlock: "clamp(64px,8vw,96px)", textAlign: "center" }}>
// // //   //         <div className="container-narrow">
// // //   //           <div className="reveal">
// // //   //             <span className="eyebrow" style={{ marginBottom: "20px" }}>Apply Today</span>
// // //   //             <h2 className="cta-headline" style={{ marginBottom: "20px" }}>
// // //   //               Your career in digital starts<br /><span className="amber-mark">with one step.</span>
// // //   //             </h2>
// // //   //             <p style={{ color: "var(--slate)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "36px" }}>
// // //   //               Applications are open. Cohort spots are limited — apply now to secure your place.
// // //   //             </p>
// // //   //             <div className="hero-btns">
// // //   //               <Link href="/contact" className="btn btn-primary">Apply for Internship <ArrowRight size={16} /></Link>
// // //   //               <Link href="/courses" className="btn btn-ghost">View All Courses</Link>
// // //   //             </div>
// // //   //           </div>
// // //   //         </div>
// // //   //       </section>
// // //   //     </div>
// // //   //   );
// // //   // }













// // //   "use client";

// // //   import Link from "next/link";
// // //   import {
// // //     ArrowRight,
// // //     Briefcase,
// // //     Palette,
// // //     Clapperboard,
// // //     Bot,
// // //     GraduationCap,
// // //     Users,
// // //     Award,
// // //     Sparkles,
// // //   } from "lucide-react";

// // //   import styles from "./internship.module.css";

// // //   const tracks = [
// // //     {
// // //       title: "Digital Marketing Track",
// // //       duration: "3 Months",
// // //       icon: Briefcase,
// // //       image:
// // //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
// // //       description:
// // //         "Learn SEO, Google Ads, Meta Ads, content strategy, analytics, and social media marketing through real campaigns.",
// // //     },
// // //     {
// // //       title: "Graphic Design Track",
// // //       duration: "3 Months",
// // //       icon: Palette,
// // //       image:
// // //         "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
// // //       description:
// // //         "Master Photoshop, Illustrator, Canva, branding, typography, and visual communication with practical projects.",
// // //     },
// // //     {
// // //       title: "Video Editing Track",
// // //       duration: "3 Months",
// // //       icon: Clapperboard,
// // //       image:
// // //         "https://images.unsplash.com/photo-1574717024453-3540565e4f3a?w=900&q=80",
// // //       description:
// // //         "Create engaging videos, reels, commercials, and motion graphics using industry-standard editing tools.",
// // //     },
// // //     {
// // //       title: "AI & Automation Track",
// // //       duration: "3 Months",
// // //       icon: Bot,
// // //       image:
// // //         "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
// // //       description:
// // //         "Learn AI tools, ChatGPT, prompt engineering, automation workflows, and no-code productivity solutions.",
// // //     },
// // //   ];

// // //   const highlights = [
// // //     {
// // //       icon: GraduationCap,
// // //       title: "Industry Mentors",
// // //       desc: "Learn directly from experienced professionals.",
// // //     },
// // //     {
// // //       icon: Users,
// // //       title: "Live Projects",
// // //       desc: "Gain real-world experience with client work.",
// // //     },
// // //     {
// // //       icon: Award,
// // //       title: "Certificate",
// // //       desc: "Receive an internship completion certificate.",
// // //     },
// // //     {
// // //       icon: Sparkles,
// // //       title: "Career Growth",
// // //       desc: "Build a portfolio and improve job readiness.",
// // //     },
// // //   ];
// // //   const internships = [
// // //   {
// // //     title: "AI & Automation Track",
// // //     duration: "8 WEEKS",
// // //     desc: "Learn AI tools, prompt engineering, automation workflows and productivity solutions.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
// // //   },

// // //   {
// // //     title: "Digital Marketing Track",
// // //     duration: "10 WEEKS",
// // //     desc: "Master SEO, social media marketing, Google Ads, analytics and content strategies.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
// // //   },

// // //   {
// // //     title: "Graphic Design Track",
// // //     duration: "12 WEEKS",
// // //     desc: "Develop branding, visual identity, UI design and professional creative skills.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80",
// // //   },

// // //   {
// // //     title: "Video Editing Track",
// // //     duration: "10 WEEKS",
// // //     desc: "Create professional videos, reels, motion graphics and storytelling content.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
// // //   },
// // // ];

// // //   export default function InternshipPage() {
// // //     return (
// // //       <div className={styles.page}>

// // //         {/* ================= HERO ================= */}

// // //         <section className={styles.hero}>

// // //           <div className="container">

// // //             <div className={styles.breadcrumb}>
// // //               <Link href="/">Home</Link>
// // //               <span>•</span>
// // //               <span>Internship</span>
// // //             </div>

// // //             <div className={styles.heroCard}>

// // //               <img
// // //                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
// // //                 alt="Idea Media Internship"
// // //                 className={styles.heroImage}
// // //               />

// // //               <div className={styles.overlay}></div>

// // //               {/* <div className={styles.heroContent}> */}

// // //                 {/* <span className={styles.heroTag}>
// // //                   INTERNSHIP PROGRAM
// // //                 </span>

// // //                 <h1>
// // //                   Learn.
// // //                   <span> Create.</span>
// // //                   <br />
// // //                   Grow Your
// // //                   <span> Career.</span>
// // //                 </h1>

// // //                 <p>
// // //                   Kickstart your creative journey with hands-on training,
// // //                   live projects, expert mentorship, and practical experience
// // //                   designed to prepare you for the digital industry.
// // //                 </p>

// // //                 <div className={styles.heroButtons}>

// // //                   <Link
// // //                     href="/contact"
// // //                     className={styles.primaryBtn}
// // //                   >
// // //                     Apply Now
// // //                     <ArrowRight size={18} />
// // //                   </Link>

// // //                   <Link
// // //                     href="#tracks"
// // //                     className={styles.secondaryBtn}
// // //                   >
// // //                     View Programs
// // //                   </Link>

// // //                 </div>

// // //               </div> */}
// // //               <div className={styles.heroContent}>

// // //     <span className={styles.heroTag}>
// // //       INTERNSHIP PROGRAM
// // //     </span>

// // //     <h1>
// // //       Learn.
// // //       <span> Create.</span>
// // //       <br />
// // //       Build Your
// // //       <span> Career.</span>
// // //     </h1>

// // //     <p>
// // //       Real projects, expert mentors, and practical experience
// // //       to prepare you for the creative industry.
// // //     </p>



// // //   </div>

// // //             </div>

// // //           </div>

// // //         </section>
// // //               {/* ================= WHY JOIN ================= */}

// // //         {/* <section className={styles.highlights}>

// // //           <div className="container">

// // //             <div className={styles.sectionTitle}>

// // //               <span>WHY JOIN IDEA MEDIA</span>

// // //               <h2>
// // //                 Build Your Future With
// // //                 <strong> Practical Learning</strong>
// // //               </h2>

// // //               <p>
// // //                 Our internship program combines expert mentorship, real client
// // //                 projects, and hands-on learning to help you gain industry-ready
// // //                 skills and confidence.
// // //               </p>

// // //             </div>

// // //             <div className={styles.highlightGrid}>

// // //               {highlights.map((item, index) => {

// // //                 const Icon = item.icon;

// // //                 return (

// // //                   <div
// // //                     className={styles.highlightCard}
// // //                     key={index}
// // //                   >

// // //                     <div className={styles.highlightIcon}>
// // //                       <Icon size={30} />
// // //                     </div>

// // //                     <h3>{item.title}</h3>

// // //                     <p>{item.desc}</p>

// // //                   </div>

// // //                 );

// // //               })}

// // //             </div>

// // //           </div>

// // //         </section> */}
// // // {/* <section className={styles.highlights}>

// // // <div className="container">


// // // <div className={styles.sectionTitle}>

// // // <span>WHY JOIN IDEA MEDIA</span>

// // // <h2>
// // // Grow With <strong>Real Experience</strong>
// // // </h2>

// // // <p>
// // // Learn from mentors, work on practical projects and develop skills
// // // that prepare you for your career.
// // // </p>

// // // </div>



// // // <div className={styles.highlightGrid}>


// // // {highlights.map((item,index)=>{

// // // const Icon=item.icon;


// // // return (

// // // <div 
// // // className={styles.highlightCard}
// // // key={index}
// // // >


// // // <div className={styles.highlightIcon}>

// // // <Icon size={24}/>

// // // </div>


// // // <div>

// // // <h3>
// // // {item.title}
// // // </h3>

// // // <p>
// // // {item.desc}
// // // </p>

// // // </div>


// // // </div>

// // // )

// // // })}


// // // </div>


// // // </div>


// // // </section> */}
// // //         {/* ================= INTERNSHIP TRACKS ================= */}


// // //               {/* ================= INTERNSHIP TRACKS ================= */}
// // // {/* 
// // //      <section className={styles.internship}>

// // // <div className="container">


// // // <div className={styles.heading}>

// // // <span>INTERNSHIPS</span>

// // // <h2>
// // // Build Skills With <b>Real Experience</b>
// // // </h2>

// // // <p>
// // // Industry focused internship programs designed to develop practical skills.
// // // </p>

// // // </div>



// // // <div className={styles.grid}>


// // // {
// // // internships.map((item,index)=>(

// // // <div 
// // // className={styles.card}
// // // key={index}
// // // >


// // // <img 
// // // src={item.image}
// // // alt={item.title}
// // // />


// // // <div className={styles.overlay}></div>



// // // <div className={styles.content}>


// // // <span className={styles.duration}>
// // // {item.duration}
// // // </span>


// // // <h3>
// // // {item.title}
// // // </h3>


// // // <p>
// // // {item.desc}
// // // </p>


// // // <Link href="/contact">

// // // View Program

// // // <ArrowRight size={17}/>

// // // </Link>


// // // </div>



// // // </div>


// // // ))

// // // }


// // // </div>


// // // </div>

// // // </section>
// // //  */}
// // // {/* <section className={styles.internship}>

// // // <div className="container">


// // // <div className={styles.heading}>

// // // <span>INTERNSHIPS</span>

// // // <h2>
// // // Build Skills With <b>Real Experience</b>
// // // </h2>

// // // <p>
// // // Industry-focused internship programs designed to develop practical skills.
// // // </p>

// // // </div>



// // // <div className={styles.grid}>

// // // {
// // // internships.map((item,index)=>(


// // // <div 
// // // className={styles.card}
// // // key={index}
// // // >


// // // <div className={styles.imageBox}>

// // // <img
// // // src={item.image}
// // // alt={item.title}
// // // />


// // // <div className={styles.tag}>
// // // INTERNSHIP
// // // </div>


// // // </div>



// // // <div className={styles.content}>


// // // <div className={styles.duration}>
// // // {item.duration}
// // // </div>


// // // <h3>
// // // {item.title}
// // // </h3>


// // // <p>
// // // {item.desc}
// // // </p>



// // // <Link href="/contact">

// // // Explore Program

// // // <ArrowRight size={16}/>

// // // </Link>


// // // </div>


// // // </div>


// // // ))

// // // }


// // // </div>


// // // </div>

// // // </section> */}
// // // <section className={styles.internship}>

// // // <div className="container">


// // // <div className={styles.heading}>

// // // <span>INTERNSHIP PROGRAMS</span>

// // // <h2>
// // // Build Skills Through <b>Real Experience</b>
// // // </h2>

// // // <p>
// // // Industry-focused internships designed to prepare you for real-world careers.
// // // </p>

// // // </div>



// // // <div className={styles.internList}>


// // // {internships.map((item,index)=>(


// // // <div 
// // // key={index}
// // // className={`${styles.internRow} ${
// // // index % 2 !== 0 ? styles.reverse : ""
// // // }`}>


// // // {/* IMAGE */}

// // // <div className={styles.internImage}>

// // // <img 
// // // src={item.image}
// // // alt={item.title}
// // // />


// // // <div className={styles.duration}>
// // // {item.duration}
// // // </div>


// // // </div>



// // // {/* CONTENT */}

// // // <div className={styles.internContent}>


// // // <span>
// // // 0{index+1} / INTERNSHIP
// // // </span>


// // // <h3>
// // // {item.title}
// // // </h3>


// // // <p>
// // // {item.desc}
// // // </p>


// // // <div className={styles.skills}>

// // // <p>✓ Practical Training</p>
// // // <p>✓ Mentor Support</p>
// // // <p>✓ Real Projects</p>

// // // </div>


// // // <Link href="/contact">
// // // Explore Program
// // // <ArrowRight size={16}/>
// // // </Link>



// // // </div>


// // // </div>


// // // ))}



// // // </div>


// // // </div>

// // // </section>
// // //         {/* ================= LEARNING JOURNEY ================= */}      {/* ================= INTERNSHIP TRACKS ================= */}

      

// // //         {/* ================= LEARNING JOURNEY ================= */}      {/* ================= INTERNSHIP TRACKS ================= */}

      
      

// // //         {/* ================= LEARNING JOURNEY ================= */}      {/* ================= INTERNSHIP TRACKS ================= */}

      
// // //         {/* ================= LEARNING JOURNEY ================= */}
// // //           {/* ================= LEARNING JOURNEY ================= */}

// // //      <section className={styles.journey}>

// // // <div className="container">

// // // <div className={styles.sectionTitle}>

// // // <span>YOUR JOURNEY</span>

// // // <h2>
// // // From Learning To <strong>Career Ready</strong>
// // // </h2>

// // // <p>
// // // A structured internship roadmap designed to build practical skills,
// // // confidence and real industry experience.
// // // </p>

// // // </div>


// // // <div className={styles.timeline}>


// // // <div className={styles.step}>

// // // <div className={styles.stepNumber}>
// // // 01
// // // </div>

// // // <div className={styles.stepContent}>
// // // <h3>Orientation</h3>

// // // <p>
// // // Understand the roadmap, tools, mentors and workflow before starting.
// // // </p>

// // // </div>

// // // </div>



// // // <div className={styles.step}>

// // // <div className={styles.stepNumber}>
// // // 02
// // // </div>

// // // <div className={styles.stepContent}>

// // // <h3>Skill Training</h3>

// // // <p>
// // // Learn industry tools with practical tasks and guided sessions.
// // // </p>

// // // </div>

// // // </div>



// // // <div className={styles.step}>

// // // <div className={styles.stepNumber}>
// // // 03
// // // </div>

// // // <div className={styles.stepContent}>

// // // <h3>Live Projects</h3>

// // // <p>
// // // Work on real projects with mentor support and feedback.
// // // </p>

// // // </div>

// // // </div>



// // // <div className={styles.step}>

// // // <div className={styles.stepNumber}>
// // // 04
// // // </div>

// // // <div className={styles.stepContent}>

// // // <h3>Portfolio & Certification</h3>

// // // <p>
// // // Build your portfolio and complete your professional certification.
// // // </p>

// // // </div>

// // // </div>


// // // </div>


// // // </div>

// // // </section>
// // //         {/* ================= CALL TO ACTION ================= */}



// // //               {/* ================= CTA ================= */}

// // //         {/* <section className={styles.cta}>

// // //           <div className="container">

// // //             <div className={styles.ctaBox}>

// // //               <span>START YOUR CAREER TODAY</span>

// // //               <h2>
// // //                 Ready to Begin Your
// // //                 <strong> Internship Journey?</strong>
// // //               </h2>

// // //               <p>
// // //                 Join Idea Media and gain hands-on experience through live
// // //                 projects, industry mentorship, and practical learning.
// // //                 Build your portfolio and take the first step toward a
// // //                 successful creative career.
// // //               </p>

// // //               <div className={styles.ctaButtons}>

// // //                 <Link
// // //                   href="/contact"
// // //                   className={styles.primaryBtn}
// // //                 >
// // //                   Apply for Internship
// // //                   <ArrowRight size={18} />
// // //                 </Link>

// // //                 <Link
// // //                   href="/services"
// // //                   className={styles.secondaryBtn}
// // //                 >
// // //                   Explore Our Services
// // //                 </Link>

// // //               </div>

// // //             </div>

// // //           </div>

// // //         </section> */}

// // //       </div>
// // //     );
// // //   }


























// // "use client";
// // import styles from "./internship.module.css";
// // import Link from "next/link";
// // import {
// //   ArrowRight,
// //   ArrowUpRight,
// //   CheckCircle2,
// //   GraduationCap,
// //   Briefcase,
// //   Award,
// // } from "lucide-react";

// // const tracks = [
// //   {
// //     title: "Digital Marketing",
// //     duration: "3 Months",
// //     image:
// //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
// //     desc: "Master SEO, Google Ads, Meta Ads and Social Media Marketing.",
// //   },
// //   {
// //     title: "Graphic Design",
// //     duration: "3 Months",
// //     image:
// //       "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
// //     desc: "Learn Photoshop, Illustrator, Branding and UI Design.",
// //   },
// //   {
// //     title: "Video Editing",
// //     duration: "3 Months",
// //     image:
// //       "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
// //     desc: "Create cinematic videos, reels and motion graphics.",
// //   },
// //   {
// //     title: "AI & Automation",
// //     duration: "2 Months",
// //     image:
// //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
// //     desc: "Work with AI tools, ChatGPT, automation and productivity.",
// //   },
// // ];

// // export default function InternshipPage() {
// //   return (
// //     <>
// //       {/* ================= HERO ================= */}

// //       {/* <section className="intern-hero">

// //         <div className="intern-overlay"></div>

// //         <div className="container">

// //           <div className="intern-content">

// //             <span className="intern-tag">
// //               PROFESSIONAL INTERNSHIP
// //             </span>

// //             <h1>
// //               Learn.<br />
// //               Build.<br />
// //               <span>Get Hired.</span>
// //             </h1>

// //             <p>
// //               Gain real-world experience by working on live client
// //               projects with experienced mentors. Build a professional
// //               portfolio and prepare for your career.
// //             </p>

// //             <div className="intern-buttons">

// //               <Link
// //                 href="/contact"
// //                 className="btn-primary"
// //               >
// //                 Apply Now
// //                 <ArrowRight size={18} />
// //               </Link>

// //               <Link
// //                 href="#tracks"
// //                 className="btn-outline"
// //               >
// //                 Explore Programs
// //                 <ArrowUpRight size={18} />
// //               </Link>

// //             </div>

// //           </div>

// //         </div>

// //       </section> */}
// //       <section className={styles.aboutHero}>
// //   <div className="container">

// //     <div className={styles.breadcrumb}>
// //       <Link href="/">Home</Link>
// //       <span>/</span>
// //       <span>Internships</span>
// //     </div>

// //     <div className={styles.heroBanner}>
// //       <img
// //         src="/images/internship-hero.jpg"
// //         alt="Internship"
// //         className={styles.bannerImage}
// //       />

// //       <div className={styles.overlay}></div>

// //       <div className={styles.heroCenter}>
// //         <span className={styles.heroTag}>
// //           INTERNSHIP PROGRAMS
// //         </span>

// //         <h1>
// //           Build Your <span>Career</span><br />
// //           With Real Experience
// //         </h1>

// //         <p>
// //           Join industry-focused internship programs in Software Development,
// //           Digital Marketing, Graphic Design, Video Editing, and AI &
// //           Automation. Learn from experts while working on real projects.
// //         </p>
// //       </div>
// //     </div>

// //   </div>
// // </section>

// //       {/* ================= ABOUT ================= */}

// //       <section className="intern-about">

// //         <div className="container">

// //           <div className="intern-grid">

// //             <div className="intern-image">

// //               <img
// //                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
// //                 alt=""
// //               />

// //             </div>

// //             <div className="intern-text">

// //               <span>WHY IDEA MEDIA</span>

// //               <h2>
// //                 Internship Designed
// //                 <br />
// //                 for Real Careers
// //               </h2>

// //               <p>
// //                 Unlike traditional training programs,
// //                 our internship combines practical learning,
// //                 agency workflow and live client projects.
// //               </p>

// //               <div className="intern-features">

// //                 <div>
// //                   <CheckCircle2 size={18} />
// //                   Live Client Projects
// //                 </div>

// //                 <div>
// //                   <CheckCircle2 size={18} />
// //                   Industry Mentors
// //                 </div>

// //                 <div>
// //                   <CheckCircle2 size={18} />
// //                   Portfolio Building
// //                 </div>

// //                 <div>
// //                   <CheckCircle2 size={18} />
// //                   Placement Assistance
// //                 </div>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </section>

// //       {/* ================= TRACKS ================= */}

// //       <section
// //         className="intern-tracks"
// //         id="tracks"
// //       >

// //         <div className="container">

// //           <div className="section-heading">

// //             <span>OUR PROGRAMS</span>

// //             <h2>
// //               Internship
// //               <span> Tracks</span>
// //             </h2>

// //           </div>

// //           <div className="tracks-grid">

// //             {tracks.map((track) => (

// //               <Link
// //                 href="/contact"
// //                 key={track.title}
// //                 className="track-card"
// //               >

// //                 <div className="track-image">

// //                   <img
// //                     src={track.image}
// //                     alt={track.title}
// //                   />

// //                 </div>

// //                 <div className="track-content">

// //                   <span>
// //                     {track.duration}
// //                   </span>

// //                   <h3>
// //                     {track.title}
// //                   </h3>

// //                   <p>
// //                     {track.desc}
// //                   </p>

// //                   <div className="track-arrow">
// //                     <ArrowUpRight size={22} />
// //                   </div>

// //                 </div>

// //               </Link>

// //             ))}

// //           </div>

// //         </div>

// //       </section>
      
// //     </>
// //   );
// // }
// // <div className={styles.cards}>

// //   {/* Card 1 */}
// //   <div className={styles.card}>
// //     <div className={styles.cardNumber}>01</div>

// //     <div className={styles.cardContent}>
// //       <h3>Digital Marketing</h3>

// //       <p>
// //         Master SEO, Meta Ads, Google Ads, social media strategy,
// //         analytics and real campaign execution.
// //       </p>

// //       <ul>
// //         <li>SEO & SEM</li>
// //         <li>Meta Ads</li>
// //         <li>Google Ads</li>
// //         <li>Analytics</li>
// //       </ul>
// //     </div>

// //     <div className={styles.cardArrow}>
// //       <ArrowUpRight size={22} />
// //     </div>
// //   </div>

// //   {/* Card 2 */}
// //   <div className={styles.card}>
// //     <div className={styles.cardNumber}>02</div>

// //     <div className={styles.cardContent}>
// //       <h3>Graphic Design</h3>

// //       <p>
// //         Learn branding, UI design, social media creatives,
// //         packaging and print design.
// //       </p>

// //       <ul>
// //         <li>Photoshop</li>
// //         <li>Illustrator</li>
// //         <li>Figma</li>
// //         <li>Brand Identity</li>
// //       </ul>
// //     </div>

// //     <div className={styles.cardArrow}>
// //       <ArrowUpRight size={22} />
// //     </div>
// //   </div>

// //   {/* Card 3 */}
// //   <div className={styles.card}>
// //     <div className={styles.cardNumber}>03</div>

// //     <div className={styles.cardContent}>
// //       <h3>Video Editing</h3>

// //       <p>
// //         Create cinematic edits, reels, YouTube videos,
// //         advertisements and motion graphics.
// //       </p>

// //       <ul>
// //         <li>Premiere Pro</li>
// //         <li>After Effects</li>
// //         <li>Color Grading</li>
// //         <li>Motion Graphics</li>
// //       </ul>
// //     </div>

// //     <div className={styles.cardArrow}>
// //       <ArrowUpRight size={22} />
// //     </div>
// //   </div>

// //   {/* Card 4 */}
// //   <div className={styles.card}>
// //     <div className={styles.cardNumber}>04</div>

// //     <div className={styles.cardContent}>
// //       <h3>AI & Automation</h3>

// //       <p>
// //         Learn ChatGPT, AI tools, workflow automation,
// //         productivity systems and prompt engineering.
// //       </p>

// //       <ul>
// //         <li>ChatGPT</li>
// //         <li>Automation</li>
// //         <li>AI Workflows</li>
// //         <li>Prompting</li>
// //       </ul>
// //     </div>

// //     <div className={styles.cardArrow}>
// //       <ArrowUpRight size={22} />
// //     </div>
// //   </div>

// // </div>





















// // "use client";

// // import {
// //   ArrowRight,
// //   CheckCircle2,
// //   Briefcase,
// //   GraduationCap,
// //   Sparkles,
// //   Users,
// //   Clock,
// // } from "lucide-react";

// // import styles from "./internship.module.css";


// // const internships = [
// //   {
// //     title: "Digital Marketing Track",
// //     icon: <Sparkles />,
// //     desc: "Learn SEO, social media marketing, ads, and brand strategies.",
// //     duration: "3 Months",
// //   },
// //   {
// //     title: "Graphic Design Track",
// //     icon: <GraduationCap />,
// //     desc: "Master creative design, branding, UI visuals and graphics.",
// //     duration: "3 Months",
// //   },
// //   {
// //     title: "Video Editing Track",
// //     icon: <Briefcase />,
// //     desc: "Create professional videos using modern editing techniques.",
// //     duration: "3 Months",
// //   },
// //   {
// //     title: "AI & Automation Track",
// //     icon: <Users />,
// //     desc: "Explore AI tools, automation workflows and productivity.",
// //     duration: "3 Months",
// //   },
// // ];


// // export default function Internship() {


// // return (

// // <section className={styles.internship}>


// // <div className={styles.container}>


// // {/* HERO */}

// // <div className={styles.hero}>


// // <div className={styles.badge}>
// // INTERNSHIP PROGRAMS
// // </div>


// // <h1>
// // Build Your Career With
// // <span> Real Industry Skills</span>
// // </h1>


// // <p>
// // Gain practical experience through mentor-guided
// // internship programs designed for future professionals.
// // </p>


// // <button>
// // Explore Programs
// // <ArrowRight size={18}/>
// // </button>


// // </div>





// // {/* STATS */}

// // <div className={styles.stats}>


// // <div>
// // <Clock/>
// // <h3>3 Months</h3>
// // <p>Duration</p>
// // </div>


// // <div>
// // <Users/>
// // <h3>100+</h3>
// // <p>Students</p>
// // </div>


// // <div>
// // <CheckCircle2/>
// // <h3>Real</h3>
// // <p>Projects</p>
// // </div>


// // </div>




// // {/* CARDS */}

// // <div className={styles.cardGrid}>


// // {
// // internships.map((item,index)=>(

// // <div 
// // className={styles.card}
// // key={index}
// // >


// // <div className={styles.icon}>
// // {item.icon}
// // </div>


// // <h3>
// // {item.title}
// // </h3>


// // <p>
// // {item.desc}
// // </p>


// // <div className={styles.duration}>
// // {item.duration}
// // </div>


// // <a>
// // Learn More
// // <ArrowRight size={15}/>
// // </a>


// // </div>


// // ))
// // }


// // </div>



// // </div>


// // </section>

// // )


// // }








// "use client";

// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Briefcase,
//   Clock,
//   Users,
//   CheckCircle2,
//   Sparkles,
//   GraduationCap,
// } from "lucide-react";
// import { Award } from "lucide-react";

// import styles from "./internship.module.css";





//     function Counter({
//   value,
//   suffix = "",
// }: {
//   value: number;
//   suffix?: string;
// }) {

//   const [count, setCount] = useState(0);


//   useEffect(() => {

//     let start = 0;

//     const duration = 2000;
//     const increment = value / (duration / 20);


//     const timer = setInterval(() => {

//       start += increment;


//       if (start >= value) {

//         setCount(value);
//         clearInterval(timer);

//       } else {

//         setCount(Math.floor(start));

//       }


//     },20);



//     return () => clearInterval(timer);


//   }, [value]);



//   return <>{count}{suffix}</>;

// }


  





// const internshipData = [
//   {
//     title:"Digital Marketing Track",
//     icon:<Sparkles/>,
//     description:
//     "Learn SEO, social media marketing, branding and online advertising."
//   },

//   {
//     title:"Graphic Design Track",
//     icon:<GraduationCap/>,
//     description:
//     "Create professional designs and brand visuals."
//   },

//   {
//     title:"Video Editing Track",
//     icon:<Briefcase/>,
//     description:
//     "Develop video production and editing skills."
//   },

//   {
//     title:"AI & Automation Track",
//     icon:<Users/>,
//     description:
//     "Explore AI tools and business automation."
//   }

// ];




// export default function Internship(){


// return (

// <section className={styles.internship}>


// <div className={styles.container}>


// {/* HERO */}

// <div className={styles.hero}>


// <span className={styles.badge}>
// INTERNSHIP PROGRAMS
// </span>


// <h1>
// Build Skills.
// <br/>
// Create Your
// <span> Future.</span>
// </h1>


// <p>
// Industry-focused internship programs designed
// to give practical experience and career-ready skills.
// </p>


// <button>
// Explore Programs
// <ArrowRight/>
// </button>


// </div>


// </div>





// {/* COUNTER WHITE SECTION */}


// {/* <section className={styles.whiteSection}>


// <div className={styles.stats}>


// <div className={styles.statCard}>

// <div className={styles.statIcon}>
// <Clock/>
// </div>


// <h3>
// <Counter value={3} suffix="+"/>
// </h3>


// <p>
// Months Program
// </p>


// </div>





// <div className={styles.statCard}>

// <div className={styles.statIcon}>
// <Users/>
// </div>


// <h3>
// <Counter value={100} suffix="+"/>
// </h3>


// <p>
// Students Trained
// </p>


// </div>





// <div className={styles.statCard}>

// <div className={styles.statIcon}>
// <CheckCircle2/>
// </div>


// <h3>
// <Counter value={50} suffix="+"/>
// </h3>


// <p>
// Real Projects
// </p>


// </div>


// </div>


// </section> */}

// <div className={styles.counterGrid}>

// <div className={styles.counterCard}>
//   <div className={styles.counterIcon}>
//     <Users/>
//   </div>

//   <h2 className={styles.counterNumber}>
//     500+
//   </h2>

//   <p>Students Trained</p>
// </div>


// <div className={`${styles.counterCard} ${styles.light}`}>
//   <div className={styles.counterIcon}>
//     <Briefcase/>
//   </div>

//   <h2 className={styles.counterNumber}>
//     100+
//   </h2>

//   <p>Projects Completed</p>
// </div>


// <div className={styles.counterCard}>
//   <div className={styles.counterIcon}>
//     <Award/>
//   </div>

//   <h2 className={styles.counterNumber}>
//     50+
//   </h2>

//   <p>Certificates</p>
// </div>


// <div className={`${styles.counterCard} ${styles.light}`}>
//   <div className={styles.counterIcon}>
//     <GraduationCap/>
//   </div>

//   <h2 className={styles.counterNumber}>
//     95%
//   </h2>

//   <p>Success Rate</p>
// </div>

// </div>





// {/* INTERNSHIP CARDS */}


// <div className={styles.container}>


// <div className={styles.sectionTitle}>

// <span>
// OUR TRACKS
// </span>


// <h2>
// Choose Your
// <b> Internship Path</b>
// </h2>


// </div>



// <div className={styles.cardGrid}>


// {
// internshipData.map((item,index)=>(


// <div 
// className={styles.card}
// key={index}
// >


// <div className={styles.icon}>
// {item.icon}
// </div>


// <h3>
// {item.title}
// </h3>


// <p>
// {item.description}
// </p>


// <div className={styles.duration}>
// 3 Months
// </div>


// <a>
// Learn More
// <ArrowRight size={15}/>
// </a>


// </div>


// ))
// }



// </div>


// </div>




// </section>

// );

// }

// <section className={styles.valuesSection}>

// <div className="container">


// <div className={styles.valuesHeader}>

// <p className={styles.valuesTag}>
// OUR CORE PRINCIPLES
// </p>


// <h2>
// What we <span>stand for.</span>
// </h2>

// </div>



// <div className={styles.valuesGrid}>


// <div className={styles.valueCard}>

// <div className={styles.valueNumber}>
// 01
// </div>

// <h3>
// Innovation
// </h3>

// <p>
// We constantly explore new ideas and technologies to create meaningful digital experiences.
// </p>

// </div>



// <div className={styles.valueCard}>

// <div className={styles.valueNumber}>
// 02
// </div>

// <h3>
// Creativity
// </h3>

// <p>
// Every project is crafted with originality, strategy and attention to detail.
// </p>

// </div>



// <div className={styles.valueCard}>

// <div className={styles.valueNumber}>
// 03
// </div>

// <h3>
// Collaboration
// </h3>

// <p>
// Honest communication and transparency guide every client relationship.
// </p>

// </div>



// <div className={styles.valueCard}>

// <div className={styles.valueNumber}>
// 04
// </div>

// <h3>
// Learning
// </h3>

// <p>
// We believe businesses and individuals grow through continuous learning.
// </p>

// </div>


// </div>


// </div>

// </section>

















"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Briefcase,
  Sparkles,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

import styles from "./internship.module.css";












const tracks = [

{
title:"Digital Marketing",
duration:"3 Months",
image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
desc:"Learn SEO, Google Ads, Meta Ads, content strategy and digital campaigns."
},


{
title:"Graphic Design",
duration:"3 Months",
image:"https://media.istockphoto.com/id/2177184303/photo/white-man-programmer-or-it-specialist-software-developer-with-glasses-working-late-into-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLBlBQCGyuWBaJTbzG7bntaoYBB-GdTiI6z4Co5mjAg=",
desc:"Build creative skills in branding, UI design and visual communication."
},


{
title:"Video Editing",
duration:"3 Months",
image:"https://plus.unsplash.com/premium_photo-1682146717223-874ac7dcc607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww",
desc:"Create professional videos, reels and motion graphics."
},


{
title:"AI & Automation",
duration:"2 Months",
image:"https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=612x612&w=0&k=20&c=oOKLdZJpcsrUbNrnGVf8TwoIdYud4mWoBkx1A3PdXI0=",
desc:"Explore AI tools, automation workflows and productivity systems."
}

];




const features=[

"Live client projects",

"Industry mentor guidance",

"Professional portfolio",

"Career support"

];





const steps=[

{
num:"01",
title:"Orientation",
desc:"Understand tools, workflow and internship roadmap."
},

{
num:"02",
title:"Skill Development",
desc:"Learn industry skills with practical assignments."
},


{
num:"03",
title:"Live Projects",
desc:"Work on real projects with mentor feedback."
},


{
num:"04",
title:"Career Launch",
desc:"Build portfolio and prepare for opportunities."
}


];





const faqs=[

{
q:"Is this internship beginner friendly?",
a:"Yes. Students can start without previous industry experience."
},

{
q:"Will I work on real projects?",
a:"Yes. The program focuses on practical projects and portfolio building."
},

{
q:"Will I get certificate?",
a:"Yes. Completion certificate will be provided."
}

];






export default function Internship(){


return (

<main className={styles.page}>


{/* HERO */}

{/* <section className={styles.hero}>


<div className={styles.heroOverlay}></div>


<div className="container">


<div className={styles.heroContent}>


<span className={styles.badge}>
INTERNSHIP PROGRAM
</span>


<h1>

Learn.
Build.
<br/>

<span>
Get Career Ready.
</span>

</h1>


<p>

Gain real industry experience through
mentor-guided internships, live projects
and practical learning.

</p>



<div className={styles.buttons}>


<Link href="/contact"
className={styles.primaryBtn}>

Apply Now

<ArrowRight size={18}/>

</Link>



<Link href="#tracks"
className={styles.secondaryBtn}>

View Programs

</Link>


</div>


</div>


</div>


</section> */}




{/* <section className={styles.hero}>

<div className={styles.heroBox}>


<img
src="/images/internship-bg.jpg"
alt="internship"
className={styles.heroImage}
/>


<div className={styles.heroOverlay}></div>



<div className={styles.breadcrumb}>

<span>Home</span>

<i>•</i>

<span>Internship</span>

</div>



<div className={styles.heroContent}>


<span className={styles.badge}>
INTERNSHIP PROGRAM
</span>



<h1>

Learn.
<br/>

Build.
<br/>

<span>
Get Career Ready.
</span>

</h1>



<p>

Gain real industry experience through
mentor-guided internships, live projects
and practical learning.

</p>



<div className={styles.buttons}>


<Link
href="/contact"
className={styles.primaryBtn}
>

Apply Now

<ArrowRight size={18}/>

</Link>



<Link
href="#tracks"
className={styles.secondaryBtn}
>

View Programs

</Link>


</div>


</div>


</div>

</section> */}

<section className={styles.internshipHero}>

 


  <div className={styles.heroBanner}>


    <img
     src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      
      alt="Internship"
      className={styles.bannerImage}
    />


    <div className={styles.overlay}></div>


    <div className={styles.heroCenter}>


      <span className={styles.heroTag}>
        INTERNSHIP PROGRAM
      </span>


      <h1>
        Learn.
       
        Build.
        <br/>
        <span>
          Get Career Ready.
        </span>
      </h1>


      <p>
        Gain real industry experience through
        mentor-guided internships, live projects
        and practical learning.
      </p>


  


    </div>

  </div>

</section>
{/* COUNTER */}












{/* WHY JOIN */}













{/* TRACKS */}


{/* <section
id="tracks"
className={styles.tracks}
>


<div className="container">


<div className={styles.heading}>

<span>
OUR PROGRAMS
</span>


<h2>

Internship
<strong>
 Tracks
</strong>

</h2>

</div>




<div className={styles.trackGrid}>


{
tracks.map((item,index)=>(

<div
className={styles.trackCard}
key={index}
>


<img
src={item.image}
alt={item.title}
/>


<div className={styles.trackBody}>


<small>
{item.duration}
</small>


<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>



<Link href="/contact">

Explore

<ArrowRight size={16}/>

</Link>


</div>


</div>


))
}



</div>


</div>


</section> */}
<section
  id="tracks"
  className={styles.tracks}
>

<div className="container">


<div className={styles.heading}>

<span>
OUR PROGRAMS
</span>

<h2>
Internship 
<strong> Tracks</strong>
</h2>

<p>
Choose industry-focused internship programs designed to build real-world skills and career confidence.
</p>

</div>



<div className={styles.trackGrid}>

{
tracks.map((item,index)=>(

<div
className={styles.trackCard}
key={index}
>


<div className={styles.imageBox}>

<img
src={item.image}
alt={item.title}
/>

</div>



<div className={styles.trackBody}>


<span className={styles.duration}>
{item.duration}
</span>


<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>



<Link href="/contact">

Explore

<ArrowRight size={16}/>

</Link>


</div>


</div>


))
}


</div>


</div>

</section>

{/* ================= LEARNING JOURNEY ================= */}

<section className={styles.journey}>

<div className="container">


<div className={styles.heading}>

<span>
YOUR JOURNEY
</span>


<h2>
From Learning To
<strong> Career Ready</strong>
</h2>


<p>
A structured roadmap designed to transform beginners
into industry-ready professionals.
</p>

</div>



<div className={styles.timeline}>


{
steps.map((step,index)=>(

<div 
className={styles.step}
key={index}
>


<div className={styles.stepNumber}>
{step.num}
</div>



<div className={styles.stepContent}>

<h3>
{step.title}
</h3>


<p>
{step.desc}
</p>


</div>


</div>

))
}



</div>


</div>

</section>





{/* ================= INCLUDED ================= */}










{/* ================= FAQ ================= */}


<section className={styles.faq}>


<div className="container">


<div className={styles.faqGrid}>


<div>


<span>
FAQ
</span>


<h2>
Frequently
<strong> Asked Questions</strong>
</h2>


</div>





<div className={styles.faqList}>


{
faqs.map((item,index)=>(


<div
className={styles.faqItem}
key={index}
>


<h3>
{item.q}
</h3>


<p>
{item.a}
</p>


</div>


))
}



</div>


</div>


</div>


</section>







{/* ================= CTA ================= */}







</main>

);

}