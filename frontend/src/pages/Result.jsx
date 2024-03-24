import React from "react";
import { Link } from "react-router-dom";

const Result = ({ score, setScore, setUsername }) => {
    const handleClickPlayAgain = () => {
        setScore(0);
    };

    const handleClickChangeUsername = () => {
        setScore(0);
        setUsername("guest");
    };
    return (
        <div>
            <header className="header"></header>
            <div className="container">
                <div className="result">
                    <h1>GAME ENDED</h1>
                    <h2>YOUR SCORE IS {score}</h2>
                    <div className="two-btns">
                        <Link to={"/game"}>
                            <button onClick={handleClickPlayAgain} id="res-btn">
                                Play Again
                            </button>
                        </Link>
                        <Link to={"/"}>
                            <button
                                onClick={handleClickChangeUsername}
                                id="res-btn"
                            >
                                Change username
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
