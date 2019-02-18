import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PlannedTrips from './PlannedTrips'
import CompletedTrips from './CompletedTrips'
import TripDetails from  '../components/TripDetails'
import ExperienceDetails from '../components/ExperienceDetails.js'

class TripList extends Component {

  state = {
    trips: [],
    tripId: null,
    hasExperience: false
  }

  setSelectedTrip = (tripId) => {
    console.log(tripId);
    const foundTrip = this.state.trips.find(trip => trip.trip.id === tripId)
    if (foundTrip.trip.completed) {
      this.setState({
        tripId: tripId,
        hasExperience: true
      })
    } else {
      this.setState({
        tripId: tripId,
        hasExperience: false
      })
    }
  }

  componentDidMount() {
    fetch(`https://travsketball.herokuapp.com/api/v1/users/1/trips`)
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
          {this.state.tripId && !this.state.hasExperience ? <TripDetails currentUserId={this.props.currentUserId} tripId={this.state.tripId} editTrip={this.props.editTrip} deleteTrip={this.props.deleteTrip} clearTrip={this.clearTrip}/> : <></>}
          {this.state.tripId && this.state.hasExperience ? <ExperienceDetails currentUserId={this.props.currentUserId} tripId={this.state.tripId} clearTrip={this.clearTrip} /> : <></>}
          {this.state.tripId ? <></> : <PlannedTrips trips={this.state.trips.filter(trip => !trip.trip.completed)} setSelectedTrip={this.setSelectedTrip}/>}
          {this.state.tripId ? <></> : <CompletedTrips trips={this.state.trips.filter(trip => trip.trip.completed)} setSelectedTrip={this.setSelectedTrip} />}
        </div>
      </div>
    );
  }

}

export default TripList;
