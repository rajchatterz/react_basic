import { useEffect, useState } from "react"

function MapFilter(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
    })
    // console.log(data)
    function Map(){
        let mappArray = data.map((e)=>e.userId+1)
        // console.log(mappArray)
    }
    Map()
    return (
        <div>{data.map((e)=>{
            <h1>{e.userId}</h1>
        })}</div>
    )
}
export default MapFilter