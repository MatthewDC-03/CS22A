"use client"

/* Imports */
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

export default function About(){
    const container = useRef<HTMLInputElement>(null)
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        /* About website animations */
        gsap.to("#websiteSpan",{
            color: "#008DDA",
            borderColor: "#008DDA",
            boxShadow: "0 0 15px 1px #008DDA",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#websiteSpan",
                start: "top 80%",
                end: "bottom 20%",
                markers: false,
                toggleActions: "play none none reverse"
            }
          })

          gsap.to("#websiteParagraph",{
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#websiteParagraph",
                start: "top 85%",
                end: "bottom 15%",
              markers: false,
              toggleActions: "play none none reverse"
            }
          })

        /* About cs22a animations */
        gsap.to("#cs22aSpan",{
            color: "#008DDA",
            borderColor: "#008DDA",
            boxShadow: "0 0 15px 1px #008DDA",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#cs22aSpan",
                start: "top 80%",
                end: "bottom 20%",
                markers: false,
                toggleActions: "play none none reverse"
            }
          })

          gsap.to("#cs22Paragraph",{
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#cs22Paragraph",
                start: "top 85%",
                end: "bottom 15%",
              markers: false,
              toggleActions: "play none none reverse"
            }
          })

        // Mobile-specific animations for CS22A
        if (window.innerWidth < 640) { // 640px is the 'sm' breakpoint in Tailwind
            // Kill all ScrollTrigger instances for mobile
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            
            // Apply fixed styles directly to elements for mobile
            const websiteSpan = document.getElementById("websiteSpan");
            const websiteParagraph = document.getElementById("websiteParagraph");
            const cs22aSpan = document.getElementById("cs22aSpan");
            const cs22Paragraph = document.getElementById("cs22Paragraph");
            
            if (websiteSpan) {
                websiteSpan.style.color = "#008DDA";
                websiteSpan.style.borderColor = "#008DDA";
                websiteSpan.style.boxShadow = "0 0 15px 1px #008DDA";
            }
            
            if (websiteParagraph) {
                websiteParagraph.style.transform = "translateX(0)";
                websiteParagraph.style.opacity = "1";
            }
            
            if (cs22aSpan) {
                cs22aSpan.style.color = "#008DDA";
                cs22aSpan.style.borderColor = "#008DDA";
                cs22aSpan.style.boxShadow = "0 0 15px 1px #008DDA";
            }
            
            if (cs22Paragraph) {
                cs22Paragraph.style.transform = "translateX(0)";
                cs22Paragraph.style.opacity = "1";
            }
        }
    },{scope: container})

    // Cleanup function for ScrollTrigger
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <div className="w-full h-full flex flex-row overflow-x-hidden overflow-y-hidden
                        /* TABLET/IPAD AND BELOW RESPOSNIVE  */  max-lg:flex-col
        " ref={container} >
            {/* About the Website */}
            <div className="w-1/2 flex relative justify-center translate-y-0 py-10
                            /* TABLET/IPAD AND BELOW RESPONSIVE */ max-lg:w-full max-lg:h-fit max-lg:justify-center max-lg:items-center max-lg:pt-10 max-lg:py-0
            " >
                <div className="w-full h-full py-10 px-5  flex flex-col gap-5 items-center
                                /* TABLET/IPAD AND BELOW RESPONSIVE */ max-lg:py-0
                " >
                    <span id="websiteSpan" className="px-7 py-3 z-10 tracking-widest border-[2px] h-fit w-fit text-center text-[#1E1E1E] text-lg font-bold border-[#1E1E1E] bg-[#F6F6F6] transition-all duration-300 
                                                      /* SMALL MOBILE RESPONSIVE  */ max-[320px]:text-sm
                                                      /* MOBILE RESPONSIVE */ max-sm:text-base max-sm:text-[#008DDA] max-sm:border-[#008DDA] max-sm:shadow-[0_0_15px_1px_#008DDA]
                    " >About the Website</span>
                    <p id="websiteParagraph" className="text-[#1E1E1E] text-base opacity-0 translate-x-[-100%] font-lg leading-relaxed text-justify
                                                        /* SMALL MOBILE RESPONSIVE  */ max-[320px]:text-sm
                                                        /* MOBILE RESPONSIVE */ max-sm:text-base max-sm:leading-relaxed
                                                        /* LAPTOP RESPONSIVE */  max-xl:text-lg
                                                        /* DESKTOP RESPONSIVE */ max-2xl:text-xl max-2xl:px-5
                    " >
                    Welcome to our website's Web Blog section! Here, you'll find a dynamic collection of articles, updates, and resources that cater to our diverse community. Our blog covers a wide array of topics, including academic insights, student achievements, event highlights, and expert tips on various subjects. Whether you're looking to catch up on the latest school news, delve into educational trends, or explore inspiring stories from our community, our Web Blog is your go-to destination. Stay informed, engaged, and inspired with our regularly updated posts. Dive in and discover the vibrant life and happenings of our school through our blog!
                    </p>
                </div>
            </div>

            {/* About CS22A */}
            <div className="w-1/2 flex relative justify-center translate-y-0 py-10
                            /* TABLET/IPAD AND BELOW RESPONSIVE */ max-lg:w-full max-lg:h-fit max-lg:justify-center max-lg:items-center
            " >
                <div className="w-full h-full py-10 px-5 flex flex-col gap-5 items-center
                                /* SMALL MOBILE RESPOSIVE */ max-[320px]:pt-5
                                /* TABLET/IPAD AND BELOW RESPONSIVE */ max-lg:py-0
                " >
                    <span id="cs22aSpan" className="px-7 md:px-10 py-3 tracking-widest border-[2px] h-fit w-fit text-center bg-[#F6F6F6] text-[#1E1E1E] text-lg font-bold border-[#1E1E1E] z-10 transition-all duration-300 
                                                    /* SMALL MOBILE RESPONSIVE  */ max-[320px]:text-sm
                                                    /* MOBILE RESPONSIVE */ max-sm:text-base max-sm:text-[#008DDA] max-sm:border-[#008DDA] max-sm:shadow-[0_0_15px_1px_#008DDA]
                    " >About CS22A</span>
                    <p id="cs22Paragraph" className="font-lg text-base leading-relaxed opacity-0 translate-x-[100%] text-[#1E1E1E] text-justify
                                                    /* SMALL MOBILE RESPONSIVE  */ max-[320px]:text-sm
                                                    /* MOBILE RESPONSIVE */ max-sm:text-base max-sm:leading-relaxed
                                                    /* LAPTOP RESPONSIVE */ max-xl:text-lg
                                                    /* DESKTOP RESPONSIVE */ max-2xl:text-xl max-2xl:px-5
                    " >
                    We're not just a group, we're a family - a community bound by humor, camaraderie, and an unquenchable zest for life. Whether we're embarking on wild adventures, sharing inside jokes, or simply enjoying each other's company.
                    </p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
        </div>
    )
}