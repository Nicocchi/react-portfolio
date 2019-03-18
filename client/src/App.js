import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home";
import NavBar from "./components/NavBar/NavBar";
import Particles from "react-particles-js";

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
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
