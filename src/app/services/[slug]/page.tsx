import { notFound } from "next/navigation";
import { services } from "../data";
import "./servicedetail.css";
import {
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Award,
  Palette
} from "lucide-react";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetails({ params }: Props) {

  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (

<main className="service-details-page">


{/* HERO IMAGE */}

{/* <section className="service-hero-image">

  <img
    src={service.image}
    alt={service.title}
  />

</section> */}
<section className="service-hero">

  <div className="service-hero-container">


    {/* IMAGE */}

    <div className="service-hero-image">

      <img
        src={service.image}
        alt={service.title}
      />

      <div className="image-overlay"></div>


      {/* CENTER IMAGE TITLE */}

      


    </div>





    {/* CONTENT */}

    <div className="service-hero-content">


      <div className="hero-tag">
        OUR SERVICES
      </div>


      <h1>
        {service.title}
      </h1>


      <p>
        {service.description}
      </p>



      <a href="/contact" className="hero-btn">
        Let's Talk
        <span>↗</span>
      </a>


    </div>


  </div>

</section>


{/* CONTENT */}



<div className="benefits-grid">


  <div className="benefit-card">

    <div className="benefit-icon">
      <Lightbulb />
    </div>

    <div className="benefit-content">
      <span>CREATIVE STRATEGY</span>
      <h3>Innovative Solutions</h3>
      <p>
        We create unique ideas and strategies that help your brand
        stand out and connect with your target audience.
      </p>
    </div>

  </div>



  <div className="benefit-card">

    <div className="benefit-icon">
      <Target />
    </div>

    <div className="benefit-content">
      <span>BUSINESS FOCUS</span>
      <h3>Goal Driven Approach</h3>
      <p>
        Every solution is designed around your business objectives
        to achieve meaningful and measurable growth.
      </p>
    </div>

  </div>



  <div className="benefit-card">

    <div className="benefit-icon">
      <Users />
    </div>

    <div className="benefit-content">
      <span>EXPERT TEAM</span>
      <h3>Professional Expertise</h3>
      <p>
        Our experienced team combines creativity, technology,
        and industry knowledge to deliver quality results.
      </p>
    </div>

  </div>



  <div className="benefit-card">

    <div className="benefit-icon">
      <TrendingUp />
    </div>

    <div className="benefit-content">
      <span>GROWTH</span>
      <h3>Business Growth</h3>
      <p>
        We focus on strategies that improve visibility,
        engagement, and long-term brand success.
      </p>
    </div>

  </div>



  <div className="benefit-card">

    <div className="benefit-icon">
      <Award />
    </div>

    <div className="benefit-content">
      <span>QUALITY</span>
      <h3>Premium Experience</h3>
      <p>
        We deliver high-quality creative solutions with attention
        to detail and a strong focus on customer satisfaction.
      </p>
    </div>

  </div>



  <div className="benefit-card">

    <div className="benefit-icon">
      <Palette />
    </div>

    <div className="benefit-content">
      <span>DESIGN</span>
      <h3>Creative Excellence</h3>
      <p>
        From branding to digital experiences, we craft designs
        that communicate your vision effectively.
      </p>
    </div>

  </div>


</div>

</main>

)
}