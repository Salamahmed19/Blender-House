import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [updated, setUpdated] = useState(null);

    useEffect(() => {
        fetch("https://aqueous-reef-20295.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [updated])

    const handleUserDetails = (i) => {
        const user = users[i];
        fetch('https://aqueous-reef-20295.herokuapp.com/updateuser', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(result => {
                if (user.modifiedCount) {
                    setUpdated(true);
                }
                else {
                    setUpdated(false);
                }
            });
    }

    const handleAdminDetails = (i) => {
        const user = users[i];
        fetch('https://aqueous-reef-20295.herokuapp.com/removeadmin', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(result => {
                if (user.modifiedCount) {
                    setUpdated(true);
                }
                else {
                    setUpdated(false);
                }
            });
    }

    return (
        <Container>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Srl#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Status</th>
                    </tr>
                </thead>
                {
                    users.map((user, i) =>
                        <tbody key={i}>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                {user.status === 'Admin' ? <td><button className="bg-danger" onClick={() => handleAdminDetails(i)}>remove Admin</button></td> :
                                    <td><button className="bg-success" onClick={() => handleUserDetails(i)}>Make Admin</button></td>}
                            </tr>
                        </tbody>)
                }
            </Table>
        </Container>
    );
};

export default Users;