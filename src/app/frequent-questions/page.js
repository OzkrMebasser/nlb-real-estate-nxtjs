"use client";
import { useRef } from "react";
// import ScrollToTop from "../components/Scroll/ScrolltoTop";
// import { MdArrowDropDownCircle } from "react-icons/md";
import FrequentQuestionOne from "./how-do-i-acquire-a-property-in-mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./can-i-acquire-in-co-ownership/FrequentQuestionTwo";

const FrequentQuestions = (props) => {


  return (
    <>

      <div class="max-w-screen-xl mx-auto divide-y divide-width">
        <div className=""></div>
        {/* <ScrollToTop /> */}
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionOne />
      </div>
    </>
  );
};

export default FrequentQuestions;
