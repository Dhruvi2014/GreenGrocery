import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Style.css";
import logo from "../assets/logo.png";

export default function Home() {
    return (
        <>
            {/* TOP BAR */}
            <div className="gg-topbar">
                <div className="container d-flex justify-content-between">
                    <span>Welcome to our online store!</span>
                    <div className="gg-top-links">
                        <a href="#">FAQ</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">ENG <i className="fas fa-chevron-down ms-1"></i></a>
                        <i className="fab fa-facebook-f ms-3"></i>
                        <i className="fab fa-twitter ms-3"></i>
                        <i className="fab fa-pinterest ms-3"></i>
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <div className="gg-header">
                <div className="container d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <div className="gg-logo d-flex align-items-center">
                        <i className="fas fa-shopping-basket gg-logo-icon"></i>
                        <div>
                            <img src={logo} ></img>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="gg-search-box">
                        <input type="text" placeholder="Search for product..." />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="gg-icons">
                        <div><i className="far fa-user"></i><span>Account</span></div>
                        <div><i className="fas fa-sync"></i><span>Compare</span></div>
                        <div><i className="far fa-heart"></i><span>Wishlist</span></div>
                        <div><i className="fas fa-shopping-bag"></i><span>Cart</span></div>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg gg-navbar">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ggNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="ggNav">

                        <div className="dropdown me-4 position-static">
                            <button className="btn gg-category-btn dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fas fa-bars me-2"></i> CATEGORIES
                            </button>

                            <ul className="dropdown-menu gg-category-menu p-2">

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-bread-slice me-2 text-warning"></i> Bakery</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cakes</a></li>
                                        <li><a className="dropdown-item" href="#">Cookies</a></li>
                                        <li><a className="dropdown-item" href="#">Pastries</a></li>
                                        <li><a className="dropdown-item" href="#">Brownies</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-wheat-awn me-2 text-success"></i> Bread</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Whole Wheat</a></li>
                                        <li><a className="dropdown-item" href="#">Multigrain</a></li>
                                        <li><a className="dropdown-item" href="#">Garlic Bread</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-candy-cane me-2 text-danger"></i> Candy</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Gum</a></li>
                                        <li><a className="dropdown-item" href="#">Hard Candy</a></li>
                                    </ul>
                                </li>


                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-mug-hot me-2 text-brown"></i> Coffee</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Coffee Creamers</a></li>
                                        <li><a className="dropdown-item" href="#">Coffee Pods</a></li>
                                        <li><a className="dropdown-item" href="#">Cold Brew Coffee</a></li>
                                        <li><a className="dropdown-item" href="#">Ground Coffee</a></li>

                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fas fa-fish me-2 text-primary"></i> Dairy & Eggs</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cheese</a></li>
                                        <li><a className="dropdown-item" href="#">Chocolates</a></li>
                                        <li><a className="dropdown-item" href="#">Eggs</a></li>
                                        <li><a className="dropdown-item" href="#">Milk</a></li>

                                    </ul>
                                </li>


                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i className="fa-solid fa-apple-whole me-2 text-danger"></i> Fresh Produce</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Fresh Herbs</a></li>
                                        <li><a className="dropdown-item" href="#">Fresh Vegetables</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                        <span><i class="fa-solid fa-ice-cream me-2 text-primary"></i> Frozen</span>
                                        <i className="fas fa-chevron-right small"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Frozen Breakfast</a></li>
                                        <li><a className="dropdown-item" href="#">Frozen Produce</a></li>
                                        <li><a className="dropdown-item" href="#">Frozen Snacks</a></li>

                                    </ul>
                                </li>

                                <li><a className="dropdown-item" href="#"><i className="fas fa-fish me-2 text-primary"></i> Meat & Fish</a></li>
                            </ul>
                        </div>


                        <ul className="navbar-nav me-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    HOME
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Home 1</a></li>
                                    <li><a className="dropdown-item" href="#">Home 2</a></li>
                                    <li><a className="dropdown-item" href="#">Home 3</a></li>
                                    <li><a className="dropdown-item" href="#">Home 4</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown position-static">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    SHOP
                                </a>

                                <div className="dropdown-menu gg-mega-menu p-4">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h6>Catalog</h6>
                                            <a className="dropdown-item" href="#">Style 1</a>
                                            <a className="dropdown-item" href="#">Style 2</a>
                                            <a className="dropdown-item" href="#">Style 3</a>
                                            <a className="dropdown-item" href="#">Infinite Scroll</a>
                                        </div>

                                        <div className="col-md-3">
                                            <h6>Shop Layouts</h6>
                                            <a className="dropdown-item" href="#">Default</a>
                                            <a className="dropdown-item" href="#">Left Sidebar</a>
                                            <a className="dropdown-item" href="#">Right Sidebar</a>
                                            <a className="dropdown-item" href="#">Full Width</a>
                                        </div>

                                        <div className="col-md-3">
                                            <h6>Shop Columns</h6>
                                            <a className="dropdown-item" href="#">Column 3</a>
                                            <a className="dropdown-item" href="#">Column 4</a>
                                            <a className="dropdown-item" href="#">Column 5</a>
                                        </div>

                                        <div className="col-md-3">
                                            <h6>Shop Pages</h6>
                                            <a className="dropdown-item" href="#">Checkout</a>
                                            <a className="dropdown-item" href="#">My Account</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    PRODUCTS
                                </a>

                                <ul className="dropdown-menu gg-pages-dropdown">

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Product Types
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Simple</a></li>
                                            <li><a className="dropdown-item" href="#">Color Variable</a></li>
                                            <li><a className="dropdown-item" href="#">Image Variable</a></li>
                                            <li><a className="dropdown-item" href="#">Grouped</a></li>
                                            <li><a className="dropdown-item" href="#">External</a></li>
                                            <li><a className="dropdown-item" href="#">Out of Stock</a></li>
                                            <li><a className="dropdown-item" href="#">Coutdown</a></li>
                                            <li><a className="dropdown-item" href="#">Popup Video</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Showcase Styles
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Carousel</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Big</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Small</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Mini</a></li>
                                            <li><a className="dropdown-item" href="#">Carousel Coverflow</a></li>
                                            <li><a className="dropdown-item" href="#">Light Background</a></li>
                                            <li><a className="dropdown-item" href="#">Dark Background</a></li>
                                            <li><a className="dropdown-item" href="#">Color Background</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Gallery Styles
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Thumbs Left</a></li>
                                            <li><a className="dropdown-item" href="#">Thumbs Right</a></li>
                                            <li><a className="dropdown-item" href="#">Thumbs Bottom</a></li>
                                            <li><a className="dropdown-item" href="#">Thumbs Top</a></li>
                                            <li><a className="dropdown-item" href="#">Grid</a></li>
                                            <li><a className="dropdown-item" href="#">Column 2</a></li>
                                            <li><a className="dropdown-item" href="#">Column 3</a></li>
                                            <li><a className="dropdown-item" href="#">Video Slider</a></li>
                                            <li><a className="dropdown-item" href="#">Video Grid - Auto Start</a></li>
                                            <li><a className="dropdown-item" href="#">Video Popup</a></li>
                                            <li><a className="dropdown-item" href="#">Stretch</a></li>

                                        </ul>
                                    </li>


                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Page Layouts
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                                            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                                            <li><a className="dropdown-item" href="#">Fullwidth</a></li>
                                            <li><a className="dropdown-item" href="#">Tabs</a></li>
                                            <li><a className="dropdown-item" href="#">Accordion</a></li>
                                            <li><a className="dropdown-item" href="#">Accordion 2</a></li>
                                            <li><a className="dropdown-item" href="#">Advanced Review & Q&A</a></li>
                
                                        </ul>
                                    </li>



                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    PAGES
                                </a>

                                <ul className="dropdown-menu gg-pages-dropdown">

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Home
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Home #1</a></li>
                                            <li><a className="dropdown-item" href="#">Home #2</a></li>
                                            <li><a className="dropdown-item" href="#">Home #3</a></li>
                                            <li><a className="dropdown-item" href="#">Home #4</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                            Blog
                                            <i className="fas fa-chevron-right small"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Layouts</a></li>
                                            <li><a className="dropdown-item" href="#">Grid Type</a></li>
                                            <li><a className="dropdown-item" href="#">Pagination</a></li>
                                        </ul>
                                    </li>

                                    <li><a className="dropdown-item" href="#">FAQ</a></li>
                                    <li><a className="dropdown-item" href="#">Order Tracking</a></li>
                                    <li><a className="dropdown-item" href="#">404</a></li>
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Contact #1</a></li>
                                    <li><a className="dropdown-item" href="#">Contact #2</a></li>

                                </ul>
                            </li>




                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>

                        </ul>

                        <div className="gg-call">
                            <div className="gg-right-info d-flex align-items-center">

                                <div className="gg-location dropdown me-4">
                                    <span className="gg-small-text">Your Location</span>
                                    <a className="dropdown-toggle gg-big-text" href="#" data-bs-toggle="dropdown">
                                        Select a Location
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">New York</a></li>
                                        <li><a className="dropdown-item" href="#">London</a></li>
                                        <li><a className="dropdown-item" href="#">India</a></li>
                                    </ul>
                                </div>

                                <div className="gg-discount me-4">
                                    <i className="fas fa-percentage"></i>
                                    <div>
                                        <span className="gg-small-text">Only This Weekend</span>
                                        <div className="gg-big-text">Super Discount</div>
                                    </div>
                                </div>

                                <div className="gg-call">
                                    <i className="fas fa-phone-alt me-2"></i>
                                    <span className="gg-big-text">280 900 3434</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}