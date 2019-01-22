import React, {Component} from 'react'
var moment = require('moment')

class TripPreview extends Component {
  handleClick = () => {
    this.props.setSelectedTrip(this.props.trip.trip.id)
  }

  render() {
    return (
      <div>
        <h3>{this.props.trip.trip.title}</h3>
        <p><strong>Date:</strong>{moment(this.props.trip.game.date).format("l")}</p>
        <p><strong>Time:</strong>{moment(this.props.trip.game.date).format("LT")}</p>
        <button onClick={this.handleClick}>View Details</button>
      </div>
    )
  }
}

export default TripPreview
