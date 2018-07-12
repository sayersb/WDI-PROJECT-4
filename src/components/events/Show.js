import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import GoogleMap from '../common/GoogleMap';
import Carousel from 'nuka-carousel';


class EventsShow extends React.Component {

  constructor() {
    super();
    this.state ={

    };
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => this.setState({ event: res.data }))
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
    return (


      //     <Link className="button" to={`/events/${this.state.event._id}/edit`}>Edit</Link>
      //     <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
      //   </div>
      // </div>
      <div>
        <div className="columns">
          <div className="column is-four-fifths">
            <figure className="images">
              <img src={this.state.event.image} />
            </figure>
          </div>
          <div className="column">
            <h2 className="title">{this.state.event.name}</h2>
            <h3 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          </div>
        </div>

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
            <Carousel>
              <img src="https://countryclones.com/wp-content/uploads/2017/11/2018-country-concerts.png" />
              <img src="https://data1.ibtimes.co.in/cache-img-0-450/en/full/692210/1530683754_harry-kane-celebrating-his-goal-vs-colombia.jpg" />
              <img src="https://www.theontarion.com/wp-content/uploads/2017/02/Rapters_kyliearmishaw.jpg" />
            </Carousel>
          </div>
        </div>
      </div>


    );
  }
}

export default EventsShow;
