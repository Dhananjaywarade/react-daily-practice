import { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      {
        status?<h1>Hello world</h1>:null
      }
      
      <button onClick={()=>{setStatus(true)}}>show</button>
      <button onClick={()=>{setStatus(false)}}>hide</button>
      <button onClick={()=>{setStatus(!status)}}>Toggle</button>
    </div>
  );
}

export default App;
