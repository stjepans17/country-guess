import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Result from "./pages/Result.jsx";

import "./App.css";

const App = () => {
    const [username, setUsername] = useState("guest");
    const [score, setScore] = useState(0);
    return (
        <Routes>
            <Route
                path="/"
                element={<Home username={username} setUsername={setUsername} />}
            />
            <Route
                path="/game"
                element={
                    <Game
                        username={username}
                        score={score}
                        setScore={setScore}
                    />
                }
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route
                path="/result"
                element={
                    <Result
                        score={score}
                        setScore={setScore}
                        setUsername={setUsername}
                        username={username}
                    />
                }
            />
        </Routes>
    );
};

export default App;
