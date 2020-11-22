import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { Menu, Segment } from 'semantic-ui-react';

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
      <Menu.Item 
        className="ui container"
        id="Test"
        name="Take The Test"
        as={Link}
        to={{ pathname: "/" }}
         />
         <Menu.Item 
        className="ui container"
        name="About"
        id="About"
        as={NavLink}
        to={{ pathname: "/about" }}
         />
        </Menu>
    </Segment>

  )
}

export default Header
