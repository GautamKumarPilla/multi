import React,{useState} from 'react';

function Counter(){
 const [count,setCount] = useState(0);

 return(
    <div className='border border-3 m-2 p-2 border-warning'>
    <h1>Count:{count}</h1>
    {/* <button onClick={setCount(count+1)}>Increment</button>
    <button onClick={setCount(count-1)}>Decrement</button> */}
    </div>
 )
}
export default Counter;