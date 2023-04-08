import React, { useState } from 'react';
import './Weather.css'

function Weather() {
    const [city, setCity] = useState("");
    const [result, setResult] = useState("");
    const [hum, setHum] = useState("");
    const changeHandler = z =>{
        setCity(z.target.value);
    }
    const submitHandler = z =>{
        z.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
        response =>response.json()
        ).then((data) => {
              const kelvin = data.main.temp;
              const celsius = kelvin - 273.15;
              setResult("Temperature at"+" "+city+' is '+"\n"+Math.floor(celsius)+"°C") ; //alt+0176
              setHum(" "+"Humidity at"+" "+city+" is "+"\n"+Math.floor(data.main.humidity)+" "+"g/m^3");
              setCity("");
        }).catch(error => console.log(error))
    }
  return (
    <div>
        <center>
            <div className='card'>
            <div className='card-body'>
             <h4 className='card-title'>Weather App</h4>
             <form onSubmit={submitHandler}> 
                <input type="text" name="city" value={city} onChange={changeHandler}/><br /><br />
                <input type="submit" value="Know Temperature & Humidity" />
             </form>
             <h2>{result}</h2>
             <h2>{hum}</h2>
            </div>
            </div>
        </center>
    </div>
  )
}

export default Weather