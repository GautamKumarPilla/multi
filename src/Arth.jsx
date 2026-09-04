import React,{useEffect} from "react";
import Another from "./Another";
function Arth(){

   var ref1 = React.useRef();
   var ref2 = React.useRef();
   var ref3 = React.useRef();
   
   function focush(){
    ref1.current.focus()
   }
   function checkEnter(e){
    if(e.key ==='Enter'){
        ref2.current.focus();
    }
   }
   function checkEnter1(e){
    if(e.key ==='Enter'){
        ref3.current.focus();
    }
   }
   useEffect(()=>{
   ref1.current.focus()
},[])
   return(
    <div>
        <h1>Arth</h1>
        <input type="text" ref={ref1} onKeyUp={checkEnter}/>
        <input type="text" ref={ref2} onKeyUp={checkEnter1}/>
        <button onClick={focush}>Focus here</button>
        <Another ref={ref3}/>
    </div>
   )
}
export default Arth;