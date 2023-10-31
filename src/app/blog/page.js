"use client";
import { usePosts } from "../../context/PostsProvider";


import ScrollToSection from "../components/ScrollToSection/ScrollToSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";




const Blog = (props) => {
  const {posts} = usePosts();

  return (
    <>
      <header className="mt-[6rem]">
        <h2 className="text-2xl mb-4 font-bold leading-tight text-[#9c8966] sm:text-4xl text-center">
          OUR BLOG
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
