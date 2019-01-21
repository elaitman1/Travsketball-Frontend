import React, { Component } from 'react';
import GamePreview from '../components/GamePreview'

class PlannedTrips extends Component {

  render() {
    console.log(this.props.trips)
    return (
      <div className="PlannedTrips">
        <h2>Planned Trips</h2>
        {this.props.trips.map(trip => {
          return <GamePreview key={trip.trip.id} game={trip.game} />
        })}
      </div>
    );
  }

}

export default PlannedTrips;
