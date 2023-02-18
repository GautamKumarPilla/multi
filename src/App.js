import logo from './logo.svg';
import React from 'react';
import store from './store/store';
import './App.css';
import { ReactDOM } from 'react';
// import Todolist from './14.0.1';
import Todolistz from './14.0.3';
import { Provider } from 'react-redux';

function App() {
  return( 
    <Provider store={store}>
      <div className="border border-3 border-warning">
      {/* <Todolist/> */}
      <Todolistz/>
    </div>
    </Provider>
  );
}

export default App;