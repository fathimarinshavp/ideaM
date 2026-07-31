"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./globals.css";
import {
  GraduationCap,
  Users,
  BriefcaseBusiness,
  Award,
  Rocket,
  Target,
  Bot,
  Megaphone,
  Palette,
  Video,
    UsersRound,
  Briefcase,
  Lightbulb,
  Code2,
  Trophy ,
   Sparkles,
   Clock 
  
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const services = [

{
title:"Digital Marketing",
image:"https://media.istockphoto.com/id/2187866123/photo/team-collaboration-at-a-business-meeting-with-data-analysis.webp?a=1&b=1&s=612x612&w=0&k=20&c=qWZJGFyw_ZuCWs9-eyZelHbthSipZ86digVvNR2EPQ0=",
description:
"Grow your business through strategic digital campaigns, SEO, social media marketing, performance marketing and content strategies."
},

{
title:"Branding Solutions",
image:"https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYXRpdmUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
description:
"Build a powerful brand identity with logo design, brand strategy, packaging design and creative marketing solutions."
},


{
title:"Creative Design",
image:"https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JlYXRpdmUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
description:
"Professional graphic design, video editing, motion graphics, promotional videos and creative content."
},
{
title:"Business Consulting",
image:"https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
description:
"Marketing planning, brand positioning, digital presence and business growth solutions."
}

];
const internships = [
  {
    title: "MERN Stack Development",
    type: "INTERNSHIP",
    description:
      "Learn MongoDB, Express.js, React.js, and Node.js by building real-world web applications with industry practices.",
  },
  {
    title: "Digital Marketing",
    type: "INTERNSHIP",
    description:
      "Gain practical experience in SEO, social media marketing, content strategy, and online brand growth.",
  },
  {
    title: "UI/UX Design",
    type: "INTERNSHIP",
    description:
      "Create user-friendly designs by learning wireframing, prototyping, design systems, and user research.",
  },
  {
    title: "Media & Content Creation",
    type: "INTERNSHIP",
    description:
      "Develop skills in video editing, content production, storytelling, and creative media strategies.",
  },
  {
    title: "Graphic Design",
    type: "INTERNSHIP",
    description:
      "Learn visual communication, branding design, posters, social media creatives, and marketing assets.",
  },
  {
    title: "AI & Automation",
    type: "INTERNSHIP",
    description:
      "Explore AI tools, automation workflows, and modern technologies used in digital businesses.",
  },
];
export default function HomePage() {
  
  return (
    <main>

   


<section className="hero">

  <div className="hero-banner">


    <div className="hero-overlay"></div>


    <div className="hero-content">


      <span className="hero-label">
        CREATIVE DIGITAL AGENCY
      </span>


      <h1 className="hero-title">

        Empowering Brands.
        <br />

        <span>
          Building Digital Futures.
        </span>

      </h1>


      <p className="hero-subtitle">
        Creative solutions that help businesses grow
      </p>


    </div>


  </div>


</section>


<section className="about-section">






<section className="media-about-section">




 





<section className="company-about-section">

  <div className="container">

    <div className="company-about-wrapper">


      <div className="company-about-content">


   <span className="section-label">
  About Idea Media
</span>

<h2 className="section-heading">
  Building Brands.
  <br/>
  <span>
    Creating Futures.
  </span>
</h2>



        <p>
          Idea Media is a creative media, branding, and digital
          marketing company dedicated to helping businesses build
          a strong digital presence.
        </p>



        <p>
          We combine creativity, technology, and strategic thinking
          to create impactful branding, digital marketing, web
          solutions, and media experiences that help brands grow.
        </p>



        <p>
          Along with business solutions, Idea Media focuses on
          developing future digital professionals through practical
          training, internships, and industry-oriented learning.
        </p>


      </div>



    </div>


  </div>


</section>


</section>


</section>
<section className="services-section">


<div className="services-container">

<div className="service-header">

  <div className="service-header-left">

    <span className="service-subtitle">
      Our Services
    </span>

    <h2 className="service-main-title">
      Digital Solutions.
      <br />
      <span>That Drive Growth.</span>
    </h2>

  </div>

  <div className="service-header-right">

    <a href="/services" className="service-view-btn">
      View Services →
    </a>

  </div>

</div>

<div className="services-slider-wrapper">


<Swiper

modules={[Navigation]}

navigation={{
nextEl:".service-next",
prevEl:".service-prev"
}}

spaceBetween={40}

slidesPerView={2}


breakpoints={{

0:{
slidesPerView:1
},

768:{
slidesPerView:1
},

1100:{
slidesPerView:2
}

}}

className="serviceSwiper"



>


{
services.map((service,index)=>(


<SwiperSlide key={index}>


<div className="service-card">


<div className="service-image">

<img
src={service.image}
alt={service.title}
/>

</div>



<div className="service-content">
<h3>
<span>‹</span>
{service.title}
</h3>


<p className="service-p">
{service.description}
</p></div>


</div>


</SwiperSlide>


))
}



</Swiper>




<div className="service-buttons">

<button className="service-prev">
‹
</button>


<button className="service-next">
›
</button>

</div>


</div>


</div>


</section>



<section className="internship-section">

  <div className="container">

    <div className="internship-header">
<span className="section-label">
  Internship & Training
</span>

<h2 className="section-heading">
  Learn.
  <br/>
  <span>
    Practice. Grow.
  </span>
</h2> 


  <p>
    Build industry-ready skills through practical training,
    live projects, expert mentorship, and real-world experience.
    We help students transform their ideas into professional
    digital skills.
  </p>


</div>



   

    <div className="program-grid">

      {internships.map((item,index)=>(

        <div className="program-card" key={index}>

          <div className="program-icon">
            <Rocket size={30}/>
          </div>


          <h3>
            {item.title}
          </h3>


          <p>
            {item.description}
          </p>


          <span>
            Learn More →
          </span>


        </div>

      ))}


    </div>






    <div className="training-features">


      <div className="feature-card">

        <Clock size={26}/>

        <div>
          <small>DURATION</small>
          <h4>Flexible Training</h4>
        </div>

      </div>



      <div className="feature-card">

        <BriefcaseBusiness size={26}/>

        <div>
          <small>PROJECTS</small>
          <h4>Real Client Projects</h4>
        </div>

      </div>



      <div className="feature-card">

        <Users size={26}/>

        <div>
          <small>MENTORSHIP</small>
          <h4>Expert Guidance</h4>
        </div>

      </div>



      <div className="feature-card">

        <Award size={26}/>

        <div>
          <small>CERTIFICATE</small>
          <h4>Career Certificate</h4>
        </div>

      </div>



    </div>


  </div>


</section>

<section className="courses-section">

  <div className="container">


    <div className="courses-header">

   <span className="section-label">
  Professional Courses
</span>

<h2 className="section-heading">
  Build Skills.
  <br/>
  <span>
    Shape Your Future.
  </span>
</h2>


      <p>
        Learn industry-focused skills through practical courses
        designed for students, creators, and future digital
        professionals.
      </p>

    </div>



    <div className="courses-grid">


      <div className="course-card">

        <span className="course-number">
          01
        </span>


        <div className="course-icon">
          <Bot size={30}/>
        </div>


        <h3>
          Artificial Intelligence
        </h3>


        <p>
          Learn AI tools, automation, prompt engineering,
          and modern AI applications used in businesses.
        </p>


        <div className="course-tags">
          <span>AI Tools</span>
          <span>Prompt Engineering</span>
          <span>Automation</span>
        </div>


      </div>




      <div className="course-card">

        <span className="course-number">
          02
        </span>


        <div className="course-icon">
          <Megaphone size={30}/>
        </div>


        <h3>
          Digital Marketing
        </h3>


        <p>
          Master digital strategies to build brands,
          increase visibility, and grow businesses online.
        </p>


        <div className="course-tags">
          <span>SEO</span>
          <span>Google Ads</span>
          <span>Social Media</span>
        </div>


      </div>




      <div className="course-card">

        <span className="course-number">
          03
        </span>


        <div className="course-icon">
          <Palette size={30}/>
        </div>


        <h3>
          Graphic Design
        </h3>


        <p>
          Create professional designs for branding,
          marketing campaigns, and digital platforms.
        </p>


        <div className="course-tags">
          <span>Photoshop</span>
          <span>Illustrator</span>
          <span>Canva</span>
        </div>


      </div>




      <div className="course-card">

        <span className="course-number">
          04
        </span>


        <div className="course-icon">
          <Video size={30}/>
        </div>


        <h3>
          Video Editing
        </h3>


        <p>
          Learn professional video creation for
          YouTube, reels, and business content.
        </p>


        <div className="course-tags">
          <span>Premiere Pro</span>
          <span>After Effects</span>
          <span>Reels</span>
        </div>


      </div>


    </div>


  </div>

</section>


{/* <section className="cta-section">

  <div className="container">

    <div className="cta-box">

      <div className="cta-icon">
        <Sparkles size={32}/>
      </div>


      <span className="cta-tag">
        Ready To Grow?
      </span>


      <h2>
        Build Your Brand.
        <br />
        <span>Build Your Career.</span>
      </h2>


      <p>
        Whether you are a business looking for digital growth
        or a student preparing for a successful career,
        Idea Media is here to help you move forward.
      </p>


      <div className="cta-buttons">

        <a href="/contact" className="cta-primary">
          Book A Free Consultation
          <ArrowRight size={18}/>
        </a>


        <a href="/internship" className="cta-secondary">
          Join Free Workshop
        </a>

      </div>


    </div>

  </div>

</section> */}

{/* <section className="cta-section">

  <div className="container">

    <div className="cta-card">

      <div className="cta-left">

        <span className="cta-badge">
          ✦ LET'S BUILD SOMETHING GREAT
        </span>

        <h2>
          Turn Your Ideas Into
          <span> Digital Success.</span>
        </h2>

        <p>
          From branding and digital marketing to web development and
          career-focused internships, we help businesses and students
          achieve real growth with innovative solutions.
        </p>

      </div>

      <div className="cta-right">

        <div className="cta-icon">
          <Sparkles size={38} />
        </div>

        <h3>Ready to Start?</h3>

        <p>
          Let's discuss your next project or help you begin your
          professional journey.
        </p>

        <div className="cta-buttons">

          <a href="/contact" className="cta-primary">
            Start Your Project
            <ArrowRight size={18}/>
          </a>

          <a href="/internship" className="cta-secondary">
            Explore Internship
          </a>

        </div>

      </div>

    </div>

  </div>

</section> */}

<section className="cta-section">
  <div className="container">

    <div className="cta-card">

      <span className="cta-tag">
        LET'S WORK TOGETHER
      </span>

      <h2>
        Ready to Grow Your Business
        <span> With Idea Media?</span>
      </h2>

      <p>
        Whether you're looking for branding, digital marketing, web
        development, or internship opportunities, our team is ready to
        help you achieve your goals.
      </p>

      <div className="cta-buttons">

        <a href="/contact" className="cta-primary">
          Get Started
          <ArrowRight size={18} />
        </a>

        <a href="/internship" className="cta-secondary">
          Explore Internship
        </a>

      </div>

    </div>

  </div>
</section>
    </main>
  );
}