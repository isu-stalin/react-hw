import Header from "../header/Header";
import "./Hero.css";

const HeroSection = () => (
  <section className="hero">
    <Header />
    <div className="overlay">
      <div className="hero-content">
        <h2>Let’s do it together.</h2>
        <p>We travel the world in search of stories. Come along for the ride..</p>
        <button>View Latest Posts</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
