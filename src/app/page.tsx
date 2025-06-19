"use client"

/* Component Imports */
import HomePage from "../components/Home/home";
import Navbar from "../components/Navbar/navbar";
import About from "../components/About/about"
import Info from "../components/Info/info"
import Event from "../components/Event/event"
import Member from "../components/Member/member"
import Feedback from "../components/Feedback/feedback"
import Footer from "../components/Footer/footer"
import Loading from './loading'
/* Import Images */
import Facebook from "../../public/images/Facebook.svg"
import Camera from "../../public/images/Camera.svg"
import Basketball from "../../public/images/Icon/Baskitball.svg"
import Volleyball from "../../public/images/EventPhotos/Volleyball/Volleyball_Icon.svg"
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

      gsap.to("#arrPinned",{
        opacity: 1,
        height: "90vh",
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

      gsap.to("#volleyballDiv",{
        filter: "brightness(0) saturate(100%) invert(40%) sepia(89%) saturate(2243%) hue-rotate(176deg) brightness(92%) contrast(101%)",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        duration: .1,
        scrollTrigger:{
            trigger: "#volleyballDiv",
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
    <main className="w-full h-full relative p-0 m-0 max-sm:pt-0" ref={container}  >
      {/* Flow / Arrow Guide Pinned */}

      <div id="arrPinned" className="fixed max-lg:hidden max-sm:hidden h-0 opacity-0 left-1/2 -translate-x-1/2 w-[3px] bg-[#008DDA] origin-top" ></div>
      
        {/* Navbar */}
      <header className={`navbar w-full ${scrolled ? "bg-[#1E1E1E] h-12" : "bg-[black]/20 h-16 backdrop-blur-sm"} fixed top-0 left-0 z-50 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0`}> 
        <Navbar isBlog={true} ></Navbar>
      </header>

      {/* Home */}
      <div className="relative w-full p-0 m-0 max-sm:mt-0" >
      <section id="homePage" className="h-[100vh] max-sm:h-[100vh] md:h-[100vh] translate-y-[-35px] sm:translate-y-[-45px] md:translate-y-[-65px] w-full overflow-hidden z-10 skew-y-3 max-sm:skew-y-0 max-md:skew-y-0 max-lg:skew-y-0 origin-top-right p-0 m-0 max-sm:translate-y-0">
        <HomePage></HomePage>
      </section>
      </div>

        {/* ABOUT */}
      <div id="aboutPage" className="h-fit w-full relative p-0" >
      <span id="aboutSpan" className="absolute left-1/2 max-lg:hidden -translate-x-1/2 top-[10px] max-sm:hidden px-4 sm:px-6 md:px-10 z-20 py-2 sm:py-3 tracking-widest border-[2px] sm:border-[3px] h-fit w-fit text-[#1E1E1E] text-base sm:text-lg md:text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6]" >ABOUT</span>
        <About/>
      </div>

      {/* Members */}
      <div className="relative h-fit w-full p-0 mt-32" >
      <span id="memberSpan" className="absolute max-sm:tracking-normal max-sm:whitespace-nowrap max-sm:text-center max-sm:px-4 sm:px-6 md:px-7 top-[-80px] sm:top-[-100px] md:top-[-120px] left-1/2 -translate-x-1/2 px-4 sm:px-6 md:px-10 py-2 sm:py-3 tracking-widest border-[2px] sm:border-[3px] h-fit w-fit text-[#1E1E1E] text-base sm:text-lg md:text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6]" >TEAM MEMBERS</span>
      <div className="h-fit w-full origin-top-right skew-y-3 max-sm:skew-y-0 max-md:skew-y-0 max-lg:skew-y-0 overflow-hidden p-0 m-0" >
      <Member></Member>
      </div>
      </div>

      {/* Event */}
      <div id="eventPage" className="relative p-0 mt-[25rem]" >
      <span id="eventSpan" className="absolute px-4 sm:px-6 md:px-10 top-[-150px] sm:top-[-200px] md:top-[-300px] left-1/2 -translate-x-1/2 py-2 sm:py-3 tracking-widest border-[2px] sm:border-[3px] h-fit w-fit text-[#1E1E1E] text-base sm:text-lg md:text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6]" >EVENTS</span>
      {/* Basketball Icon */}
      <div className="absolute top-[-50px] sm:top-[-70px] md:top-[-100px] bg-[#F6F6F6] rotate-45 left-1/2 -translate-x-1/2
                      /* MOBILE RESPONSIVE  */ max-sm:hidden
      " >
      <Image id="basketballDiv" className="z-10 border-[2px] sm:border-[3px] border-[#1E1E1E] p-2 sm:p-3 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]" src={Basketball} alt="..." width={60} height={60}></Image>
      </div>
      {/* Volleyball Icon */}
      <div className="absolute top-[4000px] bg-[#F6F6F6] rotate-45 left-1/2 -translate-x-1/2
                      /* MOBILE RESPONSIVE */ max-sm:hidden
      " >
      <Image id="volleyballDiv" className="z-10 border-[2px] sm:border-[3px] border-[#1E1E1E] p-2 sm:p-3 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]" src={Volleyball} alt="..." width={60} height={60}></Image>
      </div>
      <Event></Event>
      </div>
      
      {/* Info */}
      <div className="relative p-0 m-0" >
      <span id="infoSpan" className="absolute px-4 sm:px-6 md:px-10 left-1/2 -translate-x-1/2 top-[-80px] sm:top-[-100px] md:top-[-150px] py-2 sm:py-3 tracking-widest border-[2px] sm:border-[3px] h-fit w-fit text-[#1E1E1E] text-base sm:text-lg md:text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6]" >PERSONAL INFORMATION</span>
      <div id="infoPage" className="h-[90vh] sm:h-[100vh] md:h-[130vh] w-full relative mt-[150px] sm:mt-[200px] md:mt-[350px] z-40 overflow-hidden -skew-y-3 max-sm:skew-y-0 max-md:skew-y-0 max-lg:skew-y-0 grid place-items-center bg-[#008DDA] p-0 m-0" >
        <Image className="absolute max-sm:hidden h-auto w-auto top-[-70px] left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]" src={Camera} alt="..." width={400} height={400}></Image>
        <Image className="absolute max-sm:hidden h-auto w-auto top-[-140px] right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]" src={Facebook} alt="..." width={400} height={400}></Image>
        <Info/>
      </div>
      </div>
      
      {/* Feedback */}
      <div id="feedbackPage" className="w-full h-[80vh] sm:h-[90vh] md:h-[100vh] max-sm:mt-[6rem] sm:mt-[8rem] md:mt-[13rem] p-0 m-0" >
      <span id="feedSpan" className="absolute px-4 sm:px-6 md:px-10 left-1/2 -translate-x-1/2 translate-y-[30px] sm:translate-y-[50px] md:translate-y-[70px] max-sm:translate-y-[-80px] py-2 sm:py-3 tracking-widest border-[2px] sm:border-[3px] h-fit w-fit text-[#1E1E1E] rounded-full text-base sm:text-lg md:text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6]" >FEEDBACK</span>
        <Feedback></Feedback>
      </div>

      {/* Footer */}
      <div className="z-50 p-0 m-0" >
      <Footer showNewsletter={true} />
      </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    </main>
    </>
  );
}
