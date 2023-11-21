"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  // Abre el modal después de 5 segundos y luego cada 40 segundos
  useEffect(() => {
    const openModal = () => {
      setTimeout(() => {
        setShowModal(true);
      }, 60000); // Abre despues de un minuto
    };


    openModal(); // Abre el modal inicialmente después de 5 segundos

    const interval = setInterval(openModal, 420000); // Abre el modal cada 7 minutos

    return () => {
      clearInterval(interval); // Limpia el intervalo si el componente se desmonta
    };
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
