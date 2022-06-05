import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
   const {user,signInUsingGoogle}= useFirebase();

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
          <Button variant="info" onClick={signInUsingGoogle}>Google Sign In</Button>

          </div>
        </div>
        
    );
};

export default Login;