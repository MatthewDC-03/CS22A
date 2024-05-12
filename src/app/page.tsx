"use client"

import Image from "next/image";
import HomePage from "../components/Home/home";
import Navbar from "../components/Navbar/navbar";
import About from "../components/About/about"
import Info from "../components/Info/info"
import Event from "../components/Event/event"
import Member from "../components/Member/member"
import Feedback from "../components/Feedback/feedback"
import gsap from "gsap";
import Basketball from '../../public/images/Icon/Baskitball.svg'
import { useEffect, useState } from "react";
/* Images */
import Facebook from "../../public/images/Facebook.svg"
import Camera from "../../public/images/Camera.svg"
/* ScrollTrigger and Script are required to use the on-scroll effect */
import { ScrollTrigger } from "gsap/all";
/* useGSAP required to use the gsap in react/next.js */
import { useGSAP } from "@gsap/react";
/* useRef and useGSAP are both pair they need each other to work */
import { useRef } from "react";
import Loading from './loading'

export default function Home() {

  

    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
      const handScroll = ()=> {
        const currentPosition = window.scrollY
        if(currentPosition > 0){
          setScrolled(true)
        }
        else{
          setScrolled(false)
        }
      }
      window.addEventListener("scroll", handScroll)
    })
  /* Add the type of the useRef, to work properly */
  const container = useRef<HTMLInputElement>(null)
  useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger)
  let event: any = document.querySelector("#eventConainer")
  let left: any = document.querySelector("#left")
  let end: any = document.querySelector("#navbar")
  let endPoint = end?.offsetHeight
  let leftEvent = left?.offsetHeight
  let height = event?.offsetHeight
  const tl = gsap.timeline()
/* [ TRIGGERS ] */
/* Home */
gsap.to("#home",{
  borderColor: "#008DDA",
  color: "#008DDA",
  fontWeight: "1000",
  boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
  scrollTrigger: {
    trigger: "#home",
    start: "top 70%",
    markers: false,
    toggleClass: "red",
    toggleActions: "play restart play reverse"
  }
})
/* About */
gsap.to("#about",{
  borderColor: "#008DDA",
  color: "#008DDA",
  fontWeight: "1000",
  boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    markers: false,
    toggleClass: "red",
    toggleActions: "play restart play reverse"
  }
})
/* About the Website */
gsap.to("#website",{
  borderColor: "#008DDA",
  color: "#008DDA",
  fontWeight: "1000",
  boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
  scrollTrigger: {
    trigger: "#website",
    start: "top 70%",
    end: "bottom top",
    markers: false,
    toggleActions: "restart reverse restart reverse"
  }
  })
/* About the CSS22A */
gsap.to("#cs22",{
  borderColor: "#008DDA",
  color: "#008DDA",
  fontWeight: "1000",
  boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
  scrollTrigger: {
    trigger: "#cs22",
    start: "top 70%",
    end: "bottom top",
    markers: false,
    toggleActions: "restart reverse restart reverse"
  }
  })
  gsap.to("#info",{
    borderColor: "#008DDA",
    color: "#008DDA",
    fontWeight: "1000",
    boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
    scrollTrigger: {
      trigger: "#info",
      markers: false,
      start: "top 84%",
      toggleActions: "play restart play reverse"
    }
  })
  /* Events */
  gsap.to("#event",{
    borderColor: "#008DDA",
    color: "#008DDA",
    fontWeight: "1000",
    boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
    scrollTrigger: {
      trigger: "#event",
      start: "top 84%",
      markers: false,
      toggleActions: "play restart play reverse"
    }
  })
  /* Baskitball */
  gsap.to("#baskitball",{
    borderColor: "#008DDA",
    color: "#008DDA",
    fontWeight: "1000",
    boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
    scrollTrigger: {
      trigger: "#baskitball",
      start: "top 84%",
      markers: false,
      toggleActions: "play restart play reverse"
    }
  })
  gsap.to("#basketballIcon",{
    filter: "brightness(0) saturate(100%) invert(47%) sepia(47%) saturate(5947%) hue-rotate(177deg) brightness(94%) contrast(101%)",
    duration: 0,
    scrollTrigger: {
      trigger: "#baskitball",
      start: "top 84%",
      markers: false,
      toggleActions: "play restart play reverse"
    }
  })
  gsap.to("#member",{
    borderColor: "#008DDA",
    color: "#008DDA",
    fontWeight: "1000",
    boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
    scrollTrigger: {
      trigger: "#member",
      start: "top 84%",
      markers: false,
      toggleActions: "play restart play reverse"
    }
  })
  gsap.to("#feedback",{
    borderColor: "#008DDA",
    color: "#008DDA",
    fontWeight: "1000",
    boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
    scrollTrigger: {
      trigger: "#feedback",
      start: "top 78%",
      markers: false,
      toggleActions: "play restart play reverse"
    }
  })
  gsap.to("#thank",{
    borderColor: "#008DDA",
    color: "#008DDA",
    fontWeight: "1000",
    boxShadow: "rgba(0,141,218, 0.35) 0px 5px 20px",
    scrollTrigger: {
      trigger: "#thank",
      start: "top 78%",
      markers: false,
      toggleActions: "play restart play reverse"
    }
  })
  /* [ ARROWS ] */
/* HOME ARROW */
gsap.to("#homeArrow",{
  height: 405,
  duration: 1,
  opacity: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#homeArrow",
    start: "bottom 80%",
    markers: false,
    toggleActions: "play restart play reverse"
  }
  })
/* PINNED ARROW */
gsap.to("#homeArrowPin",{
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#endPoint",
    start: "7% 20%",
    end: "95% top",
    markers: false,
    pin: "#homeArrowPin",
  }
})/* ABOUT ARROW - 2 */
gsap.to("#aboutArrowTwo",{
width: 379,
duration: 1,
ease: "power4.out",
opacity: 1,
scrollTrigger: {
  trigger: "#aboutArrowTwo",
  start: "top 70%",
  end:"bottom top",
  markers: false,
  toggleActions: "restart reverse restart reverse"
}
})
/* ABOUT ARROW - 3 */
gsap.to("#aboutArrowThree",{
  width: 368,
  duration: 1,
  ease: "power4.out",
  opacity: 1,
  scrollTrigger: {
    trigger: "#aboutArrowThree",
    start: "top 70%",
    end:"bottom top",
    markers: false,
    toggleActions: "restart reverse restart reverse"
  }
  })
  /*
      gsap.to("#right",{
        scrollTrigger: {
          trigger: "#right",
          start: "15% 20%",
          end: ()=>`+=${height}`,
          scrub: 4,
          markers: false,
          pin: true
        }
      })
      gsap.to("#popup",{
        scrollTrigger: {
          trigger: "#popup",
          start: "20% 20%",
          end: ()=>`+=${height}px`,
          scrub: 4,
          markers: false,
          pin: true
        }
      })
      gsap.to("#popOne",{
        filter: "blur(0)",
        scale: 1,
        scrollTrigger: {
          trigger: "#trophyContainer",
          start: "100% center",
          end: "500% top",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      gsap.to("#popTwo",{
        filter: "blur(0)",
        scale: 1,
        scrollTrigger: {
          trigger: "#trophyContainer",
          start: "200% center",
          end: "500% top",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      gsap.to("#popThree",{
        filter: "blur(0)",
        scale: 1,
        scrollTrigger: {
          trigger: "#trophyContainer",
          start: "300% center",
          end: "500% top",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      gsap.to("#popFour",{
        filter: "blur(0)",
        scale: 1,
        scrollTrigger: {
          trigger: "#trophyContainer",
          start: "400% center",
          end: "500% top",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      gsap.to("#textOne",{
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#trophyContainer",
          start: "30% center",
          end: "200% top",
          toggleActions: "restart reverse restart reverse",
          markers: true
        }
      })*/
},{scope: container})
  return (
    <>
    <Loading />
    <main className="w-full h-full relative" ref={container}  >
      <div id="endPoint" className="absolute left-0 top-0 bottom-[20%] w-full h-fit" >
        {/* GUIDE */}
          <div id="homeArrowPin" className=" absolute left-1/2 translate-x-[59px] opacity-0 top-[450px] z-0 w-[3px] h-[700px] bg-[#008DDA] opacity-1"></div>
        <div className="w-full h-full relative z-50 text-xl font-medium tracking-widest">
          {/* HOME ARROW */}
          <div className="absolute left-1/2 top-[650px] flex flex-col items-center" >
          <span id="home" className="text-[#F6F6F6] border-[#F6F6F6] border-[3px] rounded-full py-2 px-6" >HOME</span>
          <div id="homeArrow" className=" relative top-[0] w-[3px] h-[3px] right-[-2px] bg-[#008DDA] opacity-0"></div>
          </div>
          {/* ANIMATION CONTAINER */}
          <div className="absolute left-1/2 top-[1105px] translate-x-[-5px] flex flex-col items-center" >
          {/* ABOUT MAIN PAGE*/}
          <span id="about" className="text-[#1E1E1E] bg-[#F6F6F6] border-[#1E1E1E] border-[3px] py-2 px-6" >ABOUT</span>
          {/* ABOUT ARROW 1️⃣ */}
          <div id="aboutArrowOne" className=" relative top-[0] w-[3px] h-0 bg-[#008DDA] opacity-0 before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-[10px] before:right-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:bottom-[-10px] before:border-r-[10px] before:border-t-[10px] before:border-l-transparent before:border-r-transparent before:border-[#008DDA]"></div>
          {/* ABOUT ARROW 2️⃣ */}
          <div id="aboutArrowTwo" className="absolute w-[0] h-[3px] right-[63px] bg-[#008DDA] top-[150px]  opacity-0" ></div>
          {/* ABOUT ARROW 3️⃣ */}
          <div id="aboutArrowThree" className="absolute w-[0] h-[3px] right-[63px] rotate-180 flex origin-top-right bg-[#008DDA] top-[400px] opacity-0" ></div>
          {/* EVENT ARROW */}
          </div>
          
          {/* INFO */}
          <span id="info" className="absolute left-1/2 bg-[#F6F6F6] translate-x-[5px] top-[2180px] text-[#1E1E1E] border-[#1E1E1E] border-[3px] py-2 px-6" >INFO</span>
          {/* EVENT */}
          <span id="event" className="absolute bg-[#F6F6F6] left-1/2 translate-x-[-5px] top-[3250px] text-[#1E1E1E] border-[#1E1E1E] border-[3px] py-2 px-6" >EVENT</span>
          {/* BASKETBALL */}
          <div id="baskitball" className="absolute h-20 w-20 grid place-items-center bg-[#F6F6F6] border-[3px] border-[#1E1E1E] left-1/2 z-50 translate-x-[20.5px] rotate-45 top-[3500px]" >
          <Image id="basketballIcon" src={Basketball} width={60} height={60} alt="basketball" ></Image>
          </div>
          <div className=" w-[251px] absolute left-[10%] top-[1230px] flex flex-col items-center" >
          <span id="website" className="relative text-[#1E1E1E] border-[#1E1E1E] border-[3px] py-2 px-6" >About the Website</span>
          <p className="w-[500px] top-20 left-0 text-lg absolute text-left" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia risus sem, nec elementum ligula suscipit sit amet. Praesent sit amet maximus augue, quis pulvinar lorem. Aliquam vitae augue at nunc elementum tempus a condimentum elit.</p>
          </div>
          <div className="absolute left-[80%] top-[1475px] flex flex-col items-center" >
          <span id="cs22" className=" text-[#1E1E1E] border-[#1E1E1E] relative bg-[#F6F6F6] border-[3px] py-2 px-6" >About CS22A</span>
          <p className="w-[500px] top-20 right-0 text-lg absolute text-right" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia risus sem, nec elementum ligula suscipit sit amet. Praesent sit amet maximus augue, quis pulvinar lorem. Aliquam vitae augue at nunc elementum tempus a condimentum elit.</p>
          </div>
          <div className="absolute left-[80%] top-[1475px] flex flex-col items-center" >
          <span id="cs22" className=" text-[#1E1E1E] border-[#1E1E1E] relative border-[3px] py-2 px-6" >About CS22A</span>
          </div>
        </div>
        <header className={`navbar w-full z-50 ${scrolled ? "bg-[#1E1E1E] h-12" : "bg-[black]/20 h-16 backdrop-blur-sm"} sticky top-0 left-0 z-10`}> 
        <Navbar isBlog={true} ></Navbar>
      </header>
      <section className="h-[110vh] translate-y-[-65px] w-full overflow-hidden z-50 skew-y-3 origin-top-right">
        <HomePage></HomePage>
      </section>
      <div id="aboutPage" className="h-[190vh] w-full relative" >
        <About/>
      </div>
      <div id="infoPage" className="h-[100vh] w-full relative z-40 overflow-hidden -skew-y-3 grid place-items-center bg-[#008DDA] " >
        <Image className="absolute h-auto w-auto top-[-70px] left-0" src={Camera} alt="..." width={600} height={600} ></Image>
        <Image className="absolute h-auto w-auto top-[-140px] right-0" src={Facebook} alt="..." width={600} height={600} ></Image>
        <Info/>
      </div>
      <div id="eventPage" >
        <Event></Event>
      </div>
      <span id="member" className="absolute z-10 bg-[#F6F6F6] left-1/2 translate-x-[-35px] top-[7700px] text-[#1E1E1E] border-[#1E1E1E] border-[3px] py-2 px-6" >TEAM MEMBERS</span>
      <div className="h-[200vh] w-full mt-10 origin-top-right overflow-hidden skew-y-3" >
      <Member></Member>
      </div>
      
      <span id="feedback" className="absolute bg-[#F6F6F6] left-1/2 translate-x-[-5px] top-[9600px] text-[#1E1E1E] border-[#1E1E1E] border-[3px] py-2 px-6" >FEEDBACK</span>
      <div id="feedbackPage" className="h-[100vh] w-full mt-52" >
        <Feedback></Feedback>
      </div>
      
      <span id="thank" className="absolute bg-[#F6F6F6] left-1/2 translate-x-[-10px] top-[10300px] text-[#1E1E1E] rounded-full border-[#1E1E1E] border-[3px] py-2 px-6" >THANK YOU</span>
        <div className="absolute bg-[#008DDA] h-[10vh] -bottom-20 w-full" >Footer</div>
      </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    </>
  );
}
