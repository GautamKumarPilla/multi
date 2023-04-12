import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Hostel from './Components/Hostel';
//import Table from './Table/Table'; 

function App() {
  return (
    <div>
      <div className='d-flex text-decoration-none mx-auto w-75 bg-secondary border border-danger' style={{"borderRadius":'10px'}}>
      <div className="d-flex mx-auto p-2 my-1">
      <div className='mx-auto'>
        <Link to="/login" className='text-warning text-decoration-none'>Hostel Login</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/dashboard" className='text-warning text-decoration-none'>Dash-Board </Link>
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