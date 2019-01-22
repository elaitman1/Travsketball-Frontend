import React, {Component} from 'react'

class EditTrip extends Component {
  state = {
    hotelId: null,
    transportationId: null,
    title: "",
    transportations: [],
    hotels: []
  }

  componentDidMount(){
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        hotelId: data.trip["hotel_id"],
        transportationId: data.trip["transportation_id"],
        title: data.trip.title
      })
    })

    fetch('http://localhost:4000/api/v1/transportations')
    .then(r=>r.json())
    .then(r=>{
      this.setState({transportations: r})
    })

    fetch('http://localhost:4000/api/v1/hotels')
    .then(r=>r.json())
    .then(r=>{
      this.setState({hotels: r})
      console.log(r)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editTrip(this.props.tripId, this.state.title, this.state.hotelId, this.state.transportationId)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Hotel</label>
        <select name="hotelId" onChange={this.handleChange} value={this.state.hotelId}>
          <option value="prompt">Pick Hotel</option>
          {this.state.hotels.map(hotel => {
            return <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
          })}
        </select>
        <label>Transportation</label>
        <select name="transportationId" onChange={this.handleChange} value={this.state.transportationId}>
          <option value="prompt">Pick Airline</option>
          {this.state.transportations.map(transportation => {
            return <option key={transportation.id} value={transportation.id}>{transportation.name}</option>
          })}
        </select>
        <label>Trip Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <button>Edit Trip</button>
      </form>
    )
  }
}

export default EditTrip
