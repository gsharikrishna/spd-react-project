import React,{useState} from 'react'
import '../Feedback/Feedback.js'
import Questions from '../Feedback/Questions.json'
import { Display } from './Display.js'
export const Feedback = () => {
    let tempMarks=[]
    const[marks,setMarks] = useState([]);
    const changeHandler=(value,index)=>{
        tempMarks=marks;
        tempMarks[index]=value;
       setMarks([...tempMarks]);
        
    }
  return (
    <div>     
        <div>
        {
           
            Questions.map((que,index)=>{
                return(
               <Display que={que} changeHandler={changeHandler} index={index} />
                )
            })
        }
        </div>
        <button onClick={()=>alert(marks.reduce((a,b)=>a+b,0))}>SUBMIT</button>
        
    </div>
  )
}
