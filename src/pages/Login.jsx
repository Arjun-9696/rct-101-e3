import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: 'https://reqres.in/api/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    })
    .then((res)=>{
      alert("Success")
      setIsAuth(true)
     return <Navigate to="/products" />
    }).catch((err)=>{
      console.error(err);
    })
    console.log(email, password)
  
  }
  if(!isAuth){
    return <Navigate to="/login" />
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-cy="login-email"
        placeholder="Enter email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-cy="login-password"
        placeholder="Enter password"
      />
      <button type="submit" data-cy="login-submit">SUBMIT</button>
    </form>
  );
};

export default Login;
