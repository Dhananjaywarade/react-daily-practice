import './App.css';
import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const handleInput=()=>{
    inputRef.current.value="5000";
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.style.display="none";
  }
  return (
    <div className="App">
     <h1>UseRef In ReactJs</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
}

export default App;
