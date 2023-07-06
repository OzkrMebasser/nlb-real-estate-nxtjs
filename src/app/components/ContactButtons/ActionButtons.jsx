"use client";
import { useState } from "react";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPlus, FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa";

import { GoX } from "react-icons/go";

import "./actionButtons.css";
import "./contactButtons.css";

const ActionButtons = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <button
        className="actionButton  floatingBtn z[200] blinking-moon"
        onClick={toggleMenu}
      >
        {!openMenu ? (
          <FaPlus className="closeButtons" />
        ) : (
          <FaPlus className="openButtons" />
        )}
      </button>

      {openMenu ? (
        <div className="whatsApp">
          <a
            href="https://wa.me/5214626932535?text=Hola%20me%20interesa%20saber%20mas%20acerca%20de%20Silver%20Protect"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <BsWhatsapp />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="messenger">
          <a
            href="https://www.facebook.com/876531472464645"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <BsMessenger />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="email">
          <a href="mailto:silverprotect@hotmail.com">
            <MdOutlineMailOutline />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="telephone">
          <a href="mailto:silverprotect@hotmail.com">
            <FaPhone />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="instagram">
          <a href="">
          
            <FaInstagram />
          </a>
        </div>
      ) : null}
        {openMenu ? (
        <div className="facebook">
          <a href="">
          
            <FaFacebookF />
          </a>
        </div>
      ) : null}
    </div>
    
  );
};

export default ActionButtons;
//  {//NO OLVIDAR CAMBIAR LOS DATOS DE CONTACTO }