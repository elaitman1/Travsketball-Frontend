import React, {Component} from 'react'
import GamePreview from './GamePreview'


class GameList extends Component {

  render() {
    return (
      <>
        {this.props.games.map(game => {
          return <GamePreview key={game.id} game={game} setSelectedGame={this.props.setSelectedGame} clearSelectedGame={this.props.clearSelectedGame}/>
        })}
      </>
    )
  }
}

export default GameList
