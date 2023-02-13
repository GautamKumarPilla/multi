import React,{useEffect} from "react";

function Todolists(props){
    useEffect(() =>{
      // console.log(props.t)
    }
    );
function don(){
   don.className='bg-success'
}
 return(
    <div className="border border-2 bg-success d-flex justify-content">
        <li>
            {props.t}
            <button onClick={don}>Done</button>&nbsp;&nbsp;
            <button >Undone</button>&nbsp;&nbsp;
            <button className="btn btn-outline-info" onClick={()=>{props.delTodo(props.i)}}>Delete</button>&nbsp;&nbsp;
        </li>
    </div>
 )
}


export default Todolists;