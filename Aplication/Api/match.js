const express = require("express");
const router = express.Router();
const Match = require("../Domain/Models/match");

router.post("/new-match", async (req, res) => {
  try {
    let result = await Match.add(req.body.moderatorId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
