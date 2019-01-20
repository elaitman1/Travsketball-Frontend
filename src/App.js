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

  createTrip = (gameId, title, hotel, transportation) => {
    console.log("hit create trip")
    fetch("http://localhost:4000/api/v1/users/1/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        game_id: gameId,
        user_id: this.state.currentUserId,
        title: title,
        hotel: hotel,
        transportation: transportation
      })
    })
    .then(r => window.location.href = '/trip-list')
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* <TripList />
          <TripDetailsContainer /> */}
          {/* <GameContainer games={this.state.games}/> */}
          {/* <NewTrip teams={this.state.teams} games={this.state.games} /> */}

          <Route path="/" exact component={Homepage} />
          <Route path="/new-trip/" component={props => <NewTrip teams={this.state.teams} games={this.state.games} createTrip={this.createTrip} />} />
          <Route path="/trip-list" exact component={props => <TripList currentUserId={this.state.currentUserId}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
