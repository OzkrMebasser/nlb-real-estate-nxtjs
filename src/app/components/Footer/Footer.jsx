"use client";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

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
                If the bank holding my trust ceases doing business is ther any risk of losing my property?
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
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-[#9c8966]">
                  Contact Us
                </h2>
                <form action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-[#32f1ff]"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-[#32f1ff] rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send message
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
