"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import QuestionArticle from "../../components/QuestionArticles/QuestionArticle";



const FrequentQuestionSix = (props) => {
  const { language } = useLanguage();


  return (
    <div className="max-w-screen-xl mx-auto" id="question-6">
      <QuestionArticle
        title={language === es ? es.faq_info.faq_6 : en.faq_info.faq_6}
        image="https://images.pexels.com/photos/3943748/pexels-photo-3943748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter={language === es ? es.faq_info.faq_6_article.cap_letter_p1: en.faq_info.faq_6_article.cap_letter_p1}
        articleP1={language === es ? es.faq_info.faq_6_article.p1 : en.faq_info.faq_6_article.p1}
        articleP2={language === es ? es.faq_info.faq_6_article.p2 : en.faq_info.faq_6_article.p2}
        articleP3={language === es ? es.faq_info.faq_6_article.p3 : en.faq_info.faq_6_article.p3}
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionSix;

