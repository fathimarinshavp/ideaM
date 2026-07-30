"use client";

import {useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";


const navLinks=[
  {label:"Home",href:"/"},
  {label:"About",href:"/about"},
  {label:"Services",href:"/services"},
  {label:"Internship",href:"/internship"},
  {label:"Courses",href:"/courses"},
  {label:"Contact",href:"/contact"},
];


export default function Navbar(){

const [isOpen,setIsOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);

const pathname=usePathname();


useEffect(()=>{

const scrollHandler=()=>{

setScrolled(window.scrollY>30);

}

window.addEventListener("scroll",scrollHandler);

return()=>window.removeEventListener("scroll",scrollHandler);


},[]);



useEffect(()=>{

setIsOpen(false);

},[pathname]);



return(

<header className={`idea-navbar ${scrolled?"navbar-scroll":""}`}>


<div className="container">


<nav className="navbar-inner">



{/* LOGO */}

<Link href="/" className="idea-logo">

<Image

src="/transpa.png"

alt="Idea Media"

width={150}

height={35}

/>

</Link>





{/* DESKTOP MENU */}

<div className="idea-nav-links">


{
navLinks.map((item)=>(

<Link

key={item.href}

href={item.href}

className={
pathname===item.href ? "active": ""
}

>

{item.label}

</Link>

))

}


</div>





{/* ACTION */}

<div className="idea-nav-action">


<Link
href="/contact"
className="idea-nav-btn"
>

Talk To Us

</Link>




<button

className={`idea-menu-btn ${isOpen?"open":""}`}

onClick={()=>setIsOpen(!isOpen)}

>

<span></span>
<span></span>
<span></span>


</button>


</div>



</nav>



</div>





{/* MOBILE MENU */}

<div className={`idea-mobile-navigation ${isOpen ? "open" : ""}`}>

{
navLinks.map((item,index)=>(

<Link

key={item.href}

href={item.href}

className={
pathname===item.href ? "active" : ""
}

style={{
animationDelay:`${index * 0.08}s`
}}

>

{item.label}

</Link>

))

}


<Link
href="/contact"
className="mobile-navigation-btn"
style={{
animationDelay:"0.5s"
}}
>
Talk To Us
</Link>


</div>




</header>


)

}