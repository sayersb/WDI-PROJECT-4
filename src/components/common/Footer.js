import React from 'react';


class Footer extends React.Component {

  state = {}


  render() {
    return(
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="footer-info"> Find Us on Social Media</p>
          <span className="icon has-text-info">
            <i className="fab fa-facebook-square fa-2x"></i>
          </span>
          <br />
          <span className="icon has-text-success">
            <i className="fab fa-spotify fa-2x"></i>
          </span>
          <br />
          <span className="icon has-text-warning">
            <i className="fab fa-snapchat-square fa-2x"></i>
          </span>
          <br />
          <span className="icon has-text-danger">
            <i className="fab fa-pinterest-square fa-2x"></i>
          </span>
          <hr />
          <p className="footer-info">Copyright © 2018 by ABC Events
       All rights reserved. </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
