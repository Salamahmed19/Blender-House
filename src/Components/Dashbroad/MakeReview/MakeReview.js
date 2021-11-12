import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [product, setProduct] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/cartProduct/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [orderId])
    
    const onSubmit = data => {
        data.product = product

        fetch('http://localhost:5000/reviewProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
        alert("Review successfully!");
    };
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <h1 className="text-center my-3">Please Make a Review</h1>
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
                            <input type="number" {...register("count", { min: 1, max: 5 })} />
                            {errors.count && (
                                <small>Please enter one number (1-5)</small>
                            )}
                            <br />
                            <textarea className="w-100" placeholder="Your feedback" {...register("feedback")} />
                            <br />
                            <button className="btn btn-info" type="submit">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;