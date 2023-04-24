import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Overview = () => {
  const [booking, setBooking] = useState([]);
  const {index} = useParams();

  //console.log(index);
  var teleport = useNavigate();
  
  axios.get(`http://localhost:4000/Hostels?id=${index}`).then((res)=>{
    setBooking([...res.data]);
    })
    
  return (
    <div>
    <div>
      <button onClick={()=>{teleport('/booking')}} className='btn btn-dark mx-3 mt-2'>&#9666;View other options</button>
      <p className='display-4 text-center text-success ms-5'>Booking Process</p><br />
    </div>
      <div className=''>
      <p>Whatsapp map contact rating votes photos room-share details facilities about(hostel info) </p>
      {
        booking.map((ov,id)=>{
          <div className='card mx-3 p-1'>
            <img src={ov[id].Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={ov[id].Name} />
            <h5 className="d-flex justify-content-center">{ov[id].Name}</h5>  
            <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{ov[id].Area}</b><br/>
            <label>Contact: </label> <b style={{fontFamily:'serif'}}>{ov[id].Contact}</b><br />
            <label>Room-share: </label><span><b style={{fontFamily:'serif'}}>{ov[id].OneSharing} (1-6) Persons</b></span><br />
            <div className='d-flex justify-content-between mb-2'>
            <label>Available Beds: <b style={{fontFamily:'serif'}}>{ov[id].NumberOfBeds-145}</b></label>
            <i></i>
            </div>
            </div>
        })
      }
    </div>
    </div>
  )
}

export default Overview;