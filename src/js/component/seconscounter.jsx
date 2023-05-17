import React from "react";

const SecondsCounter = () => {
    let interval;
    const [time, setTime] = useState(0);

    console.log(time)

    const handleStart = () => {
        setTime((time) => time + 1);
        interval = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000);
    }

	return (
        <div>
            <div onLoad = {handleStart}>
                <h1>{time}Segundos</h1>
            </div>
        </div>
    );
}

export default SecondsCounter;