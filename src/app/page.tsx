"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight,
  CheckCircle2, GraduationCap, Briefcase, Award, MonitorPlay, Sparkles
} from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
/* ── Scroll reveal hook ── */
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

/* ── Typewriter ── */
const PHRASES = ["grow your business.", "elevate your brand.", "launch your career.", "master digital skills."];
function TypewriterSuffix() {
  const [idx, setIdx]           = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const full = PHRASES[idx];
    if (!deleting && displayed.length < full.length) {
      timer.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 52);
    } else if (!deleting && displayed.length === full.length) {
      timer.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timer.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [displayed, deleting, idx]);



  
  return (
    <span>
      <span style={{ color: "var(--amber)" }}>{displayed}</span>
      <span className="cursor-blink" aria-hidden="true" />
    </span>
  );
}
const services = [
{
 title:"Branding & Identity",
 category:"Creative",
 image:"https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nbyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
},
{
 title:"Marketing Solutions",
 category:"Marketing",
 image:"https://media.istockphoto.com/id/2153931453/photo/indian-hindu-gen-z-professional-colleagues-ladies-working-together-at-indoor-job-office-place.jpg?s=1024x1024&w=is&k=20&c=r3S6sg1Sdg5wN1m0ghvQcKVywhBctzz52wsPuDoPxUw="
},
{
 title:"Digital Marketing & SEO",
 category:"SEO",
 image:"https://media.istockphoto.com/id/2187866123/photo/team-collaboration-at-a-business-meeting-with-data-analysis.jpg?s=1024x1024&w=is&k=20&c=VFQCVXXJ5GZZny6J8RYJgAGYMoY8SgHss90ULi5Ss2o="
},
{
 title:"Creative Design & Motion",
 category:"Design",
 image:"https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
}
];
export default function HomePage() {
  
  useReveal();

  return (
    
    <div>
     


<section className="homeHero">

  <div className="homeHeroImage">
    <img
      src="https://plus.unsplash.com/premium_photo-1683121344366-64ebe7fc6f88?q=80&w=1600&auto=format&fit=crop"
      alt="Digital Agency"
    />
  </div>

  <div className="homeHeroOverlay"></div>

  <div className="container">

    <div className="homeHeroContent">

      <span className="homeHeroBadge">
        DIGITAL SOLUTIONS & CAREER TRAINING
      </span>

      <h1>
        We help you <br />
        <span>Build Brands.</span><br />
        Create Growth
      </h1>

      <p>
        A creative agency helping businesses grow through branding,
        marketing, technology and practical digital training.
      </p>

    </div>

  </div>

</section>
      {/* ════════════ MARQUEE — trust ticker ════════════ */}
      <div
        className="section-white"
        style={{ paddingBlock: "32px", borderBottom: "1px solid var(--border)" }}
      >
        <div className="marquee-wrap">
          <div className="marquee-track">
            {["Branding", "SEO", "Video Editing", "Graphic Design", "AI Tools",
              "Meta Ads", "Social Media", "Motion Graphics", "Web Design", "Internship",
              "Branding", "SEO", "Video Editing", "Graphic Design", "AI Tools",
              "Meta Ads", "Social Media", "Motion Graphics", "Web Design", "Internship",
            ].map((t, i) => (
              <span key={i} className="marquee-item" style={{ fontSize: "1.4rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>


      <section className=" section-py">
  <div className="container">

    <div className="about-dark-grid">

      {/* Image */}
      <div className="about-dark-image reveal">

        <img 
          src="/home1.png.avif" 
          alt="Idea Media Team"
        />

      


        

      </div>


      {/* Content */}
      <div className="about-dark-content reveal reveal-delay-1">

        <span className="dark-eyebrow">
          ABOUT US
        </span>


        <h2>
          Idea <span>Media</span>
        </h2>


        <p className="dark-lead">
          Idea Media stands at the forefront of digital solutions,
          helping businesses grow with creative strategies while
          empowering students through practical training and real
          project experience.
        </p>


        <p>
          We combine technology, creativity, and industry-focused
          learning to build future-ready professionals and powerful
          digital experiences.
        </p>


        <Link href="/about" className="dark-link">
          Learn More →
        </Link>


      </div>

    </div>

  </div>
</section>



  

<section className="services-dark-new">

  <div className="container">

    <div className="services-header-new">

      <div>

        <span className="service-label-new">
          Agency Capabilities
        </span>


        <h2>
          Digital Services
          <br />
          <span>Built for Growth</span>
        </h2>

      </div>


      <Link 
        href="/services" 
        className="service-view-new"
      >
        View All Services
        <ArrowRight size={18}/>
      </Link>


    </div>



    <div className="services-wrapper-new">


      <div className="services-slider-new">


        <Swiper

          modules={[Navigation]}

          navigation={{
            prevEl: ".service-prev-new",
            nextEl: ".service-next-new",
          }}

          slidesPerView={1}

          spaceBetween={25}


          breakpoints={{

            768:{
              slidesPerView:1,
              spaceBetween:25,
            },


            1024:{
              slidesPerView:2,
              spaceBetween:30,
            },


            1400:{
              slidesPerView:2,
              spaceBetween:35,
            }

          }}

        >


        {
          services.map((item,index)=>(

            <SwiperSlide key={index}>


              <Link
                href="/services"
                className="service-card-new"
              >


                <div className="service-image-new">


                  <img
                    src={item.image}
                    alt={item.title}
                  />


                </div>



                <div className="service-overlay-new">



                  <div>


                    <span>
                      {item.category}
                    </span>


                    <h3>
                      {item.title}
                    </h3>


                  </div>



                  <div className="service-arrow-new">

                    <ArrowUpRight size={22}/>

                  </div>


                </div>


              </Link>


            </SwiperSlide>

          ))
        }


        </Swiper>


      </div>



      <div className="service-buttons-new">


        <button className="service-prev-new">

          <ChevronLeft size={22}/>

        </button>



        <button className="service-next-new">

          <ChevronRight size={22}/>

        </button>


      </div>



    </div>


  </div>


</section>
      {/* ════════════ INTERNSHIP & TRAINING — Redesigned ════════════ */}
    <section className="section-dark section-py">
  <div className="container">

    <div className="internship-layout">

      {/* Left */}

      <div className="internship-left reveal">
        <span className="eyebrow eyebrow-white">
          Practical Internship
        </span>

        <h2 className="font-display internship-title">
          Learn with experts.<br />
          <span className="amber-mark">Work on real projects.</span>
        </h2>

        <p className="internship-desc">
          Build practical experience through live client work,
          expert mentorship, portfolio development, and career
          support—all inside a real agency environment.
        </p>

        <Link href="/internship" className="btn btn-primary">
          Explore Internship
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right */}

      <div className="internship-list reveal reveal-delay-1">

        <div className="internship-item">
          <span>01</span>

          <div>
            <h3>Live Client Projects</h3>
            <p>Work on real campaigns from day one.</p>
          </div>
        </div>

        <div className="internship-item">
          <span>02</span>

          <div>
            <h3>Industry Mentorship</h3>
            <p>Learn alongside experienced professionals.</p>
          </div>
        </div>

        <div className="internship-item">
          <span>03</span>

          <div>
            <h3>Portfolio Building</h3>
            <p>Create work that employers actually value.</p>
          </div>
        </div>

        <div className="internship-item">
          <span>04</span>

          <div>
            <h3>Placement Support</h3>
            <p>Resume reviews, interview prep and guidance.</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* ════════════ FEATURED COURSES — Unique Immersive Style ════════════ */}
      <section className="section-light section-py">
        <div className="container">
          <div className="section-header-row">
            <div className="reveal">
              <span className="eyebrow">Professional Skill Tracks</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "var(--ink)", marginTop: "6px" }}>
                Professional Learning  <span className="amber-mark">Paths</span>
              </h2>
            </div>
            <Link href="/courses" className="btn btn-ghost reveal reveal-delay-1" style={{ fontSize: "0.875rem" }}>
              View All Tracks <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {[
              { title: "Artificial Intelligence", desc: "Learn practical AI tools, prompt engineering, automation, and productivity workflows.", tag: "8 Weeks", image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80" },
              { title: "Digital Marketing",       desc: "Master SEO, Meta Ads, Google Ads, analytics, and content marketing.", tag: "10 Weeks", image: "/digita.jpg" },
              { title: "Graphic Design",          desc: "Develop branding, visual identity, UI design, and professional design workflows.", tag: "12 Weeks", image: "/graphic.avif" },
              { title: "Video Editing",           desc: "Create engaging commercial videos, motion graphics, and social media content.", tag: "10 Weeks", image: "/video.avif" },
            ].map((c, i) => (
              <div key={c.title} className={`reveal course-card-hover reveal-delay-${(i % 2) + 1}`} style={{ position: "relative", borderRadius: "24px", overflow: "hidden", minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "32px", color: "#fff", textDecoration: "none" } as any}>
                <img src={c.image} alt={c.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} className="course-bg" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)", zIndex: 1 }} />
                
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "100px", background: "var(--amber)", color: "var(--ink)", fontSize: "0.75rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.tag}</span>
                  <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{c.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px", maxWidth: "90%" }}>{c.desc}</p>
                  
                  <Link href="/courses" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--amber)", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                    View Course Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="cta-split">
  <div className="container">
    <div className="cta-split-grid reveal">

      <div className="cta-left">
        <span className="eyebrow eyebrow-amber">Let's Talk</span>

        <h2 className="cta-title">
          Ready to create your
          <span> next big project?</span>
        </h2>

        <p>
          From custom software and websites to digital marketing and
          internship programs, we're here to help you grow with confidence.
        </p>
      </div>

      <div className="cta-right">
        <Link href="/contact" className="cta-action">
          <div>
            <h3>Start Your Project</h3>
            <span>Let's discuss your ideas</span>
          </div>

          <ArrowUpRight size={26} />
        </Link>

        <Link href="/internship" className="cta-action">
          <div>
            <h3>Join Our Internship</h3>
            <span>Build real-world experience</span>
          </div>

          <ArrowUpRight size={26} />
        </Link>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}
