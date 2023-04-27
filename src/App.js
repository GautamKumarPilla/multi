import React from 'react';
//import './index.css';
import './App.css';
//import Crypto from './Crypto/Crypto';
//import Badge from './Shopping/Badge';
//import Card from './Shopping/Card';
//import Todo from './Todo';
//import Movies from './Movies/Movies';
import { Link, Outlet } from 'react-router-dom';
//import Emoji from './Emoji/Emoji';
//import Music from './MusicApp/Music';
//import Pages from './Pagination/Pages';
//import Timer from './Timer/Timer';
//import Sign from './SignIn/Sign';
//import Health from './covid/Covid';
//import Food from './Food-Recipe/Food';
import Weather from './Weather/Weather';

function App() {
  return (
    <div className='text-center mt-2'>
      <h3>Mini-Projects</h3>
     <Link to="/Weather">Weather App</Link>&nbsp;&nbsp;
     <Link to="/Food">Food Recipe App</Link>&nbsp;&nbsp;
     <Link to="/Gallery">Image-Gallery</Link>&nbsp;&nbsp;
     <Link to="/Emoji">Emoji App</Link>&nbsp;&nbsp;
     <Link to="/Timer">Timer App</Link>&nbsp;&nbsp;
     <Link to="/Covid">Covid Statistics</Link>&nbsp;&nbsp;
     <Link to="/Crypto">Crypto App</Link>&nbsp;&nbsp;
     <Link to="/Pagination">Pagination App</Link>&nbsp;&nbsp;
     <Link to="/"></Link>&nbsp;&nbsp;
     <Link></Link>&nbsp;&nbsp;
     <Link></Link>&nbsp;&nbsp;

      <div className='bg-light border border-2 border-danger m-3 p-2'>
      <Outlet></Outlet> 
      </div>

    </div>
  );
}

 
export default App;