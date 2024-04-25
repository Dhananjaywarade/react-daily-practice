import './App.css';
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className="App">
      <h1>conditional rendering</h1>
        {
          loggedIn?<h1>welcome dhananjay</h1>:<h1>welcome guest</h1>
        }
    </div>
  );
}

export default App;
