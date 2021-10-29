import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login/Login';
import OrderPage from './components/Home/OrderPage/OrderPage/OrderPage';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/orderPage/:serviceId">
              <OrderPage></OrderPage>
            </PrivateRoute>
          </Switch>
        </Router>

      </div>
    </AuthProvider>
  );
}

export default App;
