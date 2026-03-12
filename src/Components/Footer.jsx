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

          <p>
            Email:{" "}
            <a href="mailto:lapwork07@gmail.com" className="footer-link">
              lapwork07@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:00971552495008" className="footer-link">
              00971552495008
            </a>
          </p>

          <p>
            Location: FDRK1945 Compass Building, Al Shohada Road,<br />
            Al Hamra Industrial Zone-FZ,<br />
            Ras Al Khaimah, United Arab Emirates
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Perch International. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;