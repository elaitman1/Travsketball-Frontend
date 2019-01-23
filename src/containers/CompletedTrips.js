import React, { Component } from 'react';
import TripPreview from '../components/TripPreview.js'
// import ExperienceDetails from '../components/ExperienceDetails.js'

class CompletedTrips extends Component {

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
      <div className="CompletedTrips col-md-6">
        <h2>Completed Trips</h2>
        {this.props.trips.map(trip => {
          return <TripPreview key={trip.trip.id} trip={trip} setSelectedTrip={this.props.setSelectedTrip}/>
        })}
      </div>


    );
  }

}
export default CompletedTrips;
