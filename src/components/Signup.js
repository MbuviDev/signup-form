import React, { useState } from "react";
import "./Signup.css";

function Signup() {

  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState ("")
  const [confirmation, setConfirmation] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="signuplabel">
          <hi> SIGN UP </hi>
        </label>
        <div className="inputfields">
          <p>First Name:</p>
          <input
            type="text"
            placeholder="first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p>Second Name: </p>
          <input
            type="text"
            placeholder="second name"
            value={secondname}
            onChange={(e) => setSecondname(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p> Email Address: </p>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p>Phone Number: </p>
          <input 
          type="text" 
          placeholder="number" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p> Password: </p>
          <input 
          type="text" 
          placeholder="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p> Confirmation Password: </p>
          <input 
          type="text" 
          placeholder="password" 
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          />
          
        </div>
        <br />
        <div >
          <button className="button">
               SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;