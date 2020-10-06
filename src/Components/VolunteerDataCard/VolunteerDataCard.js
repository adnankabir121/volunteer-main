import React from 'react';
import './VolunteerDataCard.css'
const VolunteerDataCard = (props) => {

    return (
        <div className="col-md-6 mb-3">

            <div className="data-card-container">
                <h2>{props.name}</h2>
                <h2>{props.date}</h2>
                <button>Cancel</button>
            </div>

        </div>
    );
};

export default VolunteerDataCard;