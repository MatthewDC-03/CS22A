"use client"

import Image from 'next/image'
import Link from 'next/link'
import AclcImage from '/public/images/Aclc-Icon-White.svg'
interface ArgType {
    isBlog: any
}
const Navbar: React.FC<ArgType> =({isBlog}) => {

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
        <nav className="h-full w-full text-[#F6F6F6] flex items-center justify-between px-14" >
            <Link href="/">
            <span className='flex items-center gap-2' >
                <Image src={AclcImage} height={40} alt='Aclc Icon' ></Image>
                <span className=" text-2xl font-semibold tracking-wider" >CS22A</span>
            </span>
            </Link>
            {
                isBlog ?
                (<div className='flex text-lg text-gray-200 items-center justify-center gap-16'>
                <Link href="#" scroll={false} ><span onClick={handleScrollAbout} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >About</span></Link>
                <Link href="#" scroll={false} ><span onClick={handleScrollInfo} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Info</span></Link>
                <Link href="#" scroll={false} ><span onClick={handleScrollEvent} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Event</span></Link>
                <Link href="/Blog"> <span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Blog</span></Link>
                <Link href="#" scroll={false} ><span onClick={handleScrollFeedback} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Feedback</span></Link>
                
                </div>)
                :
                (<div></div>)
            }
            <button className="overflow-hidden w-24 p-2 h-9 bg-[#F6F6F6] text-[#1E1E1E] border-none rounded-md text-lg font-medium cursor-pointer relative z-10 flex items-center justify-center group">Login
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span className="group-hover:opacity-100 group-hover:text-[#F6F6F6] group-hover:duration-1000 duration-100 opacity-0 absolute top-1 left-6 z-10">Login</span>
            </button>

    </nav>
    )
}
export default Navbar