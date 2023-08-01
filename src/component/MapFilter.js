import { useEffect, useState } from "react"

function MapFilter(){
    const [data,setData] = useState([])
    const [number,setNumber] = useState([1,2,3,4,5,6])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
    },[])

    //  Map Function
//    const mapData = ()=>{
//     let mapArray = data.map((e)=>e.id+1)
//     console.log(mapArray)
//    }

// filter

// const mapData = ()=>{
//     let filtter = data.filter((e)=>{
//         let title=e
//         console.log(title.title==="harum ad aperiam quis")
//     })
// }

const mapData=()=>{
    let square = number.filter((e)=>{
        return e>5
    })
    // console.log(square)
    return square
}
    
    return (
        <div>
        <button onClick={mapData}>hey</button>
        </div>
    )
}
export default MapFilter