import React, {Component} from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel
} from "reactstrap";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSend = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={"page"}>
                <section className="section">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Card className="card-plain">
                                    <CardHeader>
                                        <h1 className="profile-title text-left">Contact me</h1>
                                        <h3 className="text-primary" >Have a question or want to work together?</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <Row>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <label>Name</label>
                                                        <Input onChange={(e) => this.handleInput(e)} name="name" defaultValue={this.state.name} placeholder="your name" type="text" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <label>Email</label>
                                                        <Input
                                                            onChange={(e) => this.handleInput(e)}
                                                            name="email"
                                                            defaultValue={this.state.email}
                                                            placeholder="example@gmail.com"
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Subject</label>
                                                        <Input
                                                            onChange={(e) => this.handleInput(e)}
                                                            name="subject"
                                                            defaultValue={this.state.subject}
                                                            placeholder="subject"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Message</label>
                                                        <Input onChange={(e) => this.handleInput(e)}
                                                               name="message"
                                                               defaultValue={this.state.message}
                                                               placeholder="Hello there!"
                                                               type="textarea" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button
                                                className="btn-round float-right"
                                                color="primary"
                                                data-placement="right"
                                                id="tooltip341148792"
                                                type="button"
                                                onClick={(e) => this.handleSend(e)}
                                            >
                                                Send
                                            </Button>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="right"
                                                target="tooltip341148792"
                                            >
                                                Can't wait for your message
                                            </UncontrolledTooltip>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Contact;