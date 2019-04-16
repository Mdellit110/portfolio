import React from 'react';

const ContactPage = (props) => {
  const {contact} = props
  return (
    <div ref={contact} className='page'>
      <h1>Contact Me</h1>
    </div>
  )
}

export default ContactPage;
