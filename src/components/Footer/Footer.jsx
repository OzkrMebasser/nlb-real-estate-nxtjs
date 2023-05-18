import React from 'react'

const Footer = () => {
  return (
   
        
        <div className="pt-6 md:pt-12 bg-gradient-to-r from-blue-900  via-sky-900  to-teal-500">
       
  <div className="lg:px-[80px]  mx-auto">

    <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12 px-4">

      <div className="footer-info lg:w-1/3 md:px-4">
        <h4 className="text-[#fff] font-black text-2xl mb-4">Hemos ayudado a mas de 50 familias a obtener la propiedad de sus sueños.</h4>
        <p className="text-[#32f1ff]">Te ayudamos a lograr tu objetivo en la busqueda de tu hogar.</p>
        <div className="mt-4">
          <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
            <span className="fab fa-facebook-f mr-2"></span> Follow
          </button>
          <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
            <span className="fab fa-twitter mr-2"></span> Follow @freeweb19
          </button>
        </div>
      </div>

      <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
        <div className="sm:flex">
          <div className="sm:flex-1">
            <h6 className="text-base font-medium text-white uppercase mb-2">About</h6>
            <div>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Company</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Culture</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Team</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Careers</a>
            </div>
          </div>
          <div className="sm:flex-1 mt-4 sm:mt-0">
            <h6 className="text-base font-medium text-white uppercase mb-2">What we offer</h6>
            <div>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Blocks</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Resources</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Tools</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Blog</a>
              <a href="#" className="text-[#32f1ff] py-1 block hover:underline">Freebies</a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 md:px-4 md:text-center ">
      <section class="bg-[transparent] relative rigth-6">
  <div class="  mx-auto max-w-screen-md">
      <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
      <form action="#" >
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
      </div>

    </div>

  </div>

  <div class="border-t border-solid border-gray-900 mt-4 py-4">
    <div class="container px-4 mx-auto">

      <div class="md:flex md:-mx-4 md:items-center">
        <div class="md:flex-1 md:px-4 text-center md:text-left">
          <p class="text-white">&copy; <strong>NLB Real Estate</strong></p>
        </div>
        <div class="md:flex-1 md:px-4 text-center md:text-right">
          <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
          <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
        </div>
      </div>

    </div>
  </div>
 
</div>


  )
}

export default Footer