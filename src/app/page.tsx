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

   

{/* <section className="hero">


  <div className="hero-container">

<div className="hero-text">

  <div className="hero-chip">
    ✦ Creative Digital Agency
  </div>

  <h1 className="hero-heading">
    Empowering Brands.
    <br />
    <span>Building Digital Futures.</span>
  </h1>

  <p className="hero-description">
    Idea Media helps businesses grow through creative branding,
    digital marketing, web development, and innovative media
    solutions while empowering students through practical
    training and career-focused internships.
  </p>

  <div className="hero-actions">

    <Link href="/services" className="gold-btn">
      Explore Services
      <ArrowRight size={18}/>
    </Link>

    <Link href="/internship" className="outline-btn">
      Join Internship
    </Link>

  </div>

</div>




    <div className="hero-image">

    

   

    </div>



  </div>

</section> */}
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
{/* <section className="why-section">
  <div className="container">

    <div className="why-header">
      <span className="section-tag">
        Why Idea Media
      </span>

      <h2>
        We Create Digital
        <br />
        <span>Experiences That Grow Brands</span>
      </h2>

      <p>
        At Idea Media, we combine creativity, technology, and strategy
        to build powerful digital solutions that help businesses grow
        and connect with their audience.
      </p>
    </div>


    <div className="why-grid">

      <div className="why-card">
        <div className="why-number">
          01
        </div>

        <h3>
          Creative Strategy
        </h3>

        <p>
          We develop unique strategies that transform ideas into
          impactful digital experiences.
        </p>
      </div>


      <div className="why-card">
        <div className="why-number">
          02
        </div>

        <h3>
          Modern Solutions
        </h3>

        <p>
          From branding to web development, we create solutions
          designed for today's digital world.
        </p>
      </div>


      <div className="why-card">
        <div className="why-number">
          03
        </div>

        <h3>
          Growth Focused
        </h3>

        <p>
          Every project is built with a focus on performance,
          visibility, and business growth.
        </p>
      </div>


    </div>

  </div>
</section> */}

<section className="about-section">


  {/* Small Marquee */}

  {/* <div className="about-marquee">

    <div className="marquee-track">

      {[
        "Branding",
        "SEO",
        "Video Editing",
        "Graphic Design",
        "AI Tools",
        "Meta Ads",
        "Social Media",
        "Web Design",
        "Internship",

        "Branding",
        "SEO",
        "Video Editing",
        "Graphic Design",
        "AI Tools",
        "Meta Ads",
        "Social Media",
        "Web Design",
        "Internship"

      ].map((item,index)=>(

        <span className="marquee-item" key={index}>
          {item}
        </span>

      ))}

    </div>

  </div> */}




<section className="media-about-section">


  {/* Skill Marquee */}

 





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
{/* <div className="services-top">

<span className="section-label">
  Our Services
</span>

<h2 className="section-heading">
  Digital Solutions.
  <br/>
  <span>
    That Drive Growth.
  </span>
</h2>


<p className="section-description">
  We provide creative digital solutions including branding,
  marketing, web development, and media services to help
  businesses grow.
</p>


<a href="/services" className="section-link">
  View Services →
</a>

</div> */}
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

{/* <section className="training-section">

  <div className="container">


    <div className="training-header">

      <span className="section-tag">
        Internship & Training
      </span>


      <h2>
        Learn.
        <br />
        <span>Practice. Grow.</span>
      </h2>


      <p>
        Idea Media provides practical training programs designed
        to help students become industry-ready through mentorship,
        live projects, and real-world experience.
      </p>

    </div>



    <div className="training-grid">


      <div className="training-card">

        <div className="training-icon">
          <GraduationCap size={32}/>
        </div>

        <h3>
          Industry Training
        </h3>

        <p>
          Learn professional skills with structured,
          practical learning programs.
        </p>

      </div>



      <div className="training-card">

        <div className="training-icon">
          <BriefcaseBusiness size={32}/>
        </div>

        <h3>
          Live Projects
        </h3>

        <p>
          Work on real projects and build your
          professional portfolio.
        </p>

      </div>



      <div className="training-card">

        <div className="training-icon">
          <Users size={32}/>
        </div>

        <h3>
          Expert Mentorship
        </h3>

        <p>
          Get guidance from experienced professionals
          and industry experts.
        </p>

      </div>



      <div className="training-card">

        <div className="training-icon">
          <Award size={32}/>
        </div>

        <h3>
          Internship Certificate
        </h3>

        <p>
          Receive certification that supports your
          career growth.
        </p>

      </div>



      <div className="training-card">

        <div className="training-icon">
          <Target size={32}/>
        </div>

        <h3>
          Career Guidance
        </h3>

        <p>
          Improve your skills with interview preparation
          and career support.
        </p>

      </div>



      <div className="training-card">

        <div className="training-icon">
          <Rocket size={32}/>
        </div>

        <h3>
          Placement Support
        </h3>

        <p>
          Build confidence and prepare for digital
          career opportunities.
        </p>

      </div>


    </div>


  </div>

</section> */}
{/* <section className="internship-section">

  <div className="container">

    <div className="internship-header">

      <span className="section-tag">
        Internship & Training
      </span>

      <h2>
        Learn.
        <br />
        <span>Build. Grow.</span>
      </h2>

      <p>
        A structured internship program designed to help students
        gain real-world experience through live projects,
        expert mentorship, and industry-focused training.
      </p>

    </div>


    <div className="internship-grid">

<div className="internship-grid">

{internships.map((item,index)=>(
  <div className="internship-card" key={index}>

    <div className="internship-icon">
      <Rocket size={28}/>
    </div>

    <small>{item.type}</small>

    <h3>{item.title}</h3>

    <p>
      {item.description}
    </p>

  </div>
))}

</div>



      <div className="internship-card">

        <div className="internship-icon">
          <Clock size={28}/>
        </div>

        <div>
          <small>SCHEDULE</small>
          <h3>
            5 Days a Week
          </h3>
        </div>

      </div>



      <div className="internship-card">

        <div className="internship-icon">
          <BriefcaseBusiness size={28}/>
        </div>

        <div>
          <small>PROJECTS</small>
          <h3>
            Real Client Projects
          </h3>
        </div>

      </div>



      <div className="internship-card">

        <div className="internship-icon">
          <Users size={28}/>
        </div>

        <div>
          <small>MENTORSHIP</small>
          <h3>
            Industry Experts
          </h3>
        </div>

      </div>



      <div className="internship-card">

        <div className="internship-icon">
          <Award size={28}/>
        </div>

        <div>
          <small>CERTIFICATE</small>
          <h3>
            Internship Certificate
          </h3>
        </div>

      </div>



      <div className="internship-card">

        <div className="internship-icon">
          <Rocket size={28}/>
        </div>

        <div>
          <small>CAREER</small>
          <h3>
            Placement Support
          </h3>
        </div>

      </div>


    </div>


  </div>

</section> */}
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



    {/* MAIN PROGRAMS */}

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




    {/* FEATURES */}

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
{/* <section className="courses-section">

  <div className="container">


    <div className="courses-header">

      <span className="section-tag">
        Professional Courses
      </span>


      <h2>
        Build Skills.
        <br />
        <span>Create Your Future.</span>
      </h2>


      <p>
        Learn industry-focused skills through practical courses
        designed for students, creators, and future digital
        professionals.
      </p>

    </div>



    <div className="courses-grid">


   

      <div className="course-card">

        <div className="course-icon">
          <Bot size={34}/>
        </div>


        <h3>
          Artificial Intelligence
        </h3>


        <p>
          Learn AI tools, prompt engineering, automation,
          content creation, and business AI applications.
        </p>


        <ul>
          <li>Prompt Engineering</li>
          <li>AI Tools</li>
          <li>Automation</li>
        </ul>

      </div>





      <div className="course-card">

        <div className="course-icon">
          <Megaphone size={34}/>
        </div>


        <h3>
          Digital Marketing
        </h3>


        <p>
          Master online marketing strategies to grow
          brands and businesses digitally.
        </p>


        <ul>
          <li>SEO</li>
          <li>Google Ads</li>
          <li>Social Media Marketing</li>
        </ul>

      </div>




   

      <div className="course-card">

        <div className="course-icon">
          <Palette size={34}/>
        </div>


        <h3>
          Graphic Design
        </h3>


        <p>
          Develop creative design skills for branding
          and digital media.
        </p>


        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Canva Design</li>
        </ul>

      </div>




   

      <div className="course-card">

        <div className="course-icon">
          <Video size={34}/>
        </div>


        <h3>
          Video Editing
        </h3>


        <p>
          Create professional videos for YouTube,
          social media, and business promotions.
        </p>


        <ul>
          <li>Premiere Pro</li>
          <li>After Effects</li>
          <li>Reels Editing</li>
        </ul>

      </div>



    </div>


  </div>

</section> */}

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

{/* <section className="why-choose-section">

  <div className="container">


    <div className="why-choose-header">

      <span className="section-tag amber">
        Why Idea Media
      </span>


      <h2>
        Where Creativity
        <br />
        <span>Meets Growth</span>
      </h2>


      <p>
        We combine industry expertise, practical learning,
        and creative solutions to help students build careers
        and businesses achieve digital success.
      </p>

    </div>



    <div className="choose-grid">


      <div className="choose-card">

        <div className="choose-icon">
          <UsersRound size={32}/>
        </div>

        <h3>
          Industry Experts
        </h3>

        <p>
          Learn from experienced professionals with
          real-world industry knowledge.
        </p>

      </div>



      <div className="choose-card">

        <div className="choose-icon">
          <Briefcase size={32}/>
        </div>

        <h3>
          Real Client Projects
        </h3>

        <p>
          Gain practical experience by working on
          real business projects.
        </p>

      </div>



      <div className="choose-card">

        <div className="choose-icon">
          <Lightbulb size={32}/>
        </div>

        <h3>
          Modern Learning
        </h3>

        <p>
          Learn updated tools, technologies, and
          industry-focused skills.
        </p>

      </div>



      <div className="choose-card">

        <div className="choose-icon">
          <Rocket size={32}/>
        </div>

        <h3>
          Career Support
        </h3>

        <p>
          Get guidance, portfolio support, and
          career preparation.
        </p>

      </div>


    </div>



    

   <div className="process-wrapper">

  <div className="process-heading">

    <span className="process-tag">
      Our Journey
    </span>

    <h3 className="process-title">
      From Learning
      <br />
      <span>To Career Growth</span>
    </h3>

    <p className="process-description">
      Our structured process helps students gain skills,
      practical experience, and confidence to build a
      successful digital career.
    </p>

  </div>



  <div className="process-grid">


    <div className="process-item">

      <span className="process-number">
        01
      </span>

      <div className="process-icon">
        <GraduationCap size={30}/>
      </div>

      <h4>
        Learn
      </h4>

      <p>
        Build strong fundamentals with industry-focused training.
      </p>

    </div>




    <div className="process-item">

      <span className="process-number">
        02
      </span>

      <div className="process-icon">
        <Code2 size={30}/>
      </div>

      <h4>
        Practice
      </h4>

      <p>
        Improve skills through assignments and practical exercises.
      </p>

    </div>




    <div className="process-item">

      <span className="process-number">
        03
      </span>

      <div className="process-icon">
        <Lightbulb size={30}/>
      </div>

      <h4>
        Create
      </h4>

      <p>
        Work on creative ideas and real-world projects.
      </p>

    </div>




    <div className="process-item">

      <span className="process-number">
        04
      </span>

      <div className="process-icon">
        <Target size={30}/>
      </div>

      <h4>
        Experience
      </h4>

      <p>
        Gain client exposure and industry experience.
      </p>

    </div>




    <div className="process-item">

      <span className="process-number">
        05
      </span>

      <div className="process-icon">
        <Trophy size={30}/>
      </div>

      <h4>
        Get Hired
      </h4>

      <p>
        Build your portfolio and move towards career success.
      </p>

    </div>



  </div>

</div>


  </div>

</section> */}

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
<section className="cta-section">

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

</section>
    </main>
  );
}