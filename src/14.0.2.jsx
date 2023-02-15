import React from "react";

function Todolists(props){
  const[state,setState] = React.useState([])
    
function don(){
   <div>
    {
       setState([...state,props.t])
    //  (<div className="bg-success">{props.t}</div>)
    }
   </div>
   console.log(state)
}
function und(){
  <div className="bg-danger">
    {
       setState([...state,props.t])
    }
   </div>
   console.log(state)
} 
 return(
    <div className="d-flex border border-3 border-info p-1 my-2 w-25">
        <li>
            {props.t}&nbsp;
            <button onClick={don} className="btn btn-light">Done</button>&nbsp;&nbsp;
            <button onClick={und} className="btn btn-light">Undone</button>&nbsp;&nbsp;
            <button className="btn btn-light" onClick={()=>{props.delTodo(props.i)}}>Delete</button>&nbsp;&nbsp;
        </li>
    </div>
 )
}

export default Todolists;