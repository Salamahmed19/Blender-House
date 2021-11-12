import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Col md={4} sm={12}>
            <Card className="my-4 p-4 shadow" style={{ width: '23rem' }}>
                <Card.Img style={{ width: '220px'}} variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <span>Price: {product.price} BDT</span> <span>Capacity: {product.capacity} LTR</span>
                        <br />
                        <span>Band: {product.band}</span> <span>Warranty: {product.warranty} YEARS</span>
                        <br />
                        Made In: <span>{product.madeIn}</span>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <Link to={`/dashboard/PlaceOrder/${product._id}`}><Button style={{ backgroundColor: "Aqua" }}>Buy Now</Button></Link>
                        <Link to={`/dashboard/makereview/${product._id}`}><Button style={{ backgroundColor: "DarkKhaki" }}>Give Rating</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;