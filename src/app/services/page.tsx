
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
    slug: "branding-identity",
    title: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nbyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    desc:
      "Build a memorable identity with strategic branding, logo design, brand guidelines, visual systems and messaging that reflect your business values.",
  },

  {
    slug: "marketing-solutions",
    title: "Marketing Solutions",
    image: "https://media.istockphoto.com/id/2153931453/photo/indian-hindu-gen-z-professional-colleagues-ladies-working-together-at-indoor-job-office-place.jpg?s=1024x1024&w=is&k=20&c=r3S6sg1Sdg5wN1m0ghvQcKVywhBctzz52wsPuDoPxUw=",
    desc:
      "Create effective campaigns that increase visibility, generate quality leads and build lasting customer relationships across every channel.",
  },

  {
     slug: "digital-marketing-seo",
    title: "Digital Marketing & SEO",
    image: "https://media.istockphoto.com/id/2187866123/photo/team-collaboration-at-a-business-meeting-with-data-analysis.jpg?s=1024x1024&w=is&k=20&c=VFQCVXXJ5GZZny6J8RYJgAGYMoY8SgHss90ULi5Ss2o=",
    desc:
      "Improve your online presence with SEO, content marketing, social media management, paid advertising and performance analytics.",
  },

  {
    slug: "creative-design-motion",
    title: "Creative Design & Motion",
    image: "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    desc:
      "Deliver engaging visual experiences through graphic design, motion graphics, video editing, social creatives and digital storytelling.",
  },

  {
      slug: "business-consulting",
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


{/* 
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


</div> */}
<div className={styles.bannerContent}>

<span className={styles.serviceLabel}>
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

         <Link
  href={`/services/${service.slug}`}
  className={styles.readMore}
>
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