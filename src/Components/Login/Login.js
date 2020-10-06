import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            history.replace(from);

          }).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
          });
    } 

    return (
        <div className="login-bg">
            <div className="container">
                <div className="logo text-center">
                    <img src={logo} alt="" />
                </div>

                <div className="login-area d-flex justify-content-center">
                    <div className="login-content text-center">
                        <h2>Login With</h2>
                        <button onClick={handleGoogle}><FontAwesomeIcon icon={faGoogle} className="icon"/>Continue With Google</button>
                        <p>Don't Have an account? <a href="">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;