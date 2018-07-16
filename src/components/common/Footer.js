import React from 'react';


class Footer extends React.Component {

  state = {}


  render() {
    return(
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="footer-info"> Find Us on Social Media</p>
          <span className="icon has-text-info">
            <i className="fab fa-facebook-square"></i>
          </span>
          <span className="icon has-text-success">
            <i className="fab fa-spotify"></i>
          </span>
          <span className="icon has-text-warning">
            <i className="fab fa-snapchat-square"></i>
          </span>
          <span className="icon has-text-danger">
            <i className="fab fa-pinterest-square"></i>
          </span>
          <hr />
          <p className="footer-info">Copyright © 2018 by TBD
       All rights reserved. This site or any portion thereof
       may not be reproduced or used in any manner whatsoever
       without the express written permission of the publisher
       except for the use of brief quotations in a site review.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
