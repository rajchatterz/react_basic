
import { useEffect, useState } from 'react';
import './App.css';
// import Fetch from './component/Fetch.js';
import MapFilter from './component/MapFilter';

function App() {
  return (
    <div>
      <div className="App">
          <h1>List of project</h1>
          {/* <Fetch/> */}
          <MapFilter/>
          <h1>hey</h1>
          <p></p>
        </div>
    </div>
  );
}

export default App;
