import Image from 'next/image'
import Link from 'next/link'
import React,{useState, useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa'
function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    
    const handleNav = () =>{
        setNav(!nav);
    }

useEffect(()=>{
    const handleShadow = () =>{
        if(window.scrollY >= 90){
            setShadow(true);
        }else{
            setShadow(false);
        }
    }
    window.addEventListener('scroll', handleShadow)
},[])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl border-b-2 border-white z-[100] ': 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16 bg-[#121729]'>
            <Link href='/'>
            <Image 
            src='/assets/omar080.png' 
            alt="/" 
            width='100'  
            height='100'
            />
            </Link>
        
         
          <div>
            <ul className='hidden md:flex text-white'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                {/* <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link> */}
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#project'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
               <AiOutlineMenu color="white"  size={25}/>
            </div>
          </div> 
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
           <div className={nav
             ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
             : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Link href='/'>
                    <Image 
                    src='/../public/assets/omar080.png' 
                    width='70' 
                    height='70' 
                    alt='/' 
                    />
                    </Link>
                    
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>
                 <div className='border-b border-gray-300 my-4 '>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's build some legendary together</p>
                 </div>
            </div>
            {/* for mobile */}
            <div className='py-2 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                    </Link>
                    {/* <Link href='/#about'>
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                    </Link> */}
                    <Link href='/#skills'>
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/#project'>
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                    </Link>
                </ul>
                <div className='pt-10'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                         <FaFacebook/>
                        </div>
                         
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar