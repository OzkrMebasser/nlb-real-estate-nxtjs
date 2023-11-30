"use client";
import React, { useState, useEffect, Fragment } from "react";

import Link from "next/link";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import useLanguage from "@/context/hooks/useLanguage";
import en from "../../../context/languages/en";
import es from "../../../context/languages/es";

import { useProperties } from "@/context/PropertiesProvider";
import { useRouter } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./NavBar.css";
import Logo from "./Logo";


function Nav() {
  const { allProperties} = useProperties();
  // const {language} = useLanguage();
  const { language, setLanguage } = useLanguage();

  // console.log(properties)

  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [textShadowChg, setTextShadowChg] = useState(false);
  const [underLineChg, setUnderLineChg] = useState(true);

  useEffect(() => {
    const changeNavbg = (e) => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
        setTextShadowChg(true);
        setUnderLineChg(true);
      } else if (window.scrollY < 200) {
        setNavbarBg(false);
        setTextShadowChg(false);
        setUnderLineChg(false);
      }
    };
    window.addEventListener("scroll", changeNavbg);
    return () => window.addEventListener("scroll", changeNavbg);
  }),
    [navbarBg, textShadowChg, underLineChg];

  return (
    <div>
      <nav
        className={
          navbarBg
            ? "w-full  text-[#32f1ff] bg-gradient-to-r from-[#12283f] via-sky-900  to-teal-800 shadow-xl fixed top-0 z-50"
            : "w-full  text-white bg-[transparent]  fixed top-0 z-50 swing-in-top-fwd "
        }
      >
        <div className="flex justify-around  items-center h-16 max-w-7xl mx-auto px-4   sm:px-6 lg:px-4 ">
          <div className="flex items-center w-full mx-auto ">
            {/*LOGO*/}
            <div className="flex-shrink-0 ">
              <Logo className="font-black " textShadowChg={textShadowChg} />
            </div>
            <div className="hidden md:block md:ml-[380px]">
              <div className=" flex items-baseline space-x-20">
                <ul className="hidden md:flex ">
                  {/*PROPIEDADES */}
                  <li
                    className={
                      underLineChg
                        ? "goldenUnderline mid p-4 font-bold "
                        : "blueUnderline mid p-4 font-bold "
                    }
                  >
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className={
                            textShadowChg
                              ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                              : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                          }
                          // onClick={() => router.push(`properties`)}
                        >
                          {/*PROPIEDADES MENU*/}
                          {language === es
                            ? es.navMenu.menuProperties
                            : en.navMenu.menuProperties}

                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-[#9c8966]"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition 
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className=" absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/properties"
                                 
                                  className={classNames(
                                    active
                                      ? "bg-[#e5c995] text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-[11px] uppercase"
                                  )}
                                >
                                  {/*Todas las propiedades*/}
                                  {language === es
                                    ? es.navMenu.allProperties
                                    : en.navMenu.allProperties}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          
                        </Menu.Items>
                        
                      </Transition>
                    </Menu>
                  </li>
                  {/*LOCACIONES */}
                  <li
                    className={
                      underLineChg
                        ? "goldenUnderline mid p-4 font-bold "
                        : "blueUnderline mid p-4 font-bold "
                    }
                  >
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className={
                            textShadowChg
                              ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                              : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                          }
                        >
                          {/*LOCACIONES MENU*/}
                          {language === es
                            ? es.navMenu.locations
                            : en.navMenu.locations}
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-[#9c8966]"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="dropdown-menu">
                          <ul>
                            {/*PLAYA DEL CARMEN */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Playa-del-Carmen">
                                      PLAYA DEL CARMEN
                                    </Link>

                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-[#9c8966]"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className=" absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            href="/properties/Playa-del-Carmen/Tres-Patios"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Tres Patios
                                          </Link>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Huaya
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Ocean Life
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*TULUM */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Tulum">TULUM</Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Tulum
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Organic
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Xelba
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Tuane
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*CANCUN */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Cancun">
                                      CANCUN
                                    </Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Vidaraa
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Thalassa{" "}
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Distrito Yaxx
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*COZUMEL */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Cozumel">
                                      COZUMEL
                                    </Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Tulum
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Organic
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Xelba
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Tuane
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*PUERTO MORELOS */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Puerto-Morelos">
                                      PUERTO MORELOS
                                    </Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Nálu
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            ....
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            ....
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            ....
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                          </ul>
                        </div>
                      </Menu.Items>
                    </Menu>
                  </li>
                  {/*TERRENOS */}
                  <li
                    className={
                      underLineChg
                        ? "goldenUnderline mid p-4 font-bold "
                        : "blueUnderline mid p-4 font-bold "
                    }
                  >
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className={
                            textShadowChg
                              ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold"
                              : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold"
                          }
                        >
                          {/*TERRENOS MENU*/}
                          {language === es ? es.navMenu.lots : en.navMenu.lots}
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {/*//Falta cambiar ruta href*/}
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-[#e5c995] text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-[11px] uppercase"
                                  )}
                                >
                                  Terreno 1
                                </a>
                              )}
                            </Menu.Item>
                            {/*//Falta cambiar ruta href*/}
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-[#e5c995] text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-[11px] uppercase"
                                  )}
                                >
                                  Terreno 2{" "}
                                </a>
                              )}
                            </Menu.Item>
                            {/*//Falta cambiar ruta href*/}
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-[#e5c995] text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-[11px] uppercase"
                                  )}
                                >
                                  Terreno 3
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                  {/*IDIOMAS */}
                  <li
                    className={
                      underLineChg
                        ? "goldenUnderline mid p-4 font-bold "
                        : "blueUnderline mid p-4 font-bold "
                    }
                  >
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className={
                            textShadowChg
                              ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold"
                              : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold"
                          }
                        >
                          {/* LANGUAGE CHANGER*/}
                          {language === es ? es.navMenu.lang : en.navMenu.lang}
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => setLanguage(en)}
                                  disabled={language === en}
                                  className={classNames(
                                    active
                                      ? "bg-[#e5c995] text-gray-900"
                                      : "text-gray-700",
                                    "w-full px-4 py-2 text-[11px] uppercase"
                                  )}
                                >
                                  ENGLISH
                                  <span className="fi fi-us ml-3"></span>
                                  {/* <span className="fi fi-ca ml-3"></span>  */}
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => setLanguage(es)}
                                  disabled={language === es}
                                  className={classNames(
                                    active
                                      ? "bg-[#e5c995] text-gray-900"
                                      : "text-gray-700",
                                    "w-full px-4 py-2 text-[11px] uppercase"
                                  )}
                                >
                                  ESPAÑOL
                                  <span className="fi fi-mx  ml-3"></span>
                                  {/* <span className="fi fi-es  ml-3"></span>  */}
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 
░█▀▄▀█ ░█▀▀▀█ ░█▀▀█ ▀█▀ ░█─── ░█▀▀▀ 
░█░█░█ ░█──░█ ░█▀▀▄ ░█─ ░█─── ░█▀▀▀ 
░█──░█ ░█▄▄▄█ ░█▄▄█ ▄█▄ ░█▄▄█ ░█▄▄▄  */}

          <div className="-mr-2 flex md:hidden bg-teal-900 rounded-md">
            {/* MENU ICON & x ICON*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <CgMenuGridO
                  size={32}
                  className="float-right bg-[#008080ec] rounded-md"
                />
              ) : (
                <AiOutlineClose
                  size={32}
                  className="float-right bg-[#00808071] shadow-lg rounded-md"
                />
              )}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className=" pt-8 pb-24 space-y-12 sm:px-3">
                {/*PROPIEDADES */}
                <p className=" hover:bg-[#e5c995] hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium ">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        className={
                          textShadowChg
                            ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                            : " titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                        }
                        // onClick={() => router.push(`properties`)}
                      >
                        {/*PROPIEDADES MENU*/}
                        {language === es
                          ? es.navMenu.menuProperties
                          : en.navMenu.menuProperties}
                        <ChevronDownIcon
                          className="mr-4 h-5 w-5 text-[#9c8966]"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/properties"
                                className={classNames(
                                  active
                                    ? "bg-[#e5c995] text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-[11px] uppercase"
                                )}
                              >
                                {/*Todas las propiedades*/}
                                {language === es
                                  ? es.navMenu.allProperties
                                  : en.navMenu.allProperties}
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </p>
                {/*LOCACIONES */}
                <p className=" hover:bg-[#e5c995] hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        className={
                          textShadowChg
                            ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                            : " titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                        }
                      >
                        {/*LOCACIONES MENU*/}
                        {language === es
                          ? es.navMenu.locations
                          : en.navMenu.locations}
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-[#9c8966]"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="dropdown-menu">
                        <ul>
                                               {/*PLAYA DEL CARMEN */}
                                               <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Playa-del-Carmen">
                                      PLAYA DEL CARMEN
                                    </Link>

                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-[#9c8966]"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className=" absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            href="/properties/Playa-del-Carmen/Tres-Patios"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Tres Patios
                                          </Link>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Huaya
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Ocean Life
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*TULUM */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Tulum">TULUM</Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Tulum
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Organic
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Xelba
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Tuane
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*CANCUN */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Cancun">
                                      CANCUN
                                    </Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Vidaraa
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Thalassa{" "}
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Distrito Yaxx
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*COZUMEL */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Cozumel">
                                      COZUMEL
                                    </Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Tulum
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Organic
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Lik Xelba
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Tuane
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                            {/*PUERTO MORELOS */}
                            <li className=" text-gray-700 hover:bg-[#e5c995] hover:text-white">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="text-[#12283f] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold">
                                    <Link href="/properties/Puerto-Morelos">
                                      PUERTO MORELOS
                                    </Link>
                                    <ChevronDownIcon
                                      className="-mr-1 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link
                                            href="properties/Puerto-Morelos/Nalu-Luxury-beachfront-residences"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            Nálu
                                          </Link>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            ....
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            ....
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/*//Falta cambiar ruta href*/}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-[#e5c995] text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-[11px] uppercase"
                                            )}
                                          >
                                            ....
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                        </ul>
                      </div>
                    </Menu.Items>
                  </Menu>
                </p>
                {/*TERRENOS MENU*/}
                <p className=" hover:bg-[#e5c995] hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        className={
                          textShadowChg
                            ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                            : " titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                        }
                      >
                        {/*TERRENOS MENU*/}
                        {language === es ? es.navMenu.lots : en.navMenu.lots}
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-[#9c8966]"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <p
                                onClick={() =>
                                  router.push(`properties`) ||
                                  setIsOpen(!isOpen)
                                }
                                // href={dataProperties[0].route}
                                className={classNames(
                                  active
                                    ? "bg-[#e5c995] text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-[11px] uppercase"
                                )}
                              >
                                {/* Todas las propiedades */}

                                {language === es
                                  ? es.navMenu.allProperties
                                  : en.navMenu.allProperties}
                              </p>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </p>

                {/* LANGUAGE CHANGER*/}
                <p className=" hover:bg-[#e5c995] hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        className={
                          textShadowChg
                            ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-4 py-2 text-[12px] font-semibold  "
                            : " titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-4 py-2 text-[12px] font-semibold  "
                        }
                      >
                        {language === es ? es.navMenu.lang : en.navMenu.lang}
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-[#9c8966]"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => setLanguage(en)}
                                disabled={language === en}
                                className={classNames(
                                  active
                                    ? "bg-[#e5c995] text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-[11px] uppercase"
                                )}
                              >
                                ENGLISH
                                <span className="fi fi-us ml-3"></span>
                                {/* <span className="fi fi-ca ml-3"></span>  */}
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => setLanguage(es)}
                                disabled={language === es}
                                className={classNames(
                                  active
                                    ? "bg-[#e5c995] text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-[11px] uppercase"
                                )}
                              >
                                ESPAÑOL
                                <span className="fi fi-mx  ml-3"></span>
                                {/* <span className="fi fi-es  ml-3"></span>  */}
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </p>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
