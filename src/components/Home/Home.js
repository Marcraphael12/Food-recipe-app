import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch]);
  const text = 'Home';
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Home;
