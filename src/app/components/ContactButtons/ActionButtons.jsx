"use client";
import { useState } from "react";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPlus, FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa";

import { GoX } from "react-icons/go";

import "./actionButtons.css";
// import "./contactButtons.css";

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
            href="https://wa.me/5219841886928?text=Hola%20me%20interesa%20saber%20mas%20sobre%20una%20de%20sus%20propiedades"
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
            href="http://m.me/NLBRealEstate?text=Hola%20me%20interesa%20saber%20mas%20sobre%20una%20de%20sus%20propiedades"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <BsMessenger />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="email">
          <a href="mailto:infonlbrealestate@gmail.com">
            <MdOutlineMailOutline />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div
          className="telephone"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <a href="tel:+529841886928">
            <FaPhone />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="instagram">
          <a href="https://instagram.com/nlbtierramaya"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      ) : null}
      {openMenu ? (
        <div className="facebook">
          <a 
          href="https://www.facebook.com/NLBRealEstate"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default ActionButtons;

