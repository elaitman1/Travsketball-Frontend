import React, { Component } from 'react';
import TripPreview from '../components/TripPreview'
import TripDetails from  '../components/TripDetails'

class PlannedTrips extends Component {
  // state = {
  //   tripId: null
  // }
  //
  // setSelectedTrip = (tripId) => {
  //   console.log(tripId);
  //   this.setState({
  //     tripId: tripId
  //   })
  // }


  render() {


    return (
      <div className="PlannedTrips col-md-6">
        <h2>Planned Trips</h2>
        {this.props.trips.map(trip => {
          return <TripPreview key={trip.trip.id} trip={trip} setSelectedTrip={this.setSelectedTrip}/>
        })}
      </div>
    );
  }

}

export default PlannedTrips;
