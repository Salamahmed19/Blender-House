import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./SideNav.css"

const SideNav = () => {
    let { url } = useRouteMatch();
    const { admin, logOut } = useAuth()
    return (
        <Container style={{ marginLeft: "20px" }}>
            <Nav className="flex-column">
                <h2 className="ms-3 band fw-bold">{admin ? "Admin Panel" : "User Panel"}</h2>
                <Nav.Link className="band" as={Link} to={`${url}`}>Dashboard</Nav.Link>
                {admin ? <div>
                    <Nav.Link className="band" as={Link} to={`${url}/users`}>Manage Users</Nav.Link>
                    <Nav.Link className="band" as={Link} to={`${url}/orderedItems`}>Manage Orders</Nav.Link>
                    <Nav.Link className="band" as={Link} to={`${url}/deleteProduct`}>Manage Product</Nav.Link>
                    <Nav.Link className="band" as={Link} to={`${url}/addProduct`}>Add Product</Nav.Link></div> : <div>
                    <Nav.Link className="band" as={Link} to={`${url}/myCart`}>My Cart</Nav.Link>
                    <Nav.Link className="band" as={Link} to={`${url}/payment`}>My Payment</Nav.Link></div>}
                <Nav.Link className="band" as={Link} to="/">Home</Nav.Link>
                <div className="btn signout" onClick={logOut}>Logout</div>
            </Nav>
        </Container>
    );
};

export default SideNav;