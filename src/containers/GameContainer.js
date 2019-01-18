import React, {Component} from 'react'
import GameList from '../components/GameList'
import GameDetails from  '../components/GameDetails'

class GameContainer extends Component {
  state = {
    selectedGameId: null
  }



  clearSelectedGame = () => {
    this.setState({
      selectedGameId: null
    })
  }

  render() {
    return (
      <div>
        {this.props.gameId ? <GameDetails gameId={this.props.gameId}/> : <GameList games={this.props.games} setSelectedGame={this.props.setSelectedGame} clearSelectedGame={this.clearSelectedGame}/>}
      </div>
    )
  }
}

export default GameContainer
