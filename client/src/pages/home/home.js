import React, {Component} from 'react';
import { Container, Button } from "reactstrap";
import Gallery from "../../components/Gallery/Gallery";
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
                "distance": 250,
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

class Home extends Component {
    state = {
        videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
    };

    render() {
        return (
            <div className={""}>

                <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15%"}}>
                    <div className="content-center brand">
                        <span style={{display: "flex", fontSize: "3rem"}}><p style={{fontWeight: "bold"}}>Hello, I'm </p><p style={{color: "#E31B6D", marginLeft: "15px", fontWeight: "bold"}}> Jeremy Boggs.</p></span>
                        <h3 className="d-none d-sm-block" style={{fontWeight: "bold"}}>
                            I'm a full-stack web developer.
                        </h3>
                    </div>

                </Container>
                <Button color="primary" onClick={() => this.props.history.push("/portfolio")}>
                    View Projects
                </Button>
                {/*<Gallery name="Projects" clickHandler={""} list={[{name: "Cras justo odio"}, {name: "Dapibus ac facilisis in"}, {name: "Morbi leo risus"}, {name: "Porta ac consectetur ac"}, {name: "Vestibulum at eros"}]}/>*/}
            </div>
        );
    }
}

export default Home;