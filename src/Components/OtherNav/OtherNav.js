import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import './OtherNav.css'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
const OtherNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Logo */}
                        <div className="col-md-2 ">
                            <img src={logo} alt="" className="w-100" />
                        </div>

                        {/* Main-Menu */}
                        <div className="col-md-8 ">
                            <div className="main-menu text-right">
                                <nav>
                                    <ul>
                                        <li><Link to="/home"><a href="">Home</a></Link></li>
                                        <li><a href="">Donation</a></li>
                                        <li><a href="">Events</a></li>
                                        <li><a href="">Blog</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* User */}
                        <div className="col-md-2">
                            <a href="">{loggedInUser.name}</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OtherNav;