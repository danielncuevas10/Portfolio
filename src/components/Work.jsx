import React from 'react'
import movies from '../assets/MovieWebsite.png'
import agency from '../assets/MexicoWebsite.png'
import shop from '../assets/ecommerce.png'
import cafe from '../assets/cafeteria.png'
import { createRef } from 'react'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
            <p className='text-gray-400'>Check my projects where I show my skills in different areas.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                    <img src={movies} alt="movies project" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                    justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>Movies</span>
                            <div className='pt-8 text-center'>
                               <a href="https://danielncuevas10.github.io/cinemaworld/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                                    font-bold text-lg'>
                                                        Live
                                    </button>
                                </a>
                            </div>

                    </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                    <img src={agency} alt="movies project" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                    justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>Travel Agency</span>
                            <div className='pt-8 text-center'>
                               <a href="https://danielncuevas10.github.io/travel-agency-D/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                                    font-bold text-lg'>
                                                        Live
                                    </button>
                                </a>
                            </div>

                    </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                    <img src={shop} alt="movies project" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                    justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>e-commerce</span>
                            <div className='pt-8 text-center'>
                               <a href="https://danielncuevas10.github.io/E-commerce/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                                    font-bold text-lg'>
                                                        Live
                                    </button>
                                </a>
                            </div>

                    </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                    <img src={cafe} alt="movies project" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                    justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>Cafeteria</span>
                            <div className='pt-8 text-center'>
                               <a href="https://danielncuevas10.github.io/coffee-shop/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                                    font-bold text-lg'>
                                                        Live
                                    </button>
                                </a>
                            </div>

                    </div>

            </div>

        </div>

    </div>
  )
}

export default Work