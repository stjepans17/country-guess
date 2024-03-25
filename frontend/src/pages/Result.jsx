import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const addScoreToLeaderboard = async (username, score) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/data/leaderboard",
            {
                username: username,
                score: score,
            }
        );
        console.log("New entry added to leaderboard:", response.data);
    } catch (error) {
        console.error("Error adding entry to leaderboard:", error);
    }
};

const Result = ({ score, setScore, setUsername, username }) => {
    const handleClickPlayAgain = () => {
        addScoreToLeaderboard(username, score);
        setScore(0);
    };

    const handleClickChangeUsername = () => {
        addScoreToLeaderboard(username, score);
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
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
