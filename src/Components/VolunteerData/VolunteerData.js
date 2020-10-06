import React, { useState, useEffect, useContext } from 'react';
import OtherNav from '../OtherNav/OtherNav';
import './VolunteerData.css'
import VolunteerDataCard from '../VolunteerDataCard/VolunteerDataCard';
import { UserContext } from '../../App';
const VolunteerData = () => {
    const [activities, setActivities] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:7000/activities?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => {
                setActivities(data);
            })
    }, [])
    return (

        <div className="volunteer-bg">
            <OtherNav />
            <div className="container">
                <div className="row">

                    {
                        activities.map(activity => <VolunteerDataCard name={activity.name} date={activity.date} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default VolunteerData;