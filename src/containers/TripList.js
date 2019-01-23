import React, { Component } from 'react';
import PlannedTrips from './PlannedTrips'
import CompletedTrips from './CompletedTrips'

class TripList extends Component {

  state = {
    trips: []
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
    return (
      <div className="TripList container">
        <div className="row">
          <PlannedTrips currentUserId={this.props.currentUserId} trips={this.state.trips.filter(trip => !trip.trip.completed)} editTrip={this.props.editTrip} deleteTrip={this.props.deleteTrip}/>
          <CompletedTrips trips={this.state.trips.filter(trip => trip.trip.completed)}/>
        </div>
      </div>
    );
  }

}

export default TripList;
