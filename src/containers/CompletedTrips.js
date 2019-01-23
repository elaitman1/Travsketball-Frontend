import React, { Component } from 'react';
import TripPreview from '../components/TripPreview.js'
import ExperienceDetails from '../components/ExperienceDetails.js'

class CompletedTrips extends Component {

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
      <div className="CompletedTrips">
        <h2>Completed Trips</h2>
        {this.state.tripId ? <ExperienceDetails currentUserId={this.props.currentUserId} tripId={this.state.tripId} /> : trips}
      </div>
    );
  }

}
export default CompletedTrips;
