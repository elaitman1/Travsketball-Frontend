import React, { Component } from 'react';
import PlannedTrips from './PlannedTrips'
import CompletedTrips from './CompletedTrips'
import TripDetails from  '../components/TripDetails'

class TripList extends Component {

  state = {
    trips: [],
    tripId: null
  }

  setSelectedTrip = (tripId) => {
    console.log(tripId);
    this.setState({
      tripId: tripId
    })
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        trips: data
      })
    })
  }

  clearTrip = () => {
    this.setState({
      tripId: null
    })
  }




  render() {


    return (
      <div className="TripList container">
        <div className="row">
          {this.state.tripId ? <TripDetails currentUserId={this.props.currentUserId} tripId={this.state.tripId} editTrip={this.props.editTrip} deleteTrip={this.props.deleteTrip} clearTrip={this.clearTrip}/> : <></>}
          {this.state.tripId ? <></> : <PlannedTrips trips={this.state.trips.filter(trip => !trip.trip.completed)} setSelectedTrip={this.setSelectedTrip}/>}
          {this.state.tripId ? <></> : <CompletedTrips trips={this.state.trips.filter(trip => trip.trip.completed)}/>}
        </div>

      </div>
    );
  }

}

export default TripList;
