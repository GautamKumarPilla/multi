import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{
    const teleport = useNavigate();
    const [login, setLogin] = useState([]);
    const [username, setUsername] = useState([]);
    const [pass, setPass] = useState([])

const user = () =>{
    axios({
        method: 'GET',
        url: 'http://localhost:4000/Signup',
        data: {
              "Username": username,
              "Password": pass
            }
      }).then(()=>{
        console.log(username);
        console.log(pass);
      });  

      axios.get("http://localhost:4000/Signup?Username=username&Password=pass").then((res)=>{
        alert("Sign-In Successful !")
          setLogin([...res.data]);
          teleport('/booking'); 
       }).catch(function (error){
        alert("Please enter correct login details",error)}
        )      
}
const submitHandler=(z)=>{
     z.preventDefault();
}
    return(
        <div className="bg-text">
      <div className="mx-auto">
    <div className="mt-5">
    <div className="w-25 mx-auto" onSubmit={submitHandler}>
        <form className="form-control bg-success-subtle">
            <h3 className=".text-warning-emphasis text-center">Login</h3>
            <label htmlFor="" className="form-lable mt-2 text-success" >Username</label>
            <input type="text" required placeholder="Enter username" onChange={(z)=>setUsername(z.target.value)} className="form-control" />
            <label htmlFor="" className="form-lable mt-2 text-danger">Password</label>
            <input type="password" required pattern="A,@,$,#,(0-9)" placeholder="Enter password" onChange={(z)=>setPass(z.target.value)} className="form-control"/>
            <div className="mt-2">
            <Link to="/mail" className="text-warning text-decoration-none"><p>Forgot Password?</p></Link>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-outline-info mt-2" onClick={user} >Login</button>
            </div>
        </form>
        <Link to="/signup" className="text-light">Don't have an account yet?(SignUp)</Link>
    </div>
    </div>
    </div>
    </div>
    )
}; 

export default Login;

// GET /posts?title=json-server&author=typicode
// GET /posts?id=1&id=2
// GET /comments?author.name=typicode