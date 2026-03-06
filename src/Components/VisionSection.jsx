import "../Styles/VisionSection.css";

function VisionSection() {
  return (
    <section className="vision-section">

      <div className="vision-container">

        <div className="vision-header">
          <h2>
            Our <span>Vision</span>
          </h2>
          <p>
            To become a globally trusted consulting partner that empowers
            businesses to expand beyond borders with confidence, clarity,
            and sustainable strategy.
          </p>
        </div>

        <div className="vision-cards">

          <div className="vision-card">
            <h4>Global Leadership</h4>
            <p>
              We envision becoming a leading advisory firm recognized for
              excellence in international business strategy and execution.
            </p>
          </div>

          <div className="vision-card">
            <h4>Innovation Driven</h4>
            <p>
              Our future is built on data-driven insights, innovative
              frameworks, and forward-thinking solutions.
            </p>
          </div>

          <div className="vision-card">
            <h4>Sustainable Growth</h4>
            <p>
              We aim to create long-term value for our clients by focusing
              on responsible, scalable, and measurable growth.
            </p>
          </div>

          {/* NEW CARDS */}

          <div className="vision-card">
            <h4>Client-Centric Approach</h4>
            <p>
              We prioritize understanding our clients’ unique challenges
              and delivering customized solutions that drive real impact.
            </p>
          </div>

          <div className="vision-card">
            <h4>Integrity & Transparency</h4>
            <p>
              Our vision is built on ethical practices, clear communication,
              and long-term trust with every partnership we form.
            </p>
          </div>

          <div className="vision-card">
            <h4>Future-Focused Strategy</h4>
            <p>
              We continuously adapt to evolving global markets, ensuring
              our clients stay competitive and future-ready.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default VisionSection;