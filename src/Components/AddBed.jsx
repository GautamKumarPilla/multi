import axios from 'axios';
import React, { useState } from 'react';

const AddBed =()=>{
const [newBed, setNewBed] = useState({
        "Roomid": "",
        "Status": "",
        "Current Tenants": [],
        "Old Tenants": [],
        "Id":"" 
    });
  const NewBed = () =>{
    axios({
        method: 'POST',
        url: 'http://localhost:4000/Beds',
        data: newBed
      }).then(()=>{
        alert("ADDED")
      })
  }  
    
  return (
    <div>
        <div className='d-flex justify-content-center mt-3'>
           <i className='display-6'>Add New Bed</i><br />
        </div>
        <input type="text" onChange={(z)=>{setNewBed(z.target.value)}} />
        <button onClick={NewBed}>Add New Bed</button>
    </div>
  )
}

export default AddBed;