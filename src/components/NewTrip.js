import React, {Component} from 'react'

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

    return teamGames.map(game => <option key={game.id} value={game.id}>{game.title}</option>)
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
      <form onSubmit={this.handleSubmit}>
        <label>Select Team</label>
        <select name="team" onChange={this.handleTeamChange}>
          {this.props.teams.map(team => {
            return <option key={team.id} value={team.name}>{team.name}</option>
          })}
        </select>
        <label>Select Game</label>
        <select name="game" onChange={this.handleGameChange}>
          {this.getTeamGames()}
        </select>
        <button>Create Trip</button>
      </form>
    )
  }
}

export default NewTrip
