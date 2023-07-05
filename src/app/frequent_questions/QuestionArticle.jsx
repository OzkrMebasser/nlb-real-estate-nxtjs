import React from "react";

function QuestionArticle(props) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" mt-[6rem] md:mb-0 w-full max-w-screen-md mx-auto relative">
        <h2 className="pl-4 pr-4 text-2xl  font-bold leading-tight text-[#9c8966] sm:text-4xl text-justify">
          {props.title}
        </h2>{" "}
      </div>
      <main className="mt-4">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-[384px]">
          <img
            src={props.image}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            

            <div className="flex mt-3">
              <img
                src={props.authorImg}
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  {props.authorName}
                </p>
                <p className="font-semibold text-gray-400 text-xs">{props.date}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-4">
            <span className="font-bold text-3xl text-[#9c8966]">
            {props.capitalLetter}
            </span>
            {props.articleP1}
          </p>
          <p className="pb-4">{props.articleP2}</p>
          <p className="pb-4">{props.articleP3}</p>
          <p className="pb-4">{props.articleP4}</p>
        </div>
      </main>
    </div>
  );
}

export default QuestionArticle;
