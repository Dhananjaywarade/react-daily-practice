import axios from "axios";
import { useEffect,useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data)=>{setData(data.data)})
  }, [])
  
  return (
    
    <div className="App">
      <table>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>description</td>
          <td>Image</td>
        </tr>
        {
          data.map((item,key)=>{
           return <tr key={key}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td><img style={{width:"50px"}} src={item.image} alt="" /></td>
            </tr>
          })
        }
      </table>
    </div>
  );
}

export default App;
