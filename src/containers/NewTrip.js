import React, {Component} from 'react'
import GameContainer from './GameContainer'
import PickTripDetails from  '../components/PickTripDetails'
var moment = require('moment');


class NewTrip extends Component {
  state = {
    team: null,
    gameId: null,
    gameConfirmed: false
  }

  getTeamGames = () => {
    let teamGames

    if (this.state.team) {
      teamGames = this.props.games.filter(game => game.title.includes(this.state.team))
    } else {
      teamGames = this.props.games
    }

    return teamGames.map(game => <option key={game.id} value={game.id}>{moment(game.date).format('l')} - {game.title}</option>)
  }

  handleTeamChange = (e) => {
    this.setState({
      team: e.target.value,
      gameId: null
    })
  }

  setSelectedGame = (gameId) => {
    this.setState({
      gameId: gameId
    })
  }

  handleClick = () => {
    this.setState({
      gameConfirmed: true
    })
  }

  render() {
    let gameContainer
    if (this.state.team) {
      gameContainer = <GameContainer
                        games={this.props.games.filter(game => game.title.includes(this.state.team))}
                        gameId={this.state.gameId}
                        setSelectedGame={this.setSelectedGame}
                      />
    } else {
      gameContainer = null
    }

    return (
      <div className="new-trip">
        <h2>New Trip</h2>
        <select name="team" onChange={this.handleTeamChange}>
          {this.props.teams.map(team => {
            return <option key={team.id} value={team.name}>{team.name}</option>
           })}
        </select>
        {gameContainer}
        {this.state.gameId && !this.state.gameConfirmed ? <button onClick={this.handleClick}>Add to Trip</button> : <></>}
        {this.state.gameConfirmed ? <PickTripDetails gameId={this.state.gameId} createTrip={this.props.createTrip}/> : <></>}
      </div>
    )
  }
}

export default NewTrip
