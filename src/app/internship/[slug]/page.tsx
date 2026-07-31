import { notFound } from "next/navigation";
import { internships } from "../data";
import "./internshipdetail.css";

import {
Lightbulb,
Users,
Award,
TrendingUp
} from "lucide-react";


type Props={
params:Promise<{
slug:string
}>
}


export default async function InternshipDetails({params}:Props){


const {slug}=await params;


const internship=internships.find(
(item)=>item.slug===slug
);



if(!internship){
notFound();
}



return(

<main className="internship-detail">


<section className="internship-hero">


<div className="internship-container">



<div className="internship-image">

<img
src={internship.image}
alt={internship.title}
/>


<div className="image-overlay"></div>


<h2>

</h2>


</div>



<div className="internship-content">


<span>
INTERNSHIP PROGRAM
</span>


<h1>
{internship.title}
</h1>


<p>
{internship.description}
</p>


<a href="/contact">
Apply Now ↗
</a>


</div>


</div>


</section>





<section className="choose-section">


<div className="container">


<div className="choose-title">

<span>
WHY CHOOSE THIS INTERNSHIP
</span>


<h2>
Build Skills.
<br/>
Become
<strong> Industry Ready</strong>
</h2>

</div>



<div className="choose-grid">


{
internship.benefits.map((item,index)=>(


<div className="choose-card" key={index}>


<div className="icon">

{
[
<Lightbulb/>,
<Users/>,
<Award/>,
<TrendingUp/>
][index]
}

</div>


<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>


</div>


))
}



</div>


</div>


</section>


</main>

)

}