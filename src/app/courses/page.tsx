"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

import styles from "./courses.module.css";


function useReveal() {

  useEffect(() => {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold:0.12
      }
    );


    elements.forEach((el)=>observer.observe(el));


    return ()=>observer.disconnect();


  },[]);

}



const courses = [

{
 id:"ai",
 category:"AI Tools & Automation",
 title:"Artificial Intelligence",
 desc:"Master the tools and workflows shaping every industry — from prompt engineering to business automation.",
 duration:"10 weeks",
 rating:"4.5 ★",

 image:"https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBhdXRvbWF0aW9ufGVufDB8fDB8fHww",

 modules:[
 {
 name:"Prompt Engineering",
 desc:"Communicate with AI systems effectively across all major LLMs."
 },
 {
 name:"AI Tools Mastery",
 desc:"ChatGPT, Midjourney, Gemini, and 20+ production tools."
 },
 {
 name:"Automation Workflows",
 desc:"Build systems that work autonomously around your business goals."
 }
 ]

},


{
 id:"marketing",
 category:"Growth & SEO",
 title:"Digital Marketing",
 desc:"Every channel that drives real business growth — taught sequentially so each skill builds on the last.",
 duration:"10 weeks",
 rating:"4.8 ★",

 image:"https://media.istockphoto.com/id/2187866123/photo/team-collaboration-at-a-business-meeting-with-data-analysis.webp?a=1&b=1&s=612x612&w=0&k=20&c=qWZJGFyw_ZuCWs9-eyZelHbthSipZ86digVvNR2EPQ0=",

 modules:[
 {
 name:"Search Engine Optimization",
 desc:"Rank for the terms your customers actually search for."
 },
 {
 name:"Google & Meta Advertising",
 desc:"Campaigns optimized for better ROI."
 }
 ]

},


{
 id:"design",
 category:"UI & Visual Branding",
 title:"Graphic Design",
 desc:"Develop a creative eye and master the tools used by professional designers.",
 duration:"12 weeks",
 rating:"4.9 ★",

 image:"https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",

 modules:[
 {
 name:"Adobe Photoshop & Illustrator",
 desc:"Professional graphic design workflow."
 },
 {
 name:"Brand Identity Systems",
 desc:"Logos, typography and visual systems."
 }
 ]

},


{
 id:"video",
 category:"Motion & Video Production",
 title:"Video Editing",
 desc:"Create video content that stops the scroll and builds audiences.",
 duration:"10 weeks",
 rating:"4.8 ★",

 image:"https://plus.unsplash.com/premium_photo-1682146717223-874ac7dcc607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww",

 modules:[
 {
 name:"Adobe Premiere Pro",
 desc:"Professional video editing workflow."
 },
 {
 name:"After Effects & Motion",
 desc:"Motion graphics and visual effects."
 }
 ]

}

];



const included = [

"Live project experience",
"Industry mentorship",
"Completion certificate",
"Portfolio building support",
"Placement assistance",
"Recorded session access",
"Community peer access",
"Templates & resources"

];



export default function CoursesPage(){


useReveal();



return (

<div className={styles.page}>


{/* HERO */}

<section className={styles.courseHero}>


<div className={styles.courseHeroImage}>


<Image

src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D"

alt="Courses Hero"

fill

priority

className={styles.heroImage}

/>


<div className={styles.courseHeroOverlay}></div>



<div className={styles.courseHeroContent}>


<span className={styles.courseLabel}>

COURSES

</span>



<h1>

Learn Skills.

<br/>

<span>
Create Your Future
</span>

</h1>



<p>

Industry focused courses designed to build
practical skills and career opportunities.

</p>



</div>


</div>


</section>





{/* COURSE HEADER */}


<div className={styles.coursePrograms}>


<div className={styles.courseSectionHeader}>


<span className={styles.courseEyebrow}>

OUR COURSES

</span>



<h2>

Learn Skills That

<br/>

<span>
Build Your Career
</span>

</h2>



<p>

Industry-focused courses designed to build practical
skills, real-world experience, and career opportunities.

</p>



</div>





{/* COURSE LIST */}


{courses.map((course,index)=>(


<section

key={course.id}

id={course.id}

className={styles.sectionDark}

>


<div className={styles.container}>



<div className={styles.courseGrid}>



{/* IMAGE */}


<div className="reveal">


<div className={styles.courseImageBox}>

<img
 src={course.image}
 alt={course.title}
/>

</div>



<div className={styles.courseMeta}>

{/* 
<span className="chip chip-amber">

{course.category}

</span> */}

<span
  style={{
    color: "#f5a623",
    background: "rgba(245,166,35,.12)",
    border: "1px solid rgba(245,166,35,.3)",
    padding: "6px 14px",
    borderRadius: "999px",
    display: "inline-flex",
    fontSize:"small",
  }}
>
  {course.category}
</span>

<span className={styles.courseInfo}>

<Clock size={12}/>

{course.duration}

</span>



<span className={styles.courseInfo}>

{course.rating}

</span>


</div>


</div>
{/* CONTENT SIDE */}

<div
className={
index % 2 === 0
? "reveal reveal-delay-1"
: "reveal"
}
>


<h2 className="font-display">

{course.title}

</h2>



<p className={styles.courseDesc}>

{course.desc}

</p>




<div className={styles.moduleList}>


{course.modules.map((module)=>(


<div

key={module.name}

className={styles.moduleItem}

>


<CheckCircle2 />


<div>


<span className={styles.moduleTitle}>

{module.name}

</span>



<span className={styles.moduleDesc}>

{module.desc}

</span>


</div>


</div>


))}


</div>





<div className={styles.courseActions}>

<Link
  href="/contact"
  className={styles.enrollBtn}
>
  Enrol in Course

  <ArrowRight size={16}/>
</Link>


<span className={styles.courseNote}>
  Flexible timings · Live & online options
</span>

</div>



</div>


</div>


</div>


</section>


))}



</div>





{/* INCLUDED SECTION */}


{/* <section

className={styles.sectionDark}

style={{

borderTop:"1px solid rgba(255,255,255,0.05)"

}}

>


<div className="container">


<div className={styles.includedGrid}>


<div className="reveal">


<span className="eyebrow eyebrow-white">

Every Course Includes

</span>



<h2 className="font-display">


Not just lessons.

<br/>


<span className="amber-mark">

A complete launchpad.

</span>


</h2>




<p className={styles.includedText}>

Every program includes the practical support needed
to transition from student to working professional.

</p>




<Link

href="/contact"

className="btn btn-primary"

>

Start Your Journey

<ArrowRight size={16}/>

</Link>



</div>






<div

className="reveal reveal-delay-1"

>


<div className={styles.includedList}>


{included.map((item)=>(


<div

key={item}

className={styles.includedCard}

>


<CheckCircle2 size={16}/>


<span>

{item}

</span>


</div>


))}



</div>


</div>



</div>


</div>


</section> */}



<section
  className={styles.sectionDark}
  style={{
    borderTop: "1px solid rgba(255,255,255,.08)",
    background: "#0b0d11",
  }}
>
  <div className={styles.container}>
    <div className={styles.includedGrid}>

      <div className="reveal">

        <span className={styles.courseEyebrow}>
          EVERY COURSE INCLUDES
        </span>

        <h2 className={styles.includedHeading}>
          More than
          <br />
          <span>Just a Course.</span>
        </h2>

        <p className={styles.includedText}>
          Every program is designed with practical learning, live mentorship,
          portfolio development, and placement guidance to prepare you for a
          successful career.
        </p>

        <Link href="/contact" className="btn btn-primary">
          Start Your Journey
          <ArrowRight size={16} />
        </Link>

      </div>

      <div className="reveal reveal-delay-1">

        <div className={styles.includedList}>

          {included.map((item) => (
            <div key={item} className={styles.includedCard}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  </div>
</section>




{/* CTA */}


{/* <section className={styles.ctaSection}>


<div className="container-narrow">


<div className="reveal">


<span className="eyebrow">

Enrol Today

</span>



<h2 className={styles.ctaHeadline}>


Ready to build skills that

<br/>


<span className="amber-mark">

actually matter?

</span>


</h2>




<div className={styles.heroBtns}>


<Link

href="/contact"

className="btn btn-primary"

>

Book a Free Call

<ArrowRight size={16}/>

</Link>




<Link

href="/internship"

className="btn btn-ghost"

>

View Internship

</Link>


</div>



</div>


</div>


</section> */}

<section className={styles.internshipCta}>

  <div className={styles.internshipCtaContainer}>


    <div className={styles.internshipCtaContent}>


      <span className={styles.internshipCtaTag}>
        START YOUR JOURNEY
      </span>


      <h2>

        Ready to build skills
        <br />

        <span>
          for your future career?
        </span>

      </h2>



      <p>
        Join our industry-focused internship programs and gain
        practical experience, expert mentorship, and career-ready skills.
      </p>



      <div className={styles.internshipCtaButtons}>


        <Link
          href="/contact"
          className={styles.internshipPrimaryBtn}
        >

          Apply Now

          <ArrowRight size={18}/>

        </Link>



        <Link
          href="/internship"
          className={styles.internshipSecondaryBtn}
        >

          Explore Internships

        </Link>


      </div>


    </div>


  </div>

</section>


</div>


);

}