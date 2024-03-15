import React,{useState,useEffect} from 'react'
import '../ComponentsVegetables/Card.css'
import { useNavigate } from 'react-router-dom'
export const MyListOfItemscart = ({cart,setCart,handleChange,price,setPrice}) => {
 const navigate = useNavigate();
  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id!==id);
    setCart(arr);
    handlePrice();
  }
  const handlePrice=()=>{
    let ans=0;
    cart.map((item)=>(ans+=item.amount));
    setPrice(ans);
  }
  useEffect(()=>{
    handlePrice();
  })
  return (
    <div>
    <hr/> <hr/> <hr/> <hr/> <hr/> <hr/> <hr/> <hr/>
      <div className='mycartlist'> MY cart list</div>
        <div  >
        <center>
          {
            cart.map((item,index)=>{
              return(
                <div>
                <div className='settheborders'>
                <div key={index} >
                    <img src={item.img} alt='shownothing' style={{width:'200px',height:'11vh'}} className='imageclass' />
                    </div>
                    <div>
                    <h1 className='titletext'>{item.title}</h1>
                     </div>
                     {/* <h1>{item.amount}</h1> */}
             
                <div>
                   <button onClick={()=>handleChange(item,1)} className='buttoninc'>+1</button>
                   <button className='amountbutton'>{item.amount}</button>
                   <button onClick={()=>handleChange(item,-1)} className='buttoninc'>-1</button>
                </div>
                
                <div className='amountdisplay'>
                  {item.amount}
                </div>
                <div>
                <button onClick={()=>handleRemove(item.id)} className='removebutton' >Remove</button>
                </div>
                </div>
                
              </div>
              )
            })
          }
          <div>
            <span>Total price of your cart </span>
            <sapn>Rs-{price}</sapn>
            {/* <button onClick={navigate('payment-type')} >Make Payment</button> */}
            <button style={{marginLeft:'30px'}} onClick={()=>{navigate('cartlogo')}}>ORDER ITEMS</button>
          </div>
          </center>
          </div>
          
      
    </div>
  )
}

// import React from 'react'

// export const MyListOfItemscart = ({cart}) => {
//   return (
//     <div>
//         <div>
//             {
//                 cart.map((item)=>(                      
//                     <h1>{item.title}</h1>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }
