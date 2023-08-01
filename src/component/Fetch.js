import React, { useEffect, useState } from "react";


function Fetch (){
    const [value,setValue] = useState([])
    useEffect(()=>{
        const fetchWeather = async ()=>{
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=howrah&appid=97abbfee3233b110cffbb6407cc22df3')
            const data =await response.json()
            setValue(data)
        }
        fetchWeather()
    })
    // console.log(value)
    const mapdata = ()=>{
        let mapArray = value.map((e)=>{
            e.id+=1

        })
        return mapArray
    }
    mapdata()
    return (
        <div className="App">
            <h1>{value && value.name}</h1>
        </div>
    )
}

export default Fetch