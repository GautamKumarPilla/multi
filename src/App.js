// // import Counter from './Counter';
// // import Todolist1 from './Todolist1';
// // import Todo1 from './Todo1';
// // import Arth from './Arth';
// import Countriesproj from "./Countriesproj";
// import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <h1>Welcome to Edupoly ReactJS</h1>
      <Counter></Counter>
      <Todoli></Todoli>
        <Formlist></Formlist>
      </div> */}
      {/* <Countries></Countries> */}
      {/* <Todolist></Todolist> */}
      {/* <Arth></Arth> */}
      {/* <Products></Products> */}
      <div>
        <div  className={'d-flex flex-wrap border border-5 m-2 p-2 bg-warning'}><Link to={"/products"}> Products</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/countries"} >Countries</Link><br/></div>
      <Outlet></Outlet>
       {/* <Countriesproj/> */}
</div>
    </div>
    
  );
}
export default App;