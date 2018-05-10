import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo"><i className="material-icons">receipt</i>ExamApp</a>
          <ul className="right hide-on-med-and-down">
            <li className="nav-items-0"> <Link to="/"> Home </Link></li>
            <li className="nav-items-1"> <Link to="/mixed"> Mixed </Link></li>
            <li className="nav-items-2"> <Link to="/html"> HTML </Link></li>
            <li className="nav-items-4"> <Link to="/css"> CSS </Link></li>
            <li className="nav-items-5"> <Link to="/js"> JavaScript </Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
