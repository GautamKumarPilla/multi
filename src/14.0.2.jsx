import React,{useEffect} from "react";

function Todolists(props){
    // useEffect(() =>{
    //   // console.log(props.t)
    // }
    // );
function don(){
   <div>
    {
       console.log (props.t)
       (<h1 className="bg-success">{props.t}</h1>)
    }
   </div>
}
function und(){
  <div className="bg-danger">
    {
       console.log (props.t)
    }
   </div>
} 
 return(
    <div className="border border-3 border-info p-1 my-2 w-75">
        <li>
            {props.t}
            <button onClick={don} className="btn btn-outline-secondary">Done</button>&nbsp;&nbsp;
            <button onClick={und} className="btn btn-outline-secondary">Undone</button>&nbsp;&nbsp;
            <button className="btn btn-outline-secondary" onClick={()=>{props.delTodo(props.i)}}>Delete</button>&nbsp;&nbsp;
        </li>
    </div>
 )
}

export default Todolists;