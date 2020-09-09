import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

function About(props) {
    return (
        <div id="about" className="landing-wrapper">
            <div className="landing-jumbotron">
            <h1 style={{fontSize: "5rem"}} className="move-up">01. About Me</h1>
                <p className="rose-text fade-in">Hello! I'm Jeremy, a full stack engineer based in LaGrange, GA.</p>
            </div>
        </div>
    )
}

About.propTypes = {

}

export default About

