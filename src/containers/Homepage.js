import React, {Component} from 'react'
import { Link } from "react-router-dom"
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Homepage extends Component {

  render() {
    return (
    <div>
      <div className="container">
        <Link to="/new-trip"><button>New Trip</button></Link>
        <Link to="/trip-list"><button>Trip List</button></Link>
      </div>
    </div>
    )
  }
}

export default Homepage
