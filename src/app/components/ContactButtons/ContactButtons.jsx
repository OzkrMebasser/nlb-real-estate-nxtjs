'use client'
import React from 'react'
import "./contactButtons.css"



const ContactButtons = () => {
  return (
    
          <div className="sbuttons z-[100]">
	
    <a href="#" target="_blank" className="sbutton whatsapp" tooltip="WhatsApp"><i className="fab fa-whatsapp"></i></a>  
    
    <a href="#" target="_blank" className="sbutton instagram" tooltip="Instagram"><i class="fab fa-instagram"></i></a>
    
    <a href="#" target="_blank" className="sbutton fb" tooltip="Facebook"><i className="fab fa-facebook-f"></i></a>
  
    <a href="#" target="_blank" className="sbutton gplus" tooltip="Email"><i className="far fa-envelope"></i></a>
  
    <a href="#" target="_blank" className="sbutton twitt" tooltip="Llamanos"><i className="fas fa-phone"></i></a>
  
  
    <a target="_blank" className="sbutton mainsbutton openButtons" tooltip="Contactanos"><i className="fas fa-plus"></i></a>
        
  </div>  
  

  
  )
}

export default ContactButtons;