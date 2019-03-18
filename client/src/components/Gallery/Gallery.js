import React from "react";
import { CardImg, CardTitle, CardDeck, CardBody, Button } from "reactstrap";

const Gallery = props => {
    return (
        <div>
            <CardDeck style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                {props.list.map((itm, i) => (
                    <div className="lightbox container" onClick={props.clickHandler ? () => props.clickHandler(itm.name) : null}>
                    <img
                        src="http://findmatthew.com/img/thumb-1.jpg"
                        alt="Card image cap"
                        className="image"
                    />
                    <div className="overlay">
                        <h1 className="overlay-header">{itm.name}</h1>
                        <h3 className="overlay-sub">React, Redux</h3>
                        <Button>Learn More</Button>
                    </div>
                    </div>
                ))}
            </CardDeck>
        </div>
    );
};

export default Gallery;
