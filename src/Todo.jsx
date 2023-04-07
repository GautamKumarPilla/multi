import React,{useState} from 'react'

const Todo = () => {
        const [todo, setTodo] = useState(['Run','Swim','Jog','Yoga']);
        const [newtodo, setNewtodo] = useState('');
 const addTodo =(z)=>{
      setNewtodo(z.target.value);
 }       
 const groupBy=()=>{
     setTodo([...todo,newtodo]);
 }
  return (
    <div className=''>
        <input type="text" value={newtodo} onChange={addTodo} className='form-control'/>&nbsp;&nbsp;
        <input type="submit" value="Add Task" onClick={groupBy} className='btn btn-outline-dark btn-light border border-3 border-warning text-danger'/>
        <ul>
            {
                todo.map((goals,i)=>{
                    return <li>{goals}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todo;