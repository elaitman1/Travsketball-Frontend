import React, {Component} from 'react'
import GameDetails from './GameDetails'

class ExperienceDetails extends Component {

  state = {
    experience: undefined
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}/experiences/1`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({
        experience: data
      })
    })
    console.log('mount')
  }

  handleClearTrip = () => {
    this.props.clearTrip()
  }

  render() {
    return (
            <div>
              <button onClick={this.handleClearTrip}>Back to Trip List</button>
              {this.state.experience ? <GameDetails gameId={this.state.experience["game_id"]}/> : <></>}
              <h2>Review: {this.state.experience ? this.state.experience.review : 'title'}</h2>
              <h2>{this.state.experience ? this.state.experience.img_url : 'image'}</h2>
              <h2>Rating: {this.state.experience ? this.state.experience.rating : 'rating'}</h2>
            </div>

    )
  }
}

export default ExperienceDetails
