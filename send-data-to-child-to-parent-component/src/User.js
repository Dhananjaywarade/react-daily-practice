import React from 'react'

const User = (props) => {
    const data="dhananjay warade";
  return (
    <div> 
        <h2>UserName : {props.name}</h2>
        <button onClick={()=>{alert(data)}}>Click Me</button>
    </div>
  )
}

export default User