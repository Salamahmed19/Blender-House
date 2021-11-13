import React from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import "./AddProducts.css"

const AddProducts = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        
    fetch("https://aqueous-reef-20295.herokuapp.com/addproduct", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        alert("Product Added Successfully!");
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col md={6} sm={12}>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <input placeholder="product name" {...register("name", { required: true })} />
                        <br />
                        <input placeholder="product band" {...register("band", { required: true })} />
                        <br />
                        <input placeholder="image url" {...register("imageUrl", { required: true })} />
                        <br />
                        <input placeholder="product price" {...register("price", { required: true })} />
                        <br />
                        <input placeholder="product warranty" {...register("warranty", { required: true })} />
                        <br />
                        <input placeholder="made in" {...register("madeIn", { required: true })} />
                        <br />
                        <input placeholder="capacity in ltr" {...register("capacity", { required: true })} />
                        <br />
                        <input type="submit" />
                    </form>
                </Col>
                <Col md={6} sm={12}>
                    <img className="img-fluid p-2" src="https://i.pinimg.com/originals/f6/54/8d/f6548d625481ae9c9ba31ffa3f04e146.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AddProducts;