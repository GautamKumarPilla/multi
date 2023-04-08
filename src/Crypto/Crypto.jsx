import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ImgCard from './ImgCard';
import './Crypto.css';

const Crypto = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const handler=(z)=>{
    setSearch(z.target.value);
    
  }
  useEffect(()=>{
    axios('https://api.coinstats.app/public/v1/coins?skip=0&limit=1000').then(
        (response) => setData(response.data.coins)  
    )
  },[]);  
  
return (
  <>
    <div className='bg-dark'>
        <input type="text" value={search} onChange={handler} placeholder='Search for Crypto-Coins' className='text-info bg-danger'/><br />
        <input type="submit" value="Search" className='btn btn-outline-success'/>
    </div>
    {
       data.length>0 && 
       <div className='grid-container'>
         {data.filter( crypto =>
           crypto.name.toLowerCase().includes(search.toLowerCase())
         ).map(crypto =>
            <div>
              <ImgCard 
              name={crypto.name} rank={crypto.rank} price={crypto.price}
              marketCap={crypto.marketCap} key={crypto.id} url={crypto.icon}
             />
            </div>
          )}
       </div>
    }
    </>
  )
}

export default Crypto;