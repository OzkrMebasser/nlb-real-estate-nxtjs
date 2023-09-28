"use client"
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

const Modal = ({ image, closeModal }) => {
    const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white w-5/6 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{language === es ? es.enlarged_image : en.enlarged_image}</p>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
          </div>
          <img src={image} alt="Ampliación de la imagen" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
