import React, {Component} from 'react'
import { Link } from "react-router-dom"
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Homepage extends Component {

  state = {
    signUp: false,
    name: '',
    username: '',
    password: '',
    homecity:''

  }

  signUpButtonClick = () => {
      this.setState({
        signUp: !this.state.signUp,
      })
    }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
        name: e.target.name,
        username: e.target.username,
        password: e.target.password,
        home_city: e.target.homecity
    })

    fetch(`http://localhost:4000/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        home_city: this.state.homecity,
        password_digest: this.state.password,
        username: this.state.username,
        home_city: this.state.homecity
      })
    })
    // .then(window.location.href = '/trip-list')
  }



  render() {
    return (
<<<<<<< HEAD
      <div>
      {this.state.signUp ?
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input name={this.state.name} placeholder='name' />
          </Form.Field>
          <Form.Field>
              <label>UserName</label>
              <input username={this.state.username} placeholder='userName' />
          </Form.Field>
          <Form.Field>
              <label>Password</label>
              <input password={this.state.password} placeholder='password' />
          </Form.Field>
          <Form.Field>
              <label>Home City</label>
              <input homecity={this.state.homecity} placeholder='homecity' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form> :
        <Form>
          <Form.Field>
            <label>UserName</label>
            <input placeholder='userName' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='password' />
          </Form.Field>
          <Button type='submit'>Login</Button>
          <Button onClick={this.signUpButtonClick} type='submit'>! Sign Up !</Button>
        </Form>
    }
    </div>
=======
      <div className="container">
        <h2>Homepage Placeholder</h2>
        <Link to="/new-trip"><button>New Trip</button></Link>
        <Link to="/trip-list"><button>Trip List</button></Link>
      </div>
>>>>>>> d4d96a3069afb7350a84912541d945fa89f89a71
    )
  }
}

export default Homepage
