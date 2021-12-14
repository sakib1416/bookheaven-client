import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Blogs from '../Blogs/Blogs';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import FindBook from '../FindBook/FindBook';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <FindBook></FindBook>
            <FeaturedProduct></FeaturedProduct>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Footer></Footer> 
        </div>
        
    );
};

export default Home;