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
                {/*header*/}
                <div className="bg-gradient-to-r from-[#12283f] via-sky-900  to-teal-800 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl lg:text-3xl font-semibold text-white ">
                    OFERTA DE FIN DE AÑO
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum perspiciatis magni voluptas aspernatur beatae, sed
                    neque animi, omnis rerum fugit esse, iusto corrupti a alias
                    minima sint! Optio, molestiae? Modi.
                  </p>
                    <div className="w-full lg:px-44 mx-auto  items-center justify-center ">
                    <Link 
                    onClick={() => setShowModal(false)}
                    href="/properties/On_Sale"
                  >
                    {/* w-full lg:w-[350px]  */}
                    <button className=" w-full  px-4 py-3 text-sm text-blue-100 bg-blue-500 rounded shadow"
                    >
                      Ver Ofertas!
                    </button>
                  </Link>
                    </div>
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
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
