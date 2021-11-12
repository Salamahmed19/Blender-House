import React from 'react';
import SideNav from '../SideNav/SideNav';
import { Route } from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import DeleteProducts from '../DeleteProducts/DeleteProducts';
import OrderedItems from '../OrderedItems/OrderedItems';
import Payment from '../Payment/Payment/Payment';
import MakeReview from '../MakeReview/MakeReview';
import MyCart from '../MyCart/MyCart';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Header from '../Header/Header';
import Users from '../Users/Users';
import DashboardHome from '../DashboardHome/DashboardHome';
import { Col, Container, Row } from 'react-bootstrap';
import UpdateProduct from '../UpdateProduct/UpdateProduct';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Header></Header>
                <Col md={3} sm={12} className=" sidenav">
                    <SideNav></SideNav>
                </Col>
                <Col md={9} sm={12}>
                    <Route exact path="/dashboard/orderedItems">
                        <OrderedItems></OrderedItems>
                    </Route>
                    <Route exact path="/dashboard/users">
                        <Users></Users>
                    </Route>
                    <Route exact path="/dashboard">
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path="/dashboard/addProduct">
                        <AddProducts></AddProducts>
                    </Route>
                    <Route exact path="/dashboard/deleteProduct">
                        <DeleteProducts></DeleteProducts>
                    </Route>
                    <Route exact path="/dashboard/updateProduct/:orderId">
                        <UpdateProduct></UpdateProduct>
                    </Route>
                    <Route exact path="/dashboard/PlaceOrder/:orderId">
                        <PlaceOrder></PlaceOrder>
                    </Route>
                    <Route exact path="/dashboard/myCart">
                        <MyCart></MyCart>
                    </Route>
                    <Route exact path="/dashboard/payment">
                        <Payment></Payment>
                    </Route>
                    <Route exact path="/dashboard/makereview/:orderId">
                        <MakeReview></MakeReview>
                    </Route>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;