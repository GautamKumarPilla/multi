import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hostel from './Components/Hostel';
import AddBed from './Components/AddBed';
import AddTenant from './Components/AddTenant';
import Login from './Components/Login';
import AddRoom from './Components/AddRoom.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/dashboard',
        element:<Hostel></Hostel>
      },
      {
        path:'/AddBed',
        element:<AddBed></AddBed>
      },
      {
        path:'/AddTenant',
        element:<AddTenant></AddTenant>
      },
      {
        path:'/AddRoom',
        element:<AddRoom></AddRoom>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
