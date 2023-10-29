"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import QuestionArticle from "../QuestionArticle";

const FrequentQuestionEight = (props) => {
  const { language } = useLanguage();

  return (
    <div className="max-w-screen-xl mx-auto" id="question-8">
      <QuestionArticle
        title={language === es ? es.faq_8 : en.faq_8}
        image="https://images.pexels.com/photos/8815873/pexels-photo-8815873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter={language === es ? es.faq_8_article.cap_letter_p1 : en.faq_8_article.cap_letter_p1}
        articleP1={language === es ? es.faq_8_article.p1 : en.faq_8_article.p1}
      
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionEight;
