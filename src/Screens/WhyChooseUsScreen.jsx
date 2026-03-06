import React from 'react'
import Navbar from '../Components/Navbar'
import WhyChooseUs from '../Components/WhyChooseUs'
import ServicesSection from '../Components/ServicesSection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const WhyChooseUsScreen = () => {
   useEffect(() => {
          
              document.title = "Why Choose Us - Perch International";
            });
  return (
    <div>
      <Navbar/>
      <WhyChooseUs/>
      <ServicesSection/>
      <Footer/>
    </div>
  )
}

export default WhyChooseUsScreen
