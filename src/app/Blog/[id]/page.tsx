"use client";
import { useEffect, useState } from "react";
import BlogData from "../../../json/blogData.json";
import Navbar from "../../../components/Navbar/navbar";
import Loading from "../../loading"

const MyBlog = ({ params }: { params: { id: string } }) => {
    const [scrolled, setScrolled] = useState(false);
  const [description, setDescription] = useState({
    heading: "",
    paragraph: "",
  });
  useEffect(() => {
      BlogData.map((item) => {
          if (item.blogId === params.id) {
              setDescription({ heading: item.heading, paragraph: item.paragraph });
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
        <Navbar isBlog={false}></Navbar>
      </header>
      <div>
        <h1>Blog</h1>
        <h3 className="text-blue-500">{description.heading}</h3>
        <p>{description.paragraph}</p>
      </div>
    </>
  );
};

export default MyBlog;
