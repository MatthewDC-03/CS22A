"use client"

import Image from 'next/image'
import Link from 'next/link'
import AclcImage from '/public/images/Aclc-Icon-White.svg'
interface ArgType {
    isBlog: any
}
const Navbar: React.FC<ArgType> =({isBlog}) => {
    
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
        <nav className=" h-full w-full text-[#F6F6F6] flex items-center justify-between px-14
                        /* MOBILE RESPONSIVE  */ max-sm:px-2
                        /* TABLET/IPAD RESPONSIVE */ max-lg:px-6
        " >
            <span className='flex items-center gap-2' >
                <Image src={AclcImage} height={40} alt='Aclc Icon' ></Image>
                <span className=" text-2xl max-sm:hidden font-semibold tracking-wider" >CS22A</span>
            </span>
            {
                isBlog ?
                (<div className='flex text-lg max-sm:hidden text-gray-200 items-center justify-center gap-16
                                /* TABLET/IPAD RESPONSIVE */ max-lg:gap-10 max-lg:text-xl
                '>
                <Link href="/"> <span onClick={handleScrollHome} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Home</span></Link>
                <Link href="/" scroll={false} ><span onClick={handleScrollAbout} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >About</span></Link>
                <Link href="/" scroll={false} ><span onClick={handleScrollEvent} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Event</span></Link>
                <Link href="/" scroll={false} ><span onClick={handleScrollInfo} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Info</span></Link>
                <Link href="/Blog"> <span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Blog</span></Link>
                <Link href="/" scroll={false} ><span onClick={handleScrollFeedback} className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Feedback</span></Link>
                
                </div>)
                :
                (<div></div>)
            }
    </nav>
    )
}
export default Navbar