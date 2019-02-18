import React from 'react'
import { Redirect } from "react-router-dom";
// import {Button, Checkbox, Form} from 'semantic-ui-react'

export default class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    homecity: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://travsketball.herokuapp.com/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        password: this.state.password,
        username: this.state.username,
        home_city: this.state.homecity})
    })
    .then(r => r.json())
    .then(data => {
      this.props.setUserId(data.id)
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={this.state.username}
          className="form-control"
          placeholder='Enter Username'
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          className="form-control"
          placeholder='Enter Password'
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label>Home City</label>
        <input
          name="homecity"
          type="text"
          value={this.state.homecity}
          className="form-control"
          placeholder='Enter Home City'
          onChange={this.handleChange}
        />
      </div>
      <button className="btn btn-primary" type='submit'>Submit</button>
    </form>)
  }
}
