import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <Router>
        <>
          <h1>TravelSports</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-trip">Create A New Trip</Link>
            <Link to="/trip-list">Trip List</Link>
          </nav>
        </>
        </Router>
      </div>
    );
  }

}

export default Header;
