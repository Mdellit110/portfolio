import React from 'react'

const HomePage = (props) => {
  const {toggle, home} = props
  return (
    <div className={home} onClick={toggle}>
      <div className="home-content">
        <h1>Hi, im Matt, I do coding </h1>
        <div className='to-portfolio'>checkout my portfolio!</div>
      </div>
  </div>
  )
}

export default HomePage;
