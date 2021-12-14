import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header id="header">
                    <div class="inner">
                            <a href="index.html" class="logo">
                                <span class="fa fa-book"></span> <span class="title">Book Heaven</span>
                            </a>
                            <nav>
                                <ul>
                                    <li><a href="#menu">Menu</a></li>
                                </ul>
                            </nav>

                    </div>
                </header>
                <nav id="menu">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="index.html" class="active">Home</a></li>

                        <li><a href="products.html">Products</a></li>

                        <li><a href="checkout.html">Checkout</a></li>

                        <li>
                            <a href="#" class="dropdown-toggle">About</a>

                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="terms.html">Terms</a></li>
                            </ul>
                        </li>

                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
        </div>
    );
};

export default Navbar;