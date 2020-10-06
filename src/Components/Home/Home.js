import React from 'react';
import MainNav from '../MainNav/MainNav'
import AllCards from '../AllCards/AllCards';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className="header-area">
                <MainNav/>
            </div>
            <div className="card-area">
                <Link to="/register">
                    <AllCards/>
                </Link> 
            </div>
        </div>
    );
};

export default Home;