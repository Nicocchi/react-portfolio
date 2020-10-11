import React from "react";
import { Button } from "react-bootstrap";

function Contact(props) {
    return (
        <div id="about" className="landing-wrapper">
            <div className="about-jumbotron">
                <div className="col">
                    <h1 className="move-up">04. What's Next?</h1>
                    <div className="hr-rose move-up2"></div>
                    <div className="contact-content fade-in">
                        <h3>Want to inquire about an opportunity?</h3>
                        <a href="mailto:jeremyboggs776@gmail.com">
                            <Button variant="flat">
                                Contact
                            </Button>{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
