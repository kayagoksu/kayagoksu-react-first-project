import { React, useState } from 'react';
import reviews from './data';

const Reviews = () => {

    const [index, setIndex] = useState(0);

    const { name, job, image, text } = reviews[index];

    const handleNext = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if (newIndex > (reviews.length - 1)) {
                return 0;
            }
            else {
                return newIndex;
            }

        });
    };

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) {
                return reviews.length - 1;
            }
            else {
                return newIndex;
            }
        });
    };


    return (
        <div id='reviews'>


            <div>
                <h2 className='display-5 mt-5 mb-5 text-center' style={{ color: "#146c7c" }}>REVIEWS</h2>
                <div className='container'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-center ">
                                <div className='img-container justify-content-center'>
                                    <img src={image} className="d-block personImg img-thumbnail" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-capitalize text-center fs-3'>{name}</h4>
                        <p className='text-capitalize text-center' style={{ color: "#D8A7B1" }}>{job}</p>
                    </div>
                    <div>
                        <p className='text-center'>{text}</p>
                    </div>

                    <div className='d-flex justify-content-center mb-5'>
                        <div className='px-2'>
                            <button className='carousel-prev-button d-flex' type='button' onClick={handlePrev}>
                                <span className='carousel-control-prev-icon'></span>
                            </button>
                        </div>
                        <div className='px-2'>
                            <button className='carousel-next-button d-flex' type='button' onClick={handleNext}>
                                <span className='carousel-control-next-icon'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
