"use client"


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
            start: "6% center",
            end: "92% center",
            markers: false,
            toggleActions: "play none none reverse",
            pin: "#arrPinned"
        }
      })
      

      // [ SPANS ]
      
      
      
      
      
      
      },{scope: gsapRef})
    return (
        <div id="arrContainer" className="w-full h-full absolute left-0 top-0 flex flex-col items-center" ref={gsapRef} >

            <div id="arrPinned" className="relative h-[108vh] opacity-0 w-[3px] bg-[#008DDA]" ></div>

        </div>
    )
}

export default Flow