const {
  findReply,
  validatePrompt,
  findReplyV2,
} = require("../functions/chat/chat.functions");

function sendResponse(req, res) {
  const userPromt = req.body.prompt;
  console.log("Incoming Request >> ", req.body);

  const validation = validatePrompt(userPromt);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  console.log("Request prompt: ", userPromt);

  // const reply = findReply(userPromt);
  const reply = findReplyV2(userPromt);
  res.status(200).json({ reply });
}

module.exports = sendResponse;
