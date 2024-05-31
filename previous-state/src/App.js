import './App.css';
import { useState } from "react";
function App() {

  const [value, setValue] = useState(1);
  const handleState=()=>{
    let rand=Math.floor(Math.random(value)*10);
    setValue((prev)=>{
      console.log(prev);
      return rand;
    });
  }
  return (
    <div className="App">
     
     <h1>{value}</h1>
     <button onClick={handleState}>update </button>


    </div>
  );
}

export default App;
