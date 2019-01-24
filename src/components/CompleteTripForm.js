import React, { Component } from 'react';

class CompleteTripForm extends Component {

  state = {
    review: "",
    rating: "Pick a Rating",
    imgUrl: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://travsketball.herokuapp.com/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}/experiences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        trip_id: this.props.tripId,
        image_url: this.state.imgUrl,
        review: this.state.review,
        rating: parseInt(this.state.rating)
      })
    })
    .then(res => res.json())
    .then(data => {
      fetch(`https://travsketball.herokuapp.com/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          completed: true
        })
      })
      .then(window.location.href = '/trip-list')
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label name="review">Review: </label>
            <textarea className="form-control" onChange={this.handleChange} name="review" value={this.state.review}></textarea><br/>
          </div>
          <div className="form-group">
            <label name="rating">Rating: </label>
            <select className="form-control" onChange={this.handleChange} name="rating" value={this.state.rating}>
              <option value="Pick a Rating">Pick a Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label name="imgUrl">Image URL </label>
            <input className="form-control" onChange={this.handleChange} type="text" name="imgUrl" value={this.state.imgUrl}/><br/>
          </div> */}
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default CompleteTripForm;
