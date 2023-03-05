import React, { useState } from 'react'

function Todo() {
    const [todos, setTodos] = useState([
    {title:'running',status:'true'},
    {title:'jogging',status:'true'},
    {title:'swiming',status:'false'},
    {title:'gymnastics',status:'false'},
    {title:'trekking',status:'true'}
  ])
    const [newtodo, setNewtodo] = useState('')
  function handleChange(z){
    setNewtodo(z.target.value)
}
  function addTodo(){
      setTodos([...todos,newtodo])
  }
  function delTodo(index){
     var temp =[...todos];
     temp.splice(index,1)
     setTodos([...temp]);
  }
  function doneTodo(index){
    var temp = [...todos];
    temp[index].status = true
    setTodos([...temp]);
 }
  function undoTodo(index){
    var temp = [...todos];
    temp[index].status = false
    setTodos([...temp]);
  }
  return (
    <div className='border border-primary p-2 m-3'>
      <h1>Todolist</h1>
      <input type="text" onChange={handleChange}/>&nbsp;
      <button onClick={addTodo} className='btn btn-outline-success border-1 border-danger'>Add Task</button>
      <ul>
        {
            todos.map((todo,i)=>{
                return <li className={todo.status===true?'text-decoration-line-through && bg-success':'bg-danger'}>
                    {todo.title}  &nbsp;
                    {
                    todo.status===true
                    ?(<button className='btn btn-outline-dark p-1' onClick={()=>{undoTodo(i)}}>Undo</button>)
                    :(<button className='btn btn-outline-dark p-1' onClick={()=>{doneTodo(i)}}>Done</button>)}&nbsp;
                    <button className='btn btn-outline-dark p-1' onClick={()=>{delTodo(i)}}>Delete</button>
                    </li>
            })
        }
      </ul>
    </div>

  )
}

export default Todo