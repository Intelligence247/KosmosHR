 import React, {useEffect} from "react";
const Images
 = () => {
    
    let x = document.querySelector("#box1");
    let y = document.querySelector("#box2");
    function animate() {
        setTimeout(function () {
            x.style.left = "-900px";
            y.style.left = "0px";
            setTimeout(function () {
                x.style.left = "0px";
                y.style.left = "900px";
                setTimeout(function () {
                    animate(); // Call the animate function recursively
                }, 4000); // Delay before calling animate again
            }, 9000); // Delay for the second part of the animation
        }, 5000); // Delay for the first part of the animation
    }

    animate();

    return ( <div className="image_wrapper">

        <img src="./../public/kosmos.png" alt="Company's logo"  className="logo"/>

<div className="texts">
        <div id="box1">
            <div className="display">
            <h3>Fostering Management-Staff Harmony!</h3>
            <p>Efforless Task Delegation, Seamless End-of-Day Reports, Improved cross-department communication</p>
        <div></div>
        <div></div>
        </div>
        </div>

        <div id="box2">
            <div className="display">
            <h3>Task, Report, Connect</h3>
            <p>Revolutionizing Employee Management:</p>
        <div></div>
        <div></div>
        </div>
        </div>

        </div>
    </div> );
}
 
export default Images
;