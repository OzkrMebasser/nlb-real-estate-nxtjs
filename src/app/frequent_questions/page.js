"use client";
import { useQuestions } from "../../context/QuestionContext";


import ScrollToSection from "../components/ScrollToSection/ScrollToSection";

import FrequentQuestionOne from "./How_do_I_acquire_a_property_in_Mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./Can_I_acquire_in_co_ownership/FrequentQuestionTwo";
import FrequentQuestionThree from "./Can_I_acquire_through_an_LLC/FrequentQuestionThree";
import FrequentQuestionFour from "./If_the_bank_holding_my_trust_ceases_doing_business_is_ther_any_risk_of_losing_my_property/FrequentQuestionFour";
import FrequentQuestionFive from "./What_are_my_closing_cost/FrequentQuestionFive";
import FrequentQuestionSix from "./What_is_the_role_of_the_notary_public_in_mexico/FrequentQuestionSix";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const FrequentQuestions = (props) => {
  const { dataQuestions } = useQuestions();

  return (
    <>
      <header className="mt-[6rem]">
        <h2 className="text-2xl mb-4 font-bold leading-tight text-[#9c8966] sm:text-4xl text-center">
          PREGUNTAS FREQUENTES
        </h2>
      </header>

      <div className="max-w-screen-xl mx-auto divide-y ">
        <div className=" pl-4 pr-4 font-bold leading-tight text-[#9c8966af]  sm:pl-[300px] text-justify">
          {dataQuestions.map((question, num) =>
             <ScrollToSection
             key={num}
             questionNum={question.questionNum}
             num={question.num}
             completeQuestion={question.completeQuestion}
           />
          )}



        </div>
        <ScrollToTop />
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionThree />
        <FrequentQuestionFour />
        <FrequentQuestionFive />
        <FrequentQuestionSix />
        {/* <FrequentQuestionFive /> */}
      </div>
    </>
  );
};

export default FrequentQuestions;
