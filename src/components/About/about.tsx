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
    return(
        <div className="w-full h-full" ref={container} >
            {/* About the Website */}
            <div className="w-full h-1/2 flex relative lg:translate-y-[95px] xl:translate-y-0 " >

                <div className="w-1/2 h-full py-[150px] px-10 flex flex-col gap-5" >
                    <span id="websiteSpan" className=" px-10 py-3 z-10 tracking-widest border-[3px] h-fit w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6] " >About the Website</span>
                    <div id="lefttArr" className="h-[3px] scale-x-0 w-[28%] top-[180px] left-1/2 -translate-x-[100%] absolute origin-bottom-right bg-[#008DDA]" ></div>
                    <p className="text-[#1E1E1E] text-xl pr-14 font-lg leading-[35px] " >
                    Welcome to our website's Web Blog section! Here, you'll find a dynamic collection of articles, updates, and resources that cater to our diverse community. Our blog covers a wide array of topics, including academic insights, student achievements, event highlights, and expert tips on various subjects. Whether you're looking to catch up on the latest school news, delve into educational trends, or explore inspiring stories from our community, our Web Blog is your go-to destination. Stay informed, engaged, and inspired with our regularly updated posts. Dive in and discover the vibrant life and happenings of our school through our blog!
                    </p>
                </div>

            </div>
            {/* About CS22A */}
            <div className="w-full h-1/2 flex xl:translate-y-0 lg:translate-y-[175px] " >
                <div className="w-1/2 h-full" >

                </div>
                <div className="w-1/2 h-full px-10 flex flex-col gap-5 items-end" >
                    <span id="cs22aSpan" className=" px-10 py-3 tracking-widest border-[3px] h-fit bg-[#F6F6F6] w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] z-10 " >About CS22A</span>
                    <div id="rightArr" className="h-[3px] w-[32%] left-1/2 top-[30px] scale-x-0 absolute origin-bottom-left bg-[#008DDA]" ></div>
                    <p className="font-lg text-xl leading-[35px]  text-[#1E1E1E] pl-14 text-right" >
                    We're not just a group, we're a family - a community bound by humor, camaraderie, and an unquenchable zest for life. Whether we're embarking on wild adventures, sharing inside jokes, or simply enjoying each other's company.
                    </p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        </div>
    )
}