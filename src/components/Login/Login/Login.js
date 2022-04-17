import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className='container w-50 mx-auto mt-5'>
        <h2 className='text-primary text-center'>Please Login</h2>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
         
            <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
                Login
            </Button>
        </Form>
        {errorElement}
        <p>New to genius car? <Link to="/register" className='text-primary text-decoration-none' onClick={navigateRegister}>Please register</Link></p>

        <p>Forget Password? <button  className='text-primary btn btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

               {/* social login component here  */}
        {/* <SocialLogin></SocialLogin> */}

        <ToastContainer />
    </div>
    );
};

export default Login;