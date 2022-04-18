import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React from 'react';
import Loading from '../../Sheared-Component/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = 
            <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
        

    }

    if (user || user1) {
        navigate('/home');
    }






    return (
        <div>
               <div className='d-flex align-items-center'>
                <div style={{ height: '1.5px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1.5px' }} className='bg-primary w-50'></div>
            </div>

            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}

                    className='btn btn-success w-50 d-block mx-auto my-2'>
                    {/* <img style={{ width: '30px' }} src={google} alt="" /> */}
                    <i class="fa-brands fa-google"></i>
                    <span className='px-2'> Google Sign In</span>
                </button>
            </div>
        
          
            
            <div>
                <button 
                 onClick={() => signInWithGithub()}
                className='btn btn-success w-50 d-block mx-auto my-2'>
                    <i class="fa-brands fa-github"></i>
                    <FontAwesomeIcon style={{ width: '30px' }} icon="fa-brands fa-github" />
                    <span className='px-2'> Github Sign In</span>
                </button>
            </div>
          
        </div>
    );
};

export default SocialLogin;