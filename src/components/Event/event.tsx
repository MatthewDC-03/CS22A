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
      gsap.to("#img1",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "10% center",
          markers: true,
          toggleActions: "play none none reverse"
        }
      })
      gsap.to("#img2",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "20% center",
          markers: true,
          toggleActions: "play none none reverse"
        }
      })
      gsap.to("#img3",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "30% center",
          markers: true,
          toggleActions: "play none none reverse"
        }
      })
      gsap.to("#img4",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "40% center",
          markers: true,
          toggleActions: "play none none reverse"
        }
      })
      gsap.to("#img5",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "50% center",
          markers: true,
          toggleActions: "play none none reverse"
        }
      })
    },{scope: eventContainer})
  return (
    <main id="eventWrapper" className="mt-[100px] w-full h-full lg:mt-[500px]" ref={eventContainer} >
      <div id="eventContainer" className="w-full relative h-[600vh] overflow-hidden mt-10 flex" >
        <div id="left" className="w-1/2 h-full relative pt-[500px] pl-[40px]">
          <div id="textContainer" className="absolute text-lg font-medium lg:w-[500px] xl:w-[650px] pl-[10px] border-2 border-green-500 top-0 left-0 flex-col h-[600px] flex justify-center items-center">
          {/* Paragraphs Here... */}
          <p>
          Vestibulum dictum lectus diam, sed dictum augue cursus pulvinar. Integer pulvinar nibh mi. Sed commodo pretium lectus, malesuada laoreet nisi ultricies at. Duis mattis metus eu efficitur mollis.
          </p>
          </div>
        </div>
        <div
          id="right"
          className="w-1/2 h-full relative "
        >
          
          <div id="trophyContainer" className="relative top-0 right-[-50px] lg:right-[-40px] w-full h-[600px]" >
            <Spline scene="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode" ></Spline>
          </div>
          <div id="eventImageContainer" className="absolute w-full top-0 left-0 border-2 border-black flex-col h-[600px] flex justify-center items-center">
          {/* PHotos Here... */}
          <Image id="img1" src={Rain} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl left-[10px] top-[50px]" ></Image>
          <Image id="img2" src={Rain} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl right-[10px] top-[300px]" ></Image>
          <Image id="img3" src={Rain} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl right-[40px] top-[170px]" ></Image>
          <Image id="img4" src={Rain} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl left-[30px] top-[240px]" ></Image>
          <Image id="img5" src={Rain} width={400} height={400} alt="..." className="rounded-sm scale-0 shadow-xl z-10 " ></Image>
          </div>

        </div>
      </div>
      {/* Script */}
      <script src="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode"></script>
    </main>
  );
};

export default Event;
