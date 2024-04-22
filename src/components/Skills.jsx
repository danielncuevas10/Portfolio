import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/React.png'
import js from '../assets/js.jpeg'
import java from '../assets/java.png'
import sql from '../assets/sql1.webp'
import ts from '../assets/ts.png'
import tw from '../assets/tw.png'
import node from '../assets/node.png'



const Skills = () => {
  return (
    <div className='border border-black bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
                    place-items-center md:flex md:justify-between md:items-center'>

        <h2 className="text-white text-xl md:text-4xl font-bold m-4">
                My <br/> Tech <br/> Skills   
        </h2>      

        <div className="flex flex-col items-center m-4 sm:my-0 w-[70px] md:w-[100px]">
            <img src={html} alt="html image"/>
            <p className="mt-2">HTML</p>    
        </div>  

        <div className="flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[100px]">
            <img src={css} alt="react image"/>
            <p className="mt-2">CSS</p>    
        </div>       

        <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px]">
            <img src={react} alt="react image"/>
            <p className="mt-2">React</p>    
        </div>     

        <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px]">
            <img src={js} alt="react image"/>
            <p className="mt-2">JavaScript</p>    
        </div>  

        <div className="flex flex-col items-center m-4 sm:my-0 w-[55px] md:w-[100px]">
            <img src={java} alt="react image"/>
            <p className="mt-2"></p>    
        </div> 

        <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px]">
            <img src={ts} alt="react image"/>
            <p className="mt-2">TypeScript</p>    
        </div> 

        <div className="flex flex-col items-center m-4 sm:my-0 w-[70px] md:w-[100px]">
            <img src={tw} alt="react image"/>
            <p className="mt-2">Tailwind</p>    
        </div>   

        <div className="flex flex-col items-center m-4 sm:my-0 w-[90px] md:w-[100px]">
            <img src={node} alt="react image"/>
            <p className="mt-2"></p>    
        </div>           

        <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px]">
            <img src={sql} alt="react image"/>
            <p className="mt-2">SQL Databases</p>    
        </div>                   

    </div>
  )
}

export default Skills