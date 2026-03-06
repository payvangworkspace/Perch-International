import "../Styles/Testimonials.css";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.jpg";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-header">
        <h2>Trusted by Industry Leaders Worldwide</h2>
        <p>
          Our clients value our strategic insight, transparency,
          and commitment to delivering measurable business outcomes.
        </p>
      </div>

      <div className="testimonials-container">

        <div className="testimonial-card">
          <div className="rating">★★★★★</div>
          <p>
            Perch International played a crucial role in our
            international expansion. Their strategic clarity
            and structured execution exceeded expectations.
          </p>

          <div className="client-info">
            <img src={client1} alt="Client" />
            <div>
              <h4>Michael Anderson</h4>
              <span>CEO, GlobalTech Ltd.</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="rating">★★★★★</div>
          <p>
            Their financial advisory services helped us
            streamline operations and increase profitability
            within the first year.
          </p>

          <div className="client-info">
            <img src={client2} alt="Client" />
            <div>
              <h4>Sarah Johnson</h4>
              <span>Director, FinCore Group</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="rating">★★★★★</div>
          <p>
            Professional, data-driven and highly reliable.
            A trusted partner for long-term strategic growth.
          </p>

          <div className="client-info">
            <img src={client3} alt="Client" />
            <div>
              <h4>David Lee</h4>
              <span>Managing Partner, Nexa Holdings</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;