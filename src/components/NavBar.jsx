import React from 'react'

const NavBar = (props) => {
  const {toggle, goTo} = props
  return (
    <sidebar>
      <div className="nav-links">
        <h2 onClick={toggle}>Home</h2>
        <h2 onClick={() => goTo('about')}>About</h2>
        <h2 onClick={() => goTo('portfolio')}>Portfolio</h2>
        <h2 onClick={() => goTo('contact')}>Contact</h2>
      </div>
    </sidebar>
  )
}

export default NavBar ;
