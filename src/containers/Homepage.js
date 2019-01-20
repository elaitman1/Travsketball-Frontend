import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Homepage Placeholder</h2>
        <Link to="/new-trip"><button>New Trip</button></Link>
      </div>
    )
  }
}

export default Homepage
