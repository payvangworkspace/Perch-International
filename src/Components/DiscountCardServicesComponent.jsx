import { NavLink } from "react-router-dom";
import "../Styles/DiscountCardServicesComponent.css";

function DiscountCardServicesComponent() {
  return (
    <section className="service-page">

      <div className="service-container">

        {/* LEFT SIDEBAR */}
        <aside className="service-sidebar">

          <h3>Our Services</h3>

          <NavLink to="/commercial-brokerage">
            Commercial Brokerage
          </NavLink>

          <NavLink to="/discount-card-services" className="active">
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
        <div className="service-content">

          <h1>
            Discount Card <span>Services</span>
          </h1>

          <p className="service-intro">
            At <strong>Perch International</strong>, our Discount Card
            Services are designed to help businesses attract more customers
            while providing valuable savings to cardholders. By partnering
            with trusted brands and service providers, we create exclusive
            discount programs that benefit both businesses and consumers.
          </p>


          {/* FEATURES */}

          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Exclusive Customer Discounts</h4>
              <p>
                Offer your customers access to special deals and discounts
                across various partner businesses, increasing engagement
                and customer satisfaction.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Business Promotion Opportunities</h4>
              <p>
                Businesses can showcase their offers to a wider audience
                through our discount card network, helping them grow
                visibility and sales.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Partnership Network</h4>
              <p>
                We build strong partnerships with retailers, restaurants,
                and service providers to deliver valuable benefits to
                cardholders.
              </p>
            </div>
          </div>


          <div className="service-feature">
            <div className="service-icon">✓</div>

            <div>
              <h4>Customer Loyalty Growth</h4>
              <p>
                Discount cards help businesses strengthen long‑term
                relationships with their customers by offering continuous
                savings and rewards.
              </p>
            </div>
          </div>


        </div>

      </div>

    </section>
  );
}

export default DiscountCardServicesComponent;