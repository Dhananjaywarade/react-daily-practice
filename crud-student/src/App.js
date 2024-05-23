import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    axios.get("http://localhost:8080/getAllStudent").then((data) => { setData(data.data) })
  }, [])

  return (
    <div className="App container">

      {/* Get All Students */}
      <h1 className="my-4">Get All Students</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return <tr key={key}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.address}</td>
            </tr>
          })}
        </tbody>
      </table>

      
    </div>
  );
}

export default App;
