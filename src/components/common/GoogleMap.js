/* global google */
import React from 'react';


class GoogleMap extends React.Component {

  componentDidMount() {
    // console.log(this.mapCanvas); //div
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.location,
      zoom: 12
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.location
    });

    const autocomplete = new google.maps.places.Autocomplete(this.mapCanvas[0]);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const location = place.geometry.location.toJSON();
      this.state.updateLocation({ location });
      this.setState(place.formatted_address);
    });
  }

  componentWillUnmount() {
    // console.log('I\'m dying!');
    //good for tidying stuff up, components that shut down and are destroyed when leaving, even though the dom element is destroyed the memory is taken up, below frees up that memory space
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }


  render() {
    return (

      <div className="google-map" ref={element => this.mapCanvas = element } />

    );
  }
}

export default GoogleMap;
