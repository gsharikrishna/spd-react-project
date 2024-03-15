import React from 'react'
import '../Pages/Todo.css'
export const TodoListReact = ({todos,deleteHandler}) => {
  return (
    <div className='todolistreact'>
   <h1 className='todolistreacth1'> YOUR TODOS WILL APPEAR HERE</h1>
         
            {
                todos.map((todo,index)=>
                   <div key={index}>
                    <h5 >{todo} &nbsp; <button className='todolistreactbutton' onClick={()=>deleteHandler(index)}>Delete</button> </h5>
                   </div>
                )
            }
           
        
    </div>
  )
}
