import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class EventsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      events: [],
      sort: 'name|asc'
    };
  }

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  filteredEvents = (events) => {
    const re = new RegExp(this.state.search, 'i');
    return events.filter(event =>  {
      return re.test(event.name) || re.test(event.crimes);
    });
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  }

  sortedEvents = (events) => {
    const [ prop, dir ] = this.state.sort.split('|');
    return _.orderBy(events, prop, dir);
  }

  sortedAndFilteredEvents = () => {
    const filtered = this.filteredEvents(this.state.events);
    return this.sortedEvents(filtered);
  }

  render() {
    return (
      <section>
        <div className="columns is-multiline">
          {this.sortedAndFilteredEvents().map(event =>
            <div key={event._id} className="column is-one-third-desktop is-half-tablet">
              <Link to={`/events/${event._id}`}>
                <div className="card">
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
            </div>
          )}
        </div>
      </section>

    );
  }
}

export default EventsIndex;
