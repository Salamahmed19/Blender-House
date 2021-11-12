import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const date = new Date();
    const locatDate = date.toDateString();
    const { user } = useAuth()
    return (
        <Container>
            <Row>
                <Col className="text-center mt-5 fs-1">
                    <h1 className="mt-3">{locatDate}</h1>
                    <h3>Hello dear, MR {user.displayName}</h3>
                    <p>Welcome to the Dashboard</p>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardHome;