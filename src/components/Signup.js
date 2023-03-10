import React from "react";
import "./Signup.css"
function Signup () {

    function Handlesubmit () {
        
    }

    return (
        <div className="form">
         <form onSubmit = {Handlesubmit}>
            <label>
                <hi> SIGN UP </hi>
            </label>
            <div className="inputfields">
                First Name: <br/>
                <input type="text" placeholder="first name" />
            </div>
            <div className="inputfields">
                Second Name: <br/>
                <input type="text" placeholder="second name" />
            </div>
            <div className="inputfields">
                Email Address: <br/>
                <input type="text" placeholder="email" />
            </div> 
            <div className="inputfields">
                Phone Number: <br/>
                <input type="text" placeholder="number" />
            </div>
            <div className="inputfields">
                Password: <br/>
                <input type="text" placeholder="password" />
            </div>
            <div className="inputfields">
                Confirmation Password: <br/>
                <input type="text" placeholder="password" />
            </div>
            <div className="button">
                <button>
                    SIGN UP
                </button>
            </div>
         </form>
            


        </div>
    )
}

export default Signup;