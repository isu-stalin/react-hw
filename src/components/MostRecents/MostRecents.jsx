import './MostRecents.css';
import recentImg1 from '../../assets/recent1.jpg';
import recentImg2 from '../../assets/recent2.jpg';
import recentImg3 from '../../assets/recent3.jpg';
import recentImg4 from '../../assets/recent4.jpg';
import recentImg5 from '../../assets/recent5.jpg';
import recentImg6 from '../../assets/recent6.jpg';
import authorImg1 from '../../assets/william.jpg';
import authorImg2 from '../../assets/mat.jpg';

const MostRecent = () => (
  <section className="most-recent">
    <h2>Most Recent</h2>
      <div className="recent-box">
        <div className="recent-card">
          <img src={recentImg1} alt="" />
          <div className="for-padd">
            <h4>Still Standing Tall</h4>
            <p>Life begins at the end of your comfort zone.</p>
          </div>
          <div className="author1 sec-author">
            <div className='author-img-box'>
              <img src={authorImg1} alt="Author" />
              <div className="name">William Wong</div>
            </div>
            <div className="date">9/25/2015</div>
          </div>
        </div>

        <div className="recent-card">
          <img src={recentImg2} alt="" />
          <div className="for-padd">
            <h4>Sunny Side Up</h4>
            <p>No place is ever as bad as they tell you it’s going to be.</p>
          </div>
          <div className="author1">
            <div className='author-img-box'>
              <img src={authorImg2} alt="Author" />
              <div className="name">Mat Vogels</div>
            </div>
            <div className="date">9/25/2015</div>
          </div>
        </div>

        <div className="recent-card">
          <img src={recentImg3} alt="" />
          <div className="for-padd">
            <h4>Water Falls</h4>
            <p>We travel not to escape life, but for life not to escape us.</p>
          </div>
          <div className="author1">
            <div className='author-img-box'>
              <img src={authorImg2} alt="Author" />
              <div className="name">Mat Vogels</div>
            </div>
            <div className="date">9/25/2015</div>
          </div>
        </div>

        <div className="recent-card">
          <img src={recentImg4} alt="" />
          <div className="for-padd">
            <h4>Through the Mist</h4>
            <p>Travel makes you see what a tiny place you occupy in the world.</p>
          </div>
          <div className="author1">
            <div className='author-img-box'>
              <img src={authorImg1} alt="Author" />
              <div className="name">William Wong</div>
            </div>
            <div className="date">9/25/2015</div>
          </div>
        </div>

        <div className="recent-card">
          <img src={recentImg5} alt="" />
          <div className="for-padd">
            <h4>Awaken Early</h4>
            <p>Not all those who wander are lost.</p>
          </div>
          <div className="author1">
            <div className='author-img-box'>
              <img src={authorImg2} alt="Author" />
              <div className="name">Mat Vogels</div>
            </div>
            <div className="date">9/25/2015</div>
          </div>
        </div>

        <div className="recent-card">
          <img src={recentImg6} alt="" />
          <div className="for-padd">
            <h4>Try it Always</h4>
            <p>The world is a book, and those who do not travel read only one page.</p>
          </div>
          <div className="author1">
            <div className='author-img-box'>
              <img src={authorImg2} alt="Author" />
              <div className="name">Mat Vogels</div>
            </div>
            <div className="date">9/25/2015</div>
          </div>
        </div>
      </div>
  </section>
);

export default MostRecent;
