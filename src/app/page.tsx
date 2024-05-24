"use client"

import Image from "next/image";
import HomePage from "../components/Home/home";
import Navbar from "../components/Navbar/navbar";
import About from "../components/About/about"
import Info from "../components/Info/info"
import Event from "../components/Event/event"
import Member from "../components/Member/member"
import Feedback from "../components/Feedback/feedback"
import Flow from "../components/Flow/flow"
import { useEffect, useState } from "react";
/* Images */
import Facebook from "../../public/images/Facebook.svg"
import Camera from "../../public/images/Camera.svg"
import Loading from './loading'
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#websiteSpan",
          start: "top 70%",
          markers: false,
          toggleActions: "play none none reverse"
        }
      })
      const tlright = gsap.timeline({
        scrollTrigger: {
          trigger: "#cs22aSpan",
          start: "top 80%",
          markers: false,
          toggleActions: "play none none reverse"
        }
      })

      tl.to("#lefttArr",{
        scaleX: 1,
        duration: 1,
      })
      .to("#websiteSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
      })

      tlright.to("#rightArr",{
        scaleX: 1,
        duration: 1,
      })
      .to("#cs22aSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
      })

    },{scope: container})
  return (
    <>
    <Loading />
    <main className="w-full h-full relative " ref={container}  >
      <Flow/>
        {/* Navbar */}
      <header className={`navbar w-full ${scrolled ? "bg-[#1E1E1E] h-12" : "bg-[black]/20 h-16 backdrop-blur-sm"} sticky top-0 left-0 z-50`}> 
        <Navbar isBlog={true} ></Navbar>
      </header>
      {/* Home */}
      <section className="h-[110vh] translate-y-[-65px] w-full overflow-hidden z-10 skew-y-3 origin-top-right">
        <HomePage></HomePage>
      </section>
        {/* ABOUT */}
      <div id="aboutPage" className="h-[190vh] w-full relative" >
        <About/>
      </div>
      {/* Members */}
      <div className="h-[170vh] w-full origin-top-right overflow-hidden skew-y-3" >
      <Member></Member>
      </div>
      <div id="eventPage" className="" >
        <Event></Event>
      </div>
      
      <div id="infoPage" className="h-[100vh] w-full relative mt-[350px] z-40 overflow-hidden -skew-y-3 grid place-items-center bg-[#008DDA] " >
        <Image className="absolute h-auto w-auto top-[-70px] left-0" src={Camera} alt="..." width={600} height={600} ></Image>
        <Image className="absolute h-auto w-auto top-[-140px] right-0" src={Facebook} alt="..." width={600} height={600} ></Image>
        <Info/>
      </div>
      
      <div id="feedbackPage" className="xl:h-[100vh] lg:h-[95vh] w-full" >
        <Feedback></Feedback>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    </main>
    </>
  );
}
