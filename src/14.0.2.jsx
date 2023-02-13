import React,{useEffect} from "react";

function Todolists(props){
    useEffect(() =>{
      // console.log(props.t)
    }
    );
function don(){
  // if(onclick.value==='true'){
    
  // }
}
function und(){

} 
 return(
    <div className="border border-3 border-info">
        <li>
            {props.t}
            <button onClick={don} className="btn btn-outline-dark">Done</button>&nbsp;&nbsp;
            <button onClick={und} className="btn btn-outline-dark">Undone</button>&nbsp;&nbsp;
            <button className="btn btn-outline-dark" onClick={()=>{props.delTodo(props.i)}}>Delete</button>&nbsp;&nbsp;
        </li>
    </div>
 )
}


export default Todolists;