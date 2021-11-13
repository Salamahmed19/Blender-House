import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyCart = () => {
    const { user } = useAuth()
    const [myCart, setMyCart] = useState([]);
    const [isCancelled, setIsCancelled] = useState(null);

    useEffect(() => {
        fetch(`https://aqueous-reef-20295.herokuapp.com/mycart?email=${user.email}`)
            // fetch('https://aqueous-reef-20295.herokuapp.com/cartProduct')
            .then(res => res.json())
            .then(data => setMyCart(data))
    }, [user.email, isCancelled])

    const handleCancel = (id) => {
        fetch(`https://aqueous-reef-20295.herokuapp.com/cancelproduct/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setIsCancelled(true);
                    alert("Are You sure to cancel!")

                } else {
                    setIsCancelled(false);
                }
            });
    };

    return (
        <Container>
            <Row>
                {myCart.length === 0 && <div className="m-5 p-5 fs-1">Add one or more items to show here</div>}

                {
                    myCart?.map(order => <Col key={order._id} md={6} sm={12}>
                        <Card className="my-4 shadow" style={{ width: '26rem' }}>
                            <Card.Img variant="top" src={order.product.imageUrl} />
                            <Card.Body className="mx-3 px-4">
                                <Card.Title>{order.product.name}</Card.Title>
                                <Card.Text>
                                    <span>Price: {order.product.price} BDT</span> <span>Capacity: {order.product.capacity} LTR</span>
                                    <br />
                                    <span>Band: {order.product.band}</span> <span>Warranty: {order.product.warranty} YEARS</span>
                                    <br />
                                    <span>Made In: {order.product.madeIn}</span>
                                    <br />
                                    <span>Buyer: {order.user}</span>
                                    <br />
                                    <span>Email: {order.email}</span>
                                    <br />
                                    <span>Mobile: {order.Mobile}</span>
                                    <br />
                                    <span>Address: {order.address}</span>
                                    <br />
                                    <span>Order Status: {order.status}</span>
                                </Card.Text>
                                <div className="d-flex justify-content-between px-5">
                                    <Link to="/dashboard/payment"><Button className="bg-success">Pay Now</Button></Link>
                                    <Button onClick={() => handleCancel(order._id)} className="bg-danger">Cancel</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default MyCart;