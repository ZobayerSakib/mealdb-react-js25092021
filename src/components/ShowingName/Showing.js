import React from 'react';
import './Showing.css'
const Showing = (props) => {
    return (
        <div className='showingItem'>

            <h2>Selected Item: {props.name}</h2>
            <p>Please , take my order and percel <b>{props.name}</b>  as soon as possible. Thanks.</p>
        </div>
    );
};

export default Showing;