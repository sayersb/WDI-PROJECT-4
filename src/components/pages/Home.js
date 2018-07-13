import React from 'react';
import Slider from 'react-slick';
// import { Player } from 'video-react';

const Home = () => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  //
  // };
  return (

    <div className="homepage">
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Ticketmania
            </h1>
            <Slider>
              {/* <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player> */}
              <img src="https://somoconcerts.com/wp-content/uploads/2018/03/SOMO_Slider_1800_crowd_3-0x0.jpg" />
              <img src="https://countryclones.com/wp-content/uploads/2017/11/2018-country-concerts.png" />
              <img src="https://data1.ibtimes.co.in/cache-img-0-450/en/full/692210/1530683754_harry-kane-celebrating-his-goal-vs-colombia.jpg" />
              <img src="https://www.theontarion.com/wp-content/uploads/2017/02/Rapters_kyliearmishaw.jpg" />
            </Slider>
            <h2 className="subtitle">
              An online marketplace for event tickets..
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
