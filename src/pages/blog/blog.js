import React, {Component} from 'react';
import { Container, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogPosts } from '../../store/actions';
import BlogGallery from "../../components/Gallery/BlogGallery";

class Blog extends Component {

    componentWillMount() {
        if (this.props.posts === null) {
            this.props.getBlogPosts();
        }
    }

    render() {
        return (
            <div className={"page"}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <h1>BLOG</h1>
                    <hr style={{borderBottom: "2px solid #E31B6D", width: "5%", marginLeft: "47.5%", marginTop: "-10px"}} />
                </div>
                <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%"}}>
                    <BlogGallery props={this.props} name="Blog" clickHandler={""} list={this.props.posts !== null ? this.props.posts : []} />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        //state items
        posts: state.posts
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {
            // actions
            getBlogPosts
        }
    )(Blog)
);