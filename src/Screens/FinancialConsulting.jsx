import React from 'react'
import Navbar from '../Components/Navbar'
import FinancialConsultingComponent from '../Components/FinancialConsultingComponent'
import CTASection from '../Components/CTASection'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const FinancialConsulting = () => {
     useEffect(() => {
            
                document.title = "Financial Consulting - Perch International";
              });
  return (
    <div>
      <Navbar/>
      <FinancialConsultingComponent/>
      <CTASection/>
      <Footer/>

    </div>
  )
}

export default FinancialConsulting
