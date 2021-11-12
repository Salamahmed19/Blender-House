import React from 'react';
import { Container, Form, Nav } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { handleEmailChange, processLogin, email, password, error, updateUser, setUser, setIsLoading, handlePasswordChange, signInUsingGoogle } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUser(user.email, user.displayName);
                history.push(url)
            })
            .finally(() => setIsLoading(false));
    }


    const handleLogin = e => {
        e.preventDefault();
        processLogin(email, password, location, history);
    }

    return (
        <div>
            <Container className="my-5">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <h3>Enter your login details</h3>
                        <Form onSubmit={handleLogin} className="login">
                            <input onBlur={handleEmailChange} type="email" placeholder="email" required></input>
                            <br />
                            <input onBlur={handlePasswordChange} type="password" placeholder="password" ></input>
                            <br />
                            <div className="row mb-3 text-danger">{error ? "Invalid User" : ""}</div>
                            <button type="submit" className="btn btn-success">Login</button>
                            <Nav.Link style={{ margin: "15px 0" }} as={Link} to="/register">New member? Register</Nav.Link>
                        </Form>
                        <button onClick={handleGoogleLogin} className="btn btn-success">Google login</button>
                    </div>
                    <div className="col-md-6">
                        <img src="https://m.media-amazon.com/images/I/61MmW3W8EVL._AC_SX466_.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;