"use client";
import { useEffect, useState } from "react";
import BlogData from "../../../json/blogData.json";
import Footer from "../../../components/Footer/footer"
import Loading from "../../loading"
import Image from "next/image";
import Link from "next/link";
import AclcImage from '/public/images/Aclc-Icon-White.svg';

const BlogNavbar = () => {

  return  (
  <nav className="h-full w-full text-[#F6F6F6] flex items-center justify-between px-14
                /* << TABLET/IPAD RESPONSIVE */ max-lg:justify-start max-lg:px-2
  " >
            <span className='flex items-center gap-2' >
                <Image src={AclcImage} height={40} alt='Aclc Icon' ></Image>
                <span className=" text-2xl font-semibold tracking-wider" >CS22A</span>
            </span>
                <div className='flex text-lg text-gray-200 items-center justify-center gap-16'>
                <Link href="/"> <span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]
                                                /* << TABLET/IPAD RESPONSIVE */ max-lg:hidden
                " >Home</span></Link>
                <Link href="/#aboutPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]
                                                            /* << TABLET/IPAD RESPONSIVE */ max-lg:hidden
                " >About</span></Link>
                <Link href="/#eventPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]
                                                            /* << TABLET/IPAD RESPONSIVE */ max-lg:hidden
                " >Event</span></Link>
                <Link href="/#infoPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]
                                                            /* << TABLET/IPAD RESPONSIVE */ max-lg:hidden
                " >Info</span></Link>
                <Link href="/Blog"> <span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]
                                                            /* << TABLET/IPAD RESPONSIVE */ max-lg:hidden
                " >Blog</span></Link>
                <Link href="/#feedbackPage" ><span className=" ease-out h-fit relative w-fit flex items-center justify-center duration-500 before:content-[''] before:pointer-events-none before:absolute before:w-0 before:h-[3px] before:rounded-md before:bottom-0 before:bg-[#F6F6F6] hover:before:w-full transition-[width,left] before:duration-500 hover:text-[#F6F6F6]
                                                            /* << TABLET/IPAD RESPONSIVE */ max-lg:hidden
                " >Feedback</span></Link>
                
                </div>

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
    imageTwo: "",
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
                imageTwo: item.link2, 
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
      <div>
      <div className="py-[40px] pl-[40px] pr-[20px] w-full h-full flex flex-row
                    /* << TABLET/IPAD RESPONSIVE */ max-lg:flex-col max-lg:pl-2 max-lg:py-10 max-lg:pr-2
      " >
        <div className="w-3/4 flex flex-col gap-4 justify-center items-center 
                      /* << TABLET/IPAD RESPONSIVE */ max-lg:w-full max-lg:gap-6 max-lg:px-0
        " >
        <h3 className=" font-extrabold text-start w-full text-[#1E1E1E]
                        /* << TABLET/IPAD RESPONSIVE */ max-lg:text-center max-lg:text-xl
        ">{description.heading}</h3>
        <span className="text-[#313a4b] text-start w-full
                          /* << TABLET/IPAD RESPONSIVE */ max-lg:text-xs max-lg:text-center max-lg:w-fit
        " >{description.created}</span>
        <p className="font-base leading-7 whitespace-pre-line text-[#313a4b] pr-10
                    /* << MOBILE RESPONSIVE  */ max-sm:leading-6
                    /* << TABLET/IPAD RESPONSIVE */ max-lg:leading-8 max-lg:text-lg max-lg:text-justify max-lg:pr-0
                    /* LAPTOP RESPONSIVE */ max-xl:leading-7
        " >{description.paragraph}</p>
        <Image width={600} height={600} alt="..." src={`/${description.image}`}  ></Image>
        <h3 className=" font-extrabold lg:text-3xl xl:text-4xl text-start w-full text-[#1E1E1E]
                        /* << TABLET/IPAD RESPONSIVE */ max-lg:text-center max-lg:text-xl
        ">{description.headingTwo}</h3>
        <p className="font-base leading-7 whitespace-pre-line text-[#313a4b] pr-10
                    /* << MOBILE RESPONSIVE  */ max-sm:leading-6
                    /* << TABLET/IPAD RESPONSIVE */ max-lg:leading-8 max-lg:text-lg max-lg:text-justify max-lg:pr-0
                    /* LAPTOP RESPONSIVE */ max-xl:leading-7
                    " >{description.paragraphTwo}</p>
        {
          description.imageTwo !== "" && <Image width={600} height={600} alt="..." src={`/${description.imageTwo}`}  ></Image>
        }
        </div >
        <div className="w-1/4 h-fit flex flex-col items-center py-10 lg:gap-5
                        /* << TABLET/IPAD RESPONSIVE */ max-lg:w-full max-lg:py-0 max-lg:gap-4 max-lg:px-2
        " >
          <Image src={`/${description.createdLink}`} className="rounded-full aspect-square object-center object-cover" width={250} height={250} alt="..."></Image>
          <h3 className="font-extrabold w-full text-start
                        /* << TABLET/IPAD RESPONSIVE */ max-lg:text-center
          " >{description.creatorHeadings}</h3>
          <p className="w-full font-base h-fit leading-7
                    /* << MOBILE RESPONSIVE  */ max-sm:leading-6
                      /* << TABLET/IPAD RESPONSIVE */ max-lg:leading-8 max-lg:text-justify
                    /* LAPTOP RESPONSIVE */ max-xl:leading-7
          " >{description.creatorParagraphs}</p>
        </div>
      </div>
        <Footer showNewsletter={false} />
      </div>
    </>
  );
};

export default MyBlog;
