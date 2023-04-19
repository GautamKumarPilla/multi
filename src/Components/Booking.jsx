import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Booking.css';
import Login from './Login';

const Booking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/Hostels").then((res)=>{
      setBooking([...res.data]);
    })
  },[]);

  return (
   Login && <div className='d-flex flex-wrap justify-content-center'>
    <div className='bg-booking'>
      <div  className='d-flex'>
    <select  name="search" id="" className='d-flex mx-auto w-25 form-select'>
      <option selected disabled>Select Area/Locality</option>
      <option value="1">Kphb</option>
      <option value="2">Kondapur</option>
      <option value="3">LB Nagar</option>
      <option value="4">Madhapur</option>
      <option value="5">Raidurg</option>
      <option value="6">Miyapur</option>
    </select>
    {/* <input type="search" name="" id="" defaultValue='&#128269;Search here' className='d-flex form-control-sm' /> */}
    <form className="" action="">
  <input type="text" className='form-control-sm' placeholder="By hostel name or area" name="search" />
  <button type="submit"><i className="fa fa-search"></i></button>
</form>
</div>
    <div className='d-flex flex-wrap inline-block'>&nbsp;&nbsp;&nbsp;
    <h4 className='text-warning'>State: Telangana</h4>&nbsp;&nbsp;&nbsp;
    <h4 className='text-warning'>City: Hyderabad</h4>
    </div>
    <div className='d-flex flex-wrap justify-content-evenly mx-3 my-3' style={{'row-gap':'30px'}} >
      {
        booking.length>1 && booking.map((bk) =>{
          return(
            <div className='box mx-3 p-2'>
            <img src={bk.Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={bk.Name} />
            <h5 className="d-flex justify-content-center">{bk.Name}</h5>  
           <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{bk.Area}</b><br/>
           <label>Contact: </label> <b style={{fontFamily:'serif'}}>{bk.Contact}</b><br />
           <label>Room-share: </label><span key={bk.Roomsharing}><b>{bk.OneSharing}</b></span><br />
           <label>Available Beds: </label> <b style={{fontFamily:'serif'}}>{bk.NumberOfBeds-145}</b>
           {console.log(bk.Sharing)}
          </div>
          )
        })
        
      }
     </div>
    </div>
   </div>
    
  )
}

export default Booking;

//<div className='e-card-header'> 
//<div className='e-card-content'></div>