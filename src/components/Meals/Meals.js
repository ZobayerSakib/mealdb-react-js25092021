import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Showing from '../ShowingName/Showing';

import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [name, setName] = useState([]);
    const [displayMeal, setDisplayMeal] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setDisplayMeal(data.categories))
    }, []);

    const handle = (name) => {

        const newName = [name];
        setName(newName);

    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedMeal = meals.filter(meal => meal.strCategory.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayMeal(matchedMeal);
        console.log(matchedMeal.length)

    }

    return (
        <div>
            <div className="input">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="search your favorite item" />
            </div>
            <div className='meals' >

                <div className='meal-container'>

                    {
                        displayMeal.map(meal => <Meal
                            key={meal.idCategory}
                            meal={meal}
                            handle={handle}
                        ></Meal>)
                    }
                </div>
                <div className='name-showingContainer'>
                    <Showing name={name}></Showing>
                </div>

            </div>
        </div>
    );
};

export default Meals;