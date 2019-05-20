import React from "react";
import github from "../images/github-brands.svg";

const ProjectPage = props => {
  const { portfolio } = props;
  return (
    <div ref={portfolio} className="page">
      <div className="portfolio-page">
        <div className="project-card1">
          <div className="portfolio-links">
            <a
              className="site"
              href="http://tradesync.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/Mdellit110/TradeSync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="project-info">
          <h3>
            TradeSync - <i>react/rails</i>
          </h3>
          <p>
            a web application that connects general contractors with the trades
            they oversee by allowing them to generate tasks and keep track of
            who did what and when. it also works as a hub for trade workers to
            stay up to date with what their fellow trades are up to in the
            construction process.
          </p>
        </div>
        <div className="project-card2">
          <div className="portfolio-links">
            <a
              className="site"
              href="http://dodgyblobby.surge.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/Mdellit110/ESCAPE-the-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="project-info">
          <h3>
            Dodgy Blobby -<i>javascript</i>
          </h3>
          <p>
            a javascript game where you play as a small orange blob and move
            left and right with the arrow keys to dodge the falling rocks. keeps
            track of your score as well as gets progressively faster as you move
            on.
          </p>
        </div>
        <div className="project-card3">
          <div className="portfolio-links">
            <a
              className="site"
              href="https://subrats.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/Mdellit110/subrats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="project-info">
          <h3>
            SubRats -<i>react/express</i>
          </h3>
          <p>
            a full stack web application i made with a small team. subrats is a
            community where you can post anonymous comments(rat out) the subway
            stations you use everyday. it stores all the data from all the
            comments and provides stats on each station based on cleanliness,
            activity, and timeliness.
          </p>
        </div>
        <div className="project-card4">
          <div className="portfolio-links">
            <a
              className="site"
              href="https://walkordrive.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/Mdellit110/Project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="project-info">
          <h3>
            Walk or Drive -<i>react/google maps api</i>
          </h3>
          <p>
            a web application that uses the google distance matrix service of
            the google maps api to accurately calculate the time traveled to any
            location based on traffic and compares the walking or driving time
            to see what would be faster. this is primarily for use in big cities
            where it sometimes is faster to walk where you have to go rather
            than waiting for a taxt and sitting in traffic.
          </p>
        </div>
        <div className="project-card5">
          <div className="portfolio-links">
            <a
              className="site"
              href="https://everybodyeats.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/Mdellit110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="project-info">
          <h3>
            Everybody Eats -<i>react/express</i>
          </h3>
          <p>
            a web application that aims to help friends organize events or just
            nights out with friends for large groups. users can create events
            and share a special invitation link to their freinds so they can
            rsvp for events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
