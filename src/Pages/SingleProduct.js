import React from 'react'
import '../Pages/SingleProducts.css'
export const SingleProduct = ({data,cart,setCart}) => {
  return (
    <div>
      <div className='products'>
        <img src={data.image} alt={data.name} />
        <div className='productDesc'>
            <span style={{fontWeight:700}}>{data.name}</span>
            <span>$ {data.amount}</span>
        </div>
      </div>
      {
        cart.includes(data)?
        (<button onClick={()=>setCart(cart.filter((c)=>c.id!==data.id))}>REMOVE FROM CART</button>)
        :<button className='add' onClick={()=>{setCart([...cart,data])}}>ADD TO CART</button>
      }
      

       
    </div>
  )
}
