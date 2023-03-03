import express from "express";
import {
  commentMovie,
  createMovie,
  deleteMovie,
  index,
  likeMovie,
  updateMovie,
} from "../controllers/movies.js";
const routerIndex = express.Router();


routerIndex.get("/", index);

routerIndex.post("/add", createMovie);

routerIndex.delete("/:id", deleteMovie);

routerIndex.patch("/:id", updateMovie);

routerIndex.post("/:id/commments", commentMovie);

routerIndex.post("/:id/likes", likeMovie);

export default routerIndex;
