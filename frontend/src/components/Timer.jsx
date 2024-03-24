import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const [seconds, setSeconds] = useState(30);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds == 0) {
                clearInterval(interval);
                navigate("/result");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className="timer">
            <p>Time Left: {seconds}s</p>
        </div>
    );
};

export default Timer;
