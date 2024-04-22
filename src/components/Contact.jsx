import React from 'react'

const Contact = () => {
  return (
    <div class="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
        <h2 class="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
    

        <div class="max-w-[800px] mx-auto">

            <div class="mt-6 bg-[#161616] rounded-xl">
                <div class="p-10">

                    <form action="https://getform.io/f/pagxjopb" method="POST">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="name" id="" placeholder="Your Name"
                                            class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                             border-gray-700 rounded-md focus:outline-none focus:border-blue-400" />
                                </div>
                            </div>

                            <div>
                                <div class="mt-2.5 relative">
                                    <input type="email" name="email" id="" placeholder="Your Email"
                                            class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                             border-gray-700 rounded-md focus:outline-none focus:border-blue-400" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <div class="mt-2.5 relative">
                                    <textarea name="message" id="" placeholder="Your Message: I would really appreciate if you could send me a message or an email, it would be easier for me to get in touch and set any interview or call, since I am working mostly all day, I might not be able to answer any calls."
                                            class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-blue-400" rows="4">
                                                </textarea>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <button type="submit"
                                        class="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md">
                                            SEND
                                        </button>
                            </div>
                        </div>
                    </form>



                </div>
            </div>

        </div>

        <div className="mt-8 flex justify-center items-center flex-wrap">
        <p className="text-gray-400 mr-4">Connect with me:</p>
        <a
          href="mailto:danielnavarrete2304@gmail.com"
          className="text-blue-400 mr-4 hover:text-white hover:font-bold transition-all"
        >
          danielnavarete2304@gmail.com
        </a>
        <a
          href="tel:+7788925562"
          className="text-blue-400 mr-4 hover:text-white hover:font-bold transition-all"
        >
          +1 (778) 892 5562
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-navarrete-cuevas"
          className="text-blue-400 hover:text-white hover:font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    
    </div>
  )
}

export default Contact