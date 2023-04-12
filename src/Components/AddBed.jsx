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
    
      <div className="mt-5">
    <div className="w-25 mx-auto">
            <div className='d-flex justify-content-center mt-3'>
              
            </div>
            <h3 className=".text-warning-emphasis text-center"><i className='display-6'>Add New Bed</i></h3>
            <label htmlFor="">RoomID</label>
            <input type="text"  onChange={(z)=>{setNewBed(z.target.value)}} required placeholder="" className="form-control" />
            <label htmlFor="">Status</label>
            <input type="password" required placeholder="" className="form-control"/>
            <div className="mt-2">
            
            </div>
            <div className="d-flex justify-content-center">
            <button onClick={NewBed} className="btn btn-outline-info mt-2">Add Bed</button>
            </div>
        </div>
        <input type="text" />
    </div>
  )
}

export default AddBed;