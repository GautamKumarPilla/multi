import React, { useEffect } from "react";
import Todo from "./Todo";

function Todolist(){
     console.log('todo called harry')
    var[todos,setTodos] = React.useState(['gulabi','sitara','jamun'])
    const [todo,setTodo] = React.useState('') 
    function handleNewTodo(z){
        setTodo(z.target.value)
    }
    function addTodo(){
     setTodos([...todos,todo])
      }
     useEffect(function(){
        console.log("useEffect called")
     })
     useEffect(function(){
        console.log("useEffect with empty dependency array")
     },[])
     useEffect(() =>{
        console.log("useEffect with todo state variable in dependency array")         //this renders while typing
     },[todo])
     useEffect(() =>{
        console.log("useEffect with todos length in dependency array")           //renders after onclick event is performed
     },[todos.length])

    return(
        <div className='border border-3 m-2 p-2 border-success'>
        <h1>Todolist</h1>
        <input type="text" onChange={handleNewTodo}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {
            todos.map((t,i)=> {
            return <Todo t={t}></Todo>
          })
          }
        </ul>
        </div>
    )
}

export default Todolist;