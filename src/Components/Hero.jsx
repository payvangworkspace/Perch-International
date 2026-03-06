import "../Styles/Home.css"; // add your styles here
import heroImg from "../assets/hero.png"; // add your image here

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            Empowering Global <span>Business Growth</span>
          </h1>

          <p>
            Perch International provides strategic consulting, 
            financial advisory and global expansion solutions 
            to help businesses scale confidently.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={heroImg} alt="Business Growth" />
        </div>

      </div>
    </section>
  );
}

export default Hero;