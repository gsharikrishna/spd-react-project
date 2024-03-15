import React from 'react'
import '../ComponentsVegetables/Card.css'
export const Card = ({item,handleClick}) => {
    const {title,amount,Quantity,Delivery,img} = item;
  return (
    <div>
        <div className='cardss'>
            <div className='image_box'>
                <img src={img} alt="imagefailed" />
            </div>
            <div className='details'>
                <p>{title}</p>
                <p>{amount}</p>
                <p>{Quantity}</p>
                <p>{Delivery}</p>
                <button onClick={()=>handleClick(item)}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
