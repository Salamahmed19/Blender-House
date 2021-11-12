import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../Images/logo.png";
import "./Navigation.css"

const Navigation = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar className="navber" expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>
                         {""} <span className="band">Blender House</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allproducts">AllProducts</Nav.Link>
                            { user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                            <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">    
                            {user?.email ? <>
                                <Navbar.Text>Hello: {user?.displayName}</Navbar.Text>
                               <div className="btn logout" onClick={logOut}>Logout</div>
                            </> :
                            <>
                                <Nav.Link as={Link} to="/login"><div>Login</div></Nav.Link>
                                <Nav.Link as={Link} to="/register"><div>Register</div></Nav.Link>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;