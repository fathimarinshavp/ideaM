// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import { ArrowRight, ArrowUpRight, TrendingUp, Briefcase, Sparkles, Video, MessageSquare } from "lucide-react";

// function useReveal() {
//   useEffect(() => {
//     const els = document.querySelectorAll(".reveal");
//     const io = new IntersectionObserver(
//       (entries) => entries.forEach((e) => {
//         if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
//       }),
//       { threshold: 0.12 }
//     );
//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);
// }

// const serviceCategories = [
//   {
//     slug: "branding", title: "Branding & Identity", icon: Briefcase,
//     intro: "Your brand is the first thing people remember. We build identities that survive trends.",
//     items: [
//       { name: "Logo & Visual Identity",     desc: "Timeless logos, color systems, typography, and visual brand guidelines." },
//       { name: "Brand Strategy",             desc: "Define your market positioning, core messaging, and audience persona." },
//       { name: "Packaging & Print Design",   desc: "Physical packaging and print assets that stand out on retail shelves." },
//     ],
//   },
//   {
//     slug: "marketing", title: "Marketing Solutions", icon: TrendingUp,
//     intro: "Data-driven campaigns that connect you with the right audience — and convert them.",
//     items: [
//       { name: "Social Media Marketing",           desc: "Consistent organic campaigns that build audience trust over time." },
//       { name: "Performance Ads (Meta & Google)",  desc: "Paid advertising campaigns optimized for direct ROI and conversion." },
//       { name: "Lead Generation Pipelines",        desc: "Qualified lead channels that fuel your sales and growth team." },
//     ],
//   },
//   {
//     slug: "digital", title: "Digital Marketing & SEO", icon: Sparkles,
//     intro: "A complete digital presence that works even when you're off — ranking, retargeting, converting.",
//     items: [
//       { name: "Search Engine Optimization (SEO)", desc: "Organic search ranking strategies to capture high-intent traffic." },
//       { name: "Digital Footprint Audit",          desc: "In-depth review of your digital channels to find growth gaps." },
//       { name: "Growth Strategy & Analytics",      desc: "Actionable reporting that tells you exactly what to scale next." },
//     ],
//   },
//   {
//     slug: "creative", title: "Creative Design & Motion", icon: Video,
//     intro: "Visual work that earns attention in a feed of noise — statics to high-impact video.",
//     items: [
//       { name: "Marketing Graphic Design",     desc: "High-converting ad graphics, social banners, and marketing collaterals." },
//       { name: "Reels & Video Editing",        desc: "Polished short-form and long-form video editing for social channels." },
//       { name: "Motion Graphics & Animation",  desc: "Animated logos, intros, lower thirds, and promo videos." },
//     ],
//   },
//   {
//     slug: "consulting", title: "Business Consulting", icon: MessageSquare,
//     intro: "Strategic guidance that aligns your digital investment with real business outcomes.",
//     items: [
//       { name: "Go-to-Market Strategy",  desc: "Tailored launch and expansion roadmaps for new products & services." },
//       { name: "Brand & Digital Audits", desc: "Honest assessment of your current marketing effectiveness." },
//       { name: "Growth Roadmapping",     desc: "Step-by-step quarterly strategy with clear milestones and owners." },
//     ],
//   },
// ];

// const process = [
//   { n: "01", title: "Discovery",    desc: "We analyze your business model, market, and goals before any proposal." },
//   { n: "02", title: "Strategy",     desc: "A custom strategic roadmap grounded in data and research, not assumptions." },
//   { n: "03", title: "Execution",    desc: "High-quality creative and campaign delivery against defined milestones." },
//   { n: "04", title: "Optimization", desc: "Continuous measurement, A/B testing, and performance refining." },
// ];

// export default function ServicesPage() {
//   useReveal();

//   return (
//     <div>
//       {/* ════ HERO ════ */}
//       <section className="hero-dark">
//         <div className="hero-dark-content">
//           <div className="hero-badge hero-animate">
//             <span className="hero-badge-dot" />
//             What We Offer
//           </div>
//           <h1 className="hero-headline headline-reveal">
//             Digital services that<br />
//             <span className="amber-mark">move the needle.</span>
//           </h1>
//           <p className="hero-sub hero-animate hero-animate-delay-1">
//             End-to-end creative and marketing solutions for ambitious businesses
//             that want a dominant digital presence.
//           </p>
//           <div className="hero-btns hero-animate hero-animate-delay-2">
//             <Link href="/contact" className="btn btn-primary">Get a Free Quote <ArrowRight size={16} /></Link>
//             <Link href="/about"   className="btn btn-ghost-dark">Our Approach</Link>
//           </div>
//         </div>
//       </section>

//       {/* ════ SERVICE CATEGORIES — light ════ */}
//       <section className="section-light section-py">
//         <div className="container">
//           <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
//             {serviceCategories.map((cat, catIdx) => {
//               const Icon = cat.icon;
//               return (
//               <div
//   key={cat.slug}
//   id={cat.slug}
//   className="serviceCard reveal"
// >
//                   {/* Left */}
//                   <div>
//                  <div className="serviceIcon">
//                       <Icon size={22} />
//                     </div>
//                     <span className="chip chip-amber" style={{ marginBottom: "12px" }}>{`0${catIdx + 1}`}</span>
//                     <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "8px", marginBottom: "12px" }}>{cat.title}</h2>
//                     <p style={{ color: "var(--slate)", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "24px" }}>{cat.intro}</p>
//                     <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "10px 22px" }}>
//                       Get a Quote <ArrowRight size={15} />
//                     </Link>
//                   </div>
//                   {/* Right */}
//                   <div className="serviceItems">
//                     {cat.items.map((item) => (
//                      <div key={item.name}  className="serviceItem">
//                         <div>
//                           <span style={{ fontWeight: 600, color: "var(--ink)", display: "block", marginBottom: "4px", fontSize: "0.95rem" }}>{item.name}</span>
//                           <span style={{ color: "var(--slate)", fontSize: "0.85rem", lineHeight: 1.5, display: "block" }}>{item.desc}</span>
//                         </div>
//                         <ArrowUpRight size={16} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ════ PROCESS — dark ════ */}
//       <section className="section-dark section-py">
//         <div className="container">
//           <div className="section-header reveal" style={{ textAlign: "center" }}>
//             <span className="eyebrow eyebrow-white">How We Work</span>
//             <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
//               A process built around <span className="amber-mark">results.</span>
//             </h2>
//           </div>
//           <div className="grid-4">
//             {process.map((step, i) => (
//               <div key={step.n} className={`card-dark reveal reveal-delay-${i + 1}`}>
//                 <div style={{ fontSize: "0.75rem", fontFamily: "'Space Mono',monospace", color: "var(--amber)", fontWeight: 700, display: "block", marginBottom: "16px", letterSpacing: "0.1em" }}>{step.n}</div>
//                 <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>{step.title}</h3>
//                 <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════ CTA ════ */}
//       <section className="section-light" style={{ paddingBlock: "clamp(64px,8vw,96px)", textAlign: "center" }}>
//         <div className="container-narrow">
//           <div className="reveal">
//             <span className="eyebrow" style={{ marginBottom: "20px" }}>Start Today</span>
//             <h2 className="cta-headline" style={{ marginBottom: "20px" }}>
//               Let&apos;s discuss what your<br /><span className="amber-mark">business needs.</span>
//             </h2>
//             <div className="hero-btns">
//               <Link href="/contact" className="btn btn-primary">Book a Free Consultation <ArrowRight size={16} /></Link>
//               <Link href="/about"   className="btn btn-ghost">Our Story</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }















"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Smartphone,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import styles from "./service.module.css";


const services = [
  {
    title: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nbyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    desc:
      "Build a memorable identity with strategic branding, logo design, brand guidelines, visual systems and messaging that reflect your business values.",
  },

  {
    title: "Marketing Solutions",
    image: "https://media.istockphoto.com/id/2153931453/photo/indian-hindu-gen-z-professional-colleagues-ladies-working-together-at-indoor-job-office-place.jpg?s=1024x1024&w=is&k=20&c=r3S6sg1Sdg5wN1m0ghvQcKVywhBctzz52wsPuDoPxUw=",
    desc:
      "Create effective campaigns that increase visibility, generate quality leads and build lasting customer relationships across every channel.",
  },

  {
    title: "Digital Marketing & SEO",
    image: "https://media.istockphoto.com/id/2187866123/photo/team-collaboration-at-a-business-meeting-with-data-analysis.jpg?s=1024x1024&w=is&k=20&c=VFQCVXXJ5GZZny6J8RYJgAGYMoY8SgHss90ULi5Ss2o=",
    desc:
      "Improve your online presence with SEO, content marketing, social media management, paid advertising and performance analytics.",
  },

  {
    title: "Creative Design & Motion",
    image: "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    desc:
      "Deliver engaging visual experiences through graphic design, motion graphics, video editing, social creatives and digital storytelling.",
  },

  {
    title: "Business Consulting",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
    desc:
      "Make confident business decisions with strategic consulting, digital transformation planning and sustainable growth strategies.",
  },
];
const products = [
  {
    title: "Gewan Atlas",
    desc:
      "An online travel booking engine designed for direct consumers, providing flights, accommodations, and travel services.",
  },

  {
    title: "Gewan Hive",
    desc:
      "A B2B travel booking engine for travel companies, consolidators, and wholesalers.",
  },

  {
    title: "Gewan Nexus",
    desc:
      "A corporate travel booking and expense management platform for efficient business travel.",
  },

  {
    title: "Gewan Apps",
    desc:
      "Travel mobile applications across iOS and Android with seamless booking experiences.",
  },
];


const benefits = [
  "Scalable Solutions",
  "Dedicated Support and Maintenance",
  "Cost Effective Strategies",
  "Timely Project Delivery",
];


export default function ServicesPage() {


return (

<div className={styles.page}>


{/* HERO */}

<section className={styles.hero}>


<div className={styles.heroGlow}></div>


<div className="container">


<div className={styles.breadcrumb}>

<Link href="/">

</Link>

<span></span>

<span>

</span>

</div>



<div className={styles.banner}>


<img
src="https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3PCse04HxmDXn6LsY1MuQsh01AflW_wR0jwF4tYZ8QY="
alt="Gewan Services"
/>


<div className={styles.overlay}></div>



<div className={styles.bannerContent}>

<span>
SERVICES
</span>


<h1>
Solutions We <strong>Provide</strong>
</h1>


<p>
Technology solutions that help businesses grow
</p>


</div>



</div>


</div>

</section>





{/* SERVICES */}


{/* <section className={styles.services}>


<div className="container">


<div className={styles.heading}>

<span>
OUR SERVICES
</span>


<h2>
Digital solutions built for <b>growth</b>
</h2>


</div>



<div className={styles.serviceGrid}>


{
services.map((item,index)=>{


const Icon=item.icon;


return (

<div
className={styles.card}
key={index}
>


<div className={styles.cardImage}>


<img
src={item.image}
alt={item.title}
/>


</div>




<div className={styles.cardBody}>


<div className={styles.icon}>
<Icon size={25}/>
</div>



<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>



<Link href="/contact">

Read More

<ArrowUpRight size={16}/>

</Link>


</div>



</div>


)

})

}


</div>


</div>


</section> */}



{/* ================= SERVICES ================= */}

{/* ===================== SERVICES ===================== */}

{/* <section className={styles.services}>
  <div className="container">

    <div className={styles.sectionHeader}>
      <span>OUR SERVICES</span>

      <h2>
       
      
          Going beyond what’s possible
      </h2>

     
    </div>

    {services.map((service, index) => (
      <div
        key={index}
        className={`${styles.serviceSection} ${
          index % 2 !== 0 ? styles.reverse : ""
        }`}
      >
        

        <div className={styles.serviceImage}>

          <img
            src={service.image}
            alt={service.title}
          />

        </div>

    

        <div className={styles.serviceContent}>

          <span className={styles.number}>
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <div className={styles.line}></div>

          <h3>{service.title}</h3>

          <p>{service.desc}</p>

          <Link
            href="/contact"
            className={styles.serviceBtn}
          >
            Explore Service

            <ArrowUpRight size={18}/>
          </Link>

        </div>

      </div>
    ))}

  </div>
</section> */}

<section className={styles.services}>
  <div className="container">

    <div className={styles.sectionHeader}>
      <span>OUR SERVICES</span>
      <h2>Going Beyond What's Possible</h2>
      <p>
        We help businesses grow through creative branding, digital marketing,
        business consulting, and innovative technology solutions.
      </p>
    </div>

    {services.map((service, index) => (
      <div
        key={index}
        className={`${styles.serviceRow} ${
          index % 2 !== 0 ? styles.reverse : ""
        }`}
      >
        {/* Image */}

        <div className={styles.serviceImage}>
          <img
            src={service.image}
            alt={service.title}
          />
        </div>

        {/* Content */}

        <div className={styles.serviceContent}>

          <span className={styles.serviceNumber}>
            0{index + 1}
          </span>

          <h3>{service.title}</h3>

          <p>
            {service.desc}
          </p>

          <Link href="/contact" className={styles.readMore}>
            Read More
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    ))}

  </div>
</section>

{/* CUSTOM SOLUTION */}


{/* <section className={styles.custom}>


<div className="container">


<div className={styles.customGrid}>


<div>


<span className={styles.amber}>
CUSTOM SOLUTIONS
</span>


<h2>
Solutions designed around your business needs
</h2>


<p>
At Gewan InfoTech, we understand every business has unique challenges. Our customized solutions combine innovation, technology, and strategy to deliver measurable results.
</p>



<Link
href="/contact"
className={styles.button}
>

Get Started

<ArrowRight size={17}/>

</Link>


</div>




<img
src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
alt="Custom Solutions"
/>



</div>


</div>


</section>



 */}



{/* STATS */}








{/* INDUSTRY */}


{/* <section className={styles.industry}>


<div className="container">


<div className={styles.heading}>

<span>
INDUSTRY FOCUS
</span>


<h2>
Travel technology <b>solutions</b>
</h2>


</div>




<div className={styles.productGrid}>


{
products.map((item,index)=>(


<div
className={styles.productCard}
key={index}
>


<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>


<Link href="/">
Read More
<ArrowUpRight size={16}/>
</Link>


</div>


))

}


</div>


</div>


</section>

 */}





{/* BENEFITS */}


{/* <section className={styles.benefits}>


<div className="container">


<div className={styles.heading}>

<h2>
Benefits of Choosing <b>Our Services</b>
</h2>

</div>



<div className={styles.benefitGrid}>


{
benefits.map((item,index)=>(


<div
className={styles.benefitCard}
key={index}
>


<CheckCircle2 size={28}/>


<h3>
{item}
</h3>


<p>
Reliable solutions designed to support your business growth.
</p>


</div>


))

}


</div>


</div>


</section>




 */}


{/* CTA */}


{/* <section className={styles.cta}>


<h2>
Ready to build your <span>digital future?</span>
</h2>


<Link href="/contact">

Contact Us

<ArrowRight size={18}/>

</Link>


</section> */}



</div>

);

}