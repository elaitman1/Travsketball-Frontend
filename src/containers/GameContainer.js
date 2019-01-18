import React, {Component} from 'react'
var moment = require('moment');


class GameContainer extends Component {
  render() {
    return (
      <div>
        {this.props.games.map(game => {
          return <div key={game.id}>
                    <h3>{game.title}</h3>
                    <p><strong>Date:</strong>{moment(game.date).format("MMM Do YYYY")}</p>
                    <p><strong>Time:</strong>{moment(game.date).format("LT")}</p>
                 </div>
        })}
      </div>
    )
  }
}

export default GameContainer
