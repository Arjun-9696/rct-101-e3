import React, { useState } from 'react';

const Product = ({item, data}) => {
  // Note: this id should come from api
  const [cart,setCart]= useState([]);
  const [count,setCount]= useState(0);
  const product = item;
 
const deleteCart = () => {
  data.filter((item) => {
    return data.id !== item.id;
  });
};
// console.log("cart",cart)
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button value={cart} onClick={()=>setCart(product)} data-cy="product-add-item-to-cart-button">Add cart</button>
      <div>
        <button
          value={count}
          data-cy="product-increment-cart-item-count-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <span data-cy="product-count">
          {
            count
            // Count here from CartItems
          }
        </span>
        <button
          value={count}
          data-cy="product-decrement-cart-item-count-button"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button onClick={deleteCart}data-cy="product-remove-cart-item-button">Delete</button>
      </div>
    </div>
  );
};

export default Product;
