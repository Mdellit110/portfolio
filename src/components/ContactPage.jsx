import React from "react";

const ContactPage = props => {
  const { contact } = props;
  return (
    <div ref={contact} className="page">
      <div className="contact-page">
        <form
          className="contact-form"
          id="contactform"
          action="//formspree.io/matt.dellitalia@gmail.com"
          method="POST"
        >
          <div className="form-container">
            <div className="form-input">
              <input type="text" name="name" placeholder="Whats your name?" />
            </div>
            <div className="form-input">
              <input
                type="email"
                name="_replyto"
                placeholder="Put your email adress here!"
              />
            </div>
            <div className="form-input">
              <textarea
                name="comments"
                placeholder="And your message right here!"
              />
            </div>
            <div className="form-input">
              <input className="contact-input" type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
