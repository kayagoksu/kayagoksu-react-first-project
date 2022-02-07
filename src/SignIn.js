import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/login");

    }

    return (
        <div className='container login'>
            <div className="d-flex h-100 flex-column justify-content-center">
                <div className="row justify-content-center">
                    <button className='btn btn-primary col-5' onClick={handleClick}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
