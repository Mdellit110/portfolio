import React, { useEffect } from "react";
import Hammer from "@egjs/hammerjs";
const HomePage = props => {
  const { toggle, home, isMobile } = props;

  function setUpHammer() {
    let homePage = document.querySelector(".home-page");
    let manager = new Hammer.Manager(homePage);
    let Swipe = new Hammer.Swipe();
    manager.add(Swipe);
    return manager;
  }
  useEffect(() => {
    console.log(isMobile());
    if (isMobile) {
      let deltaY = 0;
      const manager = setUpHammer();
      manager.on("swipeup", e => {
        console.log("swipeup");
        toggle();
        manager.off();
      });
    }
  }, []);

  return (
    <div className={home} onClick={isMobile() ? "" : toggle}>
      <div className="home-content">
        <h1>Hi, I'm Matt, and I enjoy being constantly challenged </h1>
        <div className="to-portfolio">
          {isMobile()
            ? `swipe up to checkout my latest projects!`
            : `click anywhere to checkout my latest projects!`}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
