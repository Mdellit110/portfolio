import React from 'react';

const AboutPage = (props) => {
  const {about} = props
  return (
    <div ref={about} className='page'>
      <h1>About Me</h1>
      <div className="about-page">
        <img className="about-image" src="https://i.imgur.com/jtyldg2.jpg?1" alt="my face" />
        <div className="about-text">As a full stack developer and a former plumber, I enjoy being given a new problem to solve and finding the most efficient was to solve in a collaborative way. To me adaptability is second nature and I grow in stimulating situations that force me to look at things in a new perspective. I feel that these traits are the building blocks of becoming an effective team member. </div>
      </div>
    </div>
  )
}

export default AboutPage;
