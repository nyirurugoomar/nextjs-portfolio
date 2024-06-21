import React from "react";
import ProjectItem from "../components/ProjectItem";
import Securetech from "../public/assets/projects/Secure Tech.png";
import Fintech from "../public/assets/projects/fintech.png";
import datasecure from "../public/assets/projects/data-secure.png";
import phoneselling from "../public/assets/projects/smart-phone.png";
import edc from "../public/assets/projects/EDC.png";
// import genderapp from '../public/assets/projects/gender-app.png'
import selling from "../public/assets/projects/selling page.png";
import genderapp from "../public/assets/projects/Genderapp.png";
import furniture from "../public/assets/projects/furniture.png";
import gaming from "../public/assets/projects/gaming.png";
import hydra from "../public/assets/projects/hydra.png";
import house from "../public/assets/projects/house sell.png";
import tourism from "../public/assets/Tourism.png";
import helpcenter from "../public/assets/projects/Helpcenter.png";
import Logist from "../public/assets/projects/Logist.png";
import investment from "../public/assets/projects/investment group.png";
import blog from "../public/assets/projects/Blog.png";

function Projects() {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
        <ProjectItem
            title="Blog"
            backgroundImg={blog}
            projectUrl="https://finsweet-blog-new.vercel.app/"
            tools="Nextjs,Tailwind,Sanity,Typescript"
          />
        <ProjectItem
            title="Logistic LandingPage"
            backgroundImg={Logist}
            projectUrl="https://logist-app.vercel.app/"
            tools="Nextjs,Tailwind"
          />
          <ProjectItem
            title="Investment Group"
            backgroundImg={investment}
            projectUrl="https://real-estate-pink-alpha.vercel.app/"
            tools="React,Tailwind"
          />
          <ProjectItem
            title="Secute Tech"
            backgroundImg={Securetech}
            projectUrl="https://securetechrw.netlify.app/"
            tools="Reactjs,Styled-Component"
          />

          <ProjectItem
            title="FinTech Landing Page"
            backgroundImg={Fintech}
            projectUrl="https://fintechrw.netlify.app/"
            tools="ReactJs,TailwindCss"
          />

          <ProjectItem
            title="Data Secure"
            backgroundImg={datasecure}
            projectUrl="https://data-secure-app.netlify.app/"
            tools="Reactjs,Styled-Component"
          />
         
          <ProjectItem
            title="Tourism Agency/Under Kitech Project"
            backgroundImg={tourism}
            projectUrl="http://vazqueztours.com/"
            tools="Reactjs,Tailwind"
          />
          <ProjectItem
            title="Gaming Landing Page"
            backgroundImg={gaming}
            projectUrl="https://gaminglandingpage-app.netlify.app/"
            tools="Reactjs,Tailwind"
          />
          <ProjectItem
            title="Help Center Application"
            backgroundImg={helpcenter}
            projectUrl="https://github.com/nyirurugoomar/mern-auth"
            tools="Reactjs,Tailwind,Nodejs,Express,MongoDB"
          />
          <ProjectItem
            title="Gender App "
            backgroundImg={genderapp}
            projectUrl="https://gender-app.netlify.app/"
            tools="Reactjs,TailwindCss"
          />

          <ProjectItem
            title="TECNO MOBILE"
            backgroundImg={phoneselling}
            projectUrl="https://techno-smart-phone.netlify.app/"
            tools="HTML,CSS and JAVASCRIPT"
          />

          <ProjectItem
            title="EDC"
            backgroundImg={edc}
            projectUrl="https://education-dc.com/"
            tools="Wordpress,Elementor Pro"
          />

          <ProjectItem
            title="Beyon"
            backgroundImg={selling}
            projectUrl="https://selling-page.netlify.app/index.html"
            tools="HTML,CSS and JAVASCRIPT"
          />

          <ProjectItem
            title="Home Furniture"
            backgroundImg={furniture}
            projectUrl="https://furniture-testing-app.netlify.app/"
            tools="Reactjs,Tailwind"
          />

          

          <ProjectItem
            title="Hydra"
            backgroundImg={hydra}
            projectUrl="https://github.com/nyirurugoomar/HYDRA-APP"
            tools="Nextjs,Tailwind"
          />

          <ProjectItem
            title="House For Sell"
            backgroundImg={house}
            projectUrl="https://github.com/nyirurugoomar/House-Rent-App"
            tools="Reactjs,Tailwind"
          />

          
          
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
