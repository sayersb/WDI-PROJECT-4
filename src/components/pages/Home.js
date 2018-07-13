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
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={event.image} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h2 className="title">{event.name}</h2>
                  </div>
                </div>
              </div>
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
