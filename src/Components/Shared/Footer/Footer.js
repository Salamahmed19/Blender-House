import React from 'react';
import { Container } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <p className="text-center fs-5">All rights reserved &copy; 2021 Blender House </p>
            </Container>
        </div>
    );
};

export default Footer;