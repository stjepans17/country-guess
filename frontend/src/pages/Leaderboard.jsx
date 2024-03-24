import React from "react";
import { Link } from "react-router-dom";

const Leaderboard = ({}) => {
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
                    <div className="rules">
                        <h1>LEADERBOARD:</h1>
                        <p>
                            <b>1.</b> guest (0 points)
                        </p>
                        <p>
                            <b>2.</b> guest (0 points)
                        </p>
                        <p>
                            <b>3.</b> guest (0 points)
                        </p>
                        <p>
                            <b>4.</b> guest (0 points)
                        </p>
                        <p>
                            <b>5.</b> guest (0 points)
                        </p>
                        <p>
                            <b>6.</b> guest (0 points)
                        </p>
                        <p>
                            <b>7.</b> guest (0 points)
                        </p>
                        <p>
                            <b>8.</b> guest (0 points)
                        </p>
                        <p>
                            <b>9.</b> guest (0 points)
                        </p>
                        <p>
                            <b>10.</b> guest (0 points)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
