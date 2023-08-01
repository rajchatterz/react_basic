
import { useEffect, useState } from 'react';
import './App.css';
import Increment from './component/Increment';
import Prop from './component/Prop';
import Condition from './component/Conditional.js';

function App() {
  const [name,setName] = useState("Raj")
  const changeName = (v)=>{
    setName("Rajjjjjjj")
  }
  const addNums = ()=>{
    console.log(object)
  }
  return (
    <div>
      <div className="App">
          <h1>List of project</h1>
          {/* <Fetch/> */}
          {/* <MapFilter/> */}
          {/* <Increment/> */}
          {/* <Prop name={name}/>
          <button onClick={changeName} value={name}>Change name</button> */}
          <h1>hey</h1>
          <p></p>
        </div>
    </div>
  );
}

export default App;
