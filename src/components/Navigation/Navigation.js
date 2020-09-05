import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="Navlink">
      <NavLink exact to="/">
        Work
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Navigation
