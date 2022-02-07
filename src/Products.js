import React from 'react';
import product1 from './images/product_1.jpg';
import product2 from './images/product_2.jpg';
import product3 from './images/product_3.jpg';
import product4 from './images/product_4.jpg';


const Products = () => {
    return (
        <div id='products'>
            <div className='container'>
                <h2 className='display-5 mb-3 text-end' style={{ color: "#080b39da" }}>PRODUCTS</h2>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-12">
                        <div className='d-flex h-100 flex-column justify-content-center text-end mb-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam voluptate eum, odit doloremque doloribus.</p>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="5000">
                                <div className="d-flex justify-content-center">
                                    <img src={product1} className="d-block w-auto img-fluid mb-3" alt="product1" />
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                                <div className="d-flex justify-content-center">
                                    <img src={product2} className="d-block w-auto img-fluid mb-3" alt="product2" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img src={product3} className="d-block w-auto img-fluid mb-3" alt="product3" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img src={product4} className="d-block w-auto img-fluid mb-3" alt="product4" />
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
