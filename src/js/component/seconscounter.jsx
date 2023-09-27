import React, { useEffect } from "react";
import { useState } from "react";

const SecondsCounter = () => {
 
   const [count, setCount] = useState(0);

  useEffect(() => {
      setInterval(() => {
        let one = Math.floor(count/1)

        setCount(prevCount => prevCount + 1)
       // console.log(one);
      }, 1000);
    }, []); 

  
    return <h1>{count} seconds</h1>;
  };

export default SecondsCounter;