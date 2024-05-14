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
    
    const tl = gsap.timeline()

    useGSAP(()=>{
        gsap.to("#left",{
            transform: "translateY(0)",
            duration: 2,
            scrollTrigger: {
                trigger: "#left",
                start: "bottom top",
                end: "+=1600",
                markers: false
            }
        })
        gsap.to("#center",{
            left: "50%",
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            duration: 2,
            scrollTrigger: {
                trigger: "#center",
                start: "-=1630px top",
                end: "+=1600",
                markers: false
            }
        })
        gsap.to("#right",{
            transform: "translateY(0)",
            duration: 2,
            scrollTrigger: {
                trigger: "#right",
                start: "96.9% top",
                end: "+=1600",
                markers: false
            }
        })
        Data.map(item => {
            gsap.to(`#${item.gsap.name}`,{
                scale: 1,
                delay: item.gsap.delay,
                scrollTrigger: {
                    trigger: "#cardContainer",
                    start: "23% center",
                    end: "bottom top",
                    markers: false,
                }
            })
        })
    },{scope: memberRef})

    return (
        <div className="w-full h-full" ref={memberRef} >
        <div id="memberContainer" className="w-full h-full relative">
            <div id="left" className="absolute z-20 left-0 top-0 translate-y-[-1600px] bg-[#008DDA] h-full w-[33.33%]" ></div>
            <div id="center" className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 translate-y-[800px] bg-[#008DDA] h-full w-[34%]" ></div>
            <div id="right" className="absolute z-20 right-0 top-0 translate-y-[-1600px] bg-[#008DDA] h-full w-[33.33%]" ></div>
            <div id="cardContainer" className="absolute p-7 left-0 grid place-items-center grid-cols-3 z-30 top-0 w-full -skew-y-3 h-full" >
            {
                Data.map(item => {
                    return(
                        <div id={`${item.gsap.name}`} key={item.id} className="relative w-[350px] lg:w-[300px] px-4 pb-4 flex flex-col gap-3 justify-around pt-[100px] lg:pt-[50px] items-center rounded-lg translate-x-0 scale-0 h-[500px] lg:h-fit bg-[#F6F6F6] shadow-2xl" >
                            <div className=" h-40 w-40 lg:h-32 lg:w-32 rounded-full bg-red-500 overflow-hidden left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-80 lg:-translate-y-[275px] border-4 border-[#F6F6F6]" >
                                <Image src={item.source} width={1000} height={1000} className="h-full w-full bg-cover" alt="..." ></Image>
                            </div>
                            <h1 className="text-3xl lg:text-xl font-bold text-[#1E1E1E]" >Daisy</h1>
                            <p className="w-full text-sm lg:text-xs text-center font-thin" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor a diam at maximus. Aenean sodales ultrices tincidunt. Duis scelerisque nec augue quis congue. Donec ac ex tristique, vestibulum ex at,
                            </p>
                            <div className="flex flex-col w-full text-xs tracking-widest lg:font-medium font-bold h-fit gap-2">
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
                    )
                })
            }

            </div>
            <h1 className=" text-[200px] z-10 font-extrabold drop-shadow-xl w-full h-full text-center text-gray-200 -skew-y-3" >TEAM MEMBERS</h1>
            </div>
        </div>
    )
}

export default Member