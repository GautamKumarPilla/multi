import React from "react";
import Todo1 from "./Todo1";

function Todolist1(){
   //  console.log('todo called harry')
    var[todos,setTodos] = React.useState(['gulabi','sitara','jamun'])
    const [todo,setTodo] = React.useState('') 
    function handleNewTodo(z){
        setTodo(z.target.value)
    }
    function addTodo(){
     setTodos([...todos,todo])
      }
    var delTodo= React.useCallback((index) =>{
      var temp = [...todos];
      temp.splice(index,1);
      setTodos([...temp])
    },[todos.length])

    return(
        <div className='border border-3 m-2 p-2 border-success'>
        <h1>Todolist</h1>
        <input type="text" onChange={handleNewTodo} className='border border-2 rounded border-warning p-2'/>
        <button onClick={addTodo} className='btn btn-outline-primary rounded p-2'>Add Todo</button>
        <ul>
            {
            todos.map((t,i)=> {
            return <Todo1 t={t} delTodo={delTodo} i={i}></Todo1>
          })
          }
        </ul>
        </div>
    )
}

export default Todolist1;