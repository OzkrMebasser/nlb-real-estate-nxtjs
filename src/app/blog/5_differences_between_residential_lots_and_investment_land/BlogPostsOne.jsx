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
        p4_strong={
          language === es
            ? es.blog_info.post_1.p4_strong
            : en.blog_info.post_1.p4_strong
        }
        subTitle1={
          language === es
            ? es.blog_info.post_1.subTitle1
            : en.blog_info.post_1.subTitle1
        }
        subTitle2={
          language === es
            ? es.blog_info.post_1.subTitle2
            : en.blog_info.post_1.subTitle2
        }
        subTitle3={
          language === es
            ? es.blog_info.post_1.subTitle3
            : en.blog_info.post_1.subTitle3
        }
        subTitle4={
          language === es
            ? es.blog_info.post_1.subTitle4
            : en.blog_info.post_1.subTitle4
        }

        subTitle5={
          language === es
            ? es.blog_info.post_1.subTitle5
            : en.blog_info.post_1.subTitle5
        }
        // subTitle6={
        //   language === es
        // }
        p5={language === es ? es.blog_info.post_1.p5 : en.blog_info.post_1.p5}
        p6={language === es ? es.blog_info.post_1.p6 : en.blog_info.post_1.p6}
        p7={language === es ? es.blog_info.post_1.p7 : en.blog_info.post_1.p7}
        image2="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2FRESIDENCIAL.jpeg?alt=media&token=6f3c17f4-3abc-4389-9ed1-7e7b7e206e77&_gl=1*7pas6b*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5OTE2MTg3NC42OS4xLjE2OTkxNjIxMjIuNjAuMC4w"
        p8={language === es ? es.blog_info.post_1.p8 : en.blog_info.post_1.p8}
        image3="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2FLOTE%20INVERSION.jpg?alt=media&token=fe80ebf6-2ebe-416a-a73a-689f21869b4b&_gl=1*1ygre97*_ga*MTkyOTMxODgzNC4xNjgyMDkxNDc2*_ga_CW55HF8NVT*MTY5OTE2MTg3NC42OS4xLjE2OTkxNjIxNDYuMzYuMC4w"
        p11={
          language === es ? es.blog_info.post_1.p11 : en.blog_info.post_1.p11
        }
        p12={
          language === es ? es.blog_info.post_1.p12 : en.blog_info.post_1.p12
        }
        p13={
          language === es ? es.blog_info.post_1.p13 : en.blog_info.post_1.p13
        }
        p14={
          language === es ? es.blog_info.post_1.p14 : en.blog_info.post_1.p14
        }
        p15={
          language === es ? es.blog_info.post_1.p15 : en.blog_info.post_1.p15
        }
        p16={
          language === es ? es.blog_info.post_1.p16 : en.blog_info.post_1.p16
        }
        p17={
          language === es ? es.blog_info.post_1.p17 : en.blog_info.post_1.p17
        }
        p18={
          language === es ? es.blog_info.post_1.p18 : en.blog_info.post_1.p18
        }
        p19={
          language === es ? es.blog_info.post_1.p19 : en.blog_info.post_1.p19
        }
        image4="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2FGastosdemantto.jpeg?alt=media&token=7cdaae4e-0303-492f-94ce-80f3d4ac654b"

        p20={
          language === es ? es.blog_info.post_1.p20 : en.blog_info.post_1.p20
        }
        p21={
          language === es ? es.blog_info.post_1.p21 : en.blog_info.post_1.p21
        }
        p22_strong={
          language === es ? es.blog_info.post_1.p22_strong : en.blog_info.post_1.p22_strong
        }
        p22={
          language === es ? es.blog_info.post_1.p22 : en.blog_info.post_1.p22
        }
        p23={
          language === es ? es.blog_info.post_1.p23 : en.blog_info.post_1.p23
        }
        
        image5="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fpost-1%2FdolaresInversion.jpeg?alt=media&token=a2f54135-3439-42b1-a95c-d4cf42d37d9e"
       
        p24_strong={
          language === es ? es.blog_info.post_1.p24_strong : en.blog_info.post_1.p24_strong
        }
        p24={
          language === es ? es.blog_info.post_1.p24 : en.blog_info.post_1.p24
        }
       
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default BlogPostsOne;
