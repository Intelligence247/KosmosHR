import React from "react";
import Sign from "./signIn";
import Images from "./images";
import "./signIn_pages.css"

const SignIn = () => {
    return ( 
        <div className="signin">
            <Images/>
            <Sign/>
            
        </div>
     );
}
 
export default SignIn;