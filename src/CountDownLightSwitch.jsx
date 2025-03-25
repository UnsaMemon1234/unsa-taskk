
import React, { useState } from "react";
import './CountDownLightSwitch.css'
const [toggle,setToggle]=useState("")
const[timer,setTimer]=useState("30")
function CountDownLightSwitch(props){
    if(props.toggle==="true"){
        function handleToggleChange(event) {
            setName(event.target.backgroundColor="White");
          }
    }
    else if(props.toggle==="false"){
        function handleToggleChange(event) {
            setName(event.target.backgroundColor="Dark");
          }
    }

     function handleTimer(event){


      if(setTimer(event.target.value==0 && props.toggle ==="false")){

    setTimer(event.target.textContent="Timesup!")
    handleToggleChange(event);
      }
     else{
        setTimer(event.target.value = value+1)
     }
    }
     
      function handleReset(){
        setToggle("");
        setTimer("");
      }
   return(
    <>
    <button onClick={handleToggle} className="toggle-switch">Toggle</button>
     <button onClick={(handleTimer)=>{handleTimer("30")}}>Start Timer</button>
     <button onClick={handleReset}>Reset</button>
     <></>
  
    </>
   )
  
}
}
export default CountDownLightSwitch;
