import React from 'react'

export default class Login extends React.Component{
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(r => r.json())
    .then(data => {
      this.props.setUserId(data.id)
      console.log(data)
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
          <label>UserName</label>
          <input
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder='Enter username'
            className="form-control"
            value={this.state.username}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder='Enter password'
            className="form-control"
            value={this.state.password}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
      </form>
    )
  }
}
