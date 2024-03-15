import React from 'react'
import '../Feedback/Feedback.css'
export const Display = ({que,index,changeHandler}) => {
    const handler=(e)=>{
        let temp = que.answer === e.target.value?1:0;
        changeHandler(temp,index);
    }
  return (
    <div className='mainfeed'>
         <div className='bordersetting'>
             <h2>{que.title}</h2>
             <div onChange={handler}>
                <input type="radio"  value="A" name={que.id} />{que.options[0]} &nbsp;&nbsp;
                <input type="radio"  value="B" name={que.id}  />{que.options[1]} &nbsp;&nbsp;
                <input type="radio"  value="C" name={que.id}   />{que.options[2]} &nbsp;&nbsp;
                <input type="radio"  value="D" name={que.id}  />{que.options[3]} &nbsp;&nbsp;
             </div>
        </div>
    </div>
  )
}
