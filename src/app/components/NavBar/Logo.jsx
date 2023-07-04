import React from "react";
import "./NavBar.css";
import Link from 'next/link';


const Logo = ({textShadowChg}) => {

  return (
    <>
    
      <Link href="/"  className="w-[300px] flex items-center logoComp">
        <h1 className={
          textShadowChg
          ? "logo"
          : "logoTransparent"
        }>NLB</h1>
        <span className={
          textShadowChg
          ? " text-[20px] ml-2 font-black mx-auto text-white	capitalize  "
          : " titleShadow text-[20px] ml-2 font-black mx-auto text-white	capitalize  "
        }>
          REAL ESTATE
        </span>
      </Link>{" "}
  
    </>
  );
};

export default Logo;
