
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