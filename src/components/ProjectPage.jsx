import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectPage = (props) => {
  const {portfolio} = props
  return (
    <div ref={portfolio} className='page'>
      <h1>Portfolio</h1>
      <div className="portfolio-page">
        <div className="carousel-container">
          <Carousel>
            <div>
              <img src="https://i.imgur.com/5QGtW1R.png" />
              <div className="legend" style={{padding: 0}}>
                <a className='carousel-link' href="http://tradesync.surge.sh" target="_blank">Link to TradeSync</a>
                <a className='carousel-link' href="https://github.com/Mdellit110/TradeSync" target="_blank">Link to Github</a>
              </div>
            </div>
            <div>
              <img src="https://i.imgur.com/LMeLl2S.png" />
              <div className="legend" style={{padding: 0}}>
                <a className='carousel-link' href="http://dodgyblobby.surge.sh" target="_blank">Link to Dodgy Blobby</a>
                <a className='carousel-link' href="https://github.com/Mdellit110/ESCAPE-the-game" target="_blank">Link to Github</a>
              </div>
            </div>
            <div>
              <img src="https://i.imgur.com/hrGbwkI.png" />
              <div className="legend" style={{padding: 0}}>
                <a className='carousel-link' href="https://walkordrive.netlify.com" target="_blank">Link to Walk or Drive</a>
                <a className='carousel-link' href="https://github.com/Mdellit110/Project2" target="_blank">Link to Github</a>
              </div>
            </div>
            <div>
              <img src="https://i.imgur.com/t0ArjBI.png" />
              <div className="legend" style={{padding: 0}}>
                <a className='carousel-link' href="https://subrats.netlify.com" target="_blank">Link to SubRats</a>
                <a className='carousel-link' href="https://github.com/Mdellit110/subrats" target="_blank">Link to Github</a>
              </div>
            </div>
            <div>
              <img src="https://i.imgur.com/ImgpX39.png" />
              <div className="legend" style={{padding: 0}}>
                <a className='carousel-link' href="https://everybodyeats.netlify.com" target="_blank">Link to Everybody Eats</a>
                <a className='carousel-link' href="https://github.com/Mdellit110/Everybody-Eats" target="_blank">Link to Github</a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;
