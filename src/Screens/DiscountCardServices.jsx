import React from 'react'
import Navbar from '../Components/Navbar'
import DiscountCardServicesComponent from '../Components/DiscountCardServicesComponent'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const DiscountCardServices = () => {
     useEffect(() => {
            
                document.title = "Discount Card Services - Perch International";
              });
  return (
    <div>
        <Navbar/>
        <DiscountCardServicesComponent/>
        <CTASection/>
        <Footer/>
      
    </div>
  )
}

export default DiscountCardServices
