 import React, {useEffect} from "react";
const Images
 = () => {
    
    useEffect(()=>{
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2")
    })


    return ( <div className="image_wrapper">

        <img src="./../public/kosmos.png" alt="Company's logo"  className="logo"/>

<div className="texts">
        <div id="box1">
            <h3>Fostering Management-Staff Harmony!</h3>
            <p>Efforless Task Delegation, Seamless End-of-Day Reports, Improved cross-department communication</p>
        <div></div>
        <div></div>
        </div>

        <div id="box2">
            <h3>Task, Report, Connect</h3>
            <p>Revolutionizing Employee Management:</p>
        <div></div>
        <div></div>
        </div>

        </div>
    </div> );
}
 
export default Images
;