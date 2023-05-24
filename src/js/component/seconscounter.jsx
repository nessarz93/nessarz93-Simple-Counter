import React, { useEffect } from "react";
import { useState } from "react";

const SecondsCounter = () => {
 
    const [count, setCount] = useState(0);

    useEffect(() => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }, []);
  
    return <h1>The component has been rendered for {count} seconds</h1>;
  };

export default SecondsCounter;