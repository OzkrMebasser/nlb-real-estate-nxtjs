"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import QuestionArticle from "../../components/QuestionArticles/QuestionArticle";

const FrequentQuestionOne = (props) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="max-w-screen-xl mx-auto" id="question-1">
      <QuestionArticle
        title={language === es ? es.faq_info.faq_1 : en.faq_info.faq_1}
        image="https://images.pexels.com/photos/4601159/pexels-photo-4601159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter={
          language === es
            ? es.faq_info.faq_1_article.cap_letter_p1
            : en.faq_info.faq_1_article.cap_letter_p1
        }
        articleP1={language === es ? es.faq_info.faq_1_article.p1 : en.faq_info.faq_1_article.p1}
        articleP2={language === es ? es.faq_info.faq_1_article.p2 : en.faq_info.faq_1_article.p2}
        articleP3={language === es ? es.faq_info.faq_1_article.p3 : en.faq_info.faq_1_article.p3}
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2022/2/21"
      />
    </div>
  );
};

export default FrequentQuestionOne;
