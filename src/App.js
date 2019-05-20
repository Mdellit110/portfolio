import React, { Component } from "react";
import "./styles/App.css";
import "./styles/nav.css";
import "./styles/home.css";
import "./styles/content.css";
import "./styles/about.css";
import "./styles/portfolio.css";
import "./styles/contact.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Content from "./components/Content";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_home: "home-page"
    };
    this.about = React.createRef();
    this.portfolio = React.createRef();
    this.contact = React.createRef();
    this.toggleHome = this.toggleHome.bind(this);
    this.goTo = this.goTo.bind(this);
    this.isMobileDevice = this.isMobileDevice.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
  toggleHome() {
    if (this.state.is_home === "home-page") {
      this.setState(() => ({
        is_home: "hidden"
      }));
    } else {
      this.setState(() => ({
        is_home: "home-page"
      }));
    }
  }
  goTo(ref) {
    if (ref === "about") {
      this.about.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (ref === "portfolio") {
      this.portfolio.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (ref === "contact") {
      this.contact.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  handleScroll() {
    let currentTag;
    if (this.about.current.getBoundingClientRect().bottom > 0) {
      currentTag = "About";
    } else if (this.portfolio.current.getBoundingClientRect().bottom > 50) {
      currentTag = "Portfolio";
    } else if (this.contact.current.getBoundingClientRect().bottom < 916.375) {
      currentTag = "Contact";
    }
    return currentTag;
  }

  render() {
    return (
      <div className="App">
        <HomePage
          toggle={this.toggleHome}
          home={this.state.is_home}
          isMobile={this.isMobileDevice}
        />
        <NavBar toggle={this.toggleHome} goTo={this.goTo} />
        <Content
          handleScroll={this.handleScroll}
          about={this.about}
          portfolio={this.portfolio}
          contact={this.contact}
        />
      </div>
    );
  }
}

export default App;
