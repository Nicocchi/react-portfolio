import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NavigationBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-style" variant="dark">
            <Navbar.Brand href="#home" onClick={(e) => props.changePage(e, 0)} className="spaced-p">
                <img src={props.pageIndex === 0 ? "logo.png" : "logo2.png"} alt="logo" width="55px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className="spaced-p-item" style={{ alignItems: "center" }}>
                    <Nav.Link
                        href="#about"
                        onClick={(e) => props.changePage(e, 1)}
                        active={props.pageIndex === 1 ? true : false}
                    >
                        <span className="spaced-p-robo">01.</span> About
                    </Nav.Link>
                    <Nav.Link
                        href="#experience"
                        onClick={(e) => props.changePage(e, 2)}
                        active={props.pageIndex === 2 ? true : false}
                    >
                        <span className="spaced-p-robo">02.</span> Experience
                    </Nav.Link>
                    <Nav.Link
                        href="#work"
                        onClick={(e) => props.changePage(e, 3)}
                        active={props.pageIndex === 3 ? true : false}
                    >
                        <span className="spaced-p-robo">03.</span> Work
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        onClick={(e) => props.changePage(e, 4)}
                        active={props.pageIndex === 4 ? true : false}
                    >
                        <span className="spaced-p-robo">04.</span> Contact
                    </Nav.Link>
                    <a target="blank" rel="noopener noreferrer" href="resume.pdf">
                        <Button variant="flat" style={{ marginLeft: "20px" }}>
                            Resume
                        </Button>{" "}
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavigationBar.propTypes = {
    pageIndex: PropTypes.number,
    changePage: PropTypes.func,
};

export default NavigationBar;
