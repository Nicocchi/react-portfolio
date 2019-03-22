import React, {Component} from 'react';
import { Container, Button } from "reactstrap";
import "../../assets/css/home.css";

class Home extends Component {

    render() {
        return (
            <div className={"page"}>

                <Container className="home-container">
                    <div className="content-center brand">
                        <span><p>Hello, I'm </p><p className="home-highlight"> Jeremy Boggs.</p></span>
                        <h3>
                            I'm a full-stack web developer.
                        </h3>
                    </div>
                    <Button color="primary" onClick={() => this.props.history.push("/portfolio")}>
                        View Portfolio
                    </Button>
                </Container>

            </div>
        );
    }
}

export default Home;