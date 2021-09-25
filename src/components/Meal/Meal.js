import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = (props) => {
    // console.log(props);
    const { strCategoryThumb, strCategory, idCategory, strCategoryDescription } = props.meal;
    const element = <FontAwesomeIcon icon={faFish} />
    // props.meal.
    return (
        <div className='meal'>
            <div >
                <img src={strCategoryThumb} alt="" />
            </div>
            <div>
                <h3 >{strCategory} </h3>
                <p><small> ID:{idCategory}</small></p>
                <p>{strCategoryDescription}</p>
                <button
                    onClick={() => props.handle(props.meal.strCategory)}
                    className="mealButton">{element} SELECTED MEAL</button>

            </div>


        </div>
    );
};

export default Meal;