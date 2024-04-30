import "./App.css";
import { Table } from "react-bootstrap";
function App() {
  const users = [
    {
      name: "Anil",
      email: "anil@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Burce",
      email: "bruce@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>Nested Array</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>

          {users.map((data, item) => {
            return (
              <tr key={item}>
                <td>{item+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Table striped bordered hover>
                    <tbody>
                  {data.address.map((data, item) => {
                    return (
                      <tr key={item}>
                        <td>{data.hm}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    );
                  })}
                  </tbody>
                  </Table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
