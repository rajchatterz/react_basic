
import { useEffect, useState } from 'react';
import './App.css';
import Increment from './component/Increment';


function App() {
  return (
    <div>
      <div className="App">
          <h1>List of project</h1>
          {/* <Fetch/> */}
          {/* <MapFilter/> */}
          <Increment/>
          <h1>hey</h1>
          <p></p>
        </div>
    </div>
  );
}

export default App;
