"use client"

import Icon from "../../../public/images/Icon/Baskitball.svg"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Image from "next/image"
import { ScrollTrigger } from "gsap/all";

const Flow = () => {
    const gsapRef = useRef(null)
    useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger)
        
      // [ ARROWS ]
      gsap.to("#arrPinned",{
        opacity: 1,
        duration: .1,
        scrollTrigger: {
            trigger: "#arrContainer",
            start: "8% center",
            end: "93% center",
            markers: false,
            toggleActions: "play none none reverse",
            pin: "#arrPinned"
        }
      })
      gsap.to("#arr1",{
        height: "320px",
        duration: .5,
        scrollTrigger:{
            trigger: "#homeSpan",
            start: "top 70%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })

      // [ SPANS ]
      gsap.to("#homeSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#homeSpan",
            start: "top 70%",
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
      gsap.to("#eventSpan",{
        color: "#008DDA",
        borderColor: "#008DDA",
        boxShadow: "0 0 15px 1px #008DDA",
        scrollTrigger:{
            trigger: "#eventSpan",
            start: "top 90%",
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
            start: "top 90%",
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
            start: "top 90%",
            markers: false,
            toggleActions: "play none none reverse"
        }
      })
      },{scope: gsapRef})
    return (
        <div id="arrContainer" className="w-full h-full absolute left-0 top-0 flex flex-col items-center" ref={gsapRef} >
            
            <span id="homeSpan" className="relative px-10 top-[600px] z-20 py-3 rounded-full tracking-widest border-[3px] h-fit w-fit text-[#F6F6F6] text-xl font-bold border-[#F6F6F6] bg-transparent " >HOME</span>
            <span id="aboutSpan" className="relative px-10 xl:top-[900px] lg:top-[800px] z-20 py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6] " >ABOUT</span>
            <span id="memberSpan" className="relative px-10 lg:top-[1810px] xl:top-[2000px] py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >TEAM MEMBERS</span>
            <span id="eventSpan" className="relative px-10 lg:top-[3250px] xl:top-[3700px] py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >EVENTS</span>
            <Image id="basketballDiv" className="relative z-10 bg-[transparent] border-[3px] border-[#1E1E1E] p-3 xl:top-[3900px] lg:top-[3500px] rotate-45" src={Icon} alt="..." width={100} height={100} ></Image>
            <span id="infoSpan" className="relative px-10 lg:top-[7800px] xl:top-[8750px] py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >PERSONAL INFORMATION</span>
            <span id="feedSpan" className="relative px-10 lg:top-[8700px] xl:top-[9820px] py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] rounded-full text-xl font-bold z-10 border-[#1E1E1E] bg-[#F6F6F6] " >FEEDBACK</span>

            <div id="arrPinned" className="relative xl:h-[650px] lg:h-[500px] opacity-0 w-[3px] bg-[#008DDA]" ></div>
            <div id="arr1" className="h-0 w-[3px] bg-[#008DDA] top-[655px] absolute z-10 " ></div>
            <div id="lefttArr" className="h-[3px] xl:w-[400px] lg:w-[200px] scale-x-0 absolute origin-bottom-right lg:right-[510px] xl:right-[710px] top-[1075px] bg-[#008DDA]" ></div>
            <div id="rightArr" className="h-[3px] xl:w-[450px] lg:w-[250px] scale-x-0 absolute origin-bottom-left lg:left-[511px] xl:left-[710px] top-[1660px] bg-[#008DDA]" ></div>

        </div>
    )
}

export default Flow