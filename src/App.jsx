import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Screens/Contact";
import About from "./Screens/About";
import Services from "./Screens/Services";
import WhyChooseUsScreen from "./Screens/WhyChooseUsScreen";
import CommercialBrokerage from "./Screens/CommercialBrokerage";
import DiscountCardServices from "./Screens/DiscountCardServices";
import LoyaltyCardServices from "./Screens/LoyaltyCardServices";
import FinancialConsulting from "./Screens/FinancialConsulting";

import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseUsScreen />} />
        <Route path="/commercial-brokerage" element={<CommercialBrokerage />} />
        <Route path="/discount-card-services" element={<DiscountCardServices />} />
        <Route path="/loyalty-card-services" element={<LoyaltyCardServices />} />
        <Route path="/financial-consulting" element={<FinancialConsulting />} />
      </Routes>
    </>
  );
}

export default App;