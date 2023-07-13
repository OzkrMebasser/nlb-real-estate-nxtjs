"use client";
import QuestionArticle from "../QuestionArticle";

const FrequentQuestionOne = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto" id="question-1">
      <QuestionArticle
        title={"HOW DO I ACQUIRE A PROPERTY IN MEXICO?"}
        image="https://images.pexels.com/photos/4601159/pexels-photo-4601159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter="F"
        articleP1="oreigners may obtain direct ownership of property within Mexican
        territory. However, foreigners cannot hold title to property within
        100 km from the border and within 50 km from the coastline. This
        area is know as the restricted zone. However, there is a system in
        Mexico that allows non-Mexicans to purchase property, providing
        great protection for the property owner, and is very similar to fee
        simple ownership. In order to purchase real estate in the restricted
        zone, foreigners must acquire the property through a bank trust
        formalized with a Mexican Banking institution. 
        "
        articleP2=" As a buyer, you will
        be designated as the main beneficiary and can designate substitute
        beneficiaries in the event of death, that way avoiding probate
        procedures upon death. The bank turst is established for 50 years,
        renewable for the same period of time."
        articleP3="Prior to expiration, the
        trustee bank will let you know that it´s time to extend the term for
        anothr 50 years."
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
    </div>
  );
};

export default FrequentQuestionOne;

