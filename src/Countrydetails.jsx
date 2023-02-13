import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Countrydetails(){
  var res = useParams();
  const[cdetails,setCdetails] = useState({})
  // console.log(res);
useEffect(() =>{
  if(res.name){
    axios.get(`https://restcountries.com/v2/name/${res.name}`)
    .then((response) => {setCdetails({...response.data})
  })
}
},[res.name])

return(
    <div className="d-flex text-light flex-wrap border border-3 bg-dark p-3 mx-5 my-5 justify-content w-25">
     <h4>Country {res.name}</h4>
     {
    cdetails[0] && (<div><h4>Capital {cdetails[0].capital}</h4>
     <h4>Population {cdetails[0].population}</h4>
     <img src={cdetails[0].flag} width="50%" alt="" /> </div>)
    }
    </div>
)
}

export default Countrydetails;