"use client"

/* Component Imports */
import HomePage from "../components/Home/home";
import Navbar from "../components/Navbar/navbar";
import About from "../components/About/about"
import Info from "../components/Info/info"
import Event from "../components/Event/event"
import Member from "../components/Member/member"
import Feedback from "../components/Feedback/feedback"
import Flow from "../components/Flow/flow"
import Footer from "../components/Footer/footer"
import Loading from './loading'
/* Import Images */
import Facebook from "../../public/images/Facebook.svg"
import Camera from "../../public/images/Camera.svg"
import Basketball from "../../public/images/Icon/Baskitball.svg"
/* Import */
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const container = useRef(null)
    useEffect(()=>{
      const handScroll = ()=> {
        const currentPosition = window.scrollY
        if(currentPosition > 0){
          setScrolled(true)
        }
        else{
          setScrolled(false)
        }
      }
      window.addEventListener("scroll", handScroll)
    })
    
    useGSAP(() => {
      gsap.to("#memberSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#memberSpan",
            start: "top 90%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      gsap.to("#homeSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#homeSpan",
            start: "top 80%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      gsap.to("#arr1",{
        scaleY: 1,
        duration: .5,
        scrollTrigger:{
            trigger: "#homeSpan",
            start: "top 80%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      gsap.to("#aboutSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#aboutSpan",
            start: "top 90%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      gsap.to("#eventSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#eventSpan",
            start: "top 80%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })
      gsap.to("#basketballDiv",{
        filter: "brightness(0) saturate(100%) invert(40%) sepia(89%) saturate(2243%) hue-rotate(176deg) brightness(92%) contrast(101%)",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        duration: .1,
        scrollTrigger:{
            trigger: "#basketballDiv",
            start: "top 80%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      gsap.to("#infoSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#infoSpan",
            start: "top 90%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      gsap.to("#feedSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#feedSpan",
            start: "top 70%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

    },{scope: container})
  return (
    <>
    {/* Loading Page */}
    <Loading />
    <main className="w-full h-full relative" ref={container}  >
      {/* Flow / Arrow Guide */}

      <div id="arrPinned" className="fixed h-[100px] left-1/2 -translate-x-1/2 w-[3px] bg-[#008DDA]" ></div>

        {/* Navbar */}
      <header className={`navbar w-full ${scrolled ? "bg-[#1E1E1E] h-12" : "bg-[black]/20 h-16 backdrop-blur-sm"} sticky top-0 left-0 z-50`}> 
        <Navbar isBlog={true} ></Navbar>
      </header>

      {/* Home */}
      <div className="relative" >
      <span id="homeSpan" className="absolute px-10 bottom-[220px] left-1/2 -translate-x-1/2 z-20 py-3 rounded-full tracking-widest border-[3px] h-fit w-fit text-[#F6F6F6] text-xl font-bold border-[#F6F6F6] bg-transparent " >HOME</span>
      <div id="arr1" className=" scale-y-0 h-[250px] origin-bottom w-[3px] bg-[#008DDA] rotate-180 bottom-[220px] left-1/2 -translate-x-1/2 absolute z-10 " ></div>
      <section id="homePage" className="h-[110vh] translate-y-[-65px] w-full overflow-hidden z-10 skew-y-3 origin-top-right">
        <HomePage></HomePage>
      </section>
      </div>

        {/* ABOUT */}
      <div id="aboutPage" className="h-[190vh] w-full relative" >
      <span id="aboutSpan" className="absolute left-1/2 -translate-x-1/2 top-[10px] px-10 z-20 py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6] " >ABOUT</span>
        <About/>
      </div>

      {/* Members */}
      <div className="relative" >
      <span id="memberSpan" className="absolute top-[-150px] left-1/2 -translate-x-1/2 px-10 py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >TEAM MEMBERS</span>
      <div className="lg:h-[300vh] xl:h-[120vh] w-full origin-top-right overflow-hidden skew-y-3" >
      <Member></Member>
      </div>
      </div>

      {/* Event */}
      <div id="eventPage" className=" relative" >
      <span id="eventSpan" className="absolute px-10 top-[-300px] left-1/2 -translate-x-1/2 py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >EVENTS</span>
      <div className="absolute top-[-100px] bg-[#F6F6F6] rotate-45 left-1/2 -translate-x-1/2" >
      <Image id="basketballDiv" className="z-10 border-[3px] border-[#1E1E1E] p-3" src={Basketball} alt="..." width={100} height={100} ></Image>
      </div>
      <Event></Event>
      </div>
      
      {/* Info */}
      <div className="relative" >
      <span id="infoSpan" className="absolute px-10 left-1/2 -translate-x-1/2 top-[-150px] py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >PERSONAL INFORMATION</span>
      <div id="infoPage" className="h-[130vh] w-full relative mt-[350px] z-40 overflow-hidden -skew-y-3 grid place-items-center bg-[#008DDA] " >
        <Image className="absolute h-auto w-auto top-[-70px] left-0" src={Camera} alt="..." width={600} height={600} ></Image>
        <Image className="absolute h-auto w-auto top-[-140px] right-0" src={Facebook} alt="..." width={600} height={600} ></Image>
        <Info/>
      </div>
      </div>
      
      {/* Feedback */}
      <div id="feedbackPage" className="w-full h-[100vh]" >
      <span id="feedSpan" className="absolute px-10 left-1/2 -translate-x-1/2 translate-y-[70px] py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] rounded-full text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >FEEDBACK</span>
        <Feedback></Feedback>
      </div>

      {/* Footer */}
      <div className="z-50" >
      <Footer showNewsletter={true} />
      </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    </main>
    </>
  );
}
