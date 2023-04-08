import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import './pages.css';

const Pages = () => {
    const [data, setData] = useState([]);
    const [perpage, setPerpage] = useState([]);

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      response => {setData(response.data);setPerpage(response.data.slice(0,10))}
      )
   },[])
  const pageHandler =(pageNumber)=>[
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10))
  ]
  return (
    <div>
        <center className='display-6 text-success'>Search Results</center>
        {data.length >=1 ?
        <div>
           {perpage.map(post => <div className="post">{post.title}</div>)} <br/> 
           <Pagination data={data} pageHandler={pageHandler}/>
        </div>
        :
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Pages;