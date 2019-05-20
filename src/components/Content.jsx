import React, { useState } from "react";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const Content = props => {
  const { about, portfolio, contact, handleScroll } = props;
  const [tag, setTag] = useState("About");
  return (
    <div className="content" onScroll={() => setTag(handleScroll())}>
      <div className="tag">
        <h1>{tag}</h1>
      </div>
      <AboutPage className="about" about={about} />
      <ProjectPage className="portfolio" portfolio={portfolio} />
      <ContactPage className="contact" contact={contact} />
    </div>
  );
};

export default Content;
