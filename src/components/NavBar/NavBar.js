import React, { Component } from 'react';
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";

class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    changeHistory = (path) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        this.props.history.push(path)
    }

    render() {
        // console.log(this.props.history.location.pathname)
        return (
            <div>
                <Navbar className="bg-transparent" expand="md" role="navigation">
                    <Container>
                        <NavbarBrand href="#pablo">
                            <span>Jeremy Boggs _ </span>
                            Web Developer
                        </NavbarBrand>
                        <button onClick={this.toggle} style={{zIndex: 1000}} className="navbar-toggler" aria-expanded={false}>
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                        <Collapse navbar isOpen={this.state.isOpen} className="navbar-collapse-bg" >
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.changeHistory('/')}
                                        className={this.props.history.location.pathname === '/' ? "nav-active" : "nav-normal"}
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.changeHistory('/portfolio')}
                                        className={this.props.history.location.pathname === '/portfolio' ? "nav-active" : "nav-normal"}
                                    >
                                        Portfolio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.changeHistory('/blog')}
                                        className={this.props.history.location.pathname === '/blog' ? "nav-active" : "nav-normal"}
                                    >
                                        Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.changeHistory('/about')}
                                        className={this.props.history.location.pathname === '/about' ? "nav-active" : "nav-normal"}
                                    >
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.changeHistory('/contact')}
                                        className={this.props.history.location.pathname === '/contact' ? "nav-active" : "nav-normal"}
                                    >
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;