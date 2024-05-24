"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import Laptop from "/public/images/EasometricSite.png"
import Info from "/public/images/EasometricInfo.png"
import Rain from "../../../public/images/Rain.jpg"

export default function About(){
    const container = useRef<HTMLInputElement>(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.to("#laptop",{
            scale: 1,
            delay: 0.5,
            duration: 2,
            ease: "elastic.out(1,0.3)",
            scrollTrigger: {
                trigger: "#laptop",
                markers: false,
                toggleClass: "red",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })
    },{scope: container})
    return(
        <div className="w-full h-full" ref={container} >
            {/* About the Website */}
            <div className="w-full h-1/2 flex relative lg:translate-y-[95px] xl:translate-y-0 " >

                <div className="w-1/2 h-full py-[150px] px-10 flex flex-col gap-5" >
                    <span id="websiteSpan" className=" px-10 py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6] " >About the Website</span>
                    <p className="text-[#1E1E1E] text-lg pr-14 font-semibold " >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies auctor ultricies. In hac habitasse platea dictumst. Nam cursus ullamcorper felis vel finibus. Donec congue ultricies ligula vel consequat.
                    </p>
                </div>
                
                <div className="w-1/2 h-full relative " >
                    <Image src={Laptop} id="laptop" className="absolute left-[200px] z-10 w-auto h-auto scale-0 drop-shadow-2xl " alt="..." width={300} height={300}></Image>
                </div>

            </div>
            {/* About CS22A */}
            <div className="w-full h-1/2 flex xl:translate-y-0 lg:translate-y-[175px] " >
                <div className="w-1/2 h-full" >

                </div>
                <div className="w-1/2 h-full px-10 flex flex-col gap-5 items-end" >
                    <span id="cs22aSpan" className=" px-10 py-3 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6] " >About CS22A</span>
                    <p className="font-semibold  text-[#1E1E1E] text-lg pl-14 text-right" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies auctor ultricies. In hac habitasse platea dictumst. Nam cursus ullamcorper felis vel finibus. Donec congue ultricies ligula vel consequat.
                    </p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        </div>
    )
}