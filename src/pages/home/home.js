import React, {Component} from 'react';
import { Container, Button } from "reactstrap";

class Home extends Component {
    state = {
        videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
    };

    render() {
        return (
            <div className={"page"}>

                <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15%"}}>
                    <div className="content-center brand">
                        <span style={{display: "flex", fontSize: "3rem"}}><p style={{fontWeight: "bold"}}>Hello, I'm </p><p style={{color: "#E31B6D", marginLeft: "15px", fontWeight: "bold"}}> Jeremy Boggs.</p></span>
                        <h3 className="d-none d-sm-block" style={{fontWeight: "bold"}}>
                            I'm a full-stack web developer.
                        </h3>
                    </div>

                </Container>
                <Button color="primary" onClick={() => this.props.history.push("/portfolio")}>
                    View Portfolio
                </Button>
            </div>
        );
    }
}

export default Home;