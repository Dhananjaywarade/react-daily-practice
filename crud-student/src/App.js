import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  

  const saveStudent = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/addStudent", { firstName: firstName, lastName: lastName, address: address }).then(() => { getList(); setFirstName(''); setLastName(''); setAddress(''); });

  }
  const handleDelete = (id) => {

    axios.delete(`http://localhost:8080/deleteStudent/${id}`).then(() => { getList() });

  }

  const getList = () => {
    axios.get("http://localhost:8080/getAllStudent").then((data) => { setData(data.data); })
  }



 


  
  useEffect(() => {
    getList();
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) =>
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.address}</td>
              <td ><button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Delete</button> </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Add student  */}

      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Add Student</h2>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              onChange={(e) => { setFirstName(e.target.value) }}
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => { setAddress(e.target.value) }}
            />
          </div>
          <button type="button" onClick={saveStudent} className="btn btn-primary">
            Add Student
          </button>

        </div>
      </div>

    
    </div>
  );
}

export default App;
