import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""  placeholder='Your Email'>

                    </input>
                    <br/>
                    <br/>
                    <input type="password" name="password" id="" 
                    placeholder='Your Password'></input>
                    <br/>
                    <br/>
                    <input type="password" name="password" id="" 
                    placeholder='Re-enter Your Password'></input>
                    <br/>
                    <br/>
                    <input type="submit" name="" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-----------</div>
                <Button variant="info">Google Sign In</Button>
            </div>
        </div>
    );
};

export default Register;