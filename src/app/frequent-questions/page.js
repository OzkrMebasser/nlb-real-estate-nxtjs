"use client";
// import { useQuestions } from "@/context/QuestionProvider";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";


import ScrollToSection from "../components/ScrollToSection/ScrollToSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import FrequentQuestionOne from "./How-do-I-acquire-a-property-in-Mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./Can-I-acquire-in-co-ownership/FrequentQuestionTwo";
import FrequentQuestionThree from "./Can-I-acquire-through-an-LLC/FrequentQuestionThree";
import FrequentQuestionFour from "./If-the-bank-holding-my-trust-ceases-doing-business-is-ther-any-risk-of-losing-my-property/FrequentQuestionFour";
import FrequentQuestionFifth from "./What-is-the-role-of-the-notary-public-in-mexico/FrequentQuestionFifth";
import FrequentQuestionSix from "./What-are-my-closing-cost/FrequentQuestionSix";
import FrequentQuestionSeven from "./Property-Tax/FrequentQuestionSeven";
import FrequentQuestionEight from "./Do-I-need-an-attorney/FrequentQuestionEight";
import FrequentQuestionNine from "./Once-Im-an-owner-how-do-I-transfer-title/FrequentQuestionNine"
import FrequentQuestionTen from "./What-are-the-next-steps/FrequentQuestionTen";





const FrequentQuestions = (props) => {
  // const { questions } = useQuestions();


  const { language } = useLanguage();
  
  const questions = [
    {
      num: 1,
      questionNum: "question-1",
      questionText: `${language === es ? es.faq_info.faq_1 : en.faq_info.faq_1}`,
    },
    {
      num: 2,
      questionNum: "question-2",
      questionText: `${language === es ? es.faq_info.faq_2 : en.faq_info.faq_2}`,
    },
    {
      num: 3,
      questionNum: "question-3",
      questionText: `${language === es ? es.faq_info.faq_3 : en.faq_info.faq_3}`,
    },
    {
      num: 4,
      questionNum: "question-4",
      questionText: `${language === es ? es.faq_info.faq_4 : en.faq_info.faq_4}`,
    },
    {
      num: 5,
      questionNum: "question-5",
      questionText: `${language === es ? es.faq_info.faq_5 : en.faq_info.faq_5}`,
    },
    {
      num: 6,
      questionNum: "question-6",
      questionText: `${language === es ? es.faq_info.faq_6 : en.faq_info.faq_6}`,
    },
    {
      num: 7,
      questionNum: "question-7",
      questionText: `${language === es ? es.faq_info.faq_7 : en.faq_info.faq_7}`,
    },
    {
      num: 8,
      questionNum: "question-8",
      questionText: `${language === es ? es.faq_info.faq_8 : en.faq_info.faq_8}`,
    },
    {
      num: 9,
      questionNum: "question-9",
      questionText: `${language === es ? es.faq_info.faq_9 : en.faq_info.faq_9}`,
    },
    {
      num: 10,
      questionNum: "question-10",
      questionText: `${language === es ? es.faq_info.faq_10 : en.faq_info.faq_10}`,
    },
  ];
  


  return (
    <>
      <header className="mt-[6rem]">
        <h2 className="uppercase text-2xl mb-4 font-bold leading-tight text-[#9c8966] sm:text-4xl text-center">
          {/* PREGUNTAS FREQUENTES */}
          {language === es ? es.faq_info.faq : en.faq_info.faq }
        </h2>
      </header>

      <div className="max-w-screen-xl mx-auto divide-y ">
        <div className=" pl-4 pr-4 font-bold leading-tight text-[#9c8966af]  sm:pl-[300px] text-justify">
          {questions.map((question, num) =>
              
             <ScrollToSection
             
             key={num}
             questionNum={question.questionNum}
             num={question.num}
             questionText={question.questionText}
            //  questionText={language === es
            //   ? es[question.questionText]
            //   : en[question.questionText]}
           />
          )}



        </div>
        <ScrollToTop />
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionThree />
        <FrequentQuestionFour />
        <FrequentQuestionFifth/>
        <FrequentQuestionSix />
        <FrequentQuestionSeven/>
        <FrequentQuestionEight />
        <FrequentQuestionNine/>
        <FrequentQuestionTen/>
      </div>
    </>
  );
};

export default FrequentQuestions;
