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

  // handleTeamChange = (e) => {
  //   this.setState({
  //     team: e.target.value,
  //     gameId: null
  //   })
  // }

  setSelectedGame = (gameId) => {
    this.setState({
      gameId: gameId
    })
  }

  addGameToTrip = () => {
    this.setState({
      gameConfirmed: true
    })
  }

  clickSelectTeam = (e) => {
    this.setState({
        team: e.target.alt,
        gameId: null
      }, window.scrollTo(0, 0))
  }

  clearTeam = () => {
    this.setState({
      team: null
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

    const allLogos = this.props.teams.map(team => {
      return <div key={team.id} className="logo">
               <img src={team.logo} alt={team.name} onClick={this.clickSelectTeam}/>
             </div>
     })

     const pickedTeam = () => {
       const foundTeam = this.props.teams.find(team => team.name === this.state.team)
       return <div className="logo">
                <img src={foundTeam.logo} alt={foundTeam.name} onClick={this.clickSelectTeam}/>
                <button onClick={this.clearTeam}>Change Team</button>
              </div>
     }

    return (
      <div className="new-trip">
        <h2>New Trip</h2>
        {/* <select name="team" onChange={this.handleTeamChange}>
          {this.props.teams.map(team => {
            return <option key={team.id} value={team.name}>{team.name}</option>
           })}
        </select> */}
        {/* <div className="logo-box">
          {this.props.teams.map(team => {
            return <div key={team.id} className="logo" test={team.name}>
                     <img src={team.logo} alt={team.name} onClick={this.clickSelectTeam}/>
                   </div>
           })}
        </div> */}
        <div className="logo-box">
          {this.state.team ? pickedTeam() : allLogos}
        </div>
        {gameContainer}
        {this.state.gameId && !this.state.gameConfirmed ? <button onClick={this.addGameToTrip}>Add to Trip</button> : <></>}
        {this.state.gameConfirmed ? <PickTripDetails gameId={this.state.gameId} createTrip={this.props.createTrip}/> : <></>}
      </div>
    )
  }
}

export default NewTrip
