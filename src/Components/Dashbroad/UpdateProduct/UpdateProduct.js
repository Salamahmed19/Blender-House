import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { orderId } = useParams();
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/cartProduct/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [orderId])

    const onSubmit = data => {
        fetch(`http://localhost:5000/updateProduct/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
        alert("Product is updated!");

    };
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <h1 className="text-center my-3">Add all fields to Update Product</h1>
                <Col md={6} sm={12}>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={product.name} placeholder="Product name" {...register("name", { required: true })} />
                        <br />
                        <input defaultValue={product.band} placeholder="Product band" {...register("band", { required: true })} />
                        <br />
                        <input defaultValue={product.imageUrl} placeholder="Product imageUrl" {...register("imageUrl", { required: true })} />
                        <br />
                        <input defaultValue={product.price} placeholder="Product price" {...register("price", { required: true })} />
                        <br />
                        <input defaultValue={product.warranty} placeholder="Product warranty" {...register("warranty", { required: true })} />
                        <br />
                        <input defaultValue={product.madeIn} placeholder="Product madeIn" {...register("madeIn", { required: true })} />
                        <br />
                        <input defaultValue={product.capacity} placeholder="Product capacity" {...register("capacity", { required: true })} />
                        <br />
                        <button className="btn btn-info" type="submit">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateProduct;