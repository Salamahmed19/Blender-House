import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs/AboutUs';
import AllProducts from './Components/AllProducts/AllProducts/AllProducts';
import Dashboard from './Components/Dashbroad/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allproducts">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
