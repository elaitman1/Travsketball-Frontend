import React, {Component} from 'react'
import GameDetails from './GameDetails'

class ExperienceDetails extends Component {

  state = {
    experience: undefined
  }

  componentDidMount() {
    fetch(`https://travsketball.herokuapp.com/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}/experiences`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      const foundExp = data.find(exp => exp['trip_id'] === this.props.tripId)
      console.log(foundExp);
      this.setState({
        experience: foundExp
      })
    })
    console.log('mount')
  }

  handleClearTrip = () => {
    this.props.clearTrip()
  }

  showImage = () => {
    return <img src={this.state.experience['img_url']} />
  }

  render() {
    return (
            <div>
              <button className="btn btn-primary" onClick={this.handleClearTrip}>Back to Trip List</button>
              {this.state.experience ? <GameDetails gameId={this.state.experience["game_id"]}/> : <></>}
              <h2>Review: {this.state.experience ? this.state.experience.review : 'title'}</h2>
              <h2>Rating: {this.state.experience ? this.state.experience.rating : 'rating'}</h2>
              {/* {this.state.experience ?  this.showImage() : 'image'} */}
            </div>

    )
  }
}

export default ExperienceDetails
