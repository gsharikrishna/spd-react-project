// amazon --- vegetalbles
import React,{useState} from 'react'
import { Card } from '../ComponentsVegetables/Card'
import {list} from '../ComponentsVegetables/data'
import '../ComponentsVegetables/Card.css'
import { MyListOfItemscart } from '../ComponentsVegetables/MyListOfItemscart'

export const Vegetables = ({cart,setCart,price,setPrice}) => {
  const [listname,setListname] = useState();

  
  const handleClick =(item)=>{
    if(cart.indexOf(item)!==-1) return;
    setCart([...cart,item]);
    console.log(cart);
  } 
  const handleChange=(item,d)=>{
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount+=d;
    if(arr[ind].amount===0) arr[ind].amount=1;
    setCart([...arr]);
  };
  // const handleChange=(item,num)=>{
    
  //   const ind = item.indexOf(item);
  //    const arr= cart;
  //    arr[ind].amount+=num;

  // }
  return (
    <div>
    
    <input type="text" placeholder='enter item' className='Searchstring' value={listname} onChange={(e)=>setListname(e.target.value)} />
    <section className='sections'>
    
      {

       
        list.filter((det)=>det.title.toLowerCase().includes(listname)).map((item)=>(
           
            <Card key={item.id} item={item} handleClick={handleClick} />
           
        ))
      }
        </section>
        <div>
      <MyListOfItemscart cart={cart} setCart={setCart} handleChange={handleChange} price={price} setPrice={setPrice} />
      </div>
      <div>
  
      </div>
    </div>
  )
}
