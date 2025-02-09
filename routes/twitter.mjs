import express from "express";
import {twitter} from "../service/twitter.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  await twitter()

  res.send().status(200);
});

export default router;
