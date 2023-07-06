"use client";


import FrequentQuestionOne from "./How_do_I_acquire_a_property_in_Mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./Can_I_acquire_in_co_ownership/FrequentQuestionTwo";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const FrequentQuestions = (props) => {


  return (
    <>
     
      <div className="max-w-screen-xl mx-auto divide-y divide-width">
        <div className=""></div>
        <ScrollToTop/>
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        
      </div>
    </>
  );
};

export default FrequentQuestions;
