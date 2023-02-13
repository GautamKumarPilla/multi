import React, { useState } from "react";     //interview form

function Form(){
     const[state,setState] = useState([])
     const[state1,setState1] = useState([])
     const[state2,setState2] = useState([])

     const[statem,setStatem] = useState([])

     function HandleData(){
        setStatem([...statem,state,state1,state2]);
        
     }
    return(
        <div className="mx-5 my-5 m-5 p-4 bg-secondary">
        Firstname: <input type="text" onChange={(a)=>{setState([a.target.value])}}/> <br/><br/>
        Lastname: <input type="text" onChange={(a)=>{setState1([a.target.value])}}/> <br/><br/>
        ContactNo: <input type="text" onChange={(a)=>{setState2([a.target.value])}}/> <br/><br/>
        <button onClick={HandleData}>click</button>
        <ul>
            {
                statem.map((i)=>{
                    return <li>{i}</li>
                })
            }
        </ul>
        </div>
    )
}

export default Form;