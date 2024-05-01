import './App.css';
import User from './User';

function App() {
  let data="Dhananjay warade";
  function parentalert(data) {
    alert(data);
  }
  return (
    <div className="App">
      <h1>Lifting state up</h1>
      <User name={data} alert={parentalert}/>
    </div>
  );
}

export default App;
