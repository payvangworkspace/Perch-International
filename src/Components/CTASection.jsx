import "../Styles/CTASection.css";
import { NavLink } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta">

      <div className="cta-container">

        <h2>Ready to Expand Your Business Globally?</h2>

        <p>
          Partner with Perch International and unlock new growth 
          opportunities with expert strategy and execution.
        </p>

        <div className="cta-buttons">
          <NavLink to="/contact" className="cta-primary">
            Get in Touch
          </NavLink>

          <NavLink to="/services" className="cta-secondary">
            Explore Services
          </NavLink>
        </div>

      </div>

    </section>
  );
}

export default CTASection;