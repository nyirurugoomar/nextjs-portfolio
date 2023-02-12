import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiArrowUpSFill } from 'react-icons/ri';

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                {/* <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                /> */}
              </div>
              <div>
                <h2 className='py-2'>Omar N.</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                I am available for work, either as a freelancer or full-time employee.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Let's meet up.</p>
                <div className='flex items-center justify-between py-4'>
                  
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='https://www.linkedin.com/in/omar-nyirurugo-08bb1b157/'>
                        <FaLinkedin/>
                        </a>
                    </div>
                  
                  
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='https://github.com/nyirurugoomar'>
                          <FaGithub/>
                        </a>
                    </div>
                  

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaInstagram />
                  </div>
                  
                   
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <a href='https://www.behance.net/omarnyirurugo'>
                     <FaBehance/>
                    </a> 
                      </div>
                    
                  
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
                <form
                  action="https://getform.io/f/c7be9814-ef69-4953-abe0-3d88606b5b0a"
                  method="POST"
                  enctype="multipart/form-data"
                >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      placeholder='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='number'
                      name='phone'
                      placeholder='Tel'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    placeholder='Subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    placeholder='Message'
                  ></textarea>
                </div>
                </div>
                <button type="submit" className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
                </form>
            </div>
          </div>
          
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
           
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <RiArrowUpSFill
                  className='text-[#5651e5]'
                  size={50}
                />
              </div>
          
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Contact