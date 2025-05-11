import './stayInTouch.css';
import Footer from '../Footer/Footer';

const StayInTouch = () => (
  <section className="stay-in-touch">
    <div className="stay-container">
      <div className="stay-text">
        <h2>Stay in Touch</h2>
      </div>
      <div className="stay-inp">
        <input type="email" placeholder="Enter your email address" />
        <button>Submit</button>
      </div>
    </div>
    <Footer />
  </section>
);

export default StayInTouch;
