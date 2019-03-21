import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home";
import NavBar from "./components/NavBar/NavBar";
import Particles from "react-particles-js";
import Portfolio from "./pages/portfolio/portfolio";

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";

const particleOpt = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 50,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles
              params={particleOpt}
              style={{position: "absolute", left: "0", top: "0", width: "100%", height: "100%", zIndex: "-1 !important"}}
          />
          <NavBar history={this.props.history}/>
          <Route render={({location}) => (
              <TransitionGroup>
                  <CSSTransition
                      key={location.key}
                      timeout={500}
                      classNames="fade"
                  >
                      <Switch location={location}>
                          <Route exact path='/' component={Home} />
                          <Route path="/portfolio" component={Portfolio} />
                          <Route path="/contact" component={Contact} />
                          <Route path="/about" component={About} />
                      </Switch>
                  </CSSTransition>
              </TransitionGroup>
          )}/>

      </div>
    );
  }
}

export default withRouter(App);
