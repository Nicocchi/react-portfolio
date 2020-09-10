import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function About(props) {
    return (
        <div id="about" className="landing-wrapper">
            <div className="about-jumbotron">
                <div className="col">
                    <h1 className="move-up">01. About Me</h1>
                    <div className="hr-rose move-up2"></div>
                    <p className="fade-in">
                        Hello! I'm Jeremy, a full stack engineer based in LaGrange, GA. I enjoy building things that
                        other people can see and enjoy, whether that be websites, applications or games. My goal is to
                        always build products that are performant and user friendly. After graduating from Lambda School
                        I joined the engineering team at OnlineLoans where I worked on building the backend and
                        frontend. Here are a few technologies I've been working with recently:
                    </p>
                    <div style={{ display: "flex" }} className="fade-in">
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>HTML & (S)CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="col col-right">
                    <div className="styled-pic fade-in">
                        <a className="styled-avatar-link" href="https://github.com/Nicocchi">
                            <div className="styled-avatar">
                                <img width="100%" src="profile_pic.jpg" alt="Profile picture" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

About.propTypes = {};

export default About;
