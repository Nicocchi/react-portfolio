import React, { Component } from "react";
import {
  CardImg,
  CardTitle,
  CardDeck,
  CardBody,
  Button,
  Modal,
  ModalBody,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Label,
    UncontrolledCarousel
} from "reactstrap";
import classnames from "classnames";

class Gallery extends Component {
    state = {
        item: {
            name: "Name",
            headerImg: "../../assets/img/discord.svg",
            images: [
                {
                    src:
                        "http://findmatthew.com/img/thumb-1.jpg",
                    altText: "Slide 1",
                    caption: ""
                }
            ],
            desc: "Powur is a multi-level marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.",
            sub: "Multi-theme Bot",
            URL: "https://www.example.com"
        }
    }

    setItem = item => {
        console.log(item);
        this.setState({ item })
    }

    openURL = () => {
        window.open(this.state.item.URL, "_blank")
    }

    render() {
        return (
            <div>
                <CardDeck
                    style={{display: "flex", justifyContent: "center", width: "100%"}}
                >
                    {this.props.list.map((itm, i) => (
                        <div
                            className="lightbox container"
                            style={{cursor: "pointer"}}
                            key={i}
                            onClick={
                                () => this.setItem(itm)
                            }
                        >
                            <img
                                src={`${itm.headerImg}`}
                                alt="Card image cap"
                                className="image"
                            />
                            <div className="overlay">
                                <h1 className="overlay-header">{itm.name}</h1>
                                <h3 className="overlay-sub">{itm.tech}</h3>
                                <Button className="btn-simple btn-round btn btn-primary" onClick={() => this.props.toggleModal("formModal")}>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardDeck>

                <Modal
                    modalClassName="modal-black"
                    isOpen={this.props.open}
                    toggle={() => this.props.toggleModal("formModal")}
                    size="md"
                >
                    <div className="modal-body" style={{padding: "0", margin: "0"}}>
                        <div className="" style={{width:"100%", margin: "0", position:"relative", left: "0"}}>
                            <UncontrolledCarousel items={this.state.item.images} autoPlay={false}/>
                        </div>
                        <div className="" style={{borderTop: "6px solid #E31B6D", paddingTop: "20px"}}>
                            <div className="text-muted ml-auto mr-auto" style={{paddingLeft: "5%"}}>
                                <h3 className="mb-0">{this.state.item.name}</h3>
                            </div>
                            <div style={{paddingLeft: "5%", textTransform: "uppercase"}}>
                                {this.state.item.sub}
                            </div>
                            <hr style={{borderBottom: "2px solid #E31B6D", width: "90%", marginLeft: "5%"}} />
                            <div style={{paddingLeft: "5%", paddingRight: "2%"}}>
                                {this.state.item.desc}
                            </div>

                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button" onClick={this.openURL}>
                                    Visit Site
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
};

export default Gallery;
