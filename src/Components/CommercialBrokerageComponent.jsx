import { NavLink } from "react-router-dom";
import "../Styles/CommercialBrokerageComponent.css";

function CommercialBrokerageComponent() {
  return (
    <section className="cb-page">

      <div className="cb-container">

        {/* LEFT SIDEBAR */}
        <aside className="cb-sidebar">

          <h3>Our Services</h3>

          <NavLink to="/commercial-brokerage" className="active">
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

        </aside>


        {/* RIGHT CONTENT */}
        <div className="cb-content">

          <h1>
            Commercial <span>Brokerage</span>
          </h1>

          <p className="cb-intro">
            At <strong>Perch International</strong>, we provide reliable commercial
            brokerage solutions that help businesses secure the right
            properties and investment opportunities. Our experienced team
            works closely with clients to understand their goals and deliver
            tailored real estate and business solutions that support long-term
            growth.
          </p>


          {/* SERVICES */}

          <div className="cb-feature">
            <div className="cb-icon">✓</div>

            <div>
              <h4>Commercial Property Acquisition</h4>
              <p>
                We assist businesses in identifying and acquiring commercial
                properties that match their operational and financial
                requirements.
              </p>
            </div>
          </div>


          <div className="cb-feature">
            <div className="cb-icon">✓</div>

            <div>
              <h4>Leasing & Rental Advisory</h4>
              <p>
                Our experts guide clients through leasing opportunities,
                ensuring the best locations and agreements for sustainable
                business growth.
              </p>
            </div>
          </div>


          <div className="cb-feature">
            <div className="cb-icon">✓</div>

            <div>
              <h4>Market Analysis</h4>
              <p>
                We provide valuable insights into market trends, property
                values, and strategic opportunities to help businesses make
                informed decisions.
              </p>
            </div>
          </div>


          <div className="cb-feature">
            <div className="cb-icon">✓</div>

            <div>
              <h4>Investment Opportunities</h4>
              <p>
                Our brokerage services connect investors with profitable
                commercial opportunities in growing markets.
              </p>
            </div>
          </div>


        </div>

      </div>

    </section>
  );
}

export default CommercialBrokerageComponent;