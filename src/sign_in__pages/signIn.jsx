import React from "react";
import {Link} from "react-router-dom"

const Sign = () => {
    return ( 
        <div className="form">
           <h2>Sign into Company Account</h2> 
           <form action="post" noValidate>
           <h3>Email:</h3>
           <input type="text" name="email" id="Email" placeholder="Enter Your Email" required />
           <h3>Password:</h3>
           <input type="password" name="password" id="password" placeholder="Enter Your Password"  required/>
           <Link>Click if ou Lost Your Password</Link>
           <button type="submit">Log In</button>
           </form>

           <div className="register">
            Not a member? 
            <Link>Create an Account</Link>
           </div>
          
        </div>
     );
}
 
export default Sign;