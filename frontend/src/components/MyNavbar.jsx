import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import avatar from '../example/avatar.jpeg';

export default function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <div className='container d-flex'>
                <Navbar.Brand href="#">What Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div alignRight>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title={<Image src={avatar} roundedCircle width="50" />} id="basic-nav-dropdown">
                                <NavDropdown.Item disabled>Ziad</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    );
}
