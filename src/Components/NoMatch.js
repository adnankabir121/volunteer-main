import React from 'react';
import img from '../images/404.jpg'
const NoMatch = () => {
    return (
        <div className="container text-center">
            <img src={img} alt="" className="w-75"/>
        </div>
    );
};

export default NoMatch;