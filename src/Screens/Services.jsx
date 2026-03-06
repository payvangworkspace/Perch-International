import React from 'react'
import Navbar from '../Components/Navbar'
import ServicesSection from '../Components/ServicesSection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const Services = () => {
   useEffect(() => {
          
              document.title = "Services - Perch International";
            });
  return (
    <div>
        <Navbar/>
        <ServicesSection/>
        <Footer/>
      
    </div>
  )
}

export default Services
