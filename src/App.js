import React, { Component } from 'react';
import './styles/App.css';
import './styles/nav.css';
import './styles/home.css';
import './styles/content.css';
import './styles/about.css';
import './styles/portfolio.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Content from './components/Content';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_home: 'home-page',
    }
    this.about = React.createRef()
    this.portfolio = React.createRef()
    this.contact = React.createRef()
    this.toggleHome = this.toggleHome.bind(this)
    this.goTo = this.goTo.bind(this)
  }

  toggleHome() {
    if (this.state.is_home === 'home-page') {
      this.setState(prevState => ({
        is_home: 'hidden'
      }))
    } else {
      this.setState(prevState => ({
        is_home: 'home-page'
      }))
    }
  }

  goTo(ref) {
    if (ref === 'about') {
      this.about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (ref === 'portfolio'){
      this.portfolio.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (ref === 'contact'){
      this.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    console.log(ref);
  }


  render() {
    return (
      <div className="App">
        <HomePage
          toggle={this.toggleHome}
          home={this.state.is_home}/>
        <NavBar
          toggle={this.toggleHome}
          goTo={this.goTo}/>
        <Footer/>
        <Content
          about={this.about}
          portfolio={this.portfolio}
          contact={this.contact}/>
      </div>
    );
  }
}

export default App;
