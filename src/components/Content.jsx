import React from 'react';
import ProjectPage from './ProjectPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

const Content = (props) => {
  const {toggle, home, about, portfolio, contact} = props
  return (
    <div className='content'>
      <AboutPage
      about={about}/>
      <ProjectPage
      portfolio={portfolio}/>
      <ContactPage
      contact={contact}/>
    </div>
  )
}

export default Content;
