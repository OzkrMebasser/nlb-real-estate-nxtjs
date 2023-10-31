"use client";
import { usePosts } from "../../context/PostsProvider";


import ScrollToSection from "../components/ScrollToSection/ScrollToSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// import FrequentQuestionOne from "./How_do_I_acquire_a_property_in_Mexico/FrequentQuestionOne";
// import FrequentQuestionTwo from "./Can_I_acquire_in_co_ownership/FrequentQuestionTwo";
// import FrequentQuestionThree from "./Can_I_acquire_through_an_LLC/FrequentQuestionThree";
// import FrequentQuestionFour from "./If_the_bank_holding_my_trust_ceases_doing_business_is_ther_any_risk_of_losing_my_property/FrequentQuestionFour";
// import FrequentQuestionFive from "./What_are_my_closing_cost/FrequentQuestionSix";
// import FrequentQuestionSix from "./What_is_the_role_of_the_notary_public_in_mexico/FrequentQuestionFive";
// import FrequentQuestionSeven from "./Property_Tax/FrequentQuestionSeven";
// import FrequentQuestionEight from "./Do_I_need_an_attorney/FrequentQuestionEight";
// import FrequentQuestionNine from "./Once_Im_an_owner_how_do_I_transfer_title/FrequentQuestionNine"
// import FrequentQuestionTen from "./What_are_the_next_steps/FrequentQuestionTen";





const Blog = (props) => {
  const {posts} = usePosts();

  return (
    <>
      <header className="mt-[6rem]">
        <h2 className="text-2xl mb-4 font-bold leading-tight text-[#9c8966] sm:text-4xl text-center">
          OUR BLOG
        </h2>
      </header>

      <div className="max-w-screen-xl mx-auto divide-y ">
        <div className=" pl-4 pr-4 font-bold leading-tight text-[#9c8966af]  sm:pl-[300px] text-justify">
          {posts.map((question, num) =>
             <ScrollToSection
             key={num}
             questionNum={question.questionNum}
             num={question.num}
             completeQuestion={question.completeQuestion}
           />
          )}



        </div>
        <ScrollToTop />
        {/* <FrequentQuestionOne />
        <FrequentQuestionTwo />
        <FrequentQuestionThree />
        <FrequentQuestionFour />
        <FrequentQuestionFive />
        <FrequentQuestionSix />
        <FrequentQuestionSeven/>
        <FrequentQuestionEight />
        <FrequentQuestionNine/>
        <FrequentQuestionTen/> */}
      </div>
    </>
  );
};

export default Blog;
