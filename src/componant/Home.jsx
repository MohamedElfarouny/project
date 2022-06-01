import Ma from "../images/Mahmoud.jpg";
import Me from "../images/me.jpg";
import Mi from "../images/Maii.png";
import Mr from "../images/Merna.png";
// import Vedio from "../vedios/car.mp4";
import ic from "https://code.iconify.design/2/2.2.1/iconify.min.js";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showinfo, setshowinfo] = useState(false);
  const Hide = () => {
    setshowinfo(!showinfo);
  };

  const [showVedio, setshowVedio] = useState(false);
  const show = () => {
    setshowVedio(!showVedio);
  };
  return (
    <div >
      <section className="hero">
        <div className="container">
          <div className="main-message">
            <h2> Travling </h2>
            <h1> Start your Journey </h1>
            <div>
              Trusted companies are the ones that show you the difference
              between Good travel environment and bad travel environment
              Therefore we enjoy the confidence of our customers throughout the
              region and seek to expand the company's activity to all parts of
              the world by providing means of comfort and safety for all our
              customers in addition to the best and lowest price.
              {/* <br><br> */}
              <div>
                But mistrusting bad companies is only half the battle. Then you
                have to find a good company.
              </div>
            </div>

            <div>
              <Link
                to="/Api"
                className="btn"
              >
                SignUp Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-outdoor">
        <div className="container">
          <div className="title-heading">
            <h3> Experience </h3>
            <h1> The Thrilling outdoors </h1>
            <div>
              Beautiful Cities Travel Trends You Should Try Now! Back to the
              grind after the holidays? Join the latest trends and enhance your
              natural comfort with our website Three great directions for
              convenient travel anywhere you like.
              {/* <br><br> */}
              As we all know, traveling can be boring, especially if you don't
              have an exciting goal to pursue or you don't have a car. Like to
              travel to a beautiful city for entertainment. Or a major
              life-changing event like a wedding. 'Experimental' is the word
              Your screaming lately... You get your peace of mind almost by
              chance when you find and test a new opportunity. We are back to
              the great outdoors...
            </div>
          </div>
          <div className="activities-grid">
            <div className="activities-grid-item car">
              <i className="ion-md-car-sport">
                <span className="iconify" data-icon="ion:car-sport"></span>
                <script src={ic}/>
              </i>
              <h1> Car </h1>
              <button className="btn" onClick={Hide}>
                Show
              </button>
              {showinfo && (
                <div>
                  First of all, the car is one of the most important means of
                  transportation currently available, which is used in many
                  tasks such as: Wedding day... The best and most luxurious cars
                  are available with chauffeur on wedding nights. And family
                  trips...the fastest and most luxurious cars are available,
                  with or without the driver. And many other urgent matters that
                  each of us may fall into in his day, which need a necessary
                  car.
                </div>
              )}
            </div>

            <div className="activities-grid-item Minibus">
              <i className="tabler-md-bus">
                <span className="iconify" data-icon="tabler:bus"></span>
                <script src={ic}/>
              </i>
              <h1> Minibus </h1>
              <button className="btn" onClick={Hide}>
                Show
              </button>
              {showinfo && (
                <div>
                  The second most important means of transportation in our daily
                  life. Most of the small projects that want to provide a safe
                  and comfortable means of transportation for their workers,
                  provide them with microbuses. Which is a fast, safe and
                  inexpensive means of transportation. If you want to travel and
                  the whole family with you, it is more correct to provide them
                  with the microbus, which allows you to be safe and comfortable
                  in it. If you are one of the owners of small companies and
                  want to provide a means of transportation for your workers
                  that is small, safe and inexpensive. And other important
                  matters in which you need a relatively small, safe and
                  inexpensive means of transportation.
                </div>
              )}
            </div>
            <div className="activities-grid-item bus">
              <i className="ion-md-bus">
                <span className="iconify" data-icon="ion:bus"></span>
                <script src={ic}/>
              </i>
              <h1> Bus </h1>
              <button className="btn" onClick={Hide}>
                Show
              </button>
              {showinfo && (
                <div>
                  The third and last most important means of transportation
                  available to us. If you are one of the owners of large
                  companies and want to provide a large and safe means of
                  transportation for the workers of your company, you have no
                  choice but to choose the bus. Where he is able to accommodate
                  a large number of people.. so you satisfy your workers and
                  provide financial value to the company.. But if you are one of
                  the organizers of school or university trips and want to
                  provide buses for the number of students participating in the
                  trip, and at a lower cost, you only have to book with us..
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="testimonial">
          <div className="testimonial-text-box">
            <div className="testimonial-customer">
              <h1> Managers </h1>
              <img src={Me} alt={""}/> <img src={Ma} alt={""}/>
              <img src={Mi} alt={""}/> <img src={Mr} alt={""}/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="video">
          <button className="btn" onClick={show}>
            Show Video
          </button>
          {showVedio && (
            <video width="570" height="570" controls src={''}></video>
          )}
        </div>
      </section>
      <footer >
      <div> &copy; 2022 Outdoorsie . All right reseved </div>
    </footer>
    </div>
  );
};
export default Header;
