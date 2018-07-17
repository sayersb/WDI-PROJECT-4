/* global google */
import React from 'react';


class GoogleMap extends React.Component {

  componentDidMount() {

    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.location,
      zoom: 12,
      styles: [
        {
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            },
            {
              'color': '#f49f53'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'stylers': [
            {
              'color': '#f9ddc5'
            },
            {
              'lightness': -7
            }
          ]
        },
        {
          'featureType': 'road',
          'stylers': [
            {
              'color': '#813033'
            },
            {
              'lightness': 43
            }
          ]
        },
        {
          'featureType': 'poi.business',
          'stylers': [
            {
              'color': '#645c20'
            },
            {
              'lightness': 38
            }
          ]
        },
        {
          'featureType': 'water',
          'stylers': [
            {
              'color': '#1994bf'
            },
            {
              'saturation': -69
            },
            {
              'gamma': 0.99
            },
            {
              'lightness': 43
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#f19f53'
            },
            {
              'weight': 1.3
            },
            {
              'visibility': 'on'
            },
            {
              'lightness': 16
            }
          ]
        },
        {
          'featureType': 'poi.business'
        },
        {
          'featureType': 'poi.park',
          'stylers': [
            {
              'color': '#645c20'
            },
            {
              'lightness': 39
            }
          ]
        },
        {
          'featureType': 'poi.school',
          'stylers': [
            {
              'color': '#a95521'
            },
            {
              'lightness': 35
            }
          ]
        },
        {},
        {
          'featureType': 'poi.medical',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#813033'
            },
            {
              'lightness': 38
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          'elementType': 'labels'
        },
        {
          'featureType': 'poi.sports_complex',
          'stylers': [
            {
              'color': '#9e5916'
            },
            {
              'lightness': 32
            }
          ]
        },
        {},
        {
          'featureType': 'poi.government',
          'stylers': [
            {
              'color': '#9e5916'
            },
            {
              'lightness': 46
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'stylers': [
            {
              'color': '#813033'
            },
            {
              'lightness': 22
            }
          ]
        },
        {
          'featureType': 'transit',
          'stylers': [
            {
              'lightness': 38
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#f19f53'
            },
            {
              'lightness': -10
            }
          ]
        },
        {},
        {},
        {}
      ]
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.location
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

      <div className='google-map' ref={element => this.mapCanvas = element } />
    );
  }
}

export default GoogleMap;
