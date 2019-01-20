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
    .then(data => console.log(data))
  }

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
