import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form React</h1>
      <form action="">
        <label htmlFor="firstName">First Name*</label>
        <input type="text" name='firstName' placeholder='Enter First Name' required />
        <label htmlFor="lastName">Last Name*</label>
        <input type="text" name='lastName' placeholder='Enter Last Name' required />
        <label htmlFor="email">Email*</label>
        <input type="email" name='email' placeholder='Enter Email' required />
        <label htmlFor="contact">Contact*</label>
        <input type="tel" name="contact" placeholder='Enter Mobile Number' required />

        <label htmlFor="gender">Gender*</label>
        <input type="radio" name="gender" id="" value="male" />Male
        <input type="radio" name="gender" id="" value="Female" />Female
        <input type="radio" name="gender" id="" value="Other" />Other

        <label htmlFor="lang">Your Best Subject</label>
        <input type="checkbox" name="lang" id="" value="english" />English
        <input type="checkbox" name="lang" id="" value="maths" />Maths
        <input type="checkbox" name="lang" id="" value="physics" />Physics

        <label htmlFor="resume">Upload Resume*</label>
        <input type="file" name="resume" id="" />

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


        <label for="about">About</label>
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
