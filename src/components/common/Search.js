import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from '../../components/common/Suggestions';
import _ from 'lodash';

// const { API_KEY } = 'lRu2r80C3Z2JXXYHXYiFiuAd5YClwEpN';
// const API_URL = 'https://app.ticketmaster.com/discovery/v2/events';

class Search extends Component {
  state = {
    query: '',
    results: [],
    pickedEvent: {}
  }

  search = query => {
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
      params: {
        keyword: query,
        apikey: 'lRu2r80C3Z2JXXYHXYiFiuAd5YClwEpN'
      }
    })
      .then(res => {
        if(res.data._embedded) this.setState({ results: res.data._embedded.events });
      });
  }

  debouncedSearch = _.debounce(this.search, 500);

  handleChange = ({ target: { value }}) => {
    if(value) this.debouncedSearch(value);
  }


  // event name = name
  // event date = dates >> localDate
  // event time = dates >> localTime
  // photos = url
  // description = promoter >> description
  // city = city >> name
  // lat/long = location >> logitude >> latitude
  // event type = classifications >> name



  eventPicked = ({ target }) => {

    axios.get(`https://app.ticketmaster.com/discovery/v2/events/${target.value}`, {
      params: {
        apikey: 'lRu2r80C3Z2JXXYHXYiFiuAd5YClwEpN'
      }
    })
      .then(res => this.setState({ pickedEvent: res.data }));
  }


  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          onChange={this.handleChange}
        />
        {/* get some elements in here that render only when there is this.state.pickeEvent */}
        <Suggestions results={this.state.results} eventPicked={this.eventPicked}/>
      </form>
    );
  }
}

export default Search;
