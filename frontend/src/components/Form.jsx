import React from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ username, setUsername }) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        navigate("/game");
    };
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };
    return (
        <div className="buttons-row">
            <div className="rules">
                <h1>COUNTRY GUESSER 🎌</h1>
                <h3>RULES:</h3>
                <p className="start-txt">
                    This is a flag guessing game.
                    <br />
                    You'll see a flag and four country options. <br />
                    Your goal: pick the country that the flag represents.
                </p>
                <p className="enter-username">Enter your username: </p>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={handleInputChange}
                    />
                    <button id="start-btn" type="submit">
                        Start
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
