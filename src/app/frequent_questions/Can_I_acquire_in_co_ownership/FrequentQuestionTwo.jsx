"use client";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";


import QuestionArticle from "../QuestionArticle";

const FrequentQuestionTwo = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto" id="question-2">
      <QuestionArticle
        title="CAN I ACQUIRE IN CO-OWNERSHIP?"
        image="https://images.pexels.com/photos/8470844/pexels-photo-8470844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        capitalLetter="Y"
        articleP1="es, In the trust, both co-owners will be designated as main beneficiaries. It's common that such co-owners designate themselves
        as substitute beneficiaries, and they can also designate other 3rd parties, such as their children, as substitutive beneficiaries in 
        the event of death.
        "
        articleP2=""
        authorName="Nuria Hernandez"
        authorImg="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="2020/2/21"
      />
         
    </div>
  );
};

export default FrequentQuestionTwo;

