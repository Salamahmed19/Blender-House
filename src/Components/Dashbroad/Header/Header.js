import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth()
    return (
        <Container fluid className="header">
            <Row className="fw-bolder container ms-auto">
                <Col md={4} sm={12} className="fs-1"></Col>
                <Col md={4} sm={12} className="fs-1">Dashboard</Col>
                <Col md={4} sm={12} className="fs-5 mt-3">HELLO : {user.displayName}</Col>
            </Row>
        </Container>
    );
};

export default Header;