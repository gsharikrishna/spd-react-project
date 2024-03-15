import React,{useState} from 'react'
import '../Pages/Todo.css'
import { TodoListReact } from './TodoListReact';

export const Todo = () => {
  const[task,settask]= useState(null);
  const [todos,settodos]=useState([]);

  const changehandler=e=>{
    e.preventDefault();
    
    settask(e.target.value)

  }
  const submitHandler=(e)=>{
    e.preventDefault();
     const newtodos =[...todos,task];
    settodos(newtodos);
    settask("");
  }
  const deleteHandler=(indexvalue)=>{
    const newtodos = todos.filter((todo,index)=>index!==indexvalue);
    settodos(newtodos);
  }
  return (
    <div>
      <center>
      <h1>Add your TODO and make a day</h1>
        <div className='cardtodo'>
        <div className='card-body'>
          <h4 className='card-title'>TODO APP</h4> 
        <form onSubmit={submitHandler}>

          <input type="text" className='inputfield' value={task} onChange={changehandler}    placeholder='Enter Todo...' />&nbsp; &nbsp; &nbsp; 
          <input type="submit" value='Add' className='buttontodo' name='Add'/>
        </form>
        </div>
    </div>
    <div>
    <TodoListReact todos={todos} deleteHandler={deleteHandler} />
    </div>
    </center> 
    </div>
  );
}
