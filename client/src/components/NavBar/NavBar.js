import React, { Component } from 'react';
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import SideNav, { Toggle, Nav as Nav1, NavItem as NavItem2, NavIcon, NavText, ClickOutside } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
                        <button className="navbar-toggler" aria-expanded={false}>
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                        <Collapse navbar isOpen={false} >
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.props.history.push('/')}
                                        className={this.props.history.location.pathname === '/' ? "nav-active" : "nav-normal"}
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        onClick={() => this.props.history.push('/portfolio')}
                                        className={this.props.history.location.pathname === '/portfolio' ? "nav-active" : "nav-normal"}
                                    >
                                        Portfolio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#pablo"
                                        onClick={() => this.props.history.push('/')}
                                    >
                                        Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#pablo"
                                        onClick={() => this.props.history.push('/')}
                                    >
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#pablo"
                                        onClick={() => this.props.history.push('/')}
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