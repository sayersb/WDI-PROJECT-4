import React from 'react';
// import Carousel from 'nuka-carousel';
import Slider from 'react-slick';

const Home = () => {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Ticketmania
          </h1>
          <Slider>
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
  );
};

export default Home;
