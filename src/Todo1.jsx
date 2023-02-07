import React,{useEffect} from "react";

function Todo1(props){
    useEffect(() =>{
       // console.log("todo1 rendered",props.t)
    }
    );
 return(
    <div>
        <li className="border border-2 border-secondary rounded m-2 p-2 w-25 d-flex justify-content-between">
            {props.t}
          <button className="btn btn-outline-info" onClick={()=>{props.delTodo(props.i)}}>Delete</button>
        </li>
    </div>
 )
}


export default Todo1;