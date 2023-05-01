import React from 'react'
import { Navbar, Nav, NavDropdown, Image, Button } from 'react-bootstrap';
import avatar from '../example/avatar.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/loggedActions';

export default function MyNavbar() {
    const logged = useSelector(state => state.logged);
    const dispatch = useDispatch()

    return (
        <Navbar bg="light" expand="lg">
            <div className='container d-flex'>
                <Link to='/' className='attribute'><Navbar.Brand>What Digital</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className='float-end'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {logged ? (
                            <NavDropdown title={<Image src={avatar} roundedCircle width="50" />} id="basic-nav-dropdown">
                                <NavDropdown.Item disabled>{logged}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to='/login' className='btn btn-primary'>Login</Link>
                        )}

                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    );
}
