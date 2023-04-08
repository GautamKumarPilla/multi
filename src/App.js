import React from 'react';
import './App.css';
//import Crypto from './Crypto/Crypto';
//import Badge from './Shopping/Badge';
//import Card from './Shopping/Card';
//import Todo from './Todo';
//import Movies from './Movies/Movies';
import { Link, Outlet } from 'react-router-dom';
//import Pages from './Pagination/Pages';
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
    <div>
      <Weather></Weather>
    </div>
  );
}

{/* <h3>Mini-Projects</h3>
     <Link to="/Weather">Weather App</Link>&nbsp;&nbsp;
     <Link to="/Gallery">Image-Gallery</Link>
     <Outlet></Outlet> */}
export default App;