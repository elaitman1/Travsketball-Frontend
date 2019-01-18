import React, {Component} from 'react'
import GameContainer from '../containers/GameContainer'
var moment = require('moment');

class NewTrip extends Component {
  state = {
    team: null,
    gameId: null
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

  // handleGameChange = (e) => {
  //   this.setState({
  //     game: e.target.value
  //   })
  // }

  setSelectedGame = (gameId) => {
    this.setState({
      gameId: gameId
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submit")
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
      // <div>
      //   <h2>New Trip</h2>
      //   <form onSubmit={this.handleSubmit}>
      //     <div className="form-group">
      //       <label>Select Team</label>
      //       <select name="team" onChange={this.handleTeamChange}>
      //         {this.props.teams.map(team => {
      //           return <option key={team.id} value={team.name}>{team.name}</option>
      //         })}
      //       </select>
      //     </div>
      //     <div className="form-group">
      //       <label>Select Game</label>
      //       <select name="game" onChange={this.handleGameChange}>
      //         {this.getTeamGames()}
      //       </select>
      //     </div>
      //     <button>Create Trip</button>
      //   </form>
      // </div>



      <div>
        <h2>New Trip</h2>
        <select name="team" onChange={this.handleTeamChange}>
          {this.props.teams.map(team => {
            return <option key={team.id} value={team.name}>{team.name}</option>
           })}
        </select>
        {gameContainer}
      </div>
    )
  }
}

export default NewTrip
