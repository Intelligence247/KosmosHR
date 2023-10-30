import React from "react";

const Sign = () => {
    return ( 
        <div className="form">
         <div className="sign">
           <h2>Sign into Company Account</h2> 
           <form action="post" noValidate>
           <h3>Email:</h3>
           <input type="text" name="email" id="Email" placeholder="Enter Your Email" required />
           <h3>Password:</h3>
           <input type="password" name="password" id="password" placeholder="Enter Your Password"  required/>
           <a href="#">Click if ou Lost Your Password</a>
           <button type="submit">Log In</button>
           </form>

           <div className="register">
            Not a member? 
            <a href="#">Create an Account</a>
           </div>
           </div>
        </div>
     );
}
 
export default Sign;