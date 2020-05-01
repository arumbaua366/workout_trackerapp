// require express and path
const express = require("express");
const path = require("path");
const router = express.Router();

router.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/index.html`));
});

// exercise page
router.get(`/exercise?`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/exercise.html`));
});

// stats
router.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/stats.html`));
});

module.exports = router;