"use client";
import QuestionArticle from "../QuestionArticle";

const FrequentQuestionTen = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto" id="question-10">
      <QuestionArticle
        title="WHAT ARE THE NEXT STEPS?"
        image="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // capitalLetter=""
        articleP1="1. Find your property and submit an offer."
        articleP2="2. is the offer is accepted, secure title will:"
        articleP3="* Conduct due diligence in order to verify that the property is in good legal standing."
        articleP4="* Draft the escrow and purchase agreement in both Spanish and English."
        articleP5="* Coordinate with the notary public and trustee bank the draft of the deed that will contain the trust."
        articleP6="* Receive funds in escrow."
        articleP7="* Set a closing date to execute the deed. "
        articleP8="* Release funds from escrow once the terms and conditions agreed by the parties are met."
        articleP9="* Delivery a certified copy of the deed."
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionTen;
