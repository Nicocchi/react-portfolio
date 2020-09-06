import React from "react";
import PropTypes from "prop-types";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import NavigationSharpIcon from '@material-ui/icons/NavigationSharp';

function Footer(props) {
    return (
        <div id="footer" className="bg-grid">
            <div className="footer-profiles">
                <a target="_blank" href="https://www.linkedin.com/in/jeremy-boggs-b5861b181/"><LinkedInIcon className="footer-icon-a"/></a>
                <a target="_blank" href="https://github.com/Nicocchi"><GitHubIcon className="footer-icon-a" /></a>
                <NavigationSharpIcon style={{ color: "#8892B0", transform: "rotate(90deg)", marginTop: "-3px" }} />
                <p style={{color: "#fff"}}>Follow Me</p>
            </div>
            <div className="footer-contact">
                <p>Say Hello</p>
                <NavigationSharpIcon className="footer-icon" />
                <a target="_blank" href="mailto:jeremyboggs776@gmail.com" style={{textDecoration: "none", color: "#fff"}}>jeremyboggs776@gmail.com</a>
            </div>
        </div>
    );
}

Footer.propTypes = {};

export default Footer;
