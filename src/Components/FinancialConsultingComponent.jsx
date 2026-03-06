import { NavLink } from "react-router-dom";
import "../Styles/LoyaltyCardServicesComponent.css";

function FinancialConsultingComponent() {
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

          <NavLink to="/loyalty-card-services">
            Loyalty Card Services
          </NavLink>

          <NavLink to="/financial-consulting" className="active">
            Financial Consulting
          </NavLink>

        </aside>


        {/* RIGHT CONTENT */}
        <div className="service-content">

          <h1>
            Financial <span>Consulting</span>
          </h1>

          <p className="service-intro">
            At <strong>Perch International</strong>, our Financial Consulting
            services are designed to help businesses and individuals make
            confident financial decisions. We provide expert guidance,
            strategic planning, and practical solutions that support
            sustainable growth and long‑term financial stability.
          </p>


          {/* FEATURES */}

          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Financial Strategy Planning</h4>
              <p>
                We help businesses develop clear financial strategies
                that align with their goals and support long‑term success.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Business Financial Advisory</h4>
              <p>
                Our advisors provide insights and recommendations to
                improve financial performance and manage business risks.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Investment Guidance</h4>
              <p>
                We assist clients in identifying smart investment
                opportunities and planning portfolios for better returns.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Budget & Cost Optimization</h4>
              <p>
                Our consulting services help organizations optimize
                spending, manage budgets effectively, and improve
                financial efficiency.
              </p>
            </div>
          </div>


        </div>

      </div>

    </section>
  );
}

export default FinancialConsultingComponent;