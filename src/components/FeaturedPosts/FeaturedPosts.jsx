import './FeaturedPosts.css';
import postImg from '../../assets/post1.jpg';
import postImg2 from '../../assets/post2.jpg';
import authorImgWilliam from '../../assets/william.jpg';
import authorImgMat from '../../assets/mat.jpg';

const FeaturedPosts = () => (
  <section className='featured-posts'>
    <h1>Featured Posts</h1>
    <div className="featured">
      <div className="card">
        <img src={postImg} alt="The Road Ahead" />
        <div className="overlay">
        <div className="content">
          <h2>The Road Ahead</h2>
          <p>The road ahead might be paved – it might not be.</p>
          <div className="author">
            <div className="left">
              <img src={authorImgMat} alt="Mat Vogels" />
              <span>Mat Vogels</span>
            </div>
            <div className="right">September 25, 2015</div>
          </div>
        </div>
      </div>
    </div>

      <div className="card">
        <img src={postImg2} alt="The Road Ahead" />
        <div className="overlay">
          <div className="content">
            <h2>From Top Down</h2>
            <p>Once a year, go someplace you’ve never been before.</p>
            <div className="author">
              <div className="left">
                <img src={authorImgWilliam} alt="Mat Vogels" />
                <span>William Wong</span>
              </div>
              <div className="right">September 25, 2015</div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
);

export default FeaturedPosts;
