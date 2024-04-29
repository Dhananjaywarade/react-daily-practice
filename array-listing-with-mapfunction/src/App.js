import "./App.css";
import Table from 'react-bootstrap/Table';

function App() {
  // const students=["Dhananjay","Komal","shital","swati"];
  const students = [
    {
      name: "Dhananjay",
      email: "w@gmail.com",
      mobile: "7028510269",
    },
    {
      name: "Komal",
      email: "k@gmail.com",
      mobile: "1234567890",
    },
    {
      name: "swati",
      email: "s@gmail.com",
      mobile: "1234567890",
    },
    {
      name: "shital",
      email: "s@gmail.com",
      mobile: "7028510269",
    },
  ];
  return (
    <div className="App">
      <Table striped bordered hover>
        <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
        {students.map((data,key) => {
          return (
           
              <tr key={key}>
                <td>{key+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
              </tr>
           
          );
        })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
