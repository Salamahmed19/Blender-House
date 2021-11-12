import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="d-flex mt-5">
            <div className="col-md-6 mt-5">
                <img className="w-50" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1996643/broken-blender-clipart-xl.png" alt="" />
            </div>
            <div className="col-md-6 mt-5 fs-1">
                <p>What are you looking for!</p>
                <p>404</p>
                <p>NOT FOUND</p>
                <Link style={{ textDecoration: "none" }} to="/home">Home</Link>
            </div>
        </Container>
    );
};

export default NotFound;