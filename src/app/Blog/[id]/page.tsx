"use client";
import { useEffect, useState } from "react";
import BlogData from "../../../json/blogData.json";
import Navbar from "../../../components/Navbar/navbar";
import Loading from "../../loading"
import Image from "next/image";
import Link from "next/link";
import AclcImage from '/public/images/Aclc-Icon-White.svg';

const BlogNavbar = () => {

  return  (
  <nav className="h-full w-full text-[#F6F6F6] flex items-center justify-between px-14" >
            <span className='flex items-center gap-2' >
                <Image src={AclcImage} height={40} alt='Aclc Icon' ></Image>
                <span className=" text-2xl font-semibold tracking-wider" >CS22A</span>
            </span>
                <div className='flex text-lg text-gray-200 items-center justify-center gap-16'>
                <Link href="/"> <span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Home</span></Link>
                <Link href="/#aboutPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >About</span></Link>
                <Link href="/#infoPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Info</span></Link>
                <Link href="/#eventPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Event</span></Link>
                <Link href="/Blog"> <span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Blog</span></Link>
                <Link href="/#feedbackPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]" >Feedback</span></Link>
                
                </div>
            <button className="overflow-hidden w-24 p-2 h-9 bg-[#F6F6F6] text-[#1E1E1E] border-none rounded-md text-lg font-medium cursor-pointer relative z-10 flex items-center justify-center group">Login
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span className="group-hover:opacity-100 group-hover:text-[#F6F6F6] group-hover:duration-1000 duration-100 opacity-0 absolute top-1 left-6 z-10">Login</span>
            </button>

    </nav>
    )
};

const MyBlog = ({ params }: { params: { id: string } }) => {
    const [scrolled, setScrolled] = useState(false);
  const [description, setDescription] = useState({
    heading: "",
    paragraph: "",
    created: "",
    createdLink: "",
    creatorHeadings: "",
    creatorParagraphs: "",
    image: "",
    headingTwo: "",
    paragraphTwo: ""
  });
  useEffect(() => {
      BlogData.map((item) => {
          if (item.blogId === params.id) {
              setDescription({ 
                heading: item.heading1, 
                paragraph: item.paragraph1, 
                created: item.creteBy, 
                image: item.link, 
                createdLink: item.createdByLink, 
                creatorHeadings: item.creatorHeading, 
                creatorParagraphs: item.creatorParagraph,
                headingTwo: item.heading2,
                paragraphTwo: item.paragraph2
               });
            }
        });
        const handScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition > 0) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
          window.addEventListener("scroll", handScroll);
    },[]);
  return (
    <>
    <Loading/>
      <header
        className={`navbar w-full z-50 ${
          scrolled ? "bg-[#1E1E1E] h-12" : "bg-[#1E1E1E] h-16"
        } sticky top-0 left-0 z-10`}
      >
        <BlogNavbar/>
      </header>
      <div className="py-[40px] pl-[40px] pr-[20px] w-full h-full flex flex-row lg:gap-3 xl:gap-5" >
        <div className="w-3/4 flex flex-col lg:gap-5 xl:gap-10 justify-center items-center" >
        <h3 className=" font-extrabold lg:text-4xl xl:text-5xl text-start w-full text-[#1E1E1E]">{description.heading}</h3>
        <span className="xl:text-lg lg:text-base text-[#313a4b] text-start w-full" >{description.created}</span>
        <p className="font-base leading-[35px] lg:text-xl xl:text-2xl text-[#313a4b] pr-10" >{description.paragraph}</p>
        <Image width={600} height={600} alt="..." src={`/${description.image}`}  ></Image>
        <h3 className=" font-extrabold lg:text-3xl xl:text-4xl text-start w-full text-[#1E1E1E]">{description.headingTwo}</h3>
        <p className="font-base leading-[35px] lg:text-xl xl:text-2xl text-[#313a4b] pr-10" >{description.paragraphTwo}</p>
        </div >
        <div className="w-1/4 h-fit flex flex-col items-center py-10 lg:gap-5 xl:gap-10" >
          <Image src={`/${description.createdLink}`} className="rounded-full aspect-square object-center object-cover" width={250} height={250} alt="..."></Image>
          <h3 className="xl:text-3xl lg:text-xl font-extrabold w-full text-start" >{description.creatorHeadings}</h3>
          <p className="w-full font-base h-fit xl:text-xl lg:text-lg leading-[35px]" >{description.creatorParagraphs}</p>
        </div>
      </div>
    </>
  );
};

export default MyBlog;
