import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './home.scss';
import './category.scss';

import fetchCategories, { joinCategory } from '../../redux/API/features/async_thunk';

export const WorkDone = (dataFetched) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food.food);
  const foods = Object.values(data);

  useEffect(() => {
    dispatch(dataFetched());
  }, [dataFetched, dispatch]);

  return foods;
};

const Home = () => {
  const dispatch = useDispatch();
  const handleJoin = (e) => {
    dispatch(joinCategory(e.target.id));
  };
  const foods = WorkDone(fetchCategories);
  return (
    <ul className="categories">
      {foods.length <= 1 ? 'Loading...'
        : foods.map((food) => (
          <li key={food.category_id} className="category">
            <NavLink to="seemore"><button id={food.category_id} type="button" onClick={handleJoin}>➡</button></NavLink>
            <img src={food.category_image} alt={food.category_name} />
            <h2>{food.category_name}</h2>
          </li>
        )) }
    </ul>
  );
};

export default Home;
