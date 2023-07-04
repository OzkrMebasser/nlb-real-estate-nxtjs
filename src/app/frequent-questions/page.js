"use client";
import { useRef } from "react";
import ScrollToTop from "../components/Scroll/ScrolltoTop";
import { MdArrowDropDownCircle } from "react-icons/md";
import FrequentQuestionOne from "./how-do-i-acquire-a-property-in-mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./can-i-acquire-in-co-ownership/FrequentQuestionTwo";

const FrequentQuestions = (props) => {


  return (
    <>
      <div class=" mt-[6rem] md:mb-0 w-full max-w-screen-md mx-auto relative">
        <div class="flex justify-around pl-4 pr-4 text-xl text-[#9c8966] ">
          {/* <div onClick={() => scrollDown(q1)}> Question 1</div>
          <div onClick={() => scrollDown(q1)}> Question 2</div>
          <div onClick={() => scrollDown(q1)}> Question 3</div> */}
    <button>Ir a la sección 1</button>
      <button>Ir a la sección 2</button>
      <button>Ir a la sección 3</button>

        </div>
      </div>
      <div class="max-w-screen-xl mx-auto divide-y divide-width">
        <div className=""></div>
        <ScrollToTop />
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionOne />
      </div>
    </>
  );
};

export default FrequentQuestions;
