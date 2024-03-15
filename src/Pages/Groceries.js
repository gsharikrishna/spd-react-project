// grociers == App.js
import React,{useState} from 'react'
 import data from '../ComponentsFruits/data.json'
import { SingleProduct } from './SingleProduct'
export const Groceries = () => {
  const [cart,setCart]  = useState([]);
  console.log(cart)
  return (
    <div className='productContainer'>
    {
      data.map((data)=>(
        
          <div>
          {/* <img src={data.image} alt={data.name} width='400px' height="300px" />
          <h1>{data.name}</h1>
          <button>ADD to cart</button> */}
         <SingleProduct data={data} cart={cart} setCart={setCart} />
          </div>
       
      ))
    }
    </div>
  )
}
