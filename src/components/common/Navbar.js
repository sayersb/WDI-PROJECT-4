import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';


class Navbar extends React.Component {

  state = {
    navbarOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }


  logout = () => {
    Auth.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="https://s3-eu-west-1.amazonaws.com/ipboard-uploads/monthly_2017_11/ticket.jpg.a05eebf46ebeb3cf936146da005dd955.jpg" height="100" />
          </Link>

          <a role="button"
            className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleNavbar}>

            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
          <div className="navbar-end">
            {/* <Link to="/about" className="navbar-item">About</Link> */}
            <Link to="/events" className="navbar-item">Events</Link>
            {Auth.isAuthenticated() &&  <Link to="/events/new" className="navbar-item">New event</Link>}
            {Auth.isAuthenticated() &&  <a onClick={this.logout} className="navbar-item">Logout</a>}

            {!Auth.isAuthenticated()  &&  <Link to="/login" className="navbar-item">Login</Link>}
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
