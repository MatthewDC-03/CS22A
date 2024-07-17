"use client"

/* Imports */
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

export default function About(){
    const container = useRef<HTMLInputElement>(null)
    gsap.registerPlugin(ScrollTrigger)
    /* Timeline */
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
        
      /* About website */
        tl.to("#lefttArr",{
            scaleX: 1,
            duration: 1,
          })
          .to("#websiteSpan",{
            color: "#008DDA",
            borderColor: "#008DDA",
            boxShadow: "0 0 15px 1px #008DDA",
          })

          gsap.to("#websiteParagraph",{
            translateX: 0,
            opacity: 1,
            duration: .6,
            scrollTrigger: {
              trigger: "#websiteParagraph",
              start: "top center",
              markers: false,
              toggleActions: "play none none reverse"
            }
          })

          /* About cs22a */
          tlright.to("#rightArr",{
            scaleX: 1,
            duration: 1,
          })
          .to("#cs22aSpan",{
            color: "#008DDA",
            borderColor: "#008DDA",
            boxShadow: "0 0 15px 1px #008DDA",
          })

          gsap.to("#cs22Paragraph",{
            translateX: 0,
            opacity: 1,
            duration: .6,
            scrollTrigger: {
              trigger: "#cs22Paragraph",
              start: "top center",
              markers: false,
              toggleActions: "play none none reverse"
            }
          })

    },{scope: container})
    return(
        <div className="w-full h-full max-sm:flex max-sm:flex-col max-sm:gap-24 overflow-x-hidden" ref={container} >
            {/* About the Website */}
            <div className="w-full h-1/2 flex relative max-sm:justify-center translate-y-0 " >

                <div className="w-1/2 max-sm:w-full max-sm:items-center max-sm:px-5 h-full py-[150px] px-10 flex flex-col gap-5" >
                    <span id="websiteSpan" className=" px-10 py-3 z-10 tracking-widest border-[3px] h-fit max-sm:w-fit max-sm:text-center max-sm:px-7 w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] bg-[#F6F6F6] " >About the Website</span>
                    <div id="lefttArr" className="h-[3px] max-sm:hidden scale-x-0 w-[28%] top-[180px] left-1/2 -translate-x-[100%] absolute origin-bottom-right bg-[#008DDA]" ></div>
                    <p id="websiteParagraph" className="text-[#1E1E1E] max-sm:text-base max-sm:text-justify max-sm:px-3 opacity-0 translate-x-[-100%] text-xl pr-14 font-lg leading-[35px] " >
                    Welcome to our website's Web Blog section! Here, you'll find a dynamic collection of articles, updates, and resources that cater to our diverse community. Our blog covers a wide array of topics, including academic insights, student achievements, event highlights, and expert tips on various subjects. Whether you're looking to catch up on the latest school news, delve into educational trends, or explore inspiring stories from our community, our Web Blog is your go-to destination. Stay informed, engaged, and inspired with our regularly updated posts. Dive in and discover the vibrant life and happenings of our school through our blog!
                    </p>
                </div>

            </div>

            {/* About CS22A */}
            <div className="w-full h-1/2 flex relative justify-end max-sm:justify-center translate-y-0 " >
                
                <div className="w-1/2 max-sm:w-full max-sm:px-50 max-sm:items-center h-full px-10 flex flex-col gap-5 items-end" >
                    <span id="cs22aSpan" className=" px-10 max-sm:text-center max-sm:px-7 max-sm:w-fit py-3 tracking-widest border-[3px] h-fit bg-[#F6F6F6] w-fit text-[#1E1E1E] text-xl font-bold border-[#1E1E1E] z-10 " >About CS22A</span>
                    <div id="rightArr" className="h-[3px] max-sm:hidden w-[32%] left-1/2 top-[30px] scale-x-0 absolute origin-bottom-left bg-[#008DDA]" ></div>
                    <p id="cs22Paragraph" className="font-lg max-sm:text-base max-sm:text-justify max-sm:px-3 text-xl leading-[35px] opacity-0 translate-x-[200%] text-[#1E1E1E] pl-14 text-right" >
                    We're not just a group, we're a family - a community bound by humor, camaraderie, and an unquenchable zest for life. Whether we're embarking on wild adventures, sharing inside jokes, or simply enjoying each other's company.
                    </p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        </div>
    )
}