import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import SingleCard from '../SingleCard/SingleCard';
const AllCards = () => {

    const [cards, setCards] = useState(fakeData);
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map(card => <SingleCard card={card}/>)
                }
            </div>
        </div>
    );
};

export default AllCards;