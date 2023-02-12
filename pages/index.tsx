import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Heroes from '../components/Heroes'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Omar-Nyirurugo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <Heroes/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home
