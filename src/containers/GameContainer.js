import React, {Component} from 'react'
import GameList from '../components/GameList'
import GameDetails from  '../components/GameDetails'

class GameContainer extends Component {
  state = {
    selectedTeam: null,
    selectedGameId: null
  }

  setSelectedGame = (gameId) => {
    console.log("hit setgame in game container")
    // const selectedGameId = this.props.games.find(game => game.id === gameId).id
    this.setState({
      selectedGameId: gameId
    })
  }

  render() {
    return (
      <div>
        {this.state.selectedGameId ? <GameDetails gameId={this.state.selectedGameId}/> : <GameList games={this.props.games} setSelectedGame={this.setSelectedGame} />}
      </div>
    )
  }
}

export default GameContainer
