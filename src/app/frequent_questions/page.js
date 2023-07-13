"use client";
import { useEffect, useState } from "react";
import { Link as Scroller } from "react-scroll";

import FrequentQuestionOne from "./How_do_I_acquire_a_property_in_Mexico/FrequentQuestionOne";
import FrequentQuestionTwo from "./Can_I_acquire_in_co_ownership/FrequentQuestionTwo";
import FrequentQuestionThree from "./Can_I_acquire_through_an_LLC/FrequentQuestionThree";
import FrequentQuestionFour from "./If_the_bank_holding_my_trust_ceases_doing_business_is_ther_any_risk_of_losing_my_property/FrequentQuestionFour";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const FrequentQuestions = (props) => {

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.scrollY;
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(scrollPosition);

  return (
    <>
     <header className="mt-[6rem]">
     <h2 className="text-2xl mb-4 font-bold leading-tight text-[#9c8966] sm:text-4xl text-center">
          PREGUNTAS FREQUENTES
        </h2>
     </header>
      <div className="max-w-screen-xl mx-auto divide-y ">
   
        <div className="pl-4 pr-4 font-bold leading-tight text-[#9c8966af]  sm:pl-[300px] text-justify">
      
          <div className="mb-2 cursor-pointer hover:underline hover:text-[#9c8966]">
          <Scroller
            to="question-1"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            1) How do I acquire a property In Mexico?
          </Scroller>
          </div>
       
          <div className="mb-2 cursor-pointer hover:underline hover:text-[#9c8966]">
          <Scroller
            to="question-2"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}            
          >
            2) Can I acquire in co-ownership?
          </Scroller>
          </div>

          <div className="mb-2 cursor-pointer hover:underline hover:text-[#9c8966]">
          <Scroller
            to="question-3"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            3) Can I acquire through a LLC?
          </Scroller>
          </div>
          <div className="mb-2 cursor-pointer hover:underline hover:text-[#9c8966]">
          <Scroller
            to="question-4"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            4) If the bank holding my trust ceases doing business is ther any risk of losing my property?
          </Scroller>
          </div>
        </div>
        <ScrollToTop />
        <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionThree />
        <FrequentQuestionFour />
        {/* <FrequentQuestionFive /> */}
      </div>
    </>
  );
};

export default FrequentQuestions;
