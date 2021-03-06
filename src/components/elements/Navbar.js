import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand btn" style={{backgroundColor:'#5406bf'}}>
          Contact Book
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto" style={{ backgroundColor: 'white' }}>
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
