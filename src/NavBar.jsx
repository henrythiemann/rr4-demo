import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ auth, setAuth }) => (
  <nav className="navbar">

    <NavLink className="link" exact to="/">Home</NavLink>
    <NavLink className="link" to="/teams">Teams</NavLink>
    <NavLink className="link" exact to="/manage">Manage</NavLink>

    <span className="padding" />
    <button onClick={() => setAuth(!auth)}>{auth ? 'Sign Out' : 'Sign In'}</button>
  </nav>
)

export default NavBar
