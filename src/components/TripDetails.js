import React, {Component} from 'react'
import GameDetails from './GameDetails'
import EditTrip from './EditTrip'
import CompleteTripForm from './CompleteTripForm'

class TripDetails extends Component {
  state = {
    trip: null,
    activeEdit: false,
    activeComplete: false
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

  handleEditClick = () => {
    // this.props.editTrip(this.state.trip.trip.id)
    this.setState({
      activeEdit:true
    })
  }

  handleDeleteClick = () => {
    this.props.deleteTrip(this.props.tripId)
  }

  handleCompleteClick = () => {
    this.setState({
      activeComplete:true
    })
  }

  handleClearTrip = () => {
    this.props.clearTrip()
  }

  render() {

    const tripDetailBox = () => {
      return <div className="trip-details text-center">
              <button className="btn btn-primary" onClick={this.handleClearTrip}>Back to Trip List</button><br/>
              <h2 className="trip-title">{this.state.trip.trip.title}</h2>
              <h4>Hotel: {this.state.trip.hotel}</h4>
              <h4>Transportation: {this.state.trip.transportation}</h4>
            </div>
    }

    return (
      <div className="text-center">
        {this.state.trip ?  tripDetailBox() : <></>}
        {this.state.trip ? <GameDetails gameId={this.state.trip.trip['game_id']} /> : <></>}
        {this.state.activeEdit ? <EditTrip currentUserId={this.props.currentUserId} tripId={this.props.tripId} editTrip={this.props.editTrip}/> : <button className="btn btn-warning" onClick={this.handleEditClick}>Edit</button>}
        <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button>
        {this.state.activeComplete ? <CompleteTripForm currentUserId={this.props.currentUserId} tripId={this.props.tripId} completeTrip={this.props.completeTrip}/> : <button className="btn btn-primary" onClick={this.handleCompleteClick}>Complete Trip</button>}
      </div>
    )
  }
}

export default TripDetails
