"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import { usePosts } from "../../context/PostsProvider";


import ScrollToSection from "../components/ScrollToSection/ScrollToSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";




const Blog = (props) => {
  const {posts} = usePosts();
  const { language } = useLanguage();

  return (
    <>
      <header className="mt-[6rem]">
        <h2 className="uppercase text-2xl mb-4 font-bold leading-tight text-[#9c8966] sm:text-4xl text-center">
          {/* OUR BLOG */}
          {language === es ? es.blog_info.subtitle : en.blog_info.subtitle}
        </h2>
      </header>

      <div className="max-w-screen-xl mx-auto divide-y ">
        <div className=" pl-4 pr-4 font-bold leading-tight text-[#9c8966af]  sm:pl-[300px] text-justify">
          {posts.map((question, num) =>
             <ScrollToSection
             key={num}
             questionNum={question.questionNum}
             num={question.num}
             completeQuestion={question.completeQuestion}
           />
          )}



        </div>
        <ScrollToTop />
        
      </div>
    </>
  );
};

export default Blog;
