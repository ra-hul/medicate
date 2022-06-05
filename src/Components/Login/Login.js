import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (

        <div className="login-form">

          <div>
          <h2>Login</h2>
            <form onSubmit="">
            
                <input  type="email name" id=""
                placeholder='Your email address'>
                </input>
                <br/>
                <br/>
                <input type="password" id="" 
                placeholder='Your Password'>
                </input>
                <br/>
                <br/>
                <input type='submit' value="Submit"/>
                <br/>
                <br/>
            </form>
            <p>New to Medicate? <Link to="/register">Create Account</Link></p>
            <div>-------or------</div>
          <Button variant="info">Google Sign In</Button>

          </div>
        </div>
        
    );
};

export default Login;