import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import avatar from '../example/avatar.jpeg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
    const logged = useSelector(state => state.logged);

    return (
        <Navbar bg="light" expand="lg">
            <div className='container d-flex'>
                <Link to='/' className='attribute'><Navbar.Brand>What Digital</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className='float-end'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title={<Image src={avatar} roundedCircle width="50" />} id="basic-nav-dropdown">
                                <NavDropdown.Item disabled>{logged}</NavDropdown.Item>
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
