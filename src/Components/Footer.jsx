import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-logo">Perch International</h3>
          <p>
            Delivering strategic consulting and global expansion
            solutions to help businesses achieve sustainable growth.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <p>Business Consulting</p>
          <p>Market Expansion</p>
          <p>Financial Advisory</p>
          <p>Strategic Planning</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>Email: info@perch-international.com</p>
          <p>Phone: +971 00 000 0000</p>
          <p>Location: Dubai, UAE</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Perch International. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;