import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Sheared-Component/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
        return <Loading></Loading>
    }


    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message} </p>

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }


    const navigateRegister = (event) => {
        navigate('/register');

    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
     if(email){
        await sendPasswordResetEmail(email);
        toast.success('Password reset email sent');
     }
     else{
        toast.error('Please enter your email');
     }
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
        <h2 className='text-primary text-center'>Please Login</h2>

        <Form onSubmit={handleSubmit} >
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
        <SocialLogin></SocialLogin>

        <ToastContainer />
    </div>
    );
};

export default Login;








