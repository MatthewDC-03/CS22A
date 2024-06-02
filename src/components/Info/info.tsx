"use client";
/* Assets */
import Image from "next/image";
import Rain from "../../../public/images/Luffy.jpg";
import Tiktok from "../../../public/images/Icon/Tiktok.svg"
import Facebook from "../../../public/images/Icon/Facebook.svg"
import Instagram from "../../../public/images/Icon/Instagram.svg"
import HeartFill from "../../../public/images/Icon/Like_Fill.svg"
import HeartOutline from "../../../public/images/Icon/Like_Outline.svg"

import InfoData from "../../json/infoData.json"
import { useRef, useState } from "react";
export default function Info() {
    /* Add click event to a div that has been mapped */
    /* We have 10 false means we have 10 index in our eventData.json */
    const [click,setClick] = useState([false,false,false,false,false,false,false,false,false,false])
    
    const handleClick = (index: any) => {
        const newArray = [...click] /* Create a copy of the array, [false,false,false, ...] */
        newArray[index] = !newArray[index] /* Toggle the value at the specified index */
        setClick(newArray) /* Update the state with the new array */
    }
    const [ isMouseDown, setIsMouseDown] = useState(false);
    const [ startX, setStartX] = useState(0)
    const [ scrollLeft, setScrollLeft] = useState(0)
    const handleMouseDown = (e: any) => {
        let slider: any = document.getElementById("slider")
        setIsMouseDown(true);
        setStartX(e.pageX - slider.offsetLeft)
        setScrollLeft(slider.scrollLeft)
        console.log("mouseDown:", e.pageX - slider.offsetLeft)
        console.log("Dragged")
    }
    const handleMouseLeave = () => {
        setIsMouseDown(false)
    }
    const handleMouseUp = () => {
        setIsMouseDown(false)
    }
    const handleMouseMove = (e: any) => {
            let slider: any = document.getElementById("slider")
            e.preventDefault()
            if(!isMouseDown){
                return
            };
            const x = e.pageX - slider.offsetLeft
            let walk = x - startX
            console.log(x)
            console.log(walk)
            console.log(slider.scrollLeft)
            console.log(scrollLeft)
            slider.scrollLeft = scrollLeft - walk
            console.log("move")
    }
return (
    <>
        <div 
        id="slider"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full relative z-10 overflow-hidden cursor-grab ${isMouseDown && "cursor-grabbing"} skew-y-3 p-5 h-[690px] mt-0`}>
        <div
        className=" gap-28 absolute w-fit h-fit flex mx-0" >
        {
            InfoData.map((item) => {
                return (
                    <div key={item.id} className="justify-between relative transition-all duration-500 hover:translate-y-2 w-[500px] h-[700px] bg-neutral-50 rounded-lg shadow-xl flex flex-col items-center gap-2 py-12 px-3 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 overflow-hidden before:h-[5px] before:bg-gray-500">
                    <div>
                    <div className=" h-32 w-32 rounded-full overflow-hidden" >
                                <Image src={item.link} width={2000} height={2000} className="h-full w-full object-cover object-center" alt="..." ></Image>
                            </div>
                    <h1 className="mt-3 font-bold text-lg text-center" >{item.name}</h1>
                    </div>
                    <div className="flex flex-col justify-cente items-center w-full h-fit" >
                    <p className="text-center text-sm leading-6" >{item.about}</p>
                    </div>
                    <div className="flex w-full justify-evenly " >
                        <div className="h-10 w-10 rounded-full cursor-pointer ">
                            <a href="#"><Image src={Tiktok} alt="Tiktok" width={500} height={500} ></Image></a>
                        </div>
                        <div className="h-10 w-10 rounded-full cursor-pointer" >
                        <a href="#"><Image src={Facebook} alt="Tiktok" width={500} height={500} ></Image></a>
                        </div>
                        <div className="h-10 w-10 rounded-full cursor-pointer" >
                            <a href="#"><Image src={Instagram} alt="Tiktok" width={500} height={500} ></Image></a>
                        </div>
                    </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    </>
);
}
