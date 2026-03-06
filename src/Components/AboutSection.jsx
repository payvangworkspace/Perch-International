import "../Styles/AboutSection.css";
import aboutImg from "../assets/about.jpg";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="About Perch International" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <h2>
            About <span>Perch International</span>
          </h2>

          <p>
            Perch International is a global consulting firm dedicated to
            helping businesses expand strategically and operate efficiently
            across international markets.
          </p>

          <p>
            With deep industry expertise and a data-driven approach,
            we provide tailored solutions in business consulting,
            financial advisory, and market expansion strategies.
          </p>

          <div className="about-highlights">
            <div>
              <h4>✔ Global Expertise</h4>
              <p>Serving clients across multiple international markets.</p>
            </div>

            <div>
              <h4>✔ Strategic Growth</h4>
              <p>Focused on sustainable and measurable business outcomes.</p>
            </div>

            <div>
              <h4>✔ Trusted Partnerships</h4>
              <p>Building long-term value-driven relationships.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;