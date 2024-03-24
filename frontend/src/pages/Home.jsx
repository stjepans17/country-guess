import React from "react";
import Form from "../components/Form.jsx";
import { Link } from "react-router-dom";
const Home = ({ username, setUsername }) => {
    return (
        <div>
            <header className="header">
                <Link to={"/leaderboard"}>
                    <button className="button-30" role="button">
                        SHOW LEADERBOARD
                    </button>
                </Link>
            </header>
            <div className="container">
                <Form username={username} setUsername={setUsername} />
            </div>
        </div>
    );
};

export default Home;
