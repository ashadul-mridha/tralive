import React from 'react';
import logo from '../../../images/tralive-logo.webp';
import { Nav, Navbar , NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const {user , logOut} = useAuth();
    

    return (
        <Navbar className="px-md-5" bg="light" variant="light" expand="lg">
            <Navbar.Brand as={Link} to="/home"> <img src={logo} alt="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link}  className="text-purple" to="/home">Home</Nav.Link>
                <Nav.Link as={Link}  className="text-purple" to="/link">Events</Nav.Link>
                <Nav.Link as={Link}  className="text-purple" to="/about">About</Nav.Link>
                <Nav.Link as={Link}  className="text-purple" to="/contact">Contact</Nav.Link>

                {
                    user.email ? (
                        <>
                            <NavDropdown className="fs-5" title={user.displayName ? user.displayName : 'Your Details'} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/my-events">My Event</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/manage-event">Manage All Event</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-event">Add A New Event</NavDropdown.Item>
                            </NavDropdown>

                            <button onClick={logOut} className="btn btn-warning">logout</button>
                        
                        </>
                        
                    ) : (
                        <>
                            <Nav.Link as={Link}  className="btn btn-warning text-white fw-bold" to="/login">Login</Nav.Link>
                            <Nav.Link as={Link}  className="btn btn-primary text-white fw-bold ms-md-2" to="/register">Register</Nav.Link>
                        </>

                    )
                }

                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;