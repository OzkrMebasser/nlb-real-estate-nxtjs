"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import PostsComponent from "../../components/Posts/PostsComponent";


const BlogPostsOne = (props) => {
  const { language } = useLanguage();

  return (
    <div className="max-w-screen-xl mx-auto" id="question-9">
      <PostsComponent
        title={
          language === es
            ? es.blog_info.post_1.title
            : en.blog_info.post_1.title
        }
        main_image="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2Fciudad.jpeg?alt=media&token=39d97978-e361-4abe-9e37-822fc7b14747&_gl=1*i9od7t*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5OTE2MTg3NC42OS4xLjE2OTkxNjIwNTIuNjAuMC4w"
        cap_letter_p1={
          language === es
            ? es.blog_info.post_1.cap_letter_p1
            : en.blog_info.post_1.cap_letter_p1
        }
        p1={language === es ? es.blog_info.post_1.p1 : en.blog_info.post_1.p1}
        p2={language === es ? es.blog_info.post_1.p2 : en.blog_info.post_1.p2}
        p3={language === es ? es.blog_info.post_1.p3 : en.blog_info.post_1.p3}
        p4={language === es ? es.blog_info.post_1.p4 : en.blog_info.post_1.p4}
        p4_strong={language === es ? es.blog_info.post_1.p4_strong : en.blog_info.post_1.p4_strong}
        subTitle1={language === es ? es.blog_info.post_1.subTitle1 : en.blog_info.post_1.subTitle1}
        subTitle2={language === es ? es.blog_info.post_1.subTitle2 : en.blog_info.post_1.subTitle2}
        p5={language === es ? es.blog_info.post_1.p5 : en.blog_info.post_1.p5}
        p6={language === es ? es.blog_info.post_1.p6 : en.blog_info.post_1.p6}
        p7={language === es ? es.blog_info.post_1.p7 : en.blog_info.post_1.p7}
        image2="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2FRESIDENCIAL.jpeg?alt=media&token=6f3c17f4-3abc-4389-9ed1-7e7b7e206e77&_gl=1*7pas6b*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5OTE2MTg3NC42OS4xLjE2OTkxNjIxMjIuNjAuMC4w"
        p8={language === es ? es.blog_info.post_1.p8 : en.blog_info.post_1.p8}
        image3="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2FLOTE%20INVERSION.jpg?alt=media&token=fe80ebf6-2ebe-416a-a73a-689f21869b4b&_gl=1*1ygre97*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5OTE2MTg3NC42OS4xLjE2OTkxNjIxNDYuMzYuMC4w"
       p11={language === es ? es.blog_info.post_1.p11 : en.blog_info.post_1.p11}
        // image2="https://images.pexels.com/photos/3717293/pexels-photo-3717293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // image3="https://images.pexels.com/photos/3717293/pexels-photo-3717293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // image4="https://images.pexels.com/photos/7203819/pexels-photo-7203819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // image5="https://images.pexels.com/photos/7078691/pexels-photo-7078691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default BlogPostsOne;
