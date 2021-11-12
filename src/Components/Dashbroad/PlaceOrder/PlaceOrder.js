import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/cartProduct/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [orderId])

    const onSubmit = data => {
        data.product = product
        data.status = "Pending"

        fetch('http://localhost:5000/cartProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
        alert("Order Added successfully!");
    };
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <h1 className="text-center my-3">Add all fields to place Order</h1>
                <Col md={6} sm={12}>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <h5>Product Name: {product.name} </h5>
                        <h5>Product Band: {product.band}</h5>
                        <h6>Product Price: {product.price} BDT. Capacity: {product.capacity} LTR</h6>
                        <h6>Warranty: {product.warranty} Years. Make In: {product.madeIn}</h6>
                        <input defaultValue={user.displayName} {...register("user")} />
                        <br />
                        <input defaultValue={user.email} {...register("email")} />
                        <br />
                        <input placeholder="Your Address" {...register("address")} />
                        <br />
                        <input placeholder="Mobile No"  {...register("Mobile")} />
                        <br />
                        <button className="btn btn-info" type="submit">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;







