import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const OrderedItems = () => {
    const [allOrder, setAllOrder] = useState([])
    const [approved, setApproved] = useState(null);
    const [orderDeleted, setOrderDeleted] = useState(null);

    useEffect(() => {
        fetch('https://aqueous-reef-20295.herokuapp.com/cartProduct')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [approved, orderDeleted])

    const handleUpdateStatus = i => {
        const data = allOrder[i];
        fetch('https://aqueous-reef-20295.herokuapp.com/updatestatus', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (data.modifiedCount) {
                    setApproved(true);
                }
                else {
                    setApproved(false);
                }
            });

    }

    const handleDeleteOrder = id => {
        fetch(`https://aqueous-reef-20295.herokuapp.com/deleteorder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setOrderDeleted(true);
                    alert("Are You sure to DELETE!")

                } else {
                    setOrderDeleted(false);
                }
            });
    }

    return (
        <Container>
            <Row>
                {
                    allOrder.map((order, i) => <Col key={i} md={4} sm={12}>
                        <Card className="my-4 shadow" style={{ width: '19rem' }}>
                            <Card.Img style={{ width: '180px' }} variant="top" src={order.product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{order.product.name}</Card.Title>
                                <Card.Text>
                                    <small>
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
                                    </small>
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button onClick={() => handleUpdateStatus(i)} style={{ backgroundColor: "Green" }}>Approve Order</Button>
                                    <Button onClick={() => handleDeleteOrder(order._id)} className="bg-danger">Delete Order</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default OrderedItems;