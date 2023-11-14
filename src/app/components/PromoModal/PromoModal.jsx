"use client";
import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalProvider";
import Link from "next/link";
import "./promoModal.css";

export default function PromoModal() {
  const { showModal, setShowModal } = useModal();

  return (
    <>
      {showModal ? (
        <>
          <div className="animatedBorder p-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}{" "}
                {/*bg-gradient-to-r from-[#12283f] via-sky-900  to-teal-800*/}
                <div className=" bg-[red] flex items-center justify-between py-5 px-8 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl lg:text-3xl font-semibold text-white lg:ml-12 ">
                    OFERTA DEL BUEN FIN
                  </h3>
                  <img
                    className="h-10 w-10 lg:mr-12"
                    src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate.appspot.com/o/blog-images%2Fbuen-fin-removebg-preview.png?alt=media&token=5648bddb-e3a7-4bac-b262-90cd81e85eed"
                    alt="buen fin"
                  />
                </div>
                {/*body*/}
                <div className="px-6 relative  flex-auto ">
                  <ul className="   leading-relaxed mb-4 grid  sm:gap-2 sm:grid-cols-2 sm:space-y-0 mt-6 lg:mt-12">
                    <li>✅ Constelada</li>
                    <li>✅ Beanna</li>
                    <li>✅ Villas Kaybé</li>
                    <li>✅ Peregrina </li>
                  </ul>
                  <p className="my-4  leading-relaxed mb-4">
                    Regalamos la escritura de tu propiedad en la zona, lo que
                    equivale al 6% del valor. Por ejemplo, si tu propiedad tiene
                    un valor de $4,000,000 MXN, estaríamos regalándote $240,000
                    MXN como parte de nuestra oferta especial por el Buen Fin
                    🎁.
                  </p>
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                <Link
                      onClick={() => setShowModal(false)}
                      href="https://wa.me/5219841886928?text=Hola%20me%20interesa%20saber%20mas%20sobre%20una%20de%20sus%20propiedades%20con%20la%20promoción"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {/* w-full lg:w-[350px]  */}
                      <button className=" font-bold w-full px-4 py-3 text-sm text-white bg-blue-500 rounded shadow">
                        Mas información
                      </button>
                    </Link>
                  <button
                    className="bg-red-500 text-white rounded shadow background-transparent font-bold  px-4 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
