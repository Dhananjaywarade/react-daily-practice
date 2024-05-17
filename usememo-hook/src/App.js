import './App.css';
import { useMemo, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(function updateCount() {
    console.log("update Memo");
    return count * 5;
  }, [count]);



  return (
    <div className="App">

      <h1>Count : {count}</h1>
      <h1>Item : {item}</h1>
      <h1>Update count : {multiCountMemo}</h1>
      <button onClick={() => { setCount(count + 1) }}>Update Count</button>
      <button onClick={() => { setItem(item * 10) }}>Update Item</button>
    </div>
  );
}

export default App;
