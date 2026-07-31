"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "./contact.module.css";
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

export default function ContactPage() {
  useReveal();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* ════ HERO ════ */}
   {/* ================= HERO ================= */}

<section className={styles.contactHero}>

  <div className={styles.contactBreadcrumb}>
    <Link href="/"></Link>
    <span></span>
    <span></span>
  </div>

  <div className={styles.heroBanner}>

    <img
      src="https://media.istockphoto.com/id/2189341261/photo/contact-us-customer-service-channel-concept-using-laptop-and-virtual-screen-icons-of-customer.webp?a=1&b=1&s=612x612&w=0&k=20&c=xOzJmztmuMH3LHntVCS6Sk-9-irx_rWBHusMbPO_Kms="
      alt="Contact"
      className={styles.bannerImage}
    />

    <div className={styles.overlay}></div>

    <div className={styles.heroCenter}>

      <span className={styles.heroTag}>
        CONTACT US
      </span>

      <h1>
        Let's Build
        <br />
        <span>Together.</span>
      </h1>

      <p>
        Whether you're looking for creative digital solutions,
        internships, or professional courses, our team is ready
        to help you take the next step.
      </p>

    </div>

  </div>

</section>

      {/* ════ CONTACT FORM + INFO — light ════ */}
      {/* <section className="section-light section-py">
        <div className="container">
        <div className={styles.contactWrapper}>

            
            <div className="reveal">
              <span className="eyebrow">Contact Info</span>
              <h2 className="font-display" style={{ fontSize: "var(--fs-display)", color: "var(--ink)", marginBottom: "24px", marginTop: "6px" }}>
                Let&apos;s build something<br /><span className="amber-mark">together.</span>
              </h2>
              <p style={{ color: "var(--slate)", lineHeight: 1.7, marginBottom: "36px" }}>
               Have a business idea, project requirement, or learning goal? Reach out to our team and we'll help you find the right path. 
              </p>

              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: Mail,    label: "Email",    value: "hello@ideamedia.in" },
                  { icon: Phone,   label: "Phone",    value: "+91 98765 43210" },
                  { icon: MapPin,  label: "Location", value: "India — Available Remotely Worldwide" },
               ].map((c) => {
  const Icon = c.icon;
  return (
    <div key={c.label} className={styles.contactCard}>
                      <div className={styles.contactIcon}>  
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", fontFamily: "'Space Mono',monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--slate)", marginBottom: "4px" }}>{c.label}</div>
                        <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.95rem" }}>{c.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              
              <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/services"   className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>Our Services</Link>
                <Link href="/internship" className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>Internship</Link>
                <Link href="/courses"    className="btn btn-ghost" style={{ fontSize: "0.85rem", padding: "9px 18px" }}>Courses</Link>
              </div>
            </div>

            
            <div className="reveal reveal-delay-1">
              {sent ? (
                <div style={{ padding: "48px 40px", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
                  <h3 className="font-display" style={{ fontSize: "1.5rem", color: "var(--ink)", marginBottom: "12px" }}>Message Sent!</h3>
                  <p style={{ color: "var(--slate)", lineHeight: 1.65 }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
               <form
onSubmit={handleSubmit}
className={styles.contactForm}
>
                  <h3 className="font-display" style={{ fontSize: "1.3rem", color: "var(--ink)", marginBottom: "4px" }}>
                    Send us a message
                  </h3>

               <div className={styles.formGrid}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>First Name *</label>
                      <input required className="input-field" placeholder="Jane" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>Last Name *</label>
                      <input required className="input-field" placeholder="Smith" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>Email Address *</label>
                    <input required type="email" className="input-field" placeholder="jane@company.com" />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>I&apos;m interested in</label>
                    <select className="input-field" style={{ cursor: "pointer" }}>
                      <option value="">Select an option…</option>
                      <option>Agency Services (Branding / Marketing)</option>
                      <option>Internship Program</option>
                      <option>Courses / Training</option>
                      <option>Partnership / Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>Message *</label>
                    <textarea required className="input-field" rows={5} placeholder="Tell us about your project or what you're looking for…" style={{ resize: "vertical" }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* ════ ALTERNATE ENQUIRY PATHS — dark ════ */}
      {/* <section className="section-dark section-py">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-white">Quick Paths</span>
            <h2 className="font-display" style={{ fontSize: "var(--fs-h2)", color: "#fff", marginTop: "6px" }}>
              Not sure where to <span className="amber-mark">start?</span>
            </h2>
          </div>
        
        </div>
      </section> */}

      <section className={styles.contactSection}>

<div className="container">

<div className={styles.contactLayout}>


{/* LEFT INFO */}

<div className={`${styles.contactInfo} reveal`}>

<span className={styles.contactBadge}>
CONTACT INFO
</span>


<h2>
Let's create
<br/>
<span>something great.</span>
</h2>


<p>
Have a project idea, business requirement, or want to start your learning journey?
Our team is ready to guide you with the right solution.
</p>



<div className={styles.infoCards}>


{[
{
icon:Mail,
title:"Email",
value:"hello@ideamedia.in"
},
{
icon:Phone,
title:"Phone",
value:"+91 98765 43210"
},
{
icon:MapPin,
title:"Location",
value:"India — Worldwide Remote"
}

].map((item)=>{

const Icon=item.icon;

return(

<div 
className={styles.infoCard}
key={item.title}
>

<div className={styles.infoIcon}>
<Icon size={22}/>
</div>


<div>

<span>
{item.title}
</span>

<strong>
{item.value}
</strong>

</div>


</div>

)

})}


</div>



<div className={styles.quickLinks}>


<Link href="/services">
Services
</Link>

<Link href="/internship">
Internship
</Link>

<Link href="/courses">
Courses
</Link>


</div>



</div>





{/* FORM */}

<div className={`${styles.formBox} reveal reveal-delay-1`}>


<div className={styles.formHeader}>

<h3>
Send a Message
</h3>

<p>
Tell us what you need. We'll get back soon.
</p>

</div>


<form
onSubmit={handleSubmit}
className={styles.modernForm}
>


<div className={styles.twoInput}>


<input
required
placeholder="First Name"
/>


<input
required
placeholder="Last Name"
/>


</div>



<input
required
type="email"
placeholder="Email Address"
/>




<select>

<option>
Select Service
</option>

<option>
Digital Marketing
</option>

<option>
Branding
</option>

<option>
Internship
</option>

<option>
Courses
</option>

</select>




<textarea
rows={5}
placeholder="Your message..."
required
/>


<button type="submit">

Send Message

<Send size={18}/>

</button>



</form>


</div>



</div>

</div>

</section>



{/* QUICK PATH */}

<section className={styles.pathSection}>


<div className="container">


<div className={styles.pathHeader}>


<span>
QUICK PATHS
</span>


<h2>
Choose your
<br/>
<span>next step.</span>
</h2>


</div>



<div className={styles.pathGrid}>


<div className={styles.pathCard}>

<h3>
Business Growth
</h3>

<p>
Need branding, marketing or creative solutions?
</p>

<Link href="/services">
Explore Services →
</Link>


</div>



<div className={styles.pathCard}>

<h3>
Start Learning
</h3>

<p>
Build practical skills through industry focused courses.
</p>

<Link href="/courses">
View Courses →
</Link>


</div>



<div className={styles.pathCard}>

<h3>
Career Opportunity
</h3>

<p>
Join our internship program and gain real experience.
</p>

<Link href="/internship">
Apply Now →
</Link>


</div>


</div>


</div>


</section>
    </div>
  );
}
