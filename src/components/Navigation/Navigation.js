import React from "react"
import { NavLink } from "react-router-dom"

// styles
import "./Navigation.scss"

const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink exact to="/" activeClassName="active">
        Work
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </div>
  )
}

export default Navigation
