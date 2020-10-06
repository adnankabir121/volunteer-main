import React, { useState, useContext, useEffect } from 'react';
import logo from '../../images/logo.png';
import user from '../../images/users-alt 1.png'
import plus from '../../images/plus 1.png'
import './AdminHomePage.css'
import { UserContext } from '../../App';
const AdminHomePage = () => {
    const [activities, setActivities] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:7000/activities1')
            .then(response => response.json())
            .then(data => {
                setActivities(data);
            })
    }, [])

    return (
        <div>

            <div className="row">
                <div className="col-md-3">
                    <div className="left-area">
                        <div className="logo">
                            <img className="w-100" src={logo} alt="" />
                        </div>
                        <div className="left-panel">
                            <h4><img src={user} alt="" />Volunteer Register List</h4>
                            <h4> <img src={plus} alt="" /> Add Event</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="right-panel">
                        <h2>Volunteer Register List</h2>
                        <div className="list-container">
                            <div className="main-list">
                                <div className="list-header">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <p>Name</p>
                                            {activities.map(activity=> <p>{activity.name}</p> )}
                                        </div>
                                        <div className="col-md-3">
                                            <p>Email</p>
                                            {activities.map(activity=> <p>{activity.email}</p> )}
                                        </div>
                                        <div className="col-md-2">
                                            <p>Registration Date</p>
                                            {activities.map(activity=> <p>{activity.date}</p> )}
                                        </div>
                                        <div className="col-md-3">
                                            <p>Volunteer List</p>
                                            <p></p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>Action</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHomePage;