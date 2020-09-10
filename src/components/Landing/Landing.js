import React from "react";
import { Button } from "react-bootstrap";

function Landing() {
    return (
        <div id="landing" className="landing-wrapper">
            <div className="landing-jumbotron">
                <p className="rose-text fade-in">Hi, my name is</p>
                <h1 className="move-up">Jeremy Boggs.</h1>
                <h2 className="move-up2">I build things for the web.</h2>
                <div className="hr-rose move-up2"></div>
                <p className="fade-in">
                    I'm a full stack engineer based in LaGrange, GA specializing in building exceptional websites,
                    applications, and everything in between.
                </p>
                <div className="fade-in">
                    <Button variant="flat" style={{ height: "60px" }}>
                        Get In Touch
                    </Button>{" "}
                    <Button variant="flat" style={{ height: "60px" }}>
                        Resume
                    </Button>{" "}
                </div>
            </div>
        </div>
    );
}

export default Landing;
