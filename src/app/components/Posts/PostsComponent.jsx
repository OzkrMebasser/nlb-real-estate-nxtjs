import React, { useEffect, useState } from "react";

function PostsComponent(props) {
  const {
    title,
    subTitle1,
    subTitle2,
    subTitle3,
    subTitle4,
    subTitle5,
    subTitle6,
    main_image,
    authorImg,
    authorName,
    date,
    cap_letter_p1,
    p1,
    p2,
    p3,
    p4,
    p4_strong,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22_strong,
    p22,
    p23,
    p24_strong,
    p24,
    p25_strong,
    p25,
    p26,
    p27,
    image2,
    image3,
    image4,
    image5,
  } = props;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-[1rem] sm:mt-[2rem] md:mb-0 w-full max-w-screen-md mx-auto relative">
        <h2 className="uppercase pl-4 pr-4 text-2xl font-bold leading-tight text-[#9c8966] sm:text-4xl text-justify">
          {title}
        </h2>
      </div>
      <main className="mt-4">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-[384px]">
          <img
            src={main_image}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <div className="flex mt-3">
              <img
                src={authorImg}
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-[#000000] text-sm">
                  {" "}
                  {authorName}
                </p>
                <p className="font-semibold text-gray-400 text-xs">{date}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-4">
            <span className="font-bold text-3xl text-[#9c8966]">
              {cap_letter_p1}
            </span>
            {/* {"parrafo 1"} */}
            {p1}
          </p>

          {p2 && <p className="pb-4">{p2}</p>}
          {p3 && <p className="pb-4">{p3}</p>}
          {p4 && (
            <p className="pb-4">
              {p4}
              {p4_strong && (
                <span className="pb-4 font-bold  text-[#3a341f]">
                  {p4_strong}{" "}
                </span>
              )}
            </p>
          )}

          {subTitle1 && (
            <h4 className="uppercase text-xl font-bold  text-[#9c8966] text-justify mb-4">
              {subTitle1}
            </h4>
          )}

          {subTitle2 && (
            <h4 className="uppercase text-xl font-bold  text-[#9c8966] text-justify mb-4">
              {subTitle2}
            </h4>
          )}

          {p5 && <p className="pb-4 mt-4 ">{p5}</p>}

          {p6 && <p className="pb-4 ">{p6}</p>}
          {p7 && <p className="pb-4">{p7}</p>}
          {image2 && (
            <div className="mb-4 w-full max-w-screen-md mx-auto relative h-[384px]">
              <img
                src={image2}
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              />
            </div>
          )}
          {p8 && <p className="pb-4">{p8}</p>}

          {p9 && <p className="pb-4">{p9}</p>}
          {p10 && <p className="pb-4">{p10}</p>}

          {image3 && (
            <div className="mb-4 w-full max-w-screen-md mx-auto relative h-[384px]">
              <img
                src={image3}
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              />
            </div>
          )}

          {p11 && <p className="pb-4">{p11}</p>}

          {subTitle3 && (
            <h4 className="uppercase text-xl font-bold  text-[#9c8966] text-justify mb-2">
              {subTitle3}
            </h4>
          )}
          {p12 && <p className="pb-4">{p12}</p>}
          {p13 && <p className="pb-4">{p13}</p>}
          {p14 && <p className="pb-4">{p14}</p>}
          {p15 && <p className="pb-4">{p15}</p>}
          {p16 && <p className="pb-4 ">{p16}</p>}
          {p17 && <p className="pb-4">{p17}</p>}
          {p18 && <p className="pb-4">{p18}</p>}

          {subTitle4 && (
            <h4 className="uppercase text-xl font-bold  text-[#9c8966] text-justify mb-2">
              {subTitle4}
            </h4>
          )}

          {image4 && (
            <div className="mb-4 w-full max-w-screen-md mx-auto relative h-[384px]">
              <img
                src={image4}
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              />
            </div>
          )}

          {p19 && <p className="pb-4">{p19}</p>}
          {p20 && <p className="pb-4">{p20}</p>}
          {p21 && <p className="pb-4">{p21}</p>}

          {subTitle5 && (
            <h4 className="uppercase text-xl font-bold  text-[#9c8966] text-justify mb-2">
              {subTitle5}
            </h4>
          )}
          {image5 && (
            <div className="mb-4 w-full max-w-screen-md mx-auto relative h-[384px]">
              <img
                src={image5}
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              />
            </div>
          )}

          {p22 && <p className="pb-4">
            
          {p22_strong && (
                <span className="pb-4 font-bold  text-[#3a341f]">
                  {p22_strong}{" "}
                </span>
              )}
            {p22}</p>}
          {p23 && <p className="pb-4">{p23}</p>}
          {p24 && <p className="pb-4">
            
          {p24_strong && (
                <span className="pb-4 font-bold  text-[#3a341f]">
                  {p24_strong}{" "}
                </span>
              )}
            {p24}</p>}

            {subTitle6 && (
            <h4 className="uppercase text-xl font-bold  text-[#9c8966] text-justify mb-2">
              {subTitle6}
            </h4>
          )}
            {p25 && <p className="pb-4">
            
            {p25_strong && (
                  <span className="pb-4 font-bold  text-[#3a341f]">
                    {p25_strong}{" "}
                  </span>
                )}
              {p25}              
              </p>}
              {p26 && <p className="pb-4">{p26}</p>}
              {p27 && <p className="pb-8">{p27}</p>}
        </div>
      </main>
    </div>
  );
}

export default PostsComponent;
