"use client";
import { useState } from "react";
import "./contactButtons.css";

const ContactButtons = () => {
  const [openSideBarMenu, setOpenSideBarMenu] = useState(false);

  const toggleMenu = () => {
    setOpenSideBarMenu(!openSideBarMenu);
  };

  return (
    <div className="sbuttons z-[100]">
      <a
        href="#"
        target="_blank"
        className="sbutton whatsapp"
        tooltip="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a
        href="#"
        target="_blank"
        className="sbutton instagram"
        tooltip="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a href="#" target="_blank" className="sbutton fb" tooltip="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>

      <a href="#" target="_blank" className="sbutton gplus" tooltip="Email">
        <i className="far fa-envelope"></i>
      </a>

      <a href="#" target="_blank" className="sbutton twitt" tooltip="Llamanos">
        <i className="fas fa-phone"></i>
      </a>

      <button
        className="sbutton mainsbutton openButtons"
        tooltip="Contactanos"
        onClick={toggleMenu}
      >
        {/* <a target="_blank" className="sbutton mainsbutton openButtons" tooltip="Contactanos"><i className="fas fa-plus"></i></a> */}
        {/* {!openSideBarMenu ? <AiOutlineComment />: <GoX/>} */}
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default ContactButtons;
