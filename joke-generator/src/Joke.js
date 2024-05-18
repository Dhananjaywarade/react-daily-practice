import React, { useState } from 'react'
import axios from "axios";
import './App.css';

const Joke = () => {
    const [joke, setJoke] = useState("");
    const handleApi=()=>{
       axios.get("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then(data=>setJoke(data.data.joke)).catch(error=>console.log(error));
    }
  return (
    <React.Fragment>
    <button onClick={handleApi}>Click to Generate Code</button>
    <div className='joke'>{joke}</div>
    </React.Fragment>
    
  )
}

export default Joke