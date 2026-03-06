import "../Styles/ServicesSection.css";
import { 
  FaChartLine, 
  FaGlobe, 
  FaHandshake, 
  FaLightbulb, 
  FaBuilding, 
  FaShieldAlt 
} from "react-icons/fa";

function ServicesSection() {
  return (
    <section className="s-services">
      <div className="s-services-container">

        <div className="s-section-header">
          <h2>Our Core Services</h2>
          <p>
            We provide strategic solutions that help businesses expand,
            optimize and scale globally with confidence.
          </p>
        </div>

        <div className="s-services-grid">

          <div className="s-service-card">
            <FaChartLine className="s-service-icon" />
            <h3>Financial Advisory</h3>
            <p>
              Strategic financial planning and advisory services 
              to ensure sustainable long-term growth.
            </p>
          </div>

          <div className="s-service-card">
            <FaGlobe className="s-service-icon" />
            <h3>Global Expansion</h3>
            <p>
              Structured international expansion strategies 
              for global market penetration.
            </p>
          </div>

          <div className="s-service-card">
            <FaHandshake className="s-service-icon" />
            <h3>Business Consulting</h3>
            <p>
              Data-driven consulting solutions to improve 
              performance and profitability.
            </p>
          </div>

          <div className="s-service-card">
            <FaLightbulb className="s-service-icon" />
            <h3>Strategic Planning</h3>
            <p>
              Comprehensive business roadmaps designed 
              for innovation and competitive advantage.
            </p>
          </div>

          <div className="s-service-card">
            <FaBuilding className="s-service-icon" />
            <h3>Corporate Structuring</h3>
            <p>
              Optimized corporate frameworks that enhance 
              governance and operational efficiency.
            </p>
          </div>

          <div className="s-service-card">
            <FaShieldAlt className="s-service-icon" />
            <h3>Risk Management</h3>
            <p>
              Identifying and mitigating financial and 
              operational risks proactively.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;