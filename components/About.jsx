import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-8'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-[#5651e5] py-4 uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-4 text-gray-600'>
                    I am a front-end developer with 4 years of experience, My skills, and knowledge are in creating visually appealing and user-friendly websites and web applications. My expertise in HTML, CSS, and JavaScript, combined with different frameworks, has enabled me to build highly functional and responsive user interfaces that deliver an exceptional user experience on a variety of devices and platforms. With a passion for user-centered design and a commitment to accessibility, I bring a unique perspective and technical acumen to every project, collaborating with designers, back-end developers, and project managers to create outstanding results.
                </p>
                <p className='py-4 text-gray-600'>
                    I can debug and solve complex technical issues and the ability to stay up-to-date with the latest front-end development technologies has made me a valuable asset to any development team. With 4 years of hands-on experience and a track record of delivering successful projects, I am well-positioned to continue making a positive impact in the world of front-end development.
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