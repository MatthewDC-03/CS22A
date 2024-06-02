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
      
      

      // [ SPANS ]
      
      
      
      
      
      
      },{scope: gsapRef})
    return (
        <div id="arrContainer" className="w-full bg-red-500 h-full absolute z-0 left-0 top-0 flex flex-col items-center" ref={gsapRef} >
        </div>
    )
}

export default Flow