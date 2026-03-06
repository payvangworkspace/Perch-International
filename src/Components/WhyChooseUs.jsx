import "../Styles/WhyChooseUs.css";
import { FaCheckCircle, FaUsers, FaAward, FaClock } from "react-icons/fa";
import aboutImg from "../assets/about.png"; // add a professional image here

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <h2>Why Choose Perch International?</h2>
          <p>
            We combine global expertise with strategic insights to help 
            businesses achieve sustainable growth and competitive advantage.
          </p>

          <div className="why-features">

            <div className="why-item">
              <FaCheckCircle className="why-icon" />
              <div>
                <h4>Proven Strategies</h4>
                <p>Data-driven methodologies for measurable success.</p>
              </div>
            </div>

            <div className="why-item">
              <FaUsers className="why-icon" />
              <div>
                <h4>Expert Team</h4>
                <p>Experienced professionals across multiple industries.</p>
              </div>
            </div>

            <div className="why-item">
              <FaAward className="why-icon" />
              <div>
                <h4>Trusted Reputation</h4>
                <p>Strong track record of delivering impactful results.</p>
              </div>
            </div>

            <div className="why-item">
              <FaClock className="why-icon" />
              <div>
                <h4>Timely Execution</h4>
                <p>Efficient project management with reliable delivery.</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="why-right">
          <img src={aboutImg} alt="Why Choose Us" />
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;