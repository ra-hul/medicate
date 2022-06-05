import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
   const {signInUsingGoogle}= useAuth();
   const location= useLocation();
   const history = useHistory();
  //  const redirect_uri = location.state?.from || '/';

   const handleGoogleLogin =()=>{
       signInUsingGoogle()
       .then(result =>{
          // history.push(redirect_uri);
       })
   }

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
          <Button variant="info" onClick={handleGoogleLogin}>Google Sign In</Button>

          </div>
        </div>
        
    );
};

export default Login;