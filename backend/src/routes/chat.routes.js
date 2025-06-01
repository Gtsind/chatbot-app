const express = require("express");
const router = express.Router();
const chatService = require("../services/chat.service");

router.post("/", chatService);

module.exports = router;
