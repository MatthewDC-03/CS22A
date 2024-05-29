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
                    <p className="text-[#1E1E1E] text-xl pr-14 font-lg leading-[35px] " >
                    Welcome to our website's Web Blog section! Here, you'll find a dynamic collection of articles, updates, and resources that cater to our diverse community. Our blog covers a wide array of topics, including academic insights, student achievements, event highlights, and expert tips on various subjects. Whether you're looking to catch up on the latest school news, delve into educational trends, or explore inspiring stories from our community, our Web Blog is your go-to destination. Stay informed, engaged, and inspired with our regularly updated posts. Dive in and discover the vibrant life and happenings of our school through our blog!
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
                    <p className="font-lg text-xl leading-[35px]  text-[#1E1E1E] pl-14 text-right" >
                    We're not just a group, we're a family - a community bound by humor, camaraderie, and an unquenchable zest for life. Whether we're embarking on wild adventures, sharing inside jokes, or simply enjoying each other's company, there's never a dull moment in our midst. With a dash of humor and a sprinkle of friendliness, we're here to make every day a little brighter and every interaction a little warmer.
                    </p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        </div>
    )
}