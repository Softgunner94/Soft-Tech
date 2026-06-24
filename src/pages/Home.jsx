import React from 'react'
import Hero from "../home/Hero"
import AboutMe from "../home/AboutMe"
import Services from '../home/Services'
import OurBlog from "../home/OurBlog"
import ContactUs from '../home/ContactUs'
import Projects from '../home/Projects'
import MySkills from "../home/MySkills"


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <ContactUs/>
      <OurBlog />
      <MySkills />
      
    </div>
  )
}

export default Home