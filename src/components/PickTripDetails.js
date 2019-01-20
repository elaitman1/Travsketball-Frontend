import React, {Component} from 'react'

class PickTripDetails extends Component {
  handleClick = () => {
    this.props.createTrip()
  }

  render() {
    return (
      <div>
        <label>Hotel</label>
        <select>
          <option value="hotel1">Hotel 1</option>
          <option value="hotel2">Hotel 2</option>
          <option value="hotel3">Hotel 3</option>
          <option value="hotel4">Hotel 4</option>
          <option value="hotel5">Hotel 5</option>
        </select>
        <label>Transportation</label>
        <select>
          <option value="airplane">Airplane</option>
          <option value="train">Train</option>
          <option value="bus">Bus</option>
        </select>
        <button onClick={this.handleClick}>Create Trip</button>
      </div>
    )
  }
}

export default PickTripDetails
