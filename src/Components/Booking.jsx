import axios from 'axios';
import React, { useState } from 'react';
import './Booking.css';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  var teleport = useNavigate();

const searchFilter=(zeta)=>{
    setSearch(zeta.target.value);
}
const selectFilter=(peta)=>{
   setSelect(peta.target.value);
}
 
axios.get("http://localhost:4000/Hostels").then((res)=>{
    setBooking([...res.data]);
    })
    let hostel = booking ; 
const filteredSearch = hostel.filter((item) =>
  item.Area.toLowerCase().includes(search.toLowerCase()) 
  || item.Name.toLowerCase().includes(search.toLowerCase())
);
const filteredSelect = hostel.filter((item)=>
   item.Area.includes(search)
);

  return (
   Login && <div className='d-flex flex-wrap justify-content-center'>
    <div className=''>
      <div className='d-flex flex-wrap'>
    <button onClick={()=>{teleport('/')}} className='btn btn-dark mx-2 mt-1'>&#9666;Back</button>
    <select onChange={selectFilter} value={select} name="search" for="search" id="" className='d-flex mx-auto w-25 form-select mt-1'>
      <option selected >Select Area/Locality</option>
      <option value="kphb">Kphb</option>
      <option value="kondapur">Kondapur</option>
      <option value="lbnagar">LB Nagar</option>
      <option value="madhapur">Madhapur</option>
      <option value="raidurg">Raidurg</option>
      <option value="miyapur">Miyapur</option>
      <option value="manikonda">Manikonda</option>
      <option value="balanagar">Bala Nagar</option>
      <option value="paradise">Paradise Circle</option>
    </select>
    {/* <input type="search" name="" id="" defaultValue='&#128269;Search here' className='d-flex form-control-sm' /> */}
<form className="mt-1" action="">
  <input type="text" className='form-control-sm' placeholder="By hostel name or area" name="search" value={search} onChange={searchFilter}/>
  <button type="submit" className=''><i className="fa fa-search"></i></button>
</form>
</div>
    <div className='d-flex flex-wrap inline-block'>&nbsp;&nbsp;&nbsp;
    <h4 className='text-warning'>State: Telangana</h4>&nbsp;&nbsp;&nbsp;
    <h4 className='text-warning'>City: Hyderabad</h4>
    </div>
    <div className='d-flex flex-wrap justify-content-evenly mx-3 my-3' style={{'row-gap':'30px'}} >
      {
        (filteredSearch || filteredSelect).map((ht)=>{
            return(
            <div className='box mx-3 p-1'>
            <img src={ht.Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={ht.Name} />
            <h5 className="d-flex justify-content-center">{ht.Name}</h5>  
            <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{ht.Area}</b><br/>
            <label>Contact: </label> <b style={{fontFamily:'serif'}}>{ht.Contact}</b><br />
            <label>Room-share: </label><span><b style={{fontFamily:'serif'}}>{ht.OneSharing} (1-6) Persons</b></span><br />
            <div className='d-flex justify-content-between mb-2'>
            <label>Available Beds: <b style={{fontFamily:'serif'}}>{ht.NumberOfBeds-145}</b></label>
            <i><button onClick={()=>{teleport('/Overview')}} id='button' className='ms-auto me-3 btn btn-outline-danger p-1'>Book&#x25B8;</button></i>
            </div>
             {/* {(bk.Roomsharing)} */}
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
// booking.length>1 && booking.map((bk) =>{
//   return(
//     <div className='box mx-3 p-2'>
//     <img src={bk.Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={bk.Name} />
//     <h5 className="d-flex justify-content-center">{bk.Name}</h5>  
//    <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{bk.Area}</b><br/>
//    <label>Contact: </label> <b style={{fontFamily:'serif'}}>{bk.Contact}</b><br />
//    <label>Room-share: </label><span key={bk.Roomsharing}><b>{bk.OneSharing}</b></span><br />
//    <label>Available Beds: </label> <b style={{fontFamily:'serif'}}>{bk.NumberOfBeds-145}</b>
//    {/* {(bk.Roomsharing)} */}
//   </div>
//   )
// })