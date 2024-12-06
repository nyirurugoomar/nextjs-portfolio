import Image from "next/image";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


function Heroes() {
  return (
    <div
      id="home"
      className="w-full md:h-screen h-full text-center md:pt-60 pt-0 bg-[#121729]"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-cente ">
        <div className="md:mt-4 mt-40">
          <h1 className=" text-white">
            Hi, I'm <span className="text-[#5651e5]">Omar</span>
          </h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            A Full-Stack Engineer 🧑‍💻 Dedicated to crafting accessible Web and
            Mobile solutions, Based in Kigali - Rwanda 🇷🇼 the heart of Africa.
          </p>
          
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/omar-nyirurugo-08bb1b157/">
                <FaLinkedin color="white" />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/nyirurugoomar">
                <FaGithub color="white" />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaInstagram color="white" />
            </div>

            <div className="rounded-full shadow-lg shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.behance.net/omarnyirurugo">
                <FaBehance color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
