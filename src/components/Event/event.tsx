"use client";
import Image from "next/image"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Video from "next-video"
import Video1 from "Video.mp4"

/* Images */
/* Basketball Photos */
import Photo1 from "../../../public/images/EventPhotos/Basketball/Photo1.svg"
import Photo2 from "../../../public/images/EventPhotos/Basketball/Photo2.svg"
import Photo3 from "../../../public/images/EventPhotos/Basketball/Photo3.svg"
import Photo4 from "../../../public/images/EventPhotos/Basketball/Photo4.svg"

/* Volleyball Photos */
import Photo5 from "../../../public/images/EventPhotos/Volleyball/Photo1.jpg"
import Photo6 from "../../../public/images/EventPhotos/Volleyball/Photo2.jpg"
import Photo7 from "../../../public/images/EventPhotos/Volleyball/Photo3.jpg"
import Photo8 from "../../../public/images/EventPhotos/Volleyball/Photo4.jpg"

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
          trigger: "#right",
          start: "top 13%",
          end: "90% top",
          markers: false,
          pin: "#trophyContainer"
        }
      })
      /* Text Container */
      gsap.to("#textContainer",{
        scrollTrigger: {
          trigger: "#right",
          start: "top 13%",
          end: "90% top",
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
          end: "90% top",
          markers: false,
          pin: "#eventImageContainer"
        }
      })

      /* Basketball Images */
      gsap.to("#img1",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "10% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#img2",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "20% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#img3",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "30% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#img4",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "40% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })


      /* Basketball Paragraphs */
      gsap.to("#paragraph1",{
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "10% center",
          end: "25% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#paragraph2",{
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "30% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })

      /* Volleyball Images */
      gsap.to("#img5",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "60% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#img6",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "70% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#img7",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "80% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.to("#img8",{
        scale: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "90% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })

      /* Volleyball Paragraphs */
      gsap.to("#paragraph3",{
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "60% center",
          end: "75% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })

      gsap.to("#paragraph4",{
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "85% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse"
        }
      })
    },{scope: eventContainer})
  return (
    <main id="eventWrapper" className="mt-[100px] w-full h-full lg:mt-[500px]" ref={eventContainer} >
      <div id="eventContainer" className="w-full relative h-[900vh] overflow-hidden mt-10 flex" >
        <div id="left" className="w-1/2 h-full relative pt-[500px] pl-[40px]">
          <div id="textContainer" className="absolute text-lg font-medium lg:w-[500px] xl:w-[650px] pl-[10px] top-0 left-0 flex-col h-[600px] flex justify-center items-center">
          {/* Paragraphs Here... */}

          {/* #1 */}
          <div id="paragraph1" className="absolute opacity-0 translate-x-[-650px]" >
            <h1 className=" font-bold text-3xl mb-10" >Unstoppable Force: Our Basketball Team Wins Big in Intramurals 2024!</h1>
            <p>Our basketball team dominated the court in the Intramurals 2024 championship game, securing a decisive victory in a fierce battle against the Arctic Wolves, Valiant Cerulean Griffins, Green Soaring Falcons, and Red Eagles. Their incredible teamwork and relentless drive led to an unforgettable win. Congratulations to our champions for their outstanding performance and dedication!</p>
          </div>

          {/* #1 */}
          <div id="paragraph2" className="absolute opacity-0 translate-x-[-650px]" >
            <h1 className=" font-bold text-3xl mb-10" >Victorious Moment: Our Basketball Team Shines in Intramurals 2024!</h1>
            <p>Our team achieved a remarkable victory in the Intramurals 2024 championship game, demonstrating exceptional skill and determination. Each member of the team played a crucial role, showcasing their unique talents and unwavering dedication. Key players such as <span className=" font-bold text-[#008DDA]" >Raymond Jay Torlao, Juben, Jethro Ortega, Kianne Dave Balderas, Dave and Rogin Nuza Duran</span> led the charge, contributing significantly to the team's success. Hats off to our champions for their impressive performance and hard-earned triumph!</p>
          </div>

          <div id="paragraph3" className="absolute opacity-0 translate-x-[-650px]" >
            <h1 className=" font-bold text-3xl mb-10" >Triumph and Teamwork: Our Volleyball Team Secures First Runner-Up in Intramurals 2024</h1>
            <p>Our volleyball team had an incredible run in the Intramurals 2024, showcasing skill, determination, and teamwork. After a series of intense matches, we emerged as the first runners-up, a testament to our hard work and resilience. Each game was a display of our strategic plays and unwavering spirit, pushing us closer to victory with every serve, spike, and block. Although we fell just short of the championship, our performance was nothing short of outstanding, and we take immense pride in our accomplishment. This experience has not only strengthened our bonds but also set a higher benchmark for future competitions.</p>
          </div>

          <div id="paragraph4" className="absolute opacity-0 translate-x-[-650px]" >
            <h1 className=" font-bold text-3xl mb-10" >Celebrating Success: Volleyball Team Clinches First Runner-Up in Intramurals 2024</h1>
            <p>Our volleyball team had an incredible run in the Intramurals 2024, showcasing skill, determination, and teamwork. After a series of intense matches, we emerged as the first runners-up, a testament to our hard work and resilience. Each game was a display of our strategic plays and unwavering spirit, pushing us closer to victory with every serve, spike, and block. Although we fell just short of the championship, our performance was nothing short of outstanding, and we take immense pride in our accomplishment. This experience has not only strengthened our bonds but also set a higher benchmark for future competitions.</p>
          </div>

          </div>
        </div>
        <div
          id="right"
          className="w-1/2 h-full relative"
        >
          
          {/* 3D Trophy */}
          <div id="trophyContainer" className="relative xl:scale-1 lg:scale-90 top-0 right-[-50px] lg:right-[-40px] w-full h-[600px]" >
            <Spline scene="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode" ></Spline>
          </div>
          <div id="eventImageContainer" className="absolute xl:scale-1 lg:scale-90 w-full top-0 left-0 flex-col h-[600px] flex justify-center items-center">
          {/* PHotos Here... */}
          <Image id="img1" src={Photo1} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl left-[10px] top-[50px]" ></Image>
          <Image id="img2" src={Photo3} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl right-[10px] top-[180px]" ></Image>
          <Image id="img3" src={Photo2} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl right-[150px] top-[10px]" ></Image>
          <Image id="img4" src={Photo4} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl left-[100px] top-[190px]" ></Image>

          <Image id="img5" src={Photo5} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl left-[10px] top-[50px]" ></Image>
          <Image id="img6" src={Photo6} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl right-[10px] top-[180px]" ></Image>
          <Image id="img7" src={Photo7} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl right-[150px] top-[10px]" ></Image>
          <Image id="img8" src={Photo8} width={300} height={300} alt="..." className="rounded-sm scale-0 absolute shadow-xl left-[100px] top-[190px]" ></Image>
          </div>

        </div>
      </div>
      {/* Script */}
      <script src="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode"></script>
    </main>
  );
};

export default Event;
