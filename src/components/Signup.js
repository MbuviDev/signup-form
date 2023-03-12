import React, { useState } from "react";
// import "./Signup.css";


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
    <div>
 
    <div className="  font-mono uppercase  " >
   
      <form onSubmit={handleSubmit} className="shadow-2xl shadow-cyan-500/50 bg-orange-100 shadow-none " >
        <label >
          <hi className="text-2xl underline "> SIGN UP </hi>
        </label><br/><br/>
        <div >
          <p>First Name:</p>
          <input
           className="bg-orange-100"
            type="text"
            placeholder="first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p>Second Name: </p>
          <input
            className="bg-orange-100"
            type="text"
            placeholder="second name"
            value={secondname}
            onChange={(e) => setSecondname(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p> Email Address: </p>
          <input
            className="bg-orange-100"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p>Phone Number: </p>
          <input 
          className="bg-orange-100"
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
          className="bg-orange-100"
          placeholder="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <p> Confirmation Password: </p>
          <input 
          type="text" 
          className="bg-orange-100"
          placeholder="password" 
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          />
          
        </div>
        <br />
        <div >
          <button className="bg-blue-300">
               SIGN UP
          </button>
        </div>
      </form>
     
    </div>
    </div>
   
  );
}

export default Signup;