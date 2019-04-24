import React from 'react'

const HomePage = (props) => {
  const {toggle, home} = props
  return (
    <div className={home} onClick={toggle}>
      <div className="home-content">
        <h1>Hi, I'm Matt, and I enjoy being constantly challenged </h1>
        <div className='to-portfolio'>checkout my latest projects!</div>
      </div>
  </div>
  )
}

export default HomePage;
