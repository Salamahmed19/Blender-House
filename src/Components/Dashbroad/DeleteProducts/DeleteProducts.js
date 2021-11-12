import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeleteProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/allproducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted])

    const handlePdDelete = (id) => {
        fetch(`http://localhost:5000/deleteproduct/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setIsDeleted(true);
                    alert("Deleted successfully!")

                } else {
                    setIsDeleted(false);
                }
            });
    };

    return (
        <Container>
            <Table striped bordered hover className="m-3">
                <thead>
                    <tr>
                        <th>Srl#</th>
                        <th>Band</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    products.map((pd, index) =>
                        <tbody key={pd._id}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd.band}</td>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td><Link to={`/dashboard/updateProduct/${pd._id}`}><button className="bg-info">Update</button></Link></td>
                                <td><button className="bg-danger" onClick={() => handlePdDelete(pd._id)}>Delete</button></td>
                            </tr>
                        </tbody>)
                }
            </Table>
        </Container>
    );
};

export default DeleteProducts;