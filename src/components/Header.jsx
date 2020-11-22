import React from 'react'
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <nav id="navbar" className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          Take The Test
        </Link>
        <div className="right menu">
          <NavLink 
          id="about-tab"
          className="ui item"
          activeStyle={{ frontWeight: "bold" }}
          to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>

  )
}

export default Header
