import React from "react";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Heroes() {
  return (
    <div id="home" className="w-full h-full text-center md:pt-40 pt-0">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="md:mt-4 mt-40">
          <h1 className=" text-gray-700">
            Hi,I'M <span className="text-[#5651e5]">OMAR</span>
          </h1>
          
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
          A Full-Stack Engineer 🧑‍💻 Dedicated to crafting accessible Web and Mobile solutions, Based in Kigali - Rwanda 🇷🇼 the heart of Africa.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/omar-nyirurugo-08bb1b157/">
                <FaLinkedin />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/nyirurugoomar">
                <FaGithub />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaInstagram />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.behance.net/omarnyirurugo">
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
