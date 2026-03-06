import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ServicesSection from '../Components/ServicesSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import StatsSection from '../Components/StatsSection'
import Testimonials from '../Components/Testimonials'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'

const Home = () => {

  useEffect(() => {

  document.title = "Home - Perch International";
  });



  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home
