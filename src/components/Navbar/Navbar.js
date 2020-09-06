import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NavigationBar(props) {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            style={{ backgroundColor: "#0E0520", borderBottom: "1px solid #261E36", height: "80px" }}
            variant="dark"
        >
            <Navbar.Brand href="#home" className="spaced-p">
                <img src="logo.png" alt="logo" width="55px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className="spaced-p-item" style={{ alignItems: "center" }}>
                    <Nav.Link href="#about">
                        <span className="spaced-p-robo">01.</span> About
                    </Nav.Link>
                    <Nav.Link href="#experience">
                        <span className="spaced-p-robo">02.</span> Experience
                    </Nav.Link>
                    <Nav.Link href="#work">
                        <span className="spaced-p-robo">03.</span> Work
                    </Nav.Link>
                    <Nav.Link href="#contact">
                        <span className="spaced-p-robo">04.</span> Contact
                    </Nav.Link>
                    <Button variant="flat" style={{marginLeft: "20px"}}>Resume</Button>{" "}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavigationBar.propTypes = {};

export default NavigationBar;
