import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import GoogleMap from '../common/GoogleMap';
import Slider from 'react-slick';
import AudioImage from '../common/AudioImage';
import Promise from 'bluebird';
// import Sticky from 'react-sticky-state';
// import { Player } from 'video-react';



class EventsShow extends React.Component {

  constructor() {
    super();
    this.state ={
      event: {},
      events: []
    };
  }

  componentDidMount() {
    Promise.props({
      event: axios.get(`/api/events/${this.props.match.params.id}`).then(res => res.data),
      events: axios.get('/api/events').then(res => res.data.filter((event, i) => i % 3 === 0))
    })
      .then(data => this.setState(data))
      .catch(err => this.setState({ error: err.message }));
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
      slidesToShow: 1
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
              <AudioImage className="audio-image" imageSrc={this.state.event.image} audioSrc={'/assets/applause.mp3'}/>
            </div>
            <div className="column">
              <h2 className="title">{this.state.event.name}</h2>
              <h3 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </div>
          </div>
          <div className="heading">A</div>

          <div className="columns">
            <div className="column is-four-fifths">
              <h3 className="title">Description</h3>
              <h4 className="subtitle">{this.state.event.description}</h4>
            </div>
            <h3 className="subtitle">  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h3>
          </div>

          {/* <div className="columns">
          <div className="column is-offset-one-fifth"> */}
          <h3 className="title">Location</h3>
          <GoogleMap location={this.state.event.location} />
          {/* </div>
          </div> */}

          <h4 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>

          <h1 className="title">Other Events you may also like</h1>

          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Slider {...settings}>
                {/* <Player>
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player> */}
                {/* <Link to={`/events/${event._id}`}> */}
                {this.state.events.map(event =>
                  <div key={event._id} className="card">
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
                )}
                {/* </Link> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default EventsShow;
