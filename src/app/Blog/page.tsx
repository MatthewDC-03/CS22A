"use client"
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar"
import Loading from "../loading"
import BlogData from "../../json/blogData.json"
import { useRouter } from "next/navigation";
import Image from "next/image";
/* import P from "../Blog/id" */
import BlogImage from "../../../public/images/DummyImage/blog.jpg"

const Blog = () => {
  const router = useRouter()
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
    const handleClick = (blogId: string)=>{
    router.push(`/Blog/${blogId}`)
    }
    return (
        <>
        <Loading/>
        <div>
            <header className={`navbar w-full z-50 ${scrolled ? "bg-[#1E1E1E] h-12" : "bg-[#1E1E1E] h-16"} sticky top-0 left-0 z-10`}> 
            <Navbar isBlog={false} ></Navbar>
            </header>
            <div className="w-full h-fit gap-y-[100px] grid grid-cols-3 mt-10 place-items-center" >
              {
                BlogData.map((item)=>{
                  return (
                    <div
 key={item.id} className="group flex flex-col justify-start items-start gap-2 w-96 h-fit duration-500 relative rounded-lg p-4 bg-gray-200 hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
>
  <div
    className="absolute duration-700 overflow-hidden shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200"
  >

<Image src={BlogImage} className="w-full h-full" width={1000} height={1000} alt="..." ></Image>

  </div>

  <div className="">
    <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.heading}</h2>
    <p className="text-gray-700 line-clamp-3">
      {item.paragraph}
    </p>
  </div>
  <button
  onClick={()=>handleClick(item.blogId)}
    className="border-2 border-[#1E1E1E] text-[#1E1E1E] hover:border-[#008DDA] hover:text-[#008DDA] mt-6 rounded p-2 px-6"
  >
    Read More
  </button>
</div>

                  )
                })
              }
            </div>
              <div className="h-[10vh]" ></div>
        </div>
        </>
    )
}

export default Blog