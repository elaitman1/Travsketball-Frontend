import React, {Component} from 'react'

class PickTripDetails extends Component {
  state = {
    hotelId: null,
    transportationId: null,
    title: "",
    transportations: [],
    hotels: []
  }

  componentDidMount(){
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

  handleClick = () => {
    if (this.state.hotelId && this.state.transportationId && this.state.title && this.state.hotelId !== "prompt" && this.state.transportationId !== "prompt") {
      this.props.createTrip(this.props.gameId, this.state.title, this.state.hotelId, this.state.transportationId)
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label>Hotel</label>
        <select name="hotelId" onChange={this.handleChange}>
          <option value="prompt">Pick Hotel</option>
          {this.state.hotels.map(hotel => {
            return <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
          })}
        </select>
        <label>Transportation</label>
        <select name="transportationId" onChange={this.handleChange}>
          <option value="prompt">Pick Airline</option>
          {this.state.transportations.map(transportation => {
            return <option key={transportation.id} value={transportation.id}>{transportation.name}</option>
          })}
        </select>
        <label>Trip Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <button className="btn btn-primary" onClick={this.handleClick}>Create Trip</button>
      </div>
    )
  }
}

export default PickTripDetails
