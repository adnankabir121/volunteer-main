import React from 'react';
import './MainNav.css'
import logo from '../../images/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const MainNav = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Logo */}
                        <div className="col-md-2 ">
                            <Link to="/home"><img src={logo} alt="" className="w-100" /></Link>
                        </div>

                        {/* Main-Menu */}
                        <div className="col-md-6 ">
                            <div className="main-menu text-right">
                                <nav>
                                    <ul>
                                        <li><a><Link to="/home">Home</Link></a></li>
                                        <li><a> Donation</a></li>
                                        <li><a> Events</a></li>
                                        <li><a> Blog</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="col-md-2 text-center ">
                            
                            <Link to="/register"><button className="header-btn btn-blue">Register</button></Link>
                        </div>
                        <div className="col-md-2 text-center ">
                            <Link to="/admin"><button className="header-btn btn-black">Admin</button></Link>
                        </div>
                    </div>
                </div>

                <div className="hero-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-text text-center">
                                    <h1>I grow by helping people in need.</h1>
                                    <input className="search-box" type="search" placeholder="Search...." />
                                    <input className="search-btn" type="button" value="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MainNav;