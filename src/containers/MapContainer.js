// import React from "react";
// import GoogleMapReact from 'google-map-react';
//
//
// export default class MapContainer extends React.Component {
//
// 	state = {
//     teams:[],
//     location:[],
// 		latitude: 40.705501,
//     longitude: -74.014070,
//     err:''
// 	}
//
//   fetchTeams(){
//     fetch('http://localhost:3000/api/v1/teams')
//     .then(r=>r.json())
//     .then(r=>
//       this.setState({teams: r})
//     )
//   }
//
//   componentDidMount(){
//     this.getLocation()
//   }
//
//   getLocation(){
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
//       err=>this.setState({err:"You have disabled current location. Please enable by  heading to url and clicking top left circle with exclamation point next to refresh button and toggling location from Block to Allow. Refresh screen after"})
//     )
//   }
//
//     render(){
//       return (
//       <div>
//         {this.state.err? this.state.err:
//             this.state.teams.map(team=>{
//               return (
//                 <GoogleMapReact
//                   defaultZoom={14}
//                 >
//                   position={team.stadium_location}
//                   icon={<img src=`${team.logo}.png`/>}
//                 </GoogleMapReact>
//               )
//             })}
//       </div>
//     )
//   }
// }
//////////////////////////////////////////////////////////////////

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

 class MyFancyComponent extends React.Component {
  state = {
    teams:[],
    location:[],
		lat: 40.705501,
    lng: -74.014070,
    err:'',
    isMarkerShown: false
  }

	fetchTeams(){
	    fetch('http://localhost:3000/api/v1/teams')
	    .then(r=>r.json())
	    .then(r=>
	      this.setState({teams: r})
	    )
	  }

  componentDidMount() {
    this.delayedShowMarker()
		this.fetchTeams()
		this.getLocation()
  }

	getLocation(){
	    window.navigator.geolocation.getCurrentPosition(
	      position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
	      err=>this.setState({err:"You have disabled current location. Please enable by  heading to url and clicking top left circle with exclamation point next to refresh button and toggling location from Block to Allow. Refresh screen after"})
	    )
	  }

   delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

   handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

   render() {
    return (
			<div>
				{this.state.err? this.state.err: <MapContainer
		      isMarkerShown={this.state.isMarkerShown}
		      onMarkerClick={this.handleMarkerClick}
		      />
				}
			</div>
    )
  }
}

 const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBtSJsw4ovgeQMRR54RIxftpySNSP2YilA&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 40.705493, lng: -74.014081 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

 export default MapContainer
// export default GoogleApiWrapper({
//     api: (process.env.AIzaSyDzHxGDQGn_BE1szmKvWE9L2DLmkPTrwf8)
// })(GoogleMapsContainer)



////////////////////////////////////////////////////////////////////
//original working google maps

// import React from "react"
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//
//  class MyFancyComponent extends React.Component {
//   state = {
//     isMarkerShown: false,
//   }
//
//    componentDidMount() {
//     this.delayedShowMarker()
//   }
//
//    delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }
//
//    handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }
//
//    render() {
//     return (
//       <GoogleMapsContainer
//       isMarkerShown={this.state.isMarkerShown}
//       onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }
//
//  const GoogleMapsContainer = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBtSJsw4ovgeQMRR54RIxftpySNSP2YilA&callback=initMap",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={15}
//     defaultCenter={{ lat: 40.705493, lng: -74.014081 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )
//
//  export default GoogleMapsContainer
// // export default GoogleApiWrapper({
// //     api: (process.env.AIzaSyDzHxGDQGn_BE1szmKvWE9L2DLmkPTrwf8)
// // })(GoogleMapsContainer)





//////////////////////////////////////////////////////////

// original not working google maps
// import React from "react";
// import GoogleMapReact from 'google-map-react';
//
//
// export default class MapContainer extends React.Component {
//
// 	state = {
//     teams:[],
//     location:[],
// 		latitude: 40.705501,
//     longitude: -74.014070,
//     err:''
// 	}
//
//   fetchTeams(){
//     fetch('http://localhost:3000/api/v1/teams')
//     .then(r=>r.json())
//     .then(r=>
//       this.setState({teams: r})
//     )
//   }
//
//   componentDidMount(){
//     this.getLocation()
//   }
//
//   getLocation(){
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
//       err=>this.setState({err:"You have disabled current location. Please enable by  heading to url and clicking top left circle with exclamation point next to refresh button and toggling location from Block to Allow. Refresh screen after"})
//     )
//   }
//
//     render(){
//       return (
//       <div>
//         {this.state.err? this.state.err:
//             this.state.teams.map(team=>{
//               return (
//                 <GoogleMapReact
//                   defaultZoom={14}
//                 >
//                   position={team.stadium_location}
//                   icon={<img src=`${team.logo}.png`/>}
//                 </GoogleMapReact>
//               )
//             })}
//       </div>
//     )
//   }
// }
