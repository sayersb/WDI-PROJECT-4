/* global google */
import React from 'react';

class GoogleAutocomplete extends React.Component {

  componentDidMount() {
    const autocomplete = new google.maps.places.Autocomplete(this.input);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const location = place.geometry.location.toJSON();
      this.props.updateLocation(location);
    });

  }

  render() {
    return (
      <input className="input" ref={element => this.input = element} name="address" handlechange={this.props.handlechange} />
    );
  }
}

export default GoogleAutocomplete;
