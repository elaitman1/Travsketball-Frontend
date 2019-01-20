import React, {Component} from 'react'

class PickTripDetails extends Component {
  state = {
    hotel: null,
    transportation: null,
    title: ""
  }

  handleClick = () => {
    if (this.state.hotel && this.state.transportation && this.state.title) {
      this.props.createTrip(this.props.gameId, this.state.title, this.state.hotel, this.state.transportation)
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
        <select name="hotel" onChange={this.handleChange}>
          <option value="hotel1">Hotel 1</option>
          <option value="hotel2">Hotel 2</option>
          <option value="hotel3">Hotel 3</option>
          <option value="hotel4">Hotel 4</option>
          <option value="hotel5">Hotel 5</option>
        </select>
        <label>Transportation</label>
        <select name="transportation" onChange={this.handleChange}>
          <option value="airplane">Airplane</option>
          <option value="train">Train</option>
          <option value="bus">Bus</option>
        </select>
        <label>Trip Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Create Trip</button>
      </div>
    )
  }
}

export default PickTripDetails
