import './App.css';
import { useState } from "react";
import { toast } from 'react-toastify';
function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english:true,
    maths:false,
    physics:false
  })
  const [resume, setResume] = useState(); 



  const handleSubjectChange=(sub)=>{
    setSubjects((prev)=>({
      ...prev,
      [sub]:!prev[sub],
    }));
  }
  return (
    <div className="App">
      <h1>Form React</h1>
      <form action="">
        <label htmlFor="firstName">First Name*</label>
        <input type="text" name='firstName' value={firstName}  placeholder='Enter First Name' required onChange={(e)=>{setFirstName(e.target.value)}} />
        <label htmlFor="lastName">Last Name*</label>
        <input type="text" name='lastName' value={lastName} placeholder='Enter Last Name' required onChange={(e)=>{setLastName(e.target.value)}}/>
        <label htmlFor="email">Email*</label>
        <input type="email" name='email' value={email} placeholder='Enter Email' required onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="contact">Contact*</label>
        <input type="tel" name="contact" value={contact} placeholder='Enter Mobile Number' required onChange={(e)=>{setContact(e.target.value)}}/>

        <label htmlFor="gender">Gender*</label>
        <input type="radio" name="gender" id="" value="male" checked={gender==='male'} onChange={(e)=>{setGender(e.target.value)}} />Male
        <input type="radio" name="gender" id="" value="female" checked={gender==='female'} onChange={(e)=>{setGender(e.target.value)}}/>Female
        <input type="radio" name="gender" id="" value="other" checked={gender==='other'} onChange={(e)=>{setGender(e.target.value)}}/>Other

        <label htmlFor="lang">Your Best Subject</label>
        <input type="checkbox" name="lang" id="" value="english" checked={subjects.english===true} onChange={(e)=>{handleSubjectChange('english')}}/>English
        <input type="checkbox" name="lang" id="" value="maths" checked={subjects.maths===true} onChange={(e)=>{handleSubjectChange('maths')}}/>Maths
        <input type="checkbox" name="lang" id="" value="physics" checked={subjects.physics===true} onChange={(e)=>{handleSubjectChange('physics')}}/>Physics

        <label htmlFor="resume">Upload Resume*</label>
        <input type="file" name="resume" id="" onChange={(e)=>{setResume(e.target.value);toast.success("Resume Uploaded 📄");}}/>

        <label htmlFor="url">Enter URL*</label>
        <input type="url" name="url" id="" />

        <label >Select Your Choice</label>
        <select name="select" id="">
          <option
            value=""
            disabled

          >
            Select your Ans
          </option>
          <optgroup label="Beginers">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">
              JavaScript
            </option>
          </optgroup>
          <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">
              Express
            </option>
            <option value="t">
              MongoDB
            </option>
          </optgroup>
        </select>


        <label htmlFor="about">About</label>
        <textarea
          name="about"
          cols="30"
          rows="10"
          placeholder="About your self"
          required
        ></textarea>

        <button
          type="reset"
          value="reset"
        >
          Reset
        </button>
        <button
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
