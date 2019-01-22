import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Homepage Placeholder</h2>
        <Link to="/new-trip"><button>New Trip</button></Link>
        <Link to="/trip-list"><button>Trip List</button></Link>
      </div>
    )
  }
}

export default Homepage
