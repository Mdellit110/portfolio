import React from "react";

const AboutPage = props => {
  const { about } = props;
  return (
    <div ref={about} className="page">
      <div className="about-page">
        <div className="about-text">
          As a full stack developer and a former plumber, I enjoy problem
          solving in the most efficient and collaborative way. Adaptability is
          second nature, I grow in stimulating situations that force me to look
          at things in a new perspective. These traits have set the foundation
          to my success as a full stack developer and team player.{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
