import React, { useState } from "react";


function ToggleSwitch(){
    const[isOn,setIsOn] = useState(false);

    const handleToggle =()=>{
        setIsOn(prevState => !prevState)
    }
}