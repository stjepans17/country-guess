import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
export const Player = mongoose.model("Player", playerSchema);
