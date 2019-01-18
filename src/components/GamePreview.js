import React, {Component} from 'react'
var moment = require('moment')

class GamePreview extends Component {
  handleClick = () => {
    this.props.setSelectedGame(this.props.game.id)
  }

  render() {
    return (
      <div key={this.props.game.id}>
        <h3>{this.props.game.title}</h3>
        <p><strong>Date:</strong>{moment(this.props.game.date).format("MMM Do YYYY")}</p>
        <p><strong>Time:</strong>{moment(this.props.game.date).format("LT")}</p>
        <button onClick={this.handleClick}>View Details</button>
      </div>
    )
  }
}

export default GamePreview
