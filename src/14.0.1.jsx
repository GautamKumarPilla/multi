import React from "react";
import Todolists from "./14.0.2";

function Todolist(){
    var [todos,setTodos] = React.useState(['Run','Swim','Yoga','Gym']);
    const [todo,setTodo] = React.useState('');
    //console.log(todos)
    function handleNewTodo(z){
        setTodo(z.target.value)
    }
    function addTodo(){
     setTodos([...todos,todo])
      }
    var delTodo= React.useCallback((index) =>{
      var del = [...todos];
      del.splice(index,1);
      setTodos([...del])
    },[todos.length])
     
    return(
        <div>
         <h1 style={{textAlign:'right'}}>Status<input type="radio" name="com" value="co"/>:Completed  <input type="radio" name="com" value="unco"/>:Not-Completed</h1>
         <h1>Todolist</h1>
        <input type="text" onChange={handleNewTodo} className='border border-2 rounded border-warning p-2'/>
        <button onClick={addTodo} className='btn btn-outline-primary rounded p-2'>Add Todo</button>
        <ul>
         {
             todos.map((t,i)=> {
            return <Todolists t={t} delTodo={delTodo} i={i}></Todolists>
              })
          }
        </ul>
        </div>
    )
}

export default Todolist;
 

/*
 <li>implement todolist</li>
    <li>implement todolist with delete button</li>
    <li>implement todolist with status</li>
    <b>Binding properties to event handlers</b>
    <li>implement todolist with delete done undo button</li>
    <li>implement todolist with filter all, completed and not completed</li>
     */