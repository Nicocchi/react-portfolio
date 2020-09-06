import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Landing(props) {
    return (
        <div className="landing-wrapper">
            <div className="landing-jumbotron">
                <p className="rose-text">Hi, my name is</p>
                <h1>Jeremy Boggs.</h1>
                <h2>I build things for the web.</h2>
                <div className="hr-rose"></div>
                <p>I'm a full stack engineer based in LaGrange, GA specializing in building exceptional websites, applications, and everything in between.</p>
                <div>
                <Button variant="flat" style={{height: "60px"}}>Get In Touch</Button>{" "}
                <Button variant="flat" style={{height: "60px"}}>Resume</Button>{" "}
                </div>
            </div>
        </div>
    );
}

Landing.propTypes = {};

export default Landing;
