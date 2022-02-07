import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Products from './Products';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {



    return (
        <div>

            <Navbar />
            <Header />
            <About />
            <Products />
            <Reviews />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;
