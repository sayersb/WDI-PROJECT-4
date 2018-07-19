import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Slider from 'react-slick';
import Promise from 'bluebird';
import GoogleMap from '../common/GoogleMap';
// import AudioImage from '../common/AudioImage';
import PayPalButton from '../common/PaypalButton';


class EventsShow extends React.Component {

  constructor() {
    super();
    this.state ={
      // event: {},
      // events: []
    };
  }

  componentDidMount() {
    Promise.props({
      event: axios.get(`/api/events/${this.props.match.params.id}`).then(res => res.data),
      events: axios.get('/api/events').then(res => res.data.filter((event, i) => i % 3 === 0))
    })
      .then(data => this.setState(data));
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      axios.get(`/api/events/${this.props.match.params.id}`)
        .then(res => this.setState({ event: res.data }));
      window.scrollTo(0, 0);
    }
  }

  handleDelete = () => {
    axios({
      url: `/api/events/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/events'));
  }

  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.event) return <h2 className="title is-2">Loading...</h2>;
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1500
    };
    return (
      //     <Link className="button" to={`/events/${this.state.event._id}/edit`}>Edit</Link>
      //     <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
      //   </div>
      // </div>
      <div>
        <div className="container">
          <div className="columns">
            <div className="column is-four-fifths">
              {/* <AudioImage className="audio-image top-image" imageSrc={this.state.event.image} audioSrc={'/assets/applause.mp3'}/> */}
              <figure className="image top-image">
                <img src={this.state.event.image} />
              </figure>
            </div>
            <div className="column">
              <h2 className="title">{this.state.event.name}</h2>
              <hr />
              <h3 className="subtitle">  {this.state.event.type}</h3>
              <h3 className="subtitle"> {this.state.event.date}</h3>

              <h3 className="subtitle"> Start Time : {this.state.event.startTime}</h3>
              <h3 className="subtitle"> Ticket Status : {this.state.event.status}</h3>
              <h3 className="subtitle"> Price  : £{this.state.event.price.toFixed(2)}</h3>
            </div>
          </div>

          <hr />

          <div className="heading">
            <div id="mc_embed_signup">
              <form action="https://github.us18.list-manage.com/subscribe/post?u=59db66124013cd520fd3937ea&amp;id=7312abcb99" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="clear">
                    <input type="submit" value="Subscribe to our mailing list for new events info" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <hr />


          <div className="columns">
            <div className="column is-four-fifths">
              <h3 className="title">Description</h3>
              <h4 className="subtitle">{this.state.event.description}</h4>
            </div>
            <h3 className="paypal">
              <PayPalButton
                amount={this.state.event.price}
                description={this.state.event.name}
                onSuccess={this.handleSuccessfulPayment}
              />
            </h3>
          </div>

          <hr />


          <h3 className="title">Location</h3>
          <GoogleMap location={this.state.event.location} />

          <hr />

          <h1 className="title">Other Events you may also like</h1>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Slider {...settings}>
                {this.state.events.map(event =>
                  <Link key={event._id} to={`/events/${event._id}`}>
                    <div className="card carousel-card">
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
                  </Link>
                )}
              </Slider>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsShow;
