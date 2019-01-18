import React, {Component} from 'react'
import GamePreview from './GamePreview'


class GameList extends Component {

  render() {
    return (
      <div>
        {this.props.games.map(game => {
          return <GamePreview key={game.id} game={game} setSelectedGame={this.props.setSelectedGame}/>
        })}
      </div>
    )
  }
}

export default GameList
