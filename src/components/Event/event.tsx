"use client";
import Image from "next/image"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

/* Images */
import Rain from "../../../public/images/Rain.jpg"
import Spline from '@splinetool/react-spline';

/* Data */
import eventData from "../../json/eventData.json"

const Event = () => {
    const eventContainer = useRef(null)
    useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const  event: any = document.querySelector("#eventContainer")
    /* Variables 4638 */

    /* Start of Gsap */

    /* 3D Pinned */
    gsap.to("#trophyContainer",{
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "top 13%",
          end: "85% top",
          markers: false,
          pin: "#trophyContainer"
        }
      })
      /* Text Container */
      gsap.to("#textContainer",{
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "top 13%",
          end: "85% top",
          markers: false,
          pin: "#textContainer"
        }
      })
      /* Texts */
      eventData.map((item)=>{
        gsap.to(`#${item.gsap.idName}`,{
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: "#eventContainer",
                start: `${item.gsap.start} center`,
                toggleActions: "restart reverse restart reverse",
                end: `${item.gsap.end} top`,
                markers: false
            }
          })
        
      gsap.to(`#${item.image.idNameImage}`,{
        scale: 1,
        opacity: 1,
        filter: "blur(0)",
        scrollTrigger: {
            trigger: "#eventContainer",
            start: `${item.gsap.start} center`,
            end: "85% top",
            toggleActions: "restart reverse restart reverse",
            markers: false
        }
      })
      })

/* ================================================== */
      /* Image Container */
      gsap.to("#eventImageContainer",{
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "top 13%",
          end: "85% top",
          markers: false,
          pin: "#eventImageContainer"
        }
      })
    },{scope: eventContainer})
  return (
    <main className="mt-[100px] lg:mt-[500px]" ref={eventContainer} >
      <div id="eventContainer" className="w-full relative h-[600vh] overflow-hidden mt-10 flex" >
        <div id="left" className="w-1/2 lg:w-[70%] h-full relative pt-[500px] pl-[40px]">
          <div id="textContainer" className="absolute w-full top-0 left-0 py-[100px] flex-col h-[600px] flex justify-center items-center">

            {
                eventData.map(item => {
                    return(
                        <div
                        key={item.id}
              id={`${item.gsap.idName}`}
              className="absolute w-fit h-fit flex flex-col px-5 gap-5 opacity-0 lg:w-[95%] translate-x-[-700px]"
            >
              <h1 className="font-bold text-3xl">
                {item.content.heading}
              </h1>
              <p className=" font-medium">
                {item.content.paragraph}
              </p>
            </div>
                    )
                })
            }

          </div>
        </div>
        <div
          id="right"
          className="w-1/2 h-full relative bg-blue-300"
        >
          
          <div id="trophyContainer" className="relative top-0 right-[-50px] lg:right-[-40px] w-full h-[600px]" >
            <Spline scene="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode" ></Spline>
          </div>
          <div id="eventImageContainer" className="absolute w-full top-0 left-0 lg:border-2 lg:border-purple-500 flex-col h-[600px] flex justify-center items-center">
            {
                eventData.map(item => {
                    return (
                        <div
                        key={item.id}
              id={`${item.image.idNameImage}`}
              className={`left-[${item.image.translateXImage}px] top-[${item.image.translateYImage}px] relative z-50 w-fit h-fit blur-[2px] scale-0 overflow-hidden rounded-lg`}
            >
              <Image src={item.image.source} alt="..." width={200} height={300} className="w-auto h-auto"></Image>
            </div>
                    )
                })
            }
          </div>

        </div>
      </div>
      {/* Script */}
      <script src="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode"></script>
    </main>
  );
};

export default Event;
