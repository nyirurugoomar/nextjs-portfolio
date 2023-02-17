
import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Securetech from '../public/assets/projects/Secure Tech.png'
import Fintech from '../public/assets/projects/fintech.png'
import datasecure from '../public/assets/projects/data-secure.png'
import phoneselling from '../public/assets/projects/smart-phone.png'
import edc from '../public/assets/projects/EDC.png'
// import genderapp from '../public/assets/projects/gender-app.png'
import selling from '../public/assets/projects/selling page.png'
import genderapp from '../public/assets/projects/Genderapp.png'

function Projects() {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Build</h2>
            <div className='grid md:grid-cols-3 gap-8'>

               <ProjectItem 
               title='Secute Tech' 
               backgroundImg={Securetech} 
               projectUrl='https://securetechrw.netlify.app/'
               tools='Reactjs,Styled-Component'
               />

            <ProjectItem 
             title='FinTech Landing Page' 
             backgroundImg={Fintech} 
             projectUrl='https://fintechrw.netlify.app/'
             tools='ReactJs,TailwindCss'
             />

            <ProjectItem 
             title='Data Secure' 
             backgroundImg={datasecure} 
             projectUrl='https://data-secure-app.netlify.app/'
             tools='Reactjs,Styled-Component'
             />
             <ProjectItem 
             title='Gender App ' 
             backgroundImg={genderapp} 
             projectUrl='https://gender-app.netlify.app/'
             tools='Reactjs,TailwindCss'
             />

            <ProjectItem 
             title='TECNO MOBILE' 
             backgroundImg={phoneselling} 
             projectUrl='https://techno-smart-phone.netlify.app/'
             tools='HTML,CSS and JAVASCRIPT'
             />

             <ProjectItem 
             title='EDC' 
             backgroundImg={edc} 
             projectUrl='https://education-dc.com/'
             tools='Wordpress,Elementor Pro'
             />
             
            <ProjectItem 
             title='Beyon' 
             backgroundImg={selling} 
             projectUrl='https://selling-page.netlify.app/index.html'
             tools='HTML,CSS and JAVASCRIPT'
             />

            
               
            </div>

            

            
        </div>
    </div>
  )
}

export default Projects