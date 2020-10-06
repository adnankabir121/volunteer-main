import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png'
import './Register.css'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
const Register = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        date: "",
        description: ""
    })
    const handleSubmit = (e) => {
        const newUser = { ...loggedInUser, ...user }
        setUser(newUser);
        fetch('http://localhost:7000/addActivity', {
            method: "post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => console.logo(data))
        e.preventDefault();
    }
    const handleOnBlur = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    return (

        <div className="register-bg">
            <div className="container">
                <div className="logo text-center">
                    <img src={logo} alt="" />
                </div>

                <div className="register-form flex-column d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-left">Register as a Volunteer</h2>
                        <input name="fname" className="field" type="text" placeholder="Full Name" value={loggedInUser.name} required />
                        <input name="email" className="field" type="text" placeholder="Username or Email" value={loggedInUser.email} required />
                        <input onBlur={handleOnBlur} name="date" className="field" type="text" placeholder="Date" required />
                        <input onBlur={handleOnBlur} name="description" className="field" type="text" placeholder="Description" />
                        <input className="field" type="text" placeholder="" />
                        <input type="submit" value="Registration" className="d-block w-100 registration" />
                    </form>
                    <Link to="/volunteer-data">
                            <a className="show-data">Show data</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;