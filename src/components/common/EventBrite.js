import React from 'react';
import axios from 'axios';

class EventBrite extends React.Component {

  constructor(){
    super();
    this.state = {
      events: {}
    };
  }

  componentWillMount() {

    axios({
      url: 'https://www.eventbriteapi.com/v3/events/search/?token=GCNM4QYTQLWS4PPKTC26',
      method: 'GET'
    })
      .then(res => this.setState({ events: res.data }, () => console.log(this.state)));

  }

  render(){
    return (
      <section className="section">
        <div className="container">
          <h1 className="title"> EVENTS </h1>
          <h2 key={this.state.events}>{this.state.events}</h2>

        </div>
      </section>
    );
  }


}

export default EventBrite;
