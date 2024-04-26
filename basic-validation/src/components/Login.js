import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [usererr, setUsererr] = useState(false);
    const [passerr, setPasserr] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleUser=(e)=>{
        const item=e.target.value;
        if (item.length<3) {
            setUsererr(true);
        }
        else{
            setUsererr(false);
        }
    }

    const handlePassword=(e)=>{
        const item=e.target.value;
        if (item.length<3) {
            setPasserr(true);
        }
        else{
            setPasserr(false);
        }
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter userName " onChange={handleUser} />
        {
            usererr?<><br /><span style={{color:"red"}}>User Invalid</span></>:null
        }
        <br />
        <br />
        <input type="password" placeholder="Enter password " onChange={handlePassword} />
        {
            passerr?<><br /><span style={{color:"red"}}>password Invalid</span></>:null
        }
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
