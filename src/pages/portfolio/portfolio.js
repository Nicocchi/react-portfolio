import React, {Component} from 'react';
import { Container, Button } from "reactstrap";
import Gallery from "../../components/Gallery/Gallery";

const projects = [
    {
        name: "Yazawa Nico",
        headerImg: "https://i.ibb.co/Cbf6yZH/discord.jpg",
        tech: "JavaScript, Node.js, Discord.js",
        images: [
            {
                src:
                    "https://i.ibb.co/Cbf6yZH/discord.jpg",
                altText: "Discord logo",
                caption: ""
            }
        ],
        desc: "A multipurpose bot with fun commands and server moderation such as ban, kick, warn, and keep logs of user interactions.\n" +
            "\n" +
            "Built with JavaScript, Node.js and Discord.js API",
        sub: "Discord Bot",
        URL: "https://discordbots.org/bot/506839796921139203"
    },
    {
        name: "ShopTrak",
        headerImg: "https://i.ibb.co/cbbgYX1/shoptrak-header.png",
        tech: "Node.js, Express.js, React, Redux, JavaScript",
        images: [
            {
                src:
                    "https://i.ibb.co/cbbgYX1/shoptrak-header.png",
                altText: "Homepage header",
                caption: ""
            }
        ],
        desc: "React application to create groups of shopping lists to track who has purchased what items at what price.\n" +
            "\n" +
            "Built with JavaScript, Node.js and Express.js on the back-end, React, Redux on the front-end.",
        sub: "Peer Guide Shopping",
        URL: "http://labs10-shopping-list.netlify.com/"
    }
]

class Portfolio extends Component {
    state = {
        formModal: false,
    };

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
                    <Gallery open={this.state.formModal} toggleModal={this.toggleModal} name="Projects" clickHandler={""} list={projects} />
                </Container>
            </div>
        );
    }
}

export default Portfolio;