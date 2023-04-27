import React from 'react';
import ReactDOM from 'react-dom/client';
//import createRoot from 'react-dom/client';
//import store from './Shopping/store';
//import {Provider} from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Galleria from './Gallery/Galleria';
import Food from './Food-Recipe/Food';
import Emoji from './Emoji/Emoji';
import Weather from './Weather/Weather';
import Timer from './Timer/Timer';
import Sign from './SignIn/Sign';
import Pages from './Pagination/Pages';
import Pagination from './Pagination/Pagination';
import Covid from './Covid/Covid';
import Crypto from './Crypto/Crypto';
//import Map from './Map/Map';
import Movies from './Movies/Movies';

const router = createBrowserRouter([
  {
  path:'/',
  element:<App></App>,
   children:[
    {
      path:'/Emoji',
      element:<Emoji></Emoji>
    },
    {
      path:'/Gallery',
      element:<Galleria></Galleria>
    },
    {
      path:'/Food',
      element:<Food></Food>
    },
    {
      path:'/Weather',
      element:<Weather></Weather>
    },
    {
      path:'/Timer',
      element:<Timer></Timer>
    },
    {
      path:'/Pagination',
      element:<Pages></Pages>
    },
    {
      path:'/Covid',
      element:<Covid></Covid>
    },
    {
      path:'/Crypto',
      element:<Crypto></Crypto>
    },
    {
      path:'/Map',
      element:<></>
    },
    {
      path:'/Movies',
      element:<Movies></Movies>
    },
    {
      path:'/SignIn',
      element:<></>
    },
    {
      path:'/Shopping',
      element:<></>
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();