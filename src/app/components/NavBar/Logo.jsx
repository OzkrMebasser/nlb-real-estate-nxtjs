import React from "react";
import "./NavBar.css";

const Logo = () => {
  return (
    <>
      <div className="w-[300px] flex justify-between items-center">
        <h1 className="logo ">NLB</h1>
        <span className="text-[20px] ml-2 font-black mx-auto text-white	capitalize ">
          REAL ESTATE
        </span>
      </div>{" "}
    </>
  );
};

export default Logo;
