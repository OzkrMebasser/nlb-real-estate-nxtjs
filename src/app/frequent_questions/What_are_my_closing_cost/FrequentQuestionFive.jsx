"use client";
import QuestionArticle from "../QuestionArticle";

const FrequentQuestionFive = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto" id="question-5">
      <QuestionArticle
        title="WHAT ARE MY CLOSING COST?"
        image="https://images.pexels.com/photos/3943748/pexels-photo-3943748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter="C"
        articleP1="losing costs are typically paid by the buyer and vary on a case to case basis, depending on the purchase price, and  are ususally between 
        5% to 9% of the purchase price. "
        articleP2="Closing costs include notary fees, goverment taxes and duties, trustee bank fees, goverment
        permits, Secure Title fees, among others."
        articleP3="The seller is responsible for the Capital Gains Tax, any unpaid utilities, and property taxes. Such fees must be paid upon or prior to
        closing. Secure Title will make sure that all items are paid, in order for the buyer to receive a clean title."
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionFive;

