"use client";
// import { useRef } from "react";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import { MdArrowDropDownCircle } from "react-icons/md";
import FrequentQuestionOne from "./how-do-i-acquire-a-property-in-mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./can-i-acquire-in-co-ownership/FrequentQuestionTwo";

const FrequentQuestions = (props) => {


  return (
    <>
   
      <div className="max-w-screen-xl mx-auto divide-y divide-width">
        
       <ScrollToTop/>
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionOne />
      </div>
    </>
  );
};

export default FrequentQuestions;
