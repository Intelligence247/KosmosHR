 import React, {useEffect} from "react";
const Images
 = () => {
    
 
    useEffect( ()=>{
        animate();
    })
    function animate() {
        let x = document.querySelector("#box1");
        let y = document.querySelector("#box2");
        setTimeout(function () {
            x.style.left = "-900px";
            y.style.left = "0px";
            setTimeout(function () {
                x.style.left = "0px";
                y.style.left = "900px";
                setTimeout(function () {
                    animate();
                }, 4000); 
            }, 9000);
        }, 5000); 
    }

   

    return ( <div className="image_wrapper">

        <img src="./../public/kosmos.png" alt="Company's logo"  className="logo"/>

<div className="texts">
        <div id="box1">
            <div className="display">
            <h3>Fostering Management-Staff Harmony!</h3>
            <p>Efforless Task Delegation, Seamless End-of-Day Reports, Improved cross-department communication</p>
        <div className="rectangle"></div>
        <div className="circle"></div>
        </div>
        </div>

        <div id="box2">
            <div className="display">
            <h3>Task, Report, Connect</h3>
            <p>Revolutionizing Employee Management:</p>
         <div className="rectangle"></div>
        <div className="circle"></div>
        </div>
        </div>

        </div>
    </div> );
}
 
export default Images;
