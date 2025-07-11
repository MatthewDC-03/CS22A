"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react"; // Add useEffect import
import { useRef } from "react";
import Video from "next-video";
import Video1 from "Video.mp4";
import Basketball from "../../../public/images/Icon/Baskitball.svg";
import Volleyball from "../../../public/images/EventPhotos/Volleyball/Volleyball_Icon.svg";

/* Images */
/* Basketball Photos */
import Photo1 from "../../../public/images/EventPhotos/Basketball/Photo1.svg";
import Photo2 from "../../../public/images/EventPhotos/Basketball/Photo2.svg";
import Photo3 from "../../../public/images/EventPhotos/Basketball/Photo3.svg";
import Photo4 from "../../../public/images/EventPhotos/Basketball/Photo4.svg";

/* Volleyball Photos */
import Photo5 from "../../../public/images/EventPhotos/Volleyball/Photo1.jpg";
import Photo6 from "../../../public/images/EventPhotos/Volleyball/Photo2.jpg";
import Photo7 from "../../../public/images/EventPhotos/Volleyball/Photo3.jpg";
import Photo8 from "../../../public/images/EventPhotos/Volleyball/Photo4.jpg";

import Spline from "@splinetool/react-spline";

/* Data */

const Event = () => {
  const eventContainer = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define animations for different screen sizes using matchMedia
    const mm = gsap.matchMedia();

    mm.add("(max-width: 900px)", () => {
      // Mobile-specific animations
      gsap.to("#img1", {
        scale: 0.5,
        rotate: "15deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "10% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img2", {
        scale: 0.5,
        rotate: "-15deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "20% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img3", {
        scale: 0.5,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "30% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img4", {
        scale: 0.5,
        rotate: "20deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "40% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img5", {
        scale: 0.5,
        rotate: "-15deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "60% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img6", {
        scale: 0.5,
        rotate: "25deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "70% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img7", {
        scale: 0.5,
        rotate: "-20deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "80% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img8", {
        scale: 0.5,
        rotate: "8deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "90% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
    });
    mm.add("(max-width: 500px)", () => {
      // Mobile-specific animations
      gsap.to("#img1", {
        scale: 0.8,
        rotate: "15deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "10% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img2", {
        scale: 0.8,
        rotate: "-15deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "20% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img3", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "30% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img4", {
        scale: 0.8,
        rotate: "20deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "40% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img5", {
        scale: 0.8,
        rotate: "-15deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "60% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img6", {
        scale: 0.8,
        rotate: "25deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "70% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img7", {
        scale: 0.8,
        rotate: "-20deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "80% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img8", {
        scale: 0.8,
        rotate: "8deg",
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "90% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
    });

    mm.add("(min-width: 901px)", () => {
      // Desktop-specific animations
      gsap.to("#img1", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "10% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img2", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "20% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img3", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "30% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img4", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "40% center",
          end: "50% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img5", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "60% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img6", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "70% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img7", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "80% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.to("#img8", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#eventContainer",
          start: "90% center",
          end: "98% center",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });
    });

    const event: any = document.querySelector("#eventContainer");
    /* Variables 4638 */

    /* Start of Gsap */

    /* 3D Pinned */
    gsap.to("#trophyContainer", {
      scrollTrigger: {
        trigger: "#right",
        start: "top 13%",
        end: "90% top",
        markers: false,
        pin: "#trophyContainer",
      },
    });
    /* Text Container */
    gsap.to("#textContainer", {
      scrollTrigger: {
        trigger: "#right",
        start: "top 13%",
        end: "90% top",
        markers: false,
        pin: "#textContainer",
      },
    });

    /* ================================================== */
    /* Image Container */
    gsap.to("#eventImageContainer", {
      scrollTrigger: {
        trigger: "#eventContainer",
        start: "top 13%",
        end: "90% top",
        markers: false,
        pin: "#eventImageContainer",
      },
    });

    /* Basketball Images */

    /* Basketball Paragraphs */
    gsap.to("#paragraph1", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#eventContainer",
        start: "10% center",
        end: "25% center",
        markers: false,
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to("#paragraph2", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#eventContainer",
        start: "30% center",
        end: "50% center",
        markers: false,
        toggleActions: "play reverse play reverse",
      },
    });

    /* Volleyball Images */

    /* Volleyball Paragraphs */
    gsap.to("#paragraph3", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#eventContainer",
        start: "60% center",
        end: "75% center",
        markers: false,
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.to("#paragraph4", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#eventContainer",
        start: "85% center",
        end: "98% center",
        markers: false,
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.set("#basketballContainer", {
      translateX: "-800px", // Default position
    });

    gsap.to("#basketballDiv", {
      filter:
        "brightness(0) saturate(100%) invert(40%) sepia(89%) saturate(2243%) hue-rotate(176deg) brightness(92%) contrast(101%)",
      borderColor: "#008DDA",
      boxShadow: "0 0 15px 1px #008DDA",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#eventContainer",
        start: "top 80%",
        end: "56% 80%",
        markers: false,
        onLeave: () => {
          gsap.to("#basketballContainer", {
            translateX: "-500px", // Move to -translate-x-[500px] when scroll ends
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to("#basketballContainer", {
            translateX: "-500px", // Move to -translate-x-[500px] when scroll ends
            duration: 0.5,
          });
        },
        onEnter: () => {
          gsap.to("#basketballContainer", {
            translateX: "-50%", // Move to center again
            left: "50%",
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to("#basketballContainer", {
            translateX: "-50%", // Move to center again
            left: "50%",
            duration: 0.5,
          });
        },
      },
    });

    gsap.set("#volleyballContainer", {
      translateX: "-800px", // Default position
    });

    gsap.to("#volleyballDiv", {
      filter:
        "brightness(0) saturate(100%) invert(40%) sepia(89%) saturate(2243%) hue-rotate(176deg) brightness(92%) contrast(101%)",
      borderColor: "#008DDA",
      boxShadow: "0 0 15px 1px #008DDA",
      duration: 0.1,
      scrollTrigger: {
        trigger: "#left",
        start: "58% 80%",
        end: "98% 80%",
        markers: false,
        onLeave: () => {
          gsap.to("#volleyballContainer", {
            translateX: "-500px", // Return to default position
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to("#volleyballContainer", {
            translateX: "-500px", // Return to default position
            duration: 0.5,
          });
        },
        onEnter: () => {
          gsap.to("#volleyballContainer", {
            translateX: "-50%", // Move to center again
            left: "50%",
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to("#volleyballContainer", {
            translateX: "-50%", // Move to center again
            left: "50%",
            duration: 0.5,
          });
        },
      },
    });
  }, { scope: eventContainer });
  return (
    <main
      id="eventWrapper"
      className="mt-[100px] w-full h-full max-lg:mt-[25rem]
      "
      ref={eventContainer}
    >
      <div
        id="eventContainer"
        className="w-full relative h-[900vh] overflow-hidden mt-10 flex 
                  /* MOBILE RESPONSIVE */ max-sm:flex-col
                  /* TABLET/IPAD RESPONSIVE */ max-lg:flex-col 
                  
        "
      >
        <div
          id="left"
          className="max-sm:absolute z-10 w-1/2 h-full relative pt-[500px] pl-[60px] 
                                /* MOBILE RESPONSIVE */ max-sm:pt-0 max-sm:pl-0 max-sm:w-full max-sm:h-full
                                /* TABLET\IPAD RESPONSIVE */ max-lg:pt-0 max-lg:pl-0 max-lg:w-full max-lg:h-full
                                
                                
        "
        >
          <div
            id="textContainer"
            className="absolute text-lg font-medium w-full top-0 left-0 flex-col h-[600px] flex justify-center items-center
                                            /* MOBILE RESPONSIVE */ max-sm:text-center max-sm:w-full
                                            /* TABLET/IPAD RESPONSIVE */ max-lg:text-center max-lg:w-full
                                            
          "
          >
            {/* BASKETBALL ICON FOR MOBILE DEVICES */}
            <div
              id="basketballContainer"
              className="absolute bg-[#F6F6F6] rotate-45 top-7
                      /* TABLET/IPAD AND BELOW RESPONSIVE */ max-lg:block
                      /* LAPTOP RESPONSIVE */ max-xl:hidden
                      /* DESKTOP RESPONSIVE */ max-2xl:hidden
      "
            >
              <Image
                id="basketballDiv"
                className="z-10 border-[2px] sm:border-[3px] border-[#1E1E1E] p-2 sm:p-3 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                src={Basketball}
                alt="..."
                width={60}
                height={60}
              ></Image>
            </div>
            {/* VOLEYBALL ICON FOR MOBILE DEVICES */}
            <div
              id="volleyballContainer"
              className="absolute bg-[#F6F6F6] rotate-45 left-1/2 top-7
                      /* TABLET/IPAD AND BELOW RESPONSIVE */ max-lg:block
                      /* LAPTOP RESPONSIVE */ max-xl:hidden
                      /* DESKTOP RESPONSIVE */ max-2xl:hidden
      "
            >
              <Image
                id="volleyballDiv"
                className="z-10 border-[2px] sm:border-[3px] border-[#1E1E1E] p-2 sm:p-3 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                src={Volleyball}
                alt="..."
                width={60}
                height={60}
              ></Image>
            </div>
            {/* Paragraphs Here... */}

            {/* #1 */}
            <div
              id="paragraph1"
              className="absolute opacity-0 translate-x-[-650px] w-full
                                          /* MOBILE RESPONSIVE */ max-sm:px-4
                                          /* LAPTOP RESPONSIVE */ max-xl:px-4
                                          /* DESKTOP RESPONSIVE */ xl:px-4
          "
            >
              <h1
                className=" font-bold text-center text-3xl mb-10
                          /* MOBILE RESPONSIVE */ max-sm:text-xl max-sm:mb-2
                          /* DESKTOP RESPONSIVE */ xl:text-3xl
            "
              >
                Unstoppable Force: Our Basketball Team Wins Big in Intramurals
                2024!
              </h1>
              <p
                className="
                          /* MOBILE RESPONISVE */ max-sm:text-justify max-sm:text-sm
                          /* LAPTOP RESPONSIVE */ max-xl:text-justify xl:text-justify xl:text-xl
                          /* DESKTOP RESPONSIVE */
            "
              >
                Our basketball team dominated the court in the Intramurals 2024
                championship game, securing a decisive victory in a fierce
                battle against the Arctic Wolves, Valiant Cerulean Griffins,
                Green Soaring Falcons, and Red Eagles. Their incredible
                teamwork and relentless drive led to an unforgettable win.
                Congratulations to our champions for their outstanding
                performance and dedication!
              </p>
            </div>

            {/* #2 */}
            <div
              id="paragraph2"
              className="absolute opacity-0 translate-x-[-650px] w-full
                                          /* MOBILE RESPONSIVE */ max-sm:px-4
                                          /* LAPTOP RESPONSIVE */ max-xl:px-4
                                          /* DESKTOP RESPONSIVE */ xl:px-4
                                          "
                                          
            >
              <h1
                className=" font-bold text-center text-3xl mb-10
                          /* MOBILE RESPONSIVE */ max-sm:text-xl max-sm:mb-2 max-sm:mb-2
                          /* DESKTOP RESPONSIVE */ xl:text-3xl"
              >
                Victorious Moment: Our Basketball Team Shines in Intramurals
                2024!
              </h1>
              <p
                className="
                          /* MOBILE RESPONISVE */ max-sm:text-justify max-sm:text-sm
                          /* LAPTOP RESPONSIVE */ max-xl:text-justify
            "
              >
                Our team achieved a remarkable victory in the Intramurals 2024
                championship game, demonstrating exceptional skill and
                determination. Each member of the team played a crucial role,
                showcasing their unique talents and unwavering dedication. Key
                players such as{" "}
                <span className=" font-bold text-[#008DDA]">
                  Raymond Jay Torlao, Juben, Jethro Ortega, Kianne Dave
                  Balderas, Dave and Rogin Nuza Duran
                </span>{" "}
                led the charge, contributing significantly to the team's
                success. Hats off to our champions for their impressive
                performance and hard-earned triumph!
              </p>
            </div>

            {/* #3 */}
            <div
              id="paragraph3"
              className="absolute opacity-0 translate-x-[-650px] w-full
                                          /* MOBILE RESPONSIVE */ max-sm:px-4
                                          /* LAPTOP RESPONSIVE */ max-xl:px-4
                                          /* DESKTOP RESPONSIVE */ xl:px-4"
            >
              <h1
                className=" font-bold text-center text-3xl mb-10
                          /* MOBILE RESPONSIVE */ max-sm:text-xl max-sm:mb-2
                          /* DESKTOP RESPONSIVE */ xl:text-3xl"
              >
                Triumph and Teamwork: Our Volleyball Team Secures First
                Runner-Up in Intramurals 2024
              </h1>
              <p
                className="
                          /* MOBILE RESPONISVE */ max-sm:text-justify max-sm:text-sm
                          /* LAPTOP RESPONSIVE */ max-xl:text-justify
            "
              >
                Our volleyball team had an incredible run in the Intramurals
                2024, showcasing skill, determination, and teamwork. After a
                series of intense matches, we emerged as the first runners-up, a
                testament to our hard work and resilience. Each game was a
                display of our strategic plays and unwavering spirit, pushing us
                closer to victory with every serve, spike, and block. Although
                we fell just short of the championship, our performance was
                nothing short of outstanding, and we take immense pride in our
                accomplishment. This experience has not only strengthened our
                bonds but also set a higher benchmark for future competitions.
              </p>
            </div>

            {/* #4 */}
            <div
              id="paragraph4"
              className="absolute opacity-0 translate-x-[-650px] w-full
                                          /* MOBILE RESPONSIVE */ max-sm:px-4
                                          /* LAPTOP RESPONSIVE */ max-xl:px-4
                                          /* DESKTOP RESPONSIVE */ xl:px-4"
            >
              <h1
                className=" font-bold text-3xl text-center mb-10
                          /* MOBILE RESPONSIVE */ max-sm:text-xl max-sm:mb-2
                          /* DESKTOP RESPONSIVE */ xl:text-3xl
                          "
                          
              >
                Celebrating Success: Volleyball Team Clinches First Runner-Up in
                Intramurals 2024
              </h1>
              <p
                className="
                          /* MOBILE RESPONISVE */ max-sm:text-justify max-sm:text-sm
                          /* LAPTOP RESPONSIVE */ max-xl:text-justify
            "
              >
                Our volleyball team had an incredible run in the Intramurals
                2024, showcasing skill, determination, and teamwork. After a
                series of intense matches, we emerged as the first runners-up, a
                testament to our hard work and resilience. Each game was a
                display of our strategic plays and unwavering spirit, pushing us
                closer to victory with every serve, spike, and block. Although
                we fell just short of the championship, our performance was
                nothing short of outstanding, and we take immense pride in our
                accomplishment. This experience has not only strengthened our
                bonds but also set a higher benchmark for future competitions.
              </p>
            </div>
          </div>
        </div>
        <div
          id="right"
          className="w-1/2 h-full relative 
                  /* MOBILE RESPONSIVE */  max-sm:absolute max-sm:w-full max-sm:h-full
                  /* TABLET/IPAD RESPONSIVE */ max-lg:absolute max-lg:w-full max-lg:h-full
          "
        >
          {/* 3D Trophy */}
          <div
            id="trophyContainer"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px]
                        /* MOBILE RESPONSIVE */ max-sm:scale-[0.5] max-sm:w-[600px] max-sm:h-[600px] max-sm:blur-sm max-sm:rotate-[-15deg] max-sm:opacity-50
                        /* TABLET/IPAD RESPONSIVE */ max-lg:scale-[0.7] max-lg:w-[600px] max-lg:h-[600px] max-lg:blur-sm max-lg:rotate-[-15deg] max-lg:opacity-50"
          >
            <Spline scene="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode"></Spline>
          </div>
          <div
            id="eventImageContainer"
            className="absolute max-sm:scale-50 scale-1 w-full top-0 left-0 flex-col h-[600px] flex justify-center items-center"
          >
            {/* PHotos Here... */}
            <Image
              id="img1"
              src={Photo1}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl left-[10px] top-[50px]
                        /* MOBILE RESPONSIVE */ max-sm:-top-[400px] max-sm:-left-[170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:-top-[150px] max-lg:-left-[20px] max-lg:opacity-[85%]
          "
            ></Image>
            <Image
              id="img2"
              src={Photo3}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl right-[10px] top-[180px]
                        /* MOBILE RESPONSIVE */ max-sm:top-[500px] max-sm:left-[170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:top-[300px] max-lg:left-[500px] max-lg:opacity-[85%]
                        "
            ></Image>
            <Image
              id="img3"
              src={Photo2}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl right-[150px] top-[10px]
                        /* MOBILE RESPONSIVE */ max-sm:-top-[350px] max-sm:left-[170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:-top-[30px] max-lg:left-[450px] max-lg:opacity-[85%]
                        "
            ></Image>
            <Image
              id="img4"
              src={Photo4}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl left-[100px] top-[190px]
                        /* MOBILE RESPONSIVE */ max-sm:top-[580px] max-sm:-left-[170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:top-[280px] max-lg:-left-[10px] max-lg:opacity-[85%]
                        "
            ></Image>

            <Image
              id="img5"
              src={Photo5}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl left-[10px] top-[50px]
                        /* MOBILE RESPONSIVE */ max-sm:top-[650px] max-sm:left-[170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:top-[450px] max-lg:left-[480px] max-lg:opacity-[85%]
              "
            ></Image>
            <Image
              id="img6"
              src={Photo6}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl right-[10px] top-[180px]
                        /* MOBILE RESPONSIVE */ max-sm:top-[-400px] max-sm:left-[-170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:top-[-150px] max-lg:left-[-50px] max-lg:opacity-[85%]
              "
            ></Image>
            <Image
              id="img7"
              src={Photo7}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl right-[150px] top-[10px]
                        /* MOBILE RESPONSIVE */ max-sm:-top-[350px] max-sm:left-[170px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:-top-[130px] max-lg:left-[460px] max-lg:opacity-[85%]
              "
            ></Image>
            <Image
              id="img8"
              src={Photo8}
              width={300}
              height={300}
              alt="..."
              className="rounded-sm scale-0 absolute shadow-xl left-[100px] top-[190px]
                        /* MOBILE RESPONSIVE */ max-sm:top-[500px] max-sm:-left-[150px] max-sm:opacity-[85%]
                        /* TABLET/IPAD RESPONSIVE */ max-lg:top-[320px] max-lg:-left-[50px] max-lg:opacity-[85%]
              "
            ></Image>
          </div>
        </div>
      </div>
      {/* Script */}
      <script src="https://prod.spline.design/5vG7OCMJUKlG9K0H/scene.splinecode"></script>
    </main>
  );
};

export default Event;
