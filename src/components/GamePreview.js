import React, {Component} from 'react'
var moment = require('moment')

class GamePreview extends Component {
  handleClick = () => {
    this.props.setSelectedGame(this.props.game.id)
  }

  render() {
    return (
      <div key={this.props.game.id} className="game-preview col-md-6">
        <h3>{this.props.game.title}</h3>
        <p><strong>Date:</strong>{moment(this.props.game.date).format("l")}</p>
        <p><strong>Time:</strong>{moment(this.props.game.date).format("LT")}</p>
        <button className="btn btn-primary" onClick={this.handleClick}>View Details</button>
      </div>
    )
  }
}

export default GamePreview
