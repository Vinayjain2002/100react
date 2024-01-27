import React, { useState } from "react";
import EffectonlyOnce from "./EffectonlyOnce";

const MouseContainer = () => {
    const [display, setDisplay]= useState(true)
  return (
    <div>
      <button onClick={()=> setDisplay}>Toggle Display</button>
      {display && <EffectonlyOnce />}
    </div>
  )
}

export default MouseContainer
