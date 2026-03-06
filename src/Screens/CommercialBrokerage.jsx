import React from 'react'
import Navbar from '../Components/Navbar'
import CommercialBrokerageComponent from '../Components/CommercialBrokerageComponent'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'   

const CommercialBrokerage = () => {
         useEffect(() => {
        
            document.title = "Commercial Brokerage - Perch International";
          });
  return (
    <div>
      <Navbar/>
      <CommercialBrokerageComponent/>
      <CTASection/>
      <Footer/>

    </div>
  )
}

export default CommercialBrokerage
