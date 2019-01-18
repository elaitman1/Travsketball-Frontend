import React, {Component} from 'react'
var moment = require('moment');

class NewTrip extends Component {
  state = {
    team: null,
    game: null
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
      game: null
    })
  }

  handleGameChange = (e) => {
    this.setState({
      game: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submit")
  }

  render() {
    return (
      <div>
        <h2>New Trip</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Select Team</label>
            <select name="team" onChange={this.handleTeamChange}>
              {this.props.teams.map(team => {
                return <option key={team.id} value={team.name}>{team.name}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Select Game</label>
            <select name="game" onChange={this.handleGameChange}>
              {this.getTeamGames()}
            </select>
          </div>
          <button>Create Trip</button>
        </form>
      </div>
    )
  }
}

export default NewTrip
