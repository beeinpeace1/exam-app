import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import HTML from './components/HTML/HTML';
import CSS from './components/CSS/CSS';
import JS from './components/Javascript/JS';
import Mixed from './components/Mixed/Mixed';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/html' component={HTML}/>
        <Route exact path='/css' component={CSS}/>
        <Route exact path='/mixed' component={Mixed}/>
        <Route exact path='/js' component={JS}/>
      </div>
    );
  }
}

export default withRouter(App);
