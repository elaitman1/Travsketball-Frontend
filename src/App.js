import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header.js';
import TripList from './containers/TripList.js'
import TripDetailsContainer from './containers/TripDetailsContainer.js'
import GameContainer from './containers/GameContainer'
import NewTrip from './components/NewTrip'

class App extends Component {
  state = {
    games: [],
    teams: []
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

  render() {
    return (
      <div>
        <Header />
        <TripList />
        <TripDetailsContainer />
        {/* <GameContainer games={this.state.games}/> */}
        <NewTrip teams={this.state.teams} games={this.state.games} />
      </div>
    );
  }
}

export default App;
