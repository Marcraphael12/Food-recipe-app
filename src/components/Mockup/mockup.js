import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './mockup.scss';

// import fetchCategories from '../../redux/API/features/async_thunk';
// import { WorkDone } from '../Home/Home';

const Mockup = () => {
  const data = useSelector((state) => state.food.food);
  const content = Object.values(data);
  return (
    <div className="mockup">
      <NavLink className="back" to="/">◀</NavLink>
      {content.filter((food) => food.joined).map((food) => (
        <div key={food.category_id}>
          <img src={food.category_image} alt={food.category_name} />
          <h2>{food.category_name}</h2>
          <p>{food.description}</p>
          <NavLink to="/"><button type="button">see all foods</button></NavLink>
        </div>
      ))}
    </div>
  );
};

export default Mockup;
