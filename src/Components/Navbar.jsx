import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="Perch International Logo" onClick={() => navigate("/")} />
        </NavLink>

        {/* NAV LINKS */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About Us</NavLink>

          <NavLink to="/why-choose-us">Why Choose Us</NavLink>

          {/* SERVICES DROPDOWN */}
          <div className="dropdown">

            <span className="dropdown-title">
              Our Services ▾
            </span>

            <div className="dropdown-menu">

              <NavLink to="/commercial-brokerage">
                Commercial Brokerage
              </NavLink>

              <NavLink to="/discount-card-services">
                Discount Card Services
              </NavLink>

              <NavLink to="/loyalty-card-services">
                Loyalty Card Services
              </NavLink>

              <NavLink to="/financial-consulting">
                Financial Consulting
              </NavLink>

            </div>

          </div>

        </nav>

        {/* CONTACT BUTTON */}
        <NavLink to="/contact" className="contact-btn">
          Contact Us
        </NavLink>

        {/* MOBILE MENU ICON */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;