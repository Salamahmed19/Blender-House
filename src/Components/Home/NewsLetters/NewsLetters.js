import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./NewsLetters.css"

const NewsLetters = () => {
    return (
        <Container fluid className="my-3">
            <h2 className="text-center mb-4">NewsLetter</h2>
            <Row className="justify-content-center">
                <Col md={6} sm={12}>
                    <div className="text-center newsletters py-5 mb-4 rounded">
                        <h4>Subscribe our newsletter</h4>
                        <input className="w-75" type="email" placeholder="Enter your email" />
                        <input type="button" value="SUBSCRIBE" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLetters;