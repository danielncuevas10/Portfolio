import React from 'react'
import aboutImg from '../assets/Daniel.jpeg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
        
        <div className="md:grid md:grid-cols-2 sm:py-16">

            <div className="mt-4 md:mt-0 text-justify flex">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">
                    I'm a 24 years old Mechatronic Engineer, passionate FullStack Developer with +3 years of experience and with a strong knowledge in HTML, CSS, JavaScript, React, Java and Databases. I am also continuously learning new technologies, currently living and studying a CO-OP in Software QA in Vancouver, British Columbia, Canada. Experienced in creating responsive websites.
                    </p>
                </div>
            </div>

            <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={200} height={200} />

        </div>
    </div>
  )
}

export default About