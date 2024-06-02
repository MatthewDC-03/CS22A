"use client"

/* Imports */
import Image from "next/image"
import Link from "next/link"

/* Import Image */
import AclcImage from '/public/images/Aclc-Icon-White.svg'
import Tiktok from "../../../public/images/Icon/Tiktok.svg"
import Facebook from "../../../public/images/Icon/Facebook.svg"
import Instagram from "../../../public/images/Icon/Instagram.svg"
import CS22A from "../../../public/images/HomepagePhotos/OurSection.svg"

export interface NewsletterType {
    isNewsletter: boolean
}

const Footer = ({isNewsletter}: NewsletterType) => {

    const handleScrollHome = ()=>{
        document.getElementById("homePage")?.scrollIntoView()
    }
    const handleScrollAbout = ()=>{
        document.getElementById("aboutPage")?.scrollIntoView()
    }
    const handleScrollInfo = ()=>{
        document.getElementById("infoPage")?.scrollIntoView()
    }
    const handleScrollEvent = ()=>{
        document.getElementById("eventPage")?.scrollIntoView()
    }
    const handleScrollFeedback = ()=>{
        document.getElementById("feedbackPage")?.scrollIntoView()
    }

    return (
        <div className="w-full h-fit relative" >
        {
            isNewsletter && <>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-lg shadow-2xl w-3/4 z-10 h-[420px]" >
            <div className="h-full w-full text-[#F6F6F6] z-50 p-10 flex flex-col justify-center items-center gap-5" >
                <h1 className=" uppercase text-5xl font-bold w-fit" >subscribe to our newsletter!</h1>
                <p className="text-center" >Stay updated with the latest from CS22A! Subscribe to our newsletter for insights, course highlights, and important announcements. Be the first to know about guest speaker sessions, hands-on coding tips, and study group activities. Join our community and stay informed on all things CS22A. Subscribe now!</p>
                <input type="email" placeholder="Email" className="w-full h-10 px-4 py-3 text-[#1E1E1E] border-none outline-none rounded-sm" />
                <button type="submit" className="bg-[#008DDA] px-10 py-3 rounded-sm text-lg" >Subscribe</button>
            </div>
            <div className="absolute left-0 brightness-50 -z-10 top-0 h-full rounded-lg overflow-hidden shadow-2xl w-full" >
                <Image src={CS22A} alt="..."  className="w-full h-full object-cover object-center" width={500} height={500} ></Image>
            </div>
        </div>
        <div className="w-full h-[340px]" ></div>
            </>
        }
        <footer className="py-10 relative px-10 bg-[#008DDA] flex flex-col gap-7">
        <div className={`w-full ${isNewsletter && "mt-20"} h-fit text-[#F6F6F6] overflow-x-hidden grid grid-cols-4 gap-x-7`} >
            {/* Section #1 */}
            <div className="w-62" >
                <div className="flex items-center" >
                <Image src={AclcImage} height={50} alt='Aclc Icon' ></Image>
                <span className=" text-3xl font-bold tracking-wider" >CS22A</span>
                </div>
                <h1 className="text-xs mt-3" >your tech hub for coding insights and innovations. Join our community and explore the latest in computer science. Let's code the future together!</h1>
            </div>
            {/* Section #2 */}
            <div className="flex w-62 flex-col justify-between" >
                <h1 className=" font-black tracking-wide text-xl text-center" >Services</h1>
                <div className="flex gap-7 text-lg justify-center items-start h-full mt-3" >
                    <div className="flex flex-col" >
                    <Link href="/#homePage"><span onClick={handleScrollHome} className=" cursor-pointer" >Home</span></Link>
                    <Link href="/#eventPage"><span onClick={handleScrollEvent} className=" cursor-pointer" >Event</span></Link>
                    <Link href="/Blog"><span className=" cursor-pointer" >Blog</span></Link>
                    </div>
                    <div className="flex flex-col" >
                    <Link href="/#aboutPage"><span onClick={handleScrollAbout} className=" cursor-pointer" >About</span></Link>
                    <Link href="/#infoPage"><span onClick={handleScrollInfo} className=" cursor-pointer" >Info</span></Link>
                    <Link href="/#feedbackPage"><span onClick={handleScrollFeedback} className=" cursor-pointer" >Feedback</span></Link>
                    </div>
                </div>
            </div>
            {/* Section #3 */}
            <div className="flex flex-col w-62 justify-between" >
            <h1 className=" font-semibold tracking-wide text-xl text-center" >Contact Us</h1>
            <div className="flex flex-col h-full justify-start mt-3" >
            <h2><u>theonesama03@gmail.com</u></h2>
            <h2>+639458280029</h2>
            </div>
            </div>

            {/* Section #4 */}
            <div className="w-62 flex flex-col justify-between" >
            <h1 className=" font-black tracking-wide text-xl text-center" >Follow Us</h1>
            <div className=" flex h-full py-5 justify-center    items-start" >
            <a href="#"><Image src={Tiktok} alt="Tiktok" width={40} height={40} style={{filter: "brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(319%) hue-rotate(282deg) brightness(120%) contrast(93%)"}} ></Image></a>
            <a href="#"><Image src={Facebook} alt="Tiktok" width={40} height={40} style={{filter: "brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(319%) hue-rotate(282deg) brightness(120%) contrast(93%)"}} ></Image></a>
            <a href="#"><Image src={Instagram} alt="Tiktok" width={40} height={40} style={{filter: "brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(319%) hue-rotate(282deg) brightness(120%) contrast(93%)"}} ></Image></a>
            </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-6 items-center">
        <hr className="w-full z-50 h-[2px] bg-[#F6F6F6] border-none" />
        <p className="text-xs text-[#F6F6F6]" >© 2024 localhost:3000 | All right reserved.</p>
        </div>
        </footer>
        </div>
    )
}

export default Footer