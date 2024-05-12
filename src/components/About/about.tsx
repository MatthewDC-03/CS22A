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
        gsap.to("#sectionOne",{
            width: "750px",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: "#sectionOne",
                markers: false,
                toggleClass: "red",
                start: "top 65%",
                toggleActions: "play play pause reverse"
            }
        })
        gsap.to("#laptop",{
            scale: "1",
            delay: 0.5,
            duration: 2,
            ease: "elastic.out(1,0.3)",
            scrollTrigger: {
                trigger: "#laptop",
                markers: false,
                toggleClass: "red",
                start: "top 70%",
                toggleActions: "restart play play reverse"
            }
        })
        gsap.to("#infoEasometric",{
            scale: "1",
            delay: 1,
            duration: 2,
            ease: "elastic.out(1,0.3)",
            scrollTrigger: {
                trigger: "#laptop",
                markers: false,
                toggleClass: "red",
                start: "top 70%",
                toggleActions: "restart play play reverse"
            }
        })
    },{scope: container})
    return(
        <div className="w-full h-full" ref={container} >
            <div id="sectionOne" className=" w-[120px] overflow-hidden z-0 h-[300px] left-[-150px] rotate-[25deg] bg-cover border-2 bg-center rounded-r-full top-[750px] absolute" >
                <Image src={Rain} className="w-full h-full" width={1000} height={1000} alt="..." ></Image>
            </div>
            <Image src={Laptop} id="laptop" className="w-auto h-auto scale-0 drop-shadow-2xl relative z-20 left-[900px] top-[100px] flex items-center justify-center origin-center" alt="..." width={300} height={300}></Image>
            <Image id="infoEasometric" src={Info} className="w-auto h-auto scale-0 drop-shadow-2xl relative left-[950px] z-10 top-[-450px] flex items-center justify-center origin-center" alt="..." width={300} height={300} ></Image>
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        </div>
    )
}