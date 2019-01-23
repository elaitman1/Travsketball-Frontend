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




  render() {
    let detailBox
    if (this.state.tripId) {
      detailBox = <TripDetails currentUserId={this.props.currentUserId} tripId={this.state.tripId} editTrip={this.props.editTrip} deleteTrip={this.props.deleteTrip}/>
    }

    return (
      <div className="TripList container">
        <div className="row">
          <PlannedTrips trips={this.state.trips.filter(trip => !trip.trip.completed)}/>
          <CompletedTrips trips={this.state.trips.filter(trip => trip.trip.completed)}/>
        </div>

      </div>
    );
  }

}

export default TripList;
