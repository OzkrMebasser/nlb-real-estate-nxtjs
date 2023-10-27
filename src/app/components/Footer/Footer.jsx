"use client";
import { useState } from "react";
import { useProperties } from "@/context/PropertiesProvider";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { allProperties } = useProperties();
  const { language, setLanguage } = useLanguage();

  const router = useRouter();

  const propiedades = allProperties.map((propiedad) => propiedad.desarrollo);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <div className="pt-6 md:pt-12 bg-gradient-to-r from-[#12283f] via-sky-900  to-teal-800">
      <div className="lg:px-[80px]  mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12 px-4">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h6 className="text-base text-[#9c8966] font-bold uppercase mb-2 hover:underline cursor-pointer">
              <span onClick={() => router.push(`frequent_questions`)}>
                {/* Preguntas Frecuentes */}
                {language === es ? es.faq : en.faq}
              </span>
            </h6>
            <div>
              {/*faq_1: "How do I acquire a property In Mexico?"*/}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                <Link href="/frequent_questions/How_do_I_acquire_a_property_in_Mexico">
                  {/* How do I acquire a property In Mexico? */}
                  {language === es ? es.faq_1 : en.faq_1}
                </Link>
              </p>
              {/*faq_2: "Can I acquire in co-ownership?"*/}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                {/* Can I acquire in co-ownership? */}
                <Link href="/frequent_questions/Can_I_acquire_in_co_ownership">
                  {language === es ? es.faq_2 : en.faq_2}
                </Link>
              </p>
              {/* faq_3: "Can I acquire through a LLC?"*/}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                <Link href="/frequent_questions/Can_I_acquire_through_an_LLC">
                  {language === es ? es.faq_3 : en.faq_3}
                </Link>
              </p>
              {/* faq_4: "If the bank holding my trust ceases doing business is ther any risk of losing my property?"*/}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                <Link href="/frequent_questions/If_the_bank_holding_my_trust_ceases_doing_business_is_ther_any_risk_of_losing_my_property">
                  {language === es ? es.faq_4 : en.faq_4}
                </Link>
              </p>
              {/* faq_5: "What is the role of the notary public in Mexico?" */}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                <Link href="/frequent_questions/What_is_the_role_of_the_notary_public_in_mexico">
                  {language === es ? es.faq_5 : en.faq_5}
                </Link>
              </p>
              {/* faq_6: "What are my closing cost?" */}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                <Link href="/frequent_questions/What_are_my_closing_cost">
                  {language === es ? es.faq_6 : en.faq_6}
                </Link>
              </p>
              {/* faq_7: "Property Tax" */}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
                <Link href="/frequent_questions/Property_Tax">
                  {language === es ? es.faq_7 : en.faq_7}
                </Link>
              </p>
              {/* faq_8: "Do I need an attorney?" */}
              <p className="text-[#32f1ff] py-1 block hover:underline cursor-pointer">
              
                <Link href="/frequent_questions/Do_I_need_an_attorney">
                  {language === es ? es.faq_8 : en.faq_8}
                </Link>
              </p>
              {/* faq_9: "Once I am an owner, how do I transfer title?" */}
              <p
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
               <Link href="/frequent_questions/Once_Im_an_owner_how_do_I_transfer_title">
               {language === es ? es.faq_9 : en.faq_9}
               </Link>
              </p>
              {/* faq_10: "What are the next steps?" */}
              <p
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                <Link href="/frequent_questions/What_are_the_next_steps">
                {language === es ? es.faq_10 : en.faq_10}
                </Link>
              </p>
            </div>

         
          </div>
        {/* FALTA MODIFICAR ESTA SECCION  */}
          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base  text-[#9c8966] font-bold uppercase mb-2">
                  diferencias entre lotes residenciales y terrenos de inversión
                </h6>
                <div>
                  <a
                    href="#"
                    className="text-[#32f1ff] py-1 block hover:underline"
                  >
                    HOW DO I ACQUIRE PROPERTY IN MEXICO?
                  </a>
                  <a
                    href="https://wa.me/5219841886928?text=Hola%20me%20interesa%20saber%20mas%20sobre%20una%20de%20sus%20propiedades%20en%20la%20Argentina,%20vengo%20de%20la%20pagina%20www.nlbrealestate.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#32f1ff] py-1 block hover:underline"
                  >
                    {language === es? es.argentina : en.argentina}  <span className="fi fi-ar ml-3"></span>
                  </a>
                  <a
                    href="#"
                    className="text-[#32f1ff] py-1 block hover:underline"
                  >
                    Tools
                  </a>
                  <a
                    href="#"
                    className="text-[#32f1ff] py-1 block hover:underline"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-[#32f1ff] py-1 block hover:underline"
                  >
                    Freebies
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center ">
            <section className="bg-[transparent] relative rigth-6">
              <div className="  mx-auto max-w-screen-md">
                <h2 className="mb-5 mt-5 lg:mt-0 uppercase text-3xl tracking-tight font-extrabold text-center text-[#9c8966]">
                  {/* Contact Us */}
                  {language === es ? es.contactUsTitle : en.contactUsTitle}
                </h2>

                <form action="https://formcarry.com/s/Mi680Qbg5u" method="post">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      {/* Full Name */}
                      {language === es ? es.full_name : en.full_name}
                    </label>

                    <input
                      name="fullName"
                      type="text"
                      id="fullName"
                      // className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder={language === es ? es.placeHolder_full_name : en.placeHolder_full_name}
                      required
                    />

                    <label
                      htmlFor="email"
                      className="block mt-3 mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      {/* Your email */}
                      {language === es ? es.your_email : en.your_email}
                    </label>

                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="name@email.com"
                      required
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="phone"
                      className="block mt-3 mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      {/* Telephone */}
                      {language === es ? es.phone : en.phone}
                    </label>
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                        id: "phone",
                        className:
                          "ml-10 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-none rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5",
                        placeholder: `${language === es ? es.placeHolder_phone : en.placeHolder_phone}`,
                      }}
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      inputStyle={{
                        width: "88.5%",
                      }}
                      containerStyle={{
                        marginTop: "0",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="property"
                      className="block mt-3 mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      {/* Property of Interest */}
                      {language === es ? es.interested_property : en.interested_property}
                    </label>

                    {/* <input
                      type="text"
                      id="property"
                      name="property"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Specify the property you're interested in"
                      required
                    /> */}
                    <select
                      id="property"
                      name="property"
                      className="uppercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    >
                      {propiedades.map((property) => (
                        <option className="" key={property} value={property}>
                          {property}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mt-3 mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      {/* Your message */}
                      {language === es ? es.your_message : en.your_message}
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder={language === es ? es.placeHolder_message : en.placeHolder_message}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 mt-5 mx-auto px-4 py-2 text-sm text-[#32f1ff] bg-transparent border rounded-lg shadow"
                    role="button"
                  >
                    {/* Send Message */}
                    {language === es ? es.send_msg : en.send_msg}
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; <strong>NLB Real Estate</strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                {/* Terms of Service */}
                {language === es ? es.terms : en.terms}
              </a>
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                {/* Privacy Policy */}
                {language === es ? es.privacyPolicy : en.privacyPolicy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
