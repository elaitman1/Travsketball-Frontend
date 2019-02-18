import React, {Component} from 'react'

class EditTrip extends Component {
  state = {
    hotelId: undefined,
    transportationId: undefined,
    title: "",
    transportations: [],
    hotels: []
  }

  componentDidMount(){
    fetch(`https://travsketball.herokuapp.com/api/v1/users/1/trips/${this.props.tripId}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        hotelId: data.trip["hotel_id"],
        transportationId: data.trip["transportation_id"],
        title: data.trip.title
      })
    })

    fetch('https://travsketball.herokuapp.com/api/v1/transportations')
    .then(r=>r.json())
    .then(r=>{
      this.setState({transportations: r})
    })

    fetch('https://travsketball.herokuapp.com/api/v1/hotels')
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
      <form className="edit-form" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-4 form-group">
            <label>Hotel</label>
            <select className="form-control" name="hotelId" onChange={this.handleChange} value={this.state.hotelId}>
              <option value="prompt">Pick Hotel</option>
              {this.state.hotels.map(hotel => {
                return <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
              })}
            </select>
          </div>
          <div className="col-md-4 form-group">
            <label>Transportation</label>
            <select className="form-control" name="transportationId" onChange={this.handleChange} value={this.state.transportationId}>
              <option value="prompt">Pick Airline</option>
              {this.state.transportations.map(transportation => {
                return <option key={transportation.id} value={transportation.id}>{transportation.name}</option>
              })}
            </select>
          </div>
          <div className="col-md-4 form-group">
            <label>Trip Title</label>
            <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Edit Trip</button>
        </div>
      </form>
    )
  }
}

export default EditTrip
