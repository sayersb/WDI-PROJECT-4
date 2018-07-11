import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EventsIndex from './components/events/Index';
import EventsShow from './components/events/Show';
import EventsNew from './components/events/New';
import EventsEdit from './components/events/Edit';
import AuthLogin from './components/auth/Login';
import ProtectedRoute from './components/common/ProtectedRoute';
import AuthRegister from './components/auth/Register';
import Navbar from './components/common/Navbar';
import FlashMessages from './components/common/FlashMessages';
// import EventBrite from './components/common/EventBrite';

import 'bulma';
import './scss/style.scss';
import 'react-select/dist/react-select.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />
          <Route exact path="/" component={Home} />
          <section className="section">
            <div className="container">
              <Switch>
                <ProtectedRoute path="/events/new" component={EventsNew} />
                <ProtectedRoute path="/events/:id/edit" component={EventsEdit} />
                <Route path="/events/:id" component={EventsShow} />
                <Route path="/events" component={EventsIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
