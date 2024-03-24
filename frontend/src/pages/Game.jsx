import React, { useState, useEffect } from "react";
import axios from "axios";
import Timer from "../components/Timer.jsx";

const Game = ({ username, score, setScore }) => {
    const [generatedCountry, setGeneratedCountry] = useState("");
    const [generatedCountryFlag, setGeneratedCountryFlag] = useState("");
    const [options, setOptions] = useState([]);

    useEffect(() => {
        generateCountry();
    }, []);

    const handleGuess = (selectedCountry) => {
        if (selectedCountry === generatedCountry) {
            console.log("guessed correctly");
            setScore((prevScore) => prevScore + 1);
        }

        generateCountry();
    };

    const generateCountry = async () => {
        try {
            // Fetch data from the endpoint
            const response = await axios.get("http://localhost:4000/data/all");
            const countriesData = response.data; // Assuming response is an array of country objects

            // Generates random country when called
            const randomIndex = Math.floor(
                Math.random() * countriesData.length
            );
            const correctCountry = countriesData[randomIndex];
            setGeneratedCountry(correctCountry.name.common);
            setGeneratedCountryFlag(correctCountry.flags.png);

            const randomCountries = [correctCountry.name.common];
            while (randomCountries.length < 4) {
                const randIndex = Math.floor(
                    Math.random() * countriesData.length
                );
                const randCountry = countriesData[randIndex].name.common;
                if (!randomCountries.includes(randCountry)) {
                    randomCountries.push(randCountry);
                }
            }
            randomCountries.sort(() => Math.random() - 0.5); // Shuffle array
            setOptions(randomCountries);
        } catch (error) {
            console.error("Error fetching country data:", error);
            // Handle error as needed
        }
    };
    return (
        <div>
            <header className="header"></header>
            <div className="container">
                <div className="username">
                    <p>{username}</p>
                </div>
                <img src={generatedCountryFlag} alt="Flag" className="flag" />
                <div className="four-buttons">
                    {options.map((option, index) => (
                        <button
                            key={option}
                            id={index}
                            onClick={() => handleGuess(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="score">
                    <p>Current score : {score}</p>
                </div>
                <Timer />
            </div>
        </div>
    );
};

export default Game;
