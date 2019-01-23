import React, { Component } from 'react';
import TripPreview from '../components/TripPreview'
import TripDetails from  '../components/TripDetails'

class PlannedTrips extends Component {
  state = {
    tripId: null
  }

  setSelectedTrip = (tripId) => {
    console.log(tripId);
    this.setState({
      tripId: tripId
    })
  }


  render() {
    const trips = this.props.trips.map(trip => {
      return <TripPreview key={trip.trip.id} trip={trip} setSelectedTrip={this.setSelectedTrip}/>
    })

    return (
      <div className="PlannedTrips col-md-6">
        <h2>Planned Trips</h2>
        {this.state.tripId ? <TripDetails currentUserId={this.props.currentUserId} tripId={this.state.tripId} editTrip={this.props.editTrip} deleteTrip={this.props.deleteTrip}/> : trips}
      </div>
    );
  }

}

export default PlannedTrips;
