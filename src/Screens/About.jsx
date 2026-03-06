import React from 'react'
import Navbar from '../Components/Navbar'
import AboutSection from '../Components/AboutSection'
import { useEffect } from 'react'   
import Footer from '../Components/Footer'
import VisionSection from '../Components/VisionSection'

const About = () => {
     useEffect(() => {
    
        document.title = "About Us - Perch International";
      });
  return (
    <div>
      <Navbar/>
      <AboutSection/>
      <VisionSection/>
      <Footer/>
    </div>
  )
}

export default About
