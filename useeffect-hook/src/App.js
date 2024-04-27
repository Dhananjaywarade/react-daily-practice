import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(10);
  const [data, setdata] = useState(100);
  useEffect(()=>{
    console.log("Useeffect Called!");
  },[data])
  return (
    <div className="App">
      <h1>UseEffect Hook</h1>
      <h2>count : {count}</h2>
      <h2>data : {data}</h2>
      <button onClick={()=>{setcount(count+1)}}>Update count</button>
      <button onClick={()=>{setdata(data+1)}}>Update Data</button>
    </div>
  );
}

export default App;
