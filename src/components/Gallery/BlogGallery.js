import React, { Component } from "react";
import {
    CardImg,
    CardTitle,
    CardDeck,
    CardBody,
    Card,
    CardText,
    Button,
} from "reactstrap";
import moment from 'moment';
import "../../assets/css/gallery.css";

class BlogGallery extends Component {

    render() {
        return (
            <div>
                <CardDeck
                    style={{display: "flex", justifyContent: "center", width: "100%"}}
                >

                    {this.props.list.map((itm, i) => (
                        <div key={i} className="lightbox-blog">
                            <Card>
                                <CardImg top width="100%" src={`${itm.headerImg}`} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{itm.name}</CardTitle>
                                    <CardText>
                                        {itm.desc[0].text.substring(0, 100) + " ..."}
                                    </CardText>

                                    <CardText>
                                        <small className="text-muted">{moment(itm.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</small>
                                    </CardText>
                                    <div className="text-center">
                                        <Button className="my-4" color="primary" type="button" onClick={() => this.props.props.history.push(`/blog/post/${itm.id}`)}>
                                            Read
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </CardDeck>
            </div>
        );
    }
};

export default BlogGallery;
