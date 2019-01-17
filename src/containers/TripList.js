import React, { Component } from 'react';
import PlannedTrips from './PlannedTrips'
import CompletedTrips from './CompletedTrips'

class TripList extends Component {

  render() {
    return (
      <div className="TripList">
        <PlannedTrips />
        <CompletedTrips />
      </div>
    );
  }

}

export default TripList;
