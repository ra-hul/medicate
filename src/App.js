
import './App.css';
import React from 'react';
import Home from './Components/Home/Home';
import Header from './Shared/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Appointments from './Components/Appoitnments/Appointments';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import Doctors from './Components/Doctors/Doctors';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home' >
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/Appointments">
            <Appointments></Appointments>
          </PrivateRoute>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
     
           <Register></Register>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
     
    </div>
  );
}

export default App;
