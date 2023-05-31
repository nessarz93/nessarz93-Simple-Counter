import React, { useEffect } from "react";
import { useState } from "react";

const SecondsCounter = () => {
 
    const [count, setCount] = useState(0);

    useEffect(() => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }, []);

    function decimal () {
      let str = count.toString();
      let largo = str.length
      let dif = 6 - largo;
      
      for (let i=1; i=>6; i++) {
        str = "0" + str
      }
    }
  
    return <h1>{count} seconds</h1>;
  };

export default SecondsCounter;