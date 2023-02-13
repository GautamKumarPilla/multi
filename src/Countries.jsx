import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Countries(){
    const [country,setCountry] = useState([]);
    useEffect(()=>{
        axios.get("https://restcountries.com/v2/all").then((response)=>{
        setCountry(response.data)
        console.log(response.name)
    })
},[])
    return(
        <div>
            {
            country.map((g)=>{
                return <li>
                        <Link to={`/countries/${g.name}/${g.capital}/${g.population}`}>{g.name}</Link>
                    </li>
            })
            
        }
        </div>
    )
}

export default Countries;