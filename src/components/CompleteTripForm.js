import React, { Component } from 'react';

class CompleteTripForm extends Component {

  state = {
    review: "",
    rating: null,
    imgUrl: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}/experiences`, {
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
      fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}`, {
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
          <label name="review">Review: </label>
          <textarea onChange={this.handleChange} name="review" value={this.state.review}></textarea><br/>
          <label name="rating">Rating: </label>
          <select onChange={this.handleChange} name="rating" value={this.state.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <label name="img_url">Image: </label>
          <input onChange={this.handleChange} type="text" name="imgUrl" value={this.state.imgUrl}/><br/>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default CompleteTripForm;
