import React from 'react';
import './Header.css'

const Header = () => {
    const paraStyle = {
        color: 'green'
    }
    return (
        <div className='header'>
            <h1 title='Hello sir, We are ready to serve you. The Mealdb.com'>THE MEAL DB</h1>
            <p style={paraStyle}> Welcome to our meal house. Here we have collected some food items for your. This is your first choice. Thanks <a className='secretLink' href="/zobayersakib"> 20952021js</a></p>
        </div>
    );
};

export default Header;