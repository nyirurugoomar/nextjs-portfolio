import React from "react";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Heroes() {
  return (
    <div id="home" className="w-full h-screen text-center   ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi,I'M <span className="text-[#5651e5]">OMARi</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm an experienced front-end developer proficient in utilizing
            various frameworks to create visually appealing and user-friendly
            web interfaces. My focus is on building dynamic and interactive
            websites that prioritize an excellent user experience. I'm committed
            to ensuring accessibility, responsiveness, and overall usability in
            the projects I work on.
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
