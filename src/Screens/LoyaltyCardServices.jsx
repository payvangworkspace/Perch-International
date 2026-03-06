import React from 'react'
import Navbar from '../Components/Navbar'
import LoyaltyCardServicesComponent from '../Components/LoyaltyCardServicesComponent'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const LoyaltyCardServices = () => {
     useEffect(() => {
            
                document.title = "Loyalty Card Services - Perch International";
              });
  return (
    <div>
        <Navbar/>
        <LoyaltyCardServicesComponent/>
        <CTASection/>
        <Footer/>
      
    </div>
  )
}

export default LoyaltyCardServices
