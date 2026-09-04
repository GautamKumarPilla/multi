import React from "react";

function Todo(props){
 return(
    <div>
        <li className="border border-1 m-2 p-2 w-25 d-flex justify-content-between">
            {props.t}
            <button>Delete</button>
        </li>
    </div>
 )
}


export default Todo;