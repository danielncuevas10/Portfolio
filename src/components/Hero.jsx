import React from 'react'
import heroimage from '../assets/Daniel.jpeg'
import cv from '../assets/Daniel.jpeg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

      <div className='col-span-1 flex justify-center'>
        <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border border-gray-300 rounded-xl overflow-hidden'>
          <img src={heroimage} alt="Daniel Navarrete Picture" className='w-full h-full object-cover' />
        </div>
      </div>
        <div className='col-span-2 px-5 my-auto'>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                <span className="primary-color">
                I am a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "FullStack Dev",
                    1000,
                    "Frontend Dev",
                    1000,
                    "Web Designer",
                    1000,
                    "Backend Dev",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />

                <p className="text-white text-sm sm:text-lg my-6 lg:text-xl">
                    My name is Daniel Navarrete and I have 3+ years of experience in web development.
                </p>


                <div className='my-8'>
                    <a href={cv} className="px-4 py-2 w-full rounded-xl mr-4
                        bg-gradient-to-br from-orange-500 to to-blue-300 text-white text-sm">
                            Download CV
                        </a>
                    <a href="#contact" className="px-4 py-2 w-full  rounded-xl mr-4
                        border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-blue-300
                        text-white text-sm hover:border-none">
                            Contact
                        </a>    
                </div>

            </h1>

        </div>
    </div>
  )
}

export default Hero