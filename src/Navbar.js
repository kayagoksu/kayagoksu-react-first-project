import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let navigate = useNavigate();
    const id = "btn";

    const handleSignin = (e) => {
        e.preventDefault();
        navigate("/login");
        document.getElementById(id).classList.add("invisible");
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark nav-bg py-3">
            <div className="container">
                <a className="navbar-brand" href="#">

                    <h1 className='display-5'><span style={{ color: "#2887c7" }}>G</span>`React</h1>

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>

                    </ul>

                    <form className="d-flex">
                        <button id='btn' className="btn btn-outline-light" type="submit" onClick={handleSignin}>Sign in</button>
                    </form>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;
