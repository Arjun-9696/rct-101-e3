import React, { useState, useEffect, useContext } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import {Link} from "react-router-dom"
// import AuthContext from "../../context/AuthContext"
// import {Navigate} from "react-router-dom"
const Products = () => {
  const [data, setData] = useState([]);
// const [isAuth] = useContext(AuthContext);
  useEffect(() =>{
    axios({
      url: 'http://localhost:8080/products',
      method: 'GET',
    })
    .then(res=>{
      setData(res.data);
    })
    .catch(err=>{
      console.error(err);
    })
  },[])
  // if(!isAuth){
  //   return <Navigate to="/login"/>
  // }
  return (
    <div>
    <h1>Products</h1>
      {data.map((item)=>{
        return (
          <div key={item.id}>

            <Product item={item} data={data} />

          </div>
        );
      })}

      
    </div>
  );
};

export default Products;
