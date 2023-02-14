import React from "react";
import Todolists from "./14.0.2";
import ReactDOM from 'react-dom/client';
function Todolist(){
    var [todos,setTodos] = React.useState(['Run','Swim','Yoga','Gym']);
    const [todo,setTodo] = React.useState('');
    // const [task,setTask] = React.useState('');
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
    function search(prop){
      //  if(prop.target.value===t.value){

      //  }
       setTodos((todos.filter(i=>i.toLowerCase().startsWith(prop.target.value))))
    }
     
    return(
        <div>
         <h3 style={{textAlign:'right'}} className="d-flex flex-wrap justify-content-center">Status&nbsp;&nbsp;<input type="radio" name="com" value="co"/>Completed &nbsp;&nbsp;<input type="radio" name="com" value="unco"/>Not-Completed</h3>
         <h1>Todolist</h1>
        <input type="text" onChange={handleNewTodo} className='border border-2 rounded border-warning p-2 mx-2'/>
        <button onClick={addTodo} className='btn btn-outline-primary rounded p-2'>Add Todo</button>
        <input type="text" onKeyUp={search} className="d-flex flex-wrap mx-auto" placeholder="Search"/>
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