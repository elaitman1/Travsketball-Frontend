import React, {Component} from 'react'
var moment = require('moment')

class GameDetails extends Component {
  state = {
    title: "",
    date: moment(new Date()),
    homeTeam: "",
    awayTeam: "",
    stadium:""
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/games/${this.props.gameId}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        title: data.game.title,
        date: data.game.date,
        homeTeam: data["home_team"][0],
        awayTeam: data["away_team"][0],
        stadium: data.stadium
      })

    })
  }

  handleClick = () => {
    console.log("click to add to trip")
  }

  render() {
    return (
      <div className="game-details">
        <h2>{this.state.title}</h2>
        <img src={this.state.homeTeam.logo} alt={this.state.homeTeam.name}/>
        <img src={this.state.awayTeam.logo} alt={this.state.awayTeam.name}/>
        <h4>Date: {moment(this.state.date).format("MMM Do YYYY")}</h4>
        <h4>Time: {moment(this.state.date).format("LT")}</h4>
        <h4>Stadium: {this.state.stadium.name}</h4>
        <h4>Location: {this.state.stadium.location}</h4>
        <img src={this.state.stadium.image} alt="{this.state.stadium.name}"/>
        <button onClick={this.handleClick}>Add to Trip</button>
      </div>
    )
  }
}

export default GameDetails
