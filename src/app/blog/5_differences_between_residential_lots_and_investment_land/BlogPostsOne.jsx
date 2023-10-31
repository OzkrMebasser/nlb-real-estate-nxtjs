"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import PostsComponent from "../../components/Posts/PostsComponent";

const FrequentQuestionNine = (props) => {
  const {language} = useLanguage();


  return (
    <div className="max-w-screen-xl mx-auto" id="question-9">
      <PostsComponent
        title={language === es ? es.faq_9: en.faq_9}
        image="https://images.pexels.com/photos/8292793/pexels-photo-8292793.jpeg"
        capitalLetter={language === es ? es.faq_9_article.cap_letter_p1 : en.faq_9_article.cap_letter_p1}
        articleP1={language === es ? es.faq_9_article.p1 : en.faq_9_article.p1}
        articleP2=""
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionNine;
