"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import Image from "next/image"

/* Image */
import CatOne from "../../../public/images/DummyImage/cat.jpeg"

import Data from "../../json/memberData.json"

const Member = ()=>{
    const memberRef = useRef(null)
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#memberContainer",
            start: "top 25%",
            end: "bottem top",
            markers: false
        }
    })

    useGSAP(()=>{
        gsap.to("#left",{
            transform: "translateY(0)",
            duration: 1.5,
            scrollTrigger: {
                trigger: "#memberContainer",
                start: "top 25%",
                end: "bottom top",
                markers: false
            }
        })
        gsap.to("#center",{
            left: "50%",
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            duration: 1,
            scrollTrigger: {
                trigger: "#memberContainer",
                start: "top 25%",
                end: "bottom top",
                markers: false
            }
        })
        gsap.to("#right",{
            transform: "translateY(0)",
            duration: 1.5,
            scrollTrigger: {
                trigger: "#memberContainer",
                start: "top 25%",
                end: "bottom top",
                markers: false
            }
        })
        Data.map(item => {
            tl.to(`#${item.gsap.name}`,{
                scale: 1,
                duration: .3,
                delay: .5
            })
        })
    },{scope: memberRef})

    return (
        <div className="w-full h-fit" ref={memberRef} >
        <div id="memberContainer" className="w-full h-fit relative">
            <div id="left" className="absolute z-20 left-0 top-0 translate-y-[-170vw] bg-[#008DDA] h-full w-[33.33%]" ></div>
            <div id="center" className="absolute z-20 left-1/2 bottom-0 translate-y-[170vw] -translate-x-1/2 bg-[#008DDA] h-full w-[34%]" ></div>
            <div id="right" className="absolute z-20 right-0 top-0 translate-y-[-170vw] bg-[#008DDA] h-full w-[33.33%]" ></div>
            <div id="cardContainer" className="relative p-7 pb-28 gap-y-16 gap-x-7 left-0 grid place-items-center xl:grid-cols-3 lg:grid-cols-2 z-20 w-full -skew-y-3 h-fit" >
            {
                Data.map(item => {
                    return(
                        <div id={`${item.gsap.name}`} key={item.id} className="scale-0" >
                            <div className="relative left-1/2 -translate-x-1/2 top-0 translate-y-11 z-10 h-40 w-40 lg:h-32 lg:w-32 rounded-full object-cover overflow-hidden border-4 border-[#F6F6F6]" >
                                <Image src={item.source} width={2000} height={2000} className="h-full w-full object-cover object-center" alt="..." ></Image>
                            </div>
                            <div className="relative w-full px-4 pb-4 flex flex-col justify-between pt-[100px] lg:pt-[50px] items-center rounded-lg translate-x-0 h-[600px] bg-[#F6F6F6] shadow-2xl" >
                            
                            <h1 className="text-2xl font-bold text-[#1E1E1E] mb-5" >{item.memberName}</h1>
                            <p className="w-full text-sm leading-5 text-center font-medium" >
                            {item.paragraph}
                            </p>
                            <div className="flex flex-col w-full text-sm mt-5 tracking-widest lg:font-medium font-bold h-fit gap-2">
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Frontend</h3>
                                    <div className="relative h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.frontendPercentage}%`}} className={` rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Backend</h3>
                                    <div className="relative h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.backendPercentage}%`}} className={` rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>UI/UX Design</h3>
                                    <div className="relative h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.uiuxdesingPercentage}%`}} className={`rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Data Collector</h3>
                                    <div className="relative h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.fieldResearchPercentage}%`}} className={`rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Website Presenter</h3>
                                    <div className="relative h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.websitePresenterPercentage}%`}} className={` rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    )
                })
            }

            </div>
            <h1 className="absolute h-fit text-[200px] top-0 z-10 font-extrabold drop-shadow-xl w-full text-center text-gray-200 -skew-y-3" >TEAM MEMBERS</h1>
            </div>
        </div>
    )
}

export default Member