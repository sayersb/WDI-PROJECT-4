import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import GoogleMap from '../common/GoogleMap';

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

        <h1 className="title">Other Events you may also like</h1>
      </div>


    );
  }
}

export default EventsShow;
