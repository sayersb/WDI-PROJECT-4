import React from 'react';
import axios from 'axios';

class EventBrite extends React.Component {

  constructor(){
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {

    axios({
      // url: '/api/events',
      url: 'https://www.eventbriteapi.com/v3/events/search/?token=GCNM4QYTQLWS4PPKTC26',
      method: 'GET'
    })
      .then(res => this.setState({ events: res.data.events }, () => console.log(this.state)));

  }

  render(){
    return (
      <section className="section">
        <div className="container">
          <h1 className="title"> EVENTS </h1>
          {this.state.events.map(event =>
            <div key={event.id}>{event.name.text}</div>
          )}
          {this.state.events.map(event =>
            <div key={event.id}>{event.url}</div>
          )}

        </div>
      </section>
    );
  }


}

export default EventBrite;
