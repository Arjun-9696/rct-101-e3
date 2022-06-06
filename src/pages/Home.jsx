import React from 'react';
import Products from '../components/Products/Products';
// import AuthProvider from '../context/AuthContext';
import Login from '../pages/Login';
const Home = () => {
  return (
    <div>
      <Login />
      <Products />
    </div>
  );
};

export default Home;
