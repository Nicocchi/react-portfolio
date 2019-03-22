import React, {Component} from 'react';
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Gallery from "../../components/Gallery/Gallery";
import {getProjects} from "../../store/actions";
import "../../assets/css/portfolio.css";

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
                <div className="portfolio-header">
                    <h1>PROJECTS</h1>
                    {/*<div className="portfolio-hr"></div>*/}
                    <hr className="hr"/>
                </div>
                <Container classname="portfolio-container">
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