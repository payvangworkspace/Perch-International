import { useEffect, useState } from "react";
import "../Styles/StatsSection.css";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-box">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="stats">

      {/* SECTION HEADER */}
      <div className="stats-header">
        <h2>Delivering Measurable Impact Worldwide</h2>
        <p>
          Our commitment to excellence, strategic expertise, and client-focused
          solutions has helped organizations achieve sustainable success
          across global markets.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="stats-container">
        <Counter target={250} label="Global Clients" />
        <Counter target={15} label="Years of Experience" />
        <Counter target={40} label="Countries Served" />
        <Counter target={98} label="Success Rate" />
      </div>

    </section>
  );
}

export default StatsSection;