import React, {Component} from 'react';
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Gallery from "../../components/Gallery/Gallery";
import {getProjects} from "../../store/actions";

class Portfolio extends Component {
    state = {
        formModal: false,
    };

    componentWillMount() {
        if (this.props.projects === null) {
            this.props.getProjects();
        }
    }

    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };

    render() {
        return (
            <div className={"page"}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <h1>PROJECTS</h1>
                    <hr style={{borderBottom: "2px solid #E31B6D", width: "5%", marginLeft: "47.5%", marginTop: "-10px"}} />
                </div>
                <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%"}}>
                    <Gallery open={this.state.formModal} toggleModal={this.toggleModal} name="Projects" clickHandler={""} list={this.props.projects !== null ? this.props.projects : []} />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        //state items
        projects: state.projects
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {
            // actions
            getProjects
        }
    )(Portfolio)
);