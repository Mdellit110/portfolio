import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import github from '../images/github-brands.svg';

const ProjectPage = (props) => {
  const {portfolio} = props
  return (
    <div ref={portfolio} className='page'>
      <div className="tag">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-page">
            <div className="project-card1">
              <div className="portfolio-links">
                <a className="site" href="http://tradesync.surge.sh" target="_blank">Live Site</a>
                <a href="https://github.com/Mdellit110/TradeSync" target="_blank"><img src={github} alt="github"/></a>
              </div>
            </div>
            <div className="project-card2">
              <div className="portfolio-links">
                <a className="site" href="http://dodgyblobby.surge.sh" target="_blank">Live Site</a>
                <a href="https://github.com/Mdellit110/ESCAPE-the-game" target="_blank"><img src={github} alt="github"/></a>
              </div>
            </div>
            <div className="project-card3">
              <div className="portfolio-links">
                <a className="site" href="https://walkordrive.netlify.com" target="_blank">Live Site</a>
                <a href="https://github.com/Mdellit110/Project2" target="_blank"><img src={github} alt="github"/></a>
              </div>
            </div>
            <div className="project-card4">
              <div className="portfolio-links">
                <a className="site" href="https://subrats.netlify.com" target="_blank">Live Site</a>
                <a href="https://github.com/Mdellit110/subrats" target="_blank"><img src={github} alt="github"/></a>
              </div>
            </div>
            <div className="project-card5">
              <div className="portfolio-links">
                <a className="site" href="https://everybodyeats.netlify.com" target="_blank">Live Site</a>
                <a href="https://github.com/Mdellit110" target="_blank"><img src={github} alt="github"/></a>
              </div>
            </div>
      </div>
    </div>
  )
}

export default ProjectPage;
