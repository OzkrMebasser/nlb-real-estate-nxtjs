"use client";
import { HiBadgeCheck } from "react-icons/hi";
import React, { useRef, useState } from "react";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./Modal";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./carrousel.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

const UnitDetailImages = ({ images_A, images_B }) => {
  const { language, setLanguage } = useLanguage();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <section className={`mt-4 px-4 ${modalOpen ? "opacity-50" : ""}`}>
        <h6 className="text-center text-gray-400">{language === es ? es.clic_to_enlarge : en.clic_to_enlarge}</h6>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className=" "
          >
            {images_A.map((image) => (
              <SwiperSlide key={image}>
                
                <img
                  src={image}
                  alt="property images"
                  onClick={() => handleImageClick(image)}
                  className="cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className={`px-4 ${modalOpen ? "opacity-50" : ""}`}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images_B.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      {/* Modal */}
      {modalImage && <Modal image={modalImage} closeModal={closeModal} />}
    </>
  );
};

export default UnitDetailImages;
