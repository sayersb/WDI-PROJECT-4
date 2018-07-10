import React from 'react';
import axios from 'axios';



class AuthRigster extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/register',
      method: 'POST',
      date: this.state
    });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }
}
