import './App.css';
import { Link, Outlet } from 'react-router-dom';
//import Hostel from './Components/Hostel';
//import Table from './Table/Table'; 

function App() {
  return (
    <div>
      <div className='d-flex justify-content-center text-decoration-none bg-dark border border-light' style={{"borderRadius":'1px'}}>
        <i className='d-flex align-items-center ms-2 me-2'>
          <a href='http://localhost:3000' className='text-decoration-none' style={{'fontSize':'25px','color':'gold'}}>Hostels World</a></i>
        <img src='https://i.pinimg.com/originals/8e/18/35/8e1835e8abbc2b819663d61a034467e4.jpg' alt='' width="100px"></img>
      <div className="d-flex mx-auto ms-2 p-2 my-1">
      <div className='d-flex flex-wrap justify-content-center'>
        <Link to="/login" className='text-warning text-decoration-none'>Hostel Login</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/signup" className='text-warning text-decoration-none'>Sign-Up</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/dashboard" className='text-warning text-decoration-none'>Dash-Board </Link>&nbsp;&nbsp;&nbsp;
        <Link to="/booking" className='text-warning text-decoration-none'>Booking</Link>&nbsp;&nbsp;&nbsp;
      </div>
    </div>
    <div className='me-3 my-2'>
      <Link to="/helpline" className='text-warning text-decoration-none'>&#128222; Helpline</Link>
    </div>
    </div>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://nomadsworld.com/wp-content/uploads/2018/11/nomads-brisbane-hostel-dorm.jpg" style={{"height":'130vh'}} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://www.hostelworld.com/blog/wp-content/uploads/2016/05/Poets-Hostel-HD-16A.jpg" style={{"height":'130vh'}} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://img.theculturetrip.com/wp-content/uploads/2021/11/the-hosteller-mcleodganj_304f9e7c-e1636389488783.jpg" style={{"height":'130vh'}} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/313700/dekydkq4rzrehqmqoppo" style={{"height":'130vh'}} className="d-block w-100" alt="" />
    </div>
    <div className='carousel-item'>
      <img src="https://www.holidify.com/images/cmsuploads/compressed/194915018_20220223175434.jpg" style={{"height":"130vh"}} className='d-block w-100' alt="" />
    </div>
    <div className='carousel-item'> 
      <img src="https://pix10.agoda.net/hotelImages/282/28282739/28282739_211008113500106082730.jpg?s=1024x768" style={{'height':'130vh'}} className='d-block w-100' alt=''/>
    </div>
  </div>
</div>
        <div>
            <Outlet></Outlet>
        </div>
  </div>
  );
}

export default App;