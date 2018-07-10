import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import EventsForm from './Form';


class EventsNew extends React.Component {

  state = {
    selectedOptions: [],
    errors: {}
  };

  componentDidMount() {
    axios({
      url: '/api/events',
      method: 'GET'
    })
      .then(res => {
        console.log(res.data);
        const options = res.data.map(event => {
          return { value: event._id, label: event.name };
        });
        this.setState({ options });
      });
  }

  handleChange = ({ target: { name, value }}) => {
    // console.log(name, value);
    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/events',
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/events'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    console.log(this.props);
    return (
      <EventsForm
        handleSelectChange={this.handleSelectChange}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default EventsNew;
