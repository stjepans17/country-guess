import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Leaderboard = ({}) => {
    const [playersData, setPlayersData] = useState(null);
    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4000/data/leaderboard"
            );
            const sortedPlayers = response.data.data
                .sort((a, b) => b.score - a.score)
                .slice(0, 10);
            setPlayersData(sortedPlayers);
        } catch (error) {
            console.error("Error fetching country data:", error);
        }
    };
    return (
        <div>
            <header className="header">
                <Link to={"/"}>
                    <button className="button-30" role="button">
                        GO BACK
                    </button>
                </Link>
            </header>
            <div className="container">
                <div className="buttons-row">
                    <div className="leaderboard">
                        <h1>LEADERBOARD:</h1>
                        {playersData && (
                            <div>
                                {playersData.map((player, index) => (
                                    <p key={player._id}>
                                        <b>{index + 1}.</b> {player.username} (
                                        {player.score} points)
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
