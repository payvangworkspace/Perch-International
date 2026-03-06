import React from 'react'
import Navbar from '../Components/Navbar'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const Contact = () => {
   useEffect(() => {
          
              document.title = "Contact Us - Perch International";
            });
  return (
    <div>
        <Navbar/>
        <ContactSection/>
        <Footer/>
      
    </div>
  )
}

export default Contact
