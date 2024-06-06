import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full md:h-full p-2 flex items-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-[#5651e5] py-4 uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-4 text-gray-600'>
                I'm experienced Full-Stack Developer adept at crafting seamless user experiences across web and mobile platforms. Proficient in React.js and Next.js for web development, as well as Flutter and React Native for mobile applications. Passionate about bridging the gap between web and mobile technologies to deliver innovative solutions.
                </p>
                
                
                
            </div>
            <div className='w-full h-auto m-auto shadow-bt shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src='/assets/omar_image.png' width='350' height='350' alt="" />
            </div>
        </div>
    </div>
  )
}

export default About