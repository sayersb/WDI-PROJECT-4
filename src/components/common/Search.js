import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from '../../components/common/Suggestions';
import _ from 'lodash';

// const { API_KEY } = 'lRu2r80C3Z2JXXYHXYiFiuAd5YClwEpN';
// const API_URL = 'https://app.ticketmaster.com/discovery/v2/events';

class Search extends Component {
  state = {
    query: '',
    results: []
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

  handleClick(result) {
    axios.get(`https://app.ticketmaster.com/discovery/v2/${result.id}`)
      .then(res => this.setState({name: res.data.name }))
      .then(res => this.setState({date: res.data.eventdate }));
  }




  debouncedSearch = _.debounce(this.search, 500);

  handleChange = ({ target: { value }}) => {
    if(value) this.debouncedSearch(value);
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          onChange={this.handleChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
