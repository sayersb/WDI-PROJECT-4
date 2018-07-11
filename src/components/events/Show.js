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
      <div className="columns">
        <div className="column is-half">
          <figure className="images">
            <img src={this.state.event.image} />
          </figure>
        </div>
        <div className="column is-half">
          <h2 className="title">{this.state.event.name}</h2>

          <hr />

          <h3 className="title">Location</h3>
          <GoogleMap location={this.state.event.location} />
          <hr />

          <h4 className="subtitle">{this.state.event.description}</h4>

          <hr />



          <Link className="button" to={`/events/${this.state.event._id}/edit`}>Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EventsShow;
