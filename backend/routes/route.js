import express from "express";
import fs from "fs";
import { Player } from "../models/playerModel.js";
const router = express.Router();

router.get("/all", (request, response) => {
    try {
        fs.readFile("./data/data.json", (err, data) => {
            if (err) {
                console.error("Error reading data.json:", err);
                return response.status(500).send("Internal Server Error");
            }
            const jsonData = JSON.parse(data);
            return response.status(200).json(jsonData);
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).send("Internal Server Error");
    }
});

// Route which creates adds user's score

router.post("/leaderboard", async (request, response) => {
    try {
        if (!request.body.username || !request.body.score) {
            return response.status(400).send({
                message: "Send all required fields!",
            });
        }
        const newPlayer = {
            username: request.body.username,
            score: request.body.score,
        };

        const player = await Player.create(newPlayer);
        return response.status(201).send(player);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route which gets user's score of ALL the users
router.get("/leaderboard", async (request, response) => {
    try {
        const players = await Player.find({});
        return response.status(200).json({
            count: players.length,
            data: players,
        });
    } catch (error) {
        console.log(error.message);
    }
});

export default router;
