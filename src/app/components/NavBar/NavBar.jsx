"use client";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState, Fragment } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { useProperties } from "@/context/PropertiesContext";
import { useRouter } from "next/navigation";

import "./NavBar.css";
import Logo from "./Logo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = (props) => {
  //States
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [textShadowChg, setTextShadowChg] = useState(true);
  const [underLineChg, setUnderLineChg] = useState(true);

  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  //Fuctions

  const handleNav = (props) => {
    // handles responsive Menu navigation
    setNav(!nav);
  };

  const changeNavBg = () => {
    if (window.scrollY > 5) {
      setNavbarBg(true);
    } else if (window.scrollY < 200) {
      setNavbarBg(false);
    }
  };

  const changeNavbg = window.addEventListener("scroll", changeNavBg);

  // Change MENU items shadows
  const changeTextShadow = () => {
    if (window.scrollY > 5) {
      setTextShadowChg(true);
    } else if (window.scrollY < 400) {
      setTextShadowChg(false);
    }
  };

  const changeTextshadow = window.addEventListener("scroll", changeTextShadow);

  
  // Change UNDERLINE color
  const changeUnderLineColor = () => {
    if (window.scrollY > 5) {
      setUnderLineChg(true);
    } else if (window.scrollY < 400) {
      setUnderLineChg(false);
    }
  };

  
  const changeUnderLinecolor = window.addEventListener("scroll", changeUnderLineColor);


//Context
  const { dataProperties } = useProperties();
  // console.log(properties)

  const router = useRouter();

  return (
    <div
      className={
        navbarBg 
          ? "flex justify-between items-center h-[80px] w-full px-16 text-[#32f1ff] bg-gradient-to-r from-[#12283f] via-sky-900  to-teal-800 shadow-xl fixed top-0 z-50"
          : "flex justify-between items-center h-[80px] w-full px-16 text-white bg-[transparent] fixed top-0 z-50 "
      }
    >
      {/* <span>
        <img
          className="h-24 w-24"
          src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate-site.appspot.com/o/assets%2Fsimple-imgs%2Flogo%20nlb.png?alt=media&token=ee935a75-3588-447d-aca6-8dc86a106b4a"
          alt="NLB real estate logo"
        />
        
      </span> */}
      <Logo className="font-black md:hidden" textShadowChg={textShadowChg} />

      <ul className="hidden md:flex ">
      <li className={
        underLineChg
        ? "goldenUnderline mid p-4 font-bold "
        : "blueUnderline mid p-4 font-bold "
      }>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                }
                onClick={() => router.push(`properties`)}
              >
                PROPIEDADES
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <p
                      onClick={() => router.push(`properties`)}
                        // href={dataProperties[0].route}
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Todas las propiedades
                      </p>
                    )}
                  </Menu.Item>
               
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className={
        underLineChg
        ? "goldenUnderline mid p-4 font-bold "
        : "blueUnderline mid p-4 font-bold "
      }>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold  "
                }
              >
                PLAYA DEL CARMEN
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={dataProperties[0].route}
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Tres Patios
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Huaya
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
        <li className={
        underLineChg
        ? "goldenUnderline mid p-4 font-bold "
        : "blueUnderline mid p-4 font-bold "
      }>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold "
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold "
                }
              >
                TULUM
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Lik Tulum
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Lik Organic
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Lik Xelba
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
        <li className={
        underLineChg
        ? "goldenUnderline mid p-4 font-bold "
        : "blueUnderline mid p-4 font-bold "
      }>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold "
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold "
                }
              >
                CANCUN
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Vidaraa
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Thalassa{" "}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
        <li className={
        underLineChg
        ? "goldenUnderline mid p-4 font-bold "
        : "blueUnderline mid p-4 font-bold "
      }>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold"
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-[12px] font-semibold"
                }
              >
                TERRENOS
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Terreno 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Terreno 2{" "}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
      </ul>

      {/* 
░█▀▄▀█ ░█▀▀▀█ ░█▀▀█ ▀█▀ ░█─── ░█▀▀▀ 
░█░█░█ ░█──░█ ░█▀▀▄ ░█─ ░█─── ░█▀▀▀ 
░█──░█ ░█▄▄▄█ ░█▄▄█ ▄█▄ ░█▄▄█ ░█▄▄▄  */}

      <div
        onClick={handleNav}
        // className="block md:hidden  fixed ml-[250px] z-40"
        className="block md:hidden absolute w-[75%]  z-40 "
      >
      
        {nav ? (
          <AiOutlineClose size={32} className="float-right bg-[#00808071] shadow-lg rounded-md" />
        ) : (
          <CgMenuGridO size={32} className="float-right bg-[#00808071] rounded-md" />
        )}
      </div>
      <ul
        className={
          nav
            ? "mx-auto mt-[80px] fixed left-0 top-0 w-[100%] h-full bg-gradient-to-r from-[#12283f] via-sky-900  to-teal-800 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="pl-4 font-bold text-[20px] ease-in-out duration-500 ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 pt-14 text-sm font-semibold "
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold "
                }
              >
                PLAYA DEL CARMEN
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
              <Menu.Items className="absolute left-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item onClick={handleNav}>
                    {({ active }) => (
                      <Link
                        href={dataProperties[0].route}
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Tres Patios
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Huaya
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
        <li className=" p-4 font-bold text-[20px]">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold"
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold"
                }
              >
                TULUM
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
              <Menu.Items className="absolute left-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        lik Tulum
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Lik Organic
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Lik Xelba
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
        <li className="p-4 font-bold text-[20px]">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold"
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold"
                }
              >
                CANCUN
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
              <Menu.Items className="absolute left-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Vidaraa
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Thalassa{" "}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                          ? "bg-[#e5c995] text-gray-900"
                          : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
        <li className="p-4 font-bold text-[20px]">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={
                  textShadowChg
                    ? " inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold"
                    : "titleShadow inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold"
                }
              >
                TERRENOS
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
              <Menu.Items className="absolute left-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-[#32f1ffa6] text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Terreno 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-[#32f1ffa6] text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Terreno 2{" "}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-[#32f1ffa6] text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
      </ul>
    </div>
  );
};

export default NavBar;
