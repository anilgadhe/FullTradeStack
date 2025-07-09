

const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");

// Signup Route
router.post("/signup", Signup);

// Login Route
router.post("/login", Login);

module.exports = router;
