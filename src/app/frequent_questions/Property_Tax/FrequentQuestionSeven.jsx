"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import QuestionArticle from "../../components/QuestionArticles/QuestionArticle";

const FrequentQuestionSeven = (props) => {
  const { language } = useLanguage();

  return (
    <div className="max-w-screen-xl mx-auto" id="question-7">
      <QuestionArticle
        title={language === es ? es.faq_info.faq_7 : en.faq_info.faq_7}
        image="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter={language === es ? es.faq_info.faq_7_article.cap_letter_p1 : en.faq_info.faq_7_article.cap_letter_p1}
        articleP1={language === es ? es.faq_info.faq_7_article.p1 : en.faq_info.faq_7_article.p1}
      
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionSeven;

