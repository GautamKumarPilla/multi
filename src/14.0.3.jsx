import React, { useEffect, useState } from "react";
import {connect} from "react-redux"

function Todolistz(props){
   // console.log(props)
    const[task,setTask] = useState({title:'',status:false});
    const[filteredtodos,setfilteredtodos] = useState([]);
    const[filterKey,setfilterKey] = useState('all')
    useEffect(() =>{},[])
    useEffect(() =>{})
    useEffect(() =>{
        if(filterKey==='all'){
            setfilteredtodos(props.todo)
        }
        if(filterKey==='completed'){
            var temp = props.todo.todos.map((task)=> {
                return task.status===true
            })
            setfilteredtodos([...temp])
        }
        if(filterKey==='notcompleted'){
            var temp = props.todo.todos.map(()=>{
            return task.status===false  
         })
        console.log('temp',temp)
         setfilteredtodos([...temp])
        }    
       
    },[props.todo,filterKey])
   function handleTask(a){
      setTask({...task,title:a.target.value})
   }
    return(
        <div className="border border-2 border-warning bg-secondary">
        <h1>Todolist({filteredtodos && filteredtodos.length})</h1>
        <input type="text"  onChange={handleTask}/>
        <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:task})}}>Add-Todo</button><br /><br /><br />
        <div>
            <input type="radio" name="filter" value="all"  onChange={(a) => {setfilterKey(a.target.value)}}/> All &nbsp;&nbsp;&nbsp;
            <input type="radio" name="filter" value="completed"  onChange={(b) => {setfilterKey(b.target.value)}}/> Completed &nbsp;&nbsp;&nbsp;
            <input type="radio" name="filter" value="notcompleted" onChange={(c) => {setfilterKey(c.target.value)}}/> Not Completed &nbsp;&nbsp;&nbsp;
        </div>
        <ul> 
            {
                filteredtodos.todos && filteredtodos.todos.map(task =>{
                return (<li className={task.status?'completed':'notcompleted'}>{task.title}
                  {(task.status===false) && <button>Done</button>}
                  {(task.status===true) && <button>Undo</button>}
                  <button>Delete</button>
                </li>)
                })
            }
        </ul>
        </div>
    )
}
export default connect(function(store){return store})(Todolistz);