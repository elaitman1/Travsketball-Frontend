import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './containers/Homepage'
import Header from './containers/Header.js';
import TripList from './containers/TripList.js'
// import TripDetailsContainer from './containers/TripDetailsContainer.js'
import GameContainer from './containers/GameContainer'
import NewTrip from './containers/NewTrip'

class App extends Component {
  state = {
    currentUserId: 1,
    games: [],
    teams: [],
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/games")
    .then(r => r.json())
    .then(data => {
      this.setState({
        games: data
      })
    })

    fetch("http://localhost:4000/api/v1/teams")
    .then(r => r.json())
    .then(data => {
      this.setState({
        teams: data
      })
    })
  }

  createTrip = (gameId, title, hotelId, transportationId) => {
    console.log("hit create trip")
    fetch(`http://localhost:4000/api/v1/users/${this.state.currentUserId}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        game_id: gameId,
        user_id: this.state.currentUserId,
        title: title,
        hotel_id: hotelId,
        transportation_id: transportationId
      })
    })
    .then(r => window.location.href = '/trip-list')
  }

  editTrip = (tripId, title, hotelId, transportationId) => {
    console.log("edit trip:", tripId, title, parseInt(hotelId), parseInt(transportationId))
    fetch(`http://localhost:4000/api/v1/users/${this.state.currentUserId}/trips/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
        hotel_id: parseInt(hotelId),
        transportation_id: parseInt(transportationId),
      })
    })
    .then(window.location.href = '/trip-list')
  }

  deleteTrip = (tripId) => {
    fetch(`http://localhost:4000/api/v1/users/${this.state.currentUserId}/trips/${tripId}`, {
      method: "DELETE"
    })
    .then(window.location.href = '/trip-list')
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/new-trip/" component={props => <NewTrip teams={this.state.teams} games={this.state.games} createTrip={this.createTrip} />} />
          <Route path="/trip-list" component={props => <TripList currentUserId={this.state.currentUserId} editTrip={this.editTrip} deleteTrip={this.deleteTrip}/> } />
        </div>
      </Router>
    );
  }
}

export default App
