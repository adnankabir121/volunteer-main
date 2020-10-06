import React from 'react';
import './SingleCard.css'
const SingleCard = (props) => {

    const { title, img } = props.card;

    return (
        
        <div className="col-md-3">
            <div className="card-container">
                <div className="card-img">
                    <img src={img} alt="" className="w-100" />
                </div>
                <div className="card-heading">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;