import React,{useState} from 'react';
import Products from './Products';

const Food = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "cfe09cce";
  const YOUR_APP_KEY ="892e33b81bba9e7bda05564ceff41357";
  const submitHandler = z =>{
    z.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4 className='text-warning'>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(z) => setSearch(z.target.value)}/> <br/>
          <input type="submit" className="btn btn-outline-warning border-2 border-danger" value="Search"/>
        </form>
        {data.length>=1 ? <Products data={data}/>:null}
      </center>
    </div>
  )
}

export default Food