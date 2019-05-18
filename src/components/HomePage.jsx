import React, { useEffect } from "react";
import Hammer from "@egjs/hammerjs";
const HomePage = props => {
  const { toggle, home } = props;
  function setUpHammer() {
    let homePage = document.querySelector(".home-page");
    let manager = new Hammer.Manager(homePage);
    let Swipe = new Hammer.Swipe();
    manager.add(Swipe);
    return manager;
  }
  useEffect(() => {
    let deltaY = 0;
    const manager = setUpHammer();
    manager.on("swipe", e => {
      deltaY = deltaY + e.deltaY;
      let direction = e.offsetDirection;
      let translate3d = `translate3d ${deltaY}px, 0, 0)`;
      if (deltaY < 0) {
        toggle();
      }
      deltaY = 0;
    });
  }, []);

  return (
    <div className={home} onClick={toggle}>
      <div className="home-content">
        <h1>Hi, I'm Matt, and I enjoy being constantly challenged </h1>
        <div className="to-portfolio">
          click anywhere to checkout my latest projects!
        </div>
      </div>
    </div>
  );
};

export default HomePage;
