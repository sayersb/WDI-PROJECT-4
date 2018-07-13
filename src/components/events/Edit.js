import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import EventsForm from './Form';

class EventsEdit extends React.Component {

  state = {}

  componentDidMount() {
    axios({
      url: `/api/events/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => this.setState(res.data));
  }

      handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
      }

      updateLocation = location => {
        this.setState({ location }, () => console.log(this.state));
      }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/events/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/events'));
  }

  render() {
    return (
      <EventsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default EventsEdit;
