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
import classnames from "classnames";

class About extends Component {
    state = {
        tabs: 1
    };

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    render() {
        return (
            <div className={"page"}>
                <section className="section">
                    <Container className="align-items-center">
                        <Row>
                            <Col lg="6" md="6">
                                <h1 className="profile-title text-left">Jeremy Boggs</h1>
                                <h5 className="text-on-back" style={{fontSize: "4rem"}}>About me</h5>
                                <p className="profile-description">
                                    I've always had a passion for technology. My skills are broad: from front end to backend
                                    to game development to desktop applications. I enjoy each aspect, and love building
                                    applications from start to finish, for clients all over the world.
                                </p>
                                <div className="btn-wrapper profile pt-3">
                                    <Button
                                        className="btn-icon btn-round"
                                        color="github"
                                        href="https://github.com/Nicocchi"
                                        id="tooltip639225725"
                                        target="_blank"
                                    >
                                        <i className="fab fa-github" />
                                    </Button>
                                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                                        Follow me
                                    </UncontrolledTooltip>
                                    <Button
                                        className="btn-icon btn-round"
                                        color="linkedin"
                                        href="https://www.linkedin.com/in/jeremy-boggs-b5861b181/"
                                        id="tooltip982846143"
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </Button>
                                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                                        Connect with me
                                    </UncontrolledTooltip>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="6" md="6">
                                <Card className="card-coin card-plain">
                                    <CardHeader>
                                        <img
                                            alt="..."
                                            className="img-center img-fluid rounded-circle"
                                            src={require("../../assets/img/pfp001.jpg")}
                                        />
                                        <h4 className="title">What I Do</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <Nav
                                            className="nav-tabs-primary justify-content-center"
                                            tabs
                                        >
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.tabs === 1
                                                    })}
                                                    onClick={e => this.toggleTabs(e, "tabs", 1)}
                                                    href="#pablo"
                                                >
                                                    Frontend
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.tabs === 2
                                                    })}
                                                    onClick={e => this.toggleTabs(e, "tabs", 2)}
                                                    href="#pablo"
                                                >
                                                    Backend
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.tabs === 3
                                                    })}
                                                    onClick={e => this.toggleTabs(e, "tabs", 3)}
                                                    href="#pablo"
                                                >
                                                    Languages
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.tabs === 4
                                                    })}
                                                    onClick={e => this.toggleTabs(e, "tabs", 4)}
                                                    href="#pablo"
                                                >
                                                    Database
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.tabs === 5
                                                    })}
                                                    onClick={e => this.toggleTabs(e, "tabs", 5)}
                                                    href="#pablo"
                                                >
                                                    Linux
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.tabs === 6
                                                    })}
                                                    onClick={e => this.toggleTabs(e, "tabs", 6)}
                                                    href="#pablo"
                                                >
                                                    Misc
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent
                                            className="tab-subcategories"
                                            activeTab={"tab" + this.state.tabs}
                                        >
                                            <TabPane tabId="tab1">
                                                <Table className="tablesorter" responsive>
                                                    <thead className="text-primary">
                                                    <tr>
                                                        <th className="header">Frontend Technologies</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>HTML</td>
                                                    </tr>
                                                    <tr>
                                                        <td>CSS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>JavaScript</td>
                                                    </tr>
                                                    <tr>
                                                        <td>React.js</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Redux.js</td>
                                                    </tr>
                                                    <tr>
                                                        <td>jQuery</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="tab2">
                                                <Table className="tablesorter" responsive>
                                                    <thead className="text-primary">
                                                    <tr>
                                                        <th className="header">Backend Technologies</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Node.js</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Express</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Django</td>
                                                    </tr>
                                                    <tr>
                                                        <td>SQL</td>
                                                    </tr>
                                                    <tr>
                                                        <td>PostgreSQL</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="tab3">
                                                <Table className="tablesorter" responsive>
                                                    <thead className="text-primary">
                                                    <tr>
                                                        <th className="header">Languages</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>JavaScript</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C#</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bash</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HTML</td>
                                                    </tr>
                                                    <tr>
                                                        <td>CSS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Python</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="tab4">
                                                <Table className="tablesorter" responsive style={{maxHeight: "10px"}}>
                                                    <thead className="text-primary">
                                                    <tr>
                                                        <th className="header">Database Technologies</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>SQL</td>
                                                    </tr>
                                                    <tr>
                                                        <td>PostgreSQL</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="tab5">
                                                <Table className="tablesorter" responsive style={{maxHeight: "10px"}}>
                                                    <thead className="text-primary">
                                                    <tr>
                                                        <th className="header">Linux Technologies</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Debian</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Arch Linux</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Red Hate Linux (Fedora/RHEL)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kali Linux</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="tab6">
                                                <Table className="tablesorter" responsive style={{maxHeight: "10px"}}>
                                                    <thead className="text-primary">
                                                    <tr>
                                                        <th className="header">Misc Technologies</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Git</td>
                                                    </tr>
                                                    <tr>
                                                        <td>.NET Framework</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heroku</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Netlify</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Visual Studio IDE</td>
                                                    </tr>
                                                    <tr>
                                                        <td>IntelliJ Studio</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unity3D</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                        </TabContent>
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

export default About;