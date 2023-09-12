"use client";
import { useState } from "react";
import { useProperties } from "@/context/PropertiesProvider";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { useRouter } from "next/navigation";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { allProperties } = useProperties();
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
                Preguntas Frecuentes
              </span>
            </h6>
            <div>
              <p
                onClick={() =>
                  router.push(
                    `/frequent_questions/How_do_I_acquire_a_property_in_Mexico`
                  )
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                How do I acquire a property In Mexico?
              </p>

              <p
                onClick={() =>
                  router.push(
                    `/frequent_questions/Can_I_acquire_in_co_ownership`
                  )
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                Can I acquire in co-ownership?
              </p>
              <p
                onClick={() =>
                  router.push(
                    `/frequent_questions/Can_I_acquire_through_an_LLC`
                  )
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                Can I acquire through a LLC?
              </p>
              <p
                onClick={() =>
                  router.push(
                    `/frequent_questions/If_the_bank_holding_my_trust_ceases_doing_business_is_ther_any_risk_of_losing_my_property`
                  )
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                If the bank holding my trust ceases doing business is ther any
                risk of losing my property?
              </p>
              <p
                onClick={() =>
                  router.push(`/frequent_questions/What_are_my_closing_cost`)
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                What are my closing cost?
              </p>
              <p
                onClick={() =>
                  router.push(
                    `/frequent_questions/What_is_the_role_of_the_notary_public_in_mexico`
                  )
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                What is the role of the notary public in Mexico?
              </p>
              <p
                onClick={() => router.push(`/frequent_questions/Property_Tax`)}
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                Property Tax
              </p>

              <p
                onClick={() =>
                  router.push(`/frequent_questions/Do_I_need_an_attorney`)
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                Do I need an attorney?
              </p>
              <p
                onClick={() =>
                  router.push(
                    `/frequent_questions/Once_Im_an_owner_how_do_I_transfer_title`
                  )
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                Once I am an owner, how do I transfer title?
              </p>
              <p
                onClick={() =>
                  router.push(`/frequent_questions/What_are_the_next_steps`)
                }
                className="text-[#32f1ff] py-1 block hover:underline cursor-pointer"
              >
                What are the next steps?
              </p>
            </div>

            {/* <h6 className="text-base font-medium text-white uppercase mb-2">FREQUENTLY ASKED QUESTIONS</h6>
        <p className="text-[#32f1ff]">Te ayudamos a lograr tu objetivo en la busqueda de tu hogar.</p>
        <div className="mt-4">
          <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
            <span className="fab fa-facebook-f mr-2"></span> Follow
          </button>
          <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
            <span className="fab fa-twitter mr-2"></span> Follow @freeweb19
          </button>
        </div> */}
          </div>

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
                    href="#"
                    className="text-[#32f1ff] py-1 block hover:underline"
                  >
                    Resources
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
                  Contact Us
                </h2>

                <form action="https://formspree.io/f/mwkdlvlw" method="post">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      Full Name
                    </label>

                    <input
                      name="fullName"
                      type="text"
                      id="fullName"
                      // className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Enter your full name"
                      required
                    />

                    <label
                      htmlFor="email"
                      className="block mt-3 mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      Your email
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
                      Telephone
                    </label>
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                        id: "phone",
                        className:
                          "ml-10 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-none rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5",
                        placeholder: "Enter your phone number",
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
                      Property of Interest
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
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    >
                      {propiedades.map((property) => (
                        <option key={property} value={property}>
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
                      Your message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Leave a comment or message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 mt-5 mx-auto px-4 py-2 text-sm text-[#32f1ff] bg-transparent border rounded-lg shadow"
                    role="button"
                  >
                    Send Message
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
                Terms of Service
              </a>
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
