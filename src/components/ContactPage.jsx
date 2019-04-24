import React from "react";


const ContactPage = (props) => {
  const {contact} = props
  return (
    <div ref={contact} className="page">
      <div className="tag">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-page">
        <form className="contact-form"
              id="contactform"
              action="//formspree.io/matt.dellitalia@gmail.com"
              method="POST">
          <div className='form-container'>
            <div className='form-input'>
              <input
                type="text"
                name="name"
                placeholder="Enter your name here"/>
            </div>
            <div className='form-input'>
              <input
                type="email"
                name="_replyto"
                placeholder="Enter an email address I can get back to you at here"/>
            </div>
            <div className='form-input'>
              <textarea
                name="comments"
                placeholder="say something here!"/>
            </div>
            <div className='form-input'>
              <input
                className="contact-input"
                type="submit"
                value="Send"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default ContactPage;
