import { NavLink } from "react-router-dom";
import "../Styles/LoyaltyCardServicesComponent.css";

function LoyaltyCardServicesComponent() {
  return (
    <section className="service-page">

      <div className="service-container">

        {/* LEFT SIDEBAR */}
        <aside className="service-sidebar">

          <h3>Our Services</h3>

          <NavLink to="/commercial-brokerage">
            Commercial Brokerage
          </NavLink>

          <NavLink to="/discount-card-services">
            Discount Card Services
          </NavLink>

          <NavLink to="/loyalty-card-services" className="active">
            Loyalty Card Services
          </NavLink>

          <NavLink to="/financial-consulting">
            Financial Consulting
          </NavLink>

        </aside>


        {/* RIGHT CONTENT */}
        <div className="service-content">

          <h1>
            Loyalty Card <span>Services</span>
          </h1>

          <p className="service-intro">
            At <strong>Perch International</strong>, our Loyalty Card Services
            help businesses build stronger relationships with their customers.
            By rewarding repeat purchases and encouraging engagement, loyalty
            programs create long‑term value for both businesses and their
            customers.
          </p>


          {/* FEATURES */}

          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Customer Reward Programs</h4>
              <p>
                Encourage repeat business by offering customers points,
                rewards, or special benefits every time they make a purchase.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Brand Loyalty Development</h4>
              <p>
                Loyalty cards help strengthen your brand connection with
                customers, turning occasional buyers into long‑term clients.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Personalized Customer Offers</h4>
              <p>
                Businesses can provide exclusive deals and promotions
                tailored specifically for loyal customers.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Customer Insights</h4>
              <p>
                Loyalty programs help businesses understand purchasing
                patterns, enabling better marketing strategies and improved
                customer experiences.
              </p>
            </div>
          </div>


        </div>

      </div>

    </section>
  );
}

export default LoyaltyCardServicesComponent;