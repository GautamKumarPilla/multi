import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
     <Header></Header>
     <Outlet></Outlet>
    </div>
    </Provider>
  );
}

export default App;
