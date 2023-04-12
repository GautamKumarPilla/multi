import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hostel from './Components/Hostel';
import AddBed from './Components/AddBed';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/login',
        element:<></>
      },
      {
        path:'/dashboard',
        element:<Hostel></Hostel>
      },
      {
        path:'/AddBed',
        element:<AddBed></AddBed>
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
