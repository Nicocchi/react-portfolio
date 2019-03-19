import React, {Component} from 'react';
import { Container, Button } from "reactstrap";
import Gallery from "../../components/Gallery/Gallery";

class Portfolio extends Component {
    state = {
        videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
    };

    render() {
        return (
            <div className={"page"}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <h1>PROJECTS</h1>
                    <hr style={{borderBottom: "2px solid #E31B6D", width: "5%", marginLeft: "47.5%", marginTop: "-10px"}} />
                </div>
                <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%"}}>
                    <Gallery name="Projects" clickHandler={""} list={[{name: "Cras justo odio"},{name: "Cras justo odio"}, {name: "Dapibus ac facilisis in"}, {name: "Morbi leo risus"}, {name: "Porta ac consectetur ac"}, {name: "Vestibulum at eros"}]} />
                </Container>
            </div>
        );
    }
}

export default Portfolio;