import React, { useState } from "react";
import Input from "./Input";
import Buttons from "./Buttons";

export default function Calculator() {
  const [calVal, setCalVal] = useState("");

  const buttonClick= (button)=>{
    // console.log("cliclid button"  + button)
    if(button == "C"){
      setCalVal("")
    }
    else if(button == '='){
      let result = eval(calVal)
      setCalVal(result)
    }
    else{
      let display = calVal + button
      setCalVal(display)
    }
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center mt-5">
      <h2>CALCULATOR</h2>
      <div className="w-25 border border-2 rounded-3 border-dark p-3 ">

        <Input calVal={calVal} />

        <Buttons buttonClick={buttonClick}/>

      </div>
    </div>
  );
}
