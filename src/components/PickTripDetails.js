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

  handleSubmit = (e) => {
    e.preventDefault()
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
      <form onSubmit={this.handleSubmit} className="create-trip-form">
        <div className="row">
          <div className="form-group col-md-3">
            <label>Hotel</label>
            <select name="hotelId" className="form-control" onChange={this.handleChange}>
              <option value="prompt">Pick Hotel</option>
              {this.state.hotels.map(hotel => {
                return <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
              })}
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Transportation</label>
            <select name="transportationId" className="form-control" onChange={this.handleChange}>
              <option value="prompt">Pick Airline</option>
              {this.state.transportations.map(transportation => {
                return <option key={transportation.id} value={transportation.id}>{transportation.name}</option>
              })}
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Trip Title</label>
            <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary">Create Trip</button>
          </div>
        </div>
      </form>
    )
  }
}

export default PickTripDetails
