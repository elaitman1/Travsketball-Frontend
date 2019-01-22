import React, {Component} from 'react'
import GameDetails from './GameDetails'

class TripDetails extends Component {
  state = {
    trip: null
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({
        trip: data
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.trip ? <GameDetails gameId={this.state.trip['game_id']} /> : <></>}
      </div>
    )
  }
}

export default TripDetails
