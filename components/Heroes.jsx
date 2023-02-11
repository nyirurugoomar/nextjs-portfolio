import React from 'react'
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Heroes() {
  return (
    <div className='w-full h-screen text-center '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
               <p className='uppercase text-sm tracking-widest text-gray-600 '>Let's build some thing together</p>
               <h1 className='py-4 text-gray-700'>
                 Hi,I'M <span className='text-[#5651e5]'>OMAR</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Hi! I'm a front-end developer who specializes in creating visually appealing and user-friendly web interfaces. I have expertise in HTML, CSS, JavaScript, and various front-end frameworks. My goal is to build dynamic and interactive websites that provide the best possible user experience. I am committed to ensuring accessibility, responsiveness, and overall usability of the web applications I work on.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaInstagram/>
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaBehance/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heroes