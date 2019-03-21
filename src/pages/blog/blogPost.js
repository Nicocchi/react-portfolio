import React, {Component} from 'react';
import { Container, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogPosts } from '../../store/actions';
import moment from 'moment';

import {Link, RichText, Date} from 'prismic-reactjs';


const linkResolver = function(doc){

    // Pretty URLs for known types

    if (doc.type === 'blog_post') return "/blog/post/" + doc.id;

    if (doc.type === 'page') return "/" + doc.uid;

    // Fallback for other types, in case new custom types get created

    return "/doc/" + doc.id;

}

class BlogPost extends Component {
    state = {
        work: null
    }

    componentWillMount() {
        if (this.props.posts === null) {
            this.props.getBlogPosts();
        }
    }

    componentDidMount() {
        if (this.props.posts !== null) {
            const work = this.props.posts.filter(wrk => wrk.id === this.props.match.params.id);
            this.setState({ work: work[0] })
        }
    }

    render() {
        if (this.props.posts !== null) {
            const work = this.props.posts.filter(wrk => wrk.id === this.props.match.params.id);

            return (
                <div className={"blog-post page"} style={{backgroundColor: "white", color: "black"}}>
                    <div className="blog-post header-button" onClick={() => this.props.history.push("/blog")}>
                        <Button className="btn-simple btn-round btn btn-primary"><i className="tim-icons icon-double-left" /></Button>
                    </div>
                    <div className="blog-post" style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <h1>{work[0].name}</h1>
                        <h5 className="text-muted">{moment(work[0].timestamp).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                        <hr style={{borderBottom: "2px solid #E31B6D", width: "5%", marginLeft: "47.5%", marginTop: "-10px"}} />
                    </div>
                    <Container className="blog-post desc" style={{color: "black", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%"}}>
                        {RichText.render(work[0].desc, linkResolver(work[0]))}
                    </Container>
                </div>
            );
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
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
    )(BlogPost)
);