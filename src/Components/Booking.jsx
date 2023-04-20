import axios from 'axios';
import React, { useState } from 'react';
import './Booking.css';
import Login from './Login';

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [search, setSearch] = useState('');

const searchFilter=(zeta)=>{
    setSearch(zeta.target.value);
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
   item.Area.toLowerCase().includes(search)
);

  return (
   Login && <div className='d-flex flex-wrap justify-content-center'>
    <div className='bg-booking'>
      <div  className='d-flex'>
    <select onSelect={searchFilter} name="search" id="" className='d-flex mx-auto w-25 form-select'>
      <option selected disabled>Select Area/Locality</option>
      <option value="kphb">Kphb</option>
      <option value="kondapur">Kondapur</option>
      <option value="lbnagar">LB Nagar</option>
      <option value="madhapur">Madhapur</option>
      <option value="raidurg">Raidurg</option>
      <option value="miyapur">Miyapur</option>
    </select>
    {/* <input type="search" name="" id="" defaultValue='&#128269;Search here' className='d-flex form-control-sm' /> */}
<form className="" action="">
  <input type="text" className='form-control-sm' placeholder="By hostel name or area" name="search" value={search} onChange={searchFilter}/>
  <button type="submit"><i className="fa fa-search"></i></button>
</form>
</div>
    <div className='d-flex flex-wrap inline-block'>&nbsp;&nbsp;&nbsp;
    <h4 className='text-warning'>State: Telangana</h4>&nbsp;&nbsp;&nbsp;
    <h4 className='text-warning'>City: Hyderabad</h4>
    </div>
    <div className='d-flex flex-wrap justify-content-evenly mx-3 my-3' style={{'row-gap':'30px'}} >
      {
        filteredSearch.map((ht)=>{
            return(
              <div className='box mx-3 p-2'>
              <img src={ht.Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={ht.Name} />
              <h5 className="d-flex justify-content-center">{ht.Name}</h5>  
             <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{ht.Area}</b><br/>
             <label>Contact: </label> <b style={{fontFamily:'serif'}}>{ht.Contact}</b><br />
             <label>Room-share: </label><span key={ht.Roomsharing}><b>{ht.OneSharing}</b></span><br />
             <label>Available Beds: </label> <b style={{fontFamily:'serif'}}>{ht.NumberOfBeds-145}</b>
             {/* {(bk.Roomsharing)} */}
            </div>
            )
          })
          ||
          filteredSelect.map((ht)=>{
            return(
              <div className='box mx-3 p-2'>
              <img src={ht.Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={ht.Name} />
              <h5 className="d-flex justify-content-center">{ht.Name}</h5>  
             <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{ht.Area}</b><br/>
             <label>Contact: </label> <b style={{fontFamily:'serif'}}>{ht.Contact}</b><br />
             <label>Room-share: </label><span key={ht.Roomsharing}><b>{ht.OneSharing}</b></span><br />
             <label>Available Beds: </label> <b style={{fontFamily:'serif'}}>{ht.NumberOfBeds-145}</b>
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