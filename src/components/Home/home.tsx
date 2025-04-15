"use client";

import Image from "next/image";
import SliderData from '../../json/sliderData.json'
import { useState } from "react";
import { clearTimeout } from "timers";
import Link from "next/link";
export default function Home() {
    const nextStyle = `
    [&>*:nth-child(1)>:nth-child(1)]:z-[1]
        /* 🟩 h1 tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:translate-y-[30px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:translate-y-[20px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:opacity-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:blur-[15px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:blur-[10px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:animate-showContent
        
        /* 🟩 p tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:translate-y-[30px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:translate-y-[20px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:blur-[15px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:blur-[10px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:opacity-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:animate-showContent
        
        /* 🟩 button tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:translate-y-[30px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:translate-y-[20px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:blur-[15px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:blur-[10px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:opacity-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:animate-showContent
        
        /* 🟩 Image tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:absolute [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:w-[208px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:w-[160px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:h-[128px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:h-[100px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:left-[1000px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:left-[800px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:rounded-md [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:bottom-[197px] max-sm:[&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:bottom-[150px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:animate-showImage
        
        /* 🟩 Thumbnail Next*/
        [&>*:nth-last-child(1)>:nth-child(1)>:nth-last-child(1)]:w-0 [&>*:nth-last-child(1)>:nth-child(1)>:nth-last-child(1)]:overflow-hidden [&>*:nth-last-child(1)>:nth-child(1)>:nth-last-child(1)]:animate-showThumbnail
    `
    const [isClick,setClick] = useState(true)
    const [isNext,setNext] = useState(true)
    const [isBar,setBar] = useState(false)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    function nextBtn() {
            if(isClick) {
                showSlider("next")
                setClick(false)
                setBar(true)
                setNext(true)
                let runTime = 3000
                let runOut
                clearTimeout(runOut);
                runOut = setTimeout(()=>{
                    setClick(true)
                    setBar(false)
                    setNext(false)
                },runTime)
            }
    }

    function showSlider(type: any) {
        let slideItems = document.querySelectorAll("#item");
        let thumpnailItems = document.querySelectorAll("#thumpnailItem");
        let thumpnailList = document.querySelector("#thumpnailList");
        let numList = document.querySelector("#numList")
        let nums = document.querySelectorAll('#numList h1')
        let list = document.querySelector("#list");

        if (type === "next") {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
            
            list?.appendChild(slideItems[0]);
            thumpnailList?.appendChild(thumpnailItems[0]);
            numList?.appendChild(nums[0])
        }
    }

    return (
    /* Container */
    <div
        className={`h-[100vh] sm:h-[120vh] w-full skew-y-[-3deg] max-sm:skew-y-0 max-md:skew-y-0 max-lg:skew-y-0 flex relative overflow-hidden p-0 m-0 max-sm:h-[100vh] max-sm:overflow-hidden
        ${isNext ? nextStyle : ''}
        `}
    >
        
      {/* SLIDER */}
        <div id="list" className="h-full w-full p-0 m-0 max-sm:h-[100vh]">
        {
        SliderData.map((item, index) =>{
        return (
        <div id="item" key={item.id} className={`w-full h-full absolute item-2 p-0 m-0 max-sm:h-[100vh] ${index === currentSlideIndex ? 'z-10' : 'z-0'}`}>
        <Image src={item.image} alt="..." width={1000} height={1000} className='w-full h-full skew-y-[0deg] max-sm:skew-y-0 max-md:skew-y-0 max-lg:skew-y-0 brightness-50 object-cover max-sm:h-[100vh]' ></Image>
          {/* Content -- 1 */}
            <div className="absolute top-1/4 max-sm:top-1/2 max-sm:-translate-y-1/2 left-[5%] max-sm:left-0 max-sm:right-0 max-sm:mx-auto max-sm:px-6 w-2/4 max-sm:w-full flex flex-col gap-3 sm:gap-5">
            <h1
                className="text-[#F6F6F6] text-3xl sm:text-5xl max-sm:text-center font-semibold w-fit max-sm:w-full"
                style={{ animationDelay: "1.2s" }}
            >
                {item.heading}
            </h1>
            <p
                className="text-[#F6F6F6] font-thin text-xs sm:text-sm max-sm:text-center max-sm:px-4 max-sm:mx-auto w-fit max-sm:w-full antialiased leading-6 sm:leading-7"
                style={{ animationDelay: "1.4s" }}
            >
                {item.paragraph}
            </p>
            <button
                className="bg-[#F6F6F6] border-0 max-sm:hidden outline-none relative rounded-full text-base sm:text-lg h-10 sm:h-11 overflow-hidden w-28 sm:w-32 before:content[''] before:w-0 before:h-full before:ease-out before:bg-[#008DDA] before:z-0 before:absolute before:inset-0 before:rounded-full hover:before:w-full before:duration-500 before:transition-[width,left] hover:text-[#F6F6F6]"
                style={{ animationDelay: "1.6s" }}
            >
                <Link href={item.link} className="absolute left-[50%] w-full top-[50%] translate-x-[-50%] translate-y-[-50%]">
                {item.text}
                </Link>
            </button>
            </div>
        </div>
        )
        })
        }
        </div>

        {/* Thumbnail */}
        <div className={`top-[65%] max-sm:hidden max-md:hidden max-lg:hidden -right-40 max-xl:-right-[320px] absolute flex flex-col gap-3 sm:gap-5`}>
        <div
            id="thumpnailList"
            className={`w-fit h-fit flex gap-4 sm:gap-7 z-10 ${isNext && 'translate-x-[150px] animate-transformThumbnail'}`}
        >
            {
                SliderData.map((item, index) => {
                    // Show the next image and the two images after it
                    const nextIndex = (currentSlideIndex + 1) % SliderData.length;
                    const secondIndex = (currentSlideIndex + 2) % SliderData.length;
                    const thirdIndex = (currentSlideIndex + 3) % SliderData.length;
                    
                    if (index === nextIndex || index === secondIndex || index === thirdIndex) {
                        return(
                            <div 
                                id="thumpnailItem" 
                                key={item.id} 
                                className={`h-24 sm:h-32 w-40 sm:w-52 transition-all duration-300 ${
                                    index === currentSlideIndex ? 'opacity-100' : 'opacity-50'
                                }`}
                            >
                                <Image 
                                    id='thumpnailItem' 
                                    src={item.image} 
                                    width={1000} 
                                    height={1000} 
                                    alt='...' 
                                    className='brightness-75 rounded-md h-full w-full object-cover shadow-xl sm:shadow-2xl' 
                                />
                            </div>
                        )
                    }
                    return null;
                })
            }
        </div>

        {/* Navigation Button */}
        <div className="z-50 absolute -left-16 top-1/2 -translate-y-1/2 flex">
        <button
            type="button"
            id="nextBtn"
            onClick={nextBtn}
            className="p-3 sm:p-4 bg-black/30 rounded-full hover:bg-black/40 transition-all duration-300 active:scale-95 cursor-pointer touch-manipulation min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px] flex items-center justify-center shadow-lg"
            aria-label="Next slide"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
            </svg>
        </button>
        </div>
        </div>

        {/* Number List */}
        <div className="absolute top-[35%] z-10 right-[4%] text-2xl sm:text-3xl font-thin max-sm:right-0 max-sm:left-0 max-sm:mx-auto max-sm:text-center" >
        <div id="numList" className="relative max-sm:hidden
                                    [&>*:nth-child(2)]:relative [&>*:nth-child(2)]:bottom-[-20px] sm:[&>*:nth-child(2)]:bottom-[-24px] [&>*:nth-child(2)]:left-[5px] [&>*:nth-child(2)]:opacity-0 [&>*:nth-child(2)]:animate-numTranslate [&>*:nth-child(2)]:text-sm sm:[&>*:nth-child(2)]:text-base [&>*:nth-child(2)]:text-black/45 [&>*:nth-child(2)]:font-bold
                                    [&>*:nth-child(1)]:text-[#F6F6F6] [&>*:nth-child(1)]:left-0 [&>*:nth-child(1)]:bottom-[-20px] sm:[&>*:nth-child(1)]:bottom-[-24px] [&>*:nth-child(1)]:text-[18px] sm:[&>*:nth-child(1)]:text-[22px] [&>*:nth-child(1)]:relative [&>*:nth-child(1)]:opacity-0 [&>*:nth-child(1)]:animate-numBlackTranslate
                                    [&>*:nth-child(3)]:text-black/20 [&>*:nth-child(3)]:bottom-[-20px] sm:[&>*:nth-child(3)]:bottom-[-24px] [&>*:nth-child(3)]:text-[15px] sm:[&>*:nth-child(3)]:text-[17px] [&>*:nth-child(3)]:relative [&>*:nth-child(3)]:opacity-0 [&>*:nth-child(3)]:animate-numBlackTranslate" >
            <h1 className="tracking-widest">03</h1>
            <h1 className="tracking-widest">01</h1>
            <h1 className="tracking-widest">02</h1>
        </div>
        <div className="absolute w-8 sm:w-10 rounded-full h-[2px] sm:h-[2.5px] top-1/2 left-6 sm:left-8 bg-[#F6F6F6]/70 max-sm:left-1/2 max-sm:-translate-x-1/2" ></div>
        </div>

        {/* Progress Bar */}
        <div className={`fixed left-0 h-2 sm:h-3 w-0 bg-white bottom-0 z-[999] ${isBar ? 'w-full transition-all duration-[3000ms] ease-linear' : ''}`}></div>
    </div>
    );
}
