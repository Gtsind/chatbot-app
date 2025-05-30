const express = require('express');
const app = express();
const cors = require('cors');
const responseMap = require('./config/responses')

app.use(express.json());
app.use(cors());


// POST /chat endpoint
app.post('/chat', (req, res) => {
  console.log("Incoming Request.", req.body);

  const userPrompt = req.body.prompt;
  if (userPrompt === undefined || userPrompt === null){
    return res.status(400).json({ error: "Missing prompt!"});
  }

  if (typeof userPrompt !== 'string'){
    return res.status(400).json({ error: "Prompt must be a string!"})
  }

  console.log("Request prompt: ", userPrompt);
  

  const chatbotReply = findReply(userPrompt);
  res.status(200).json({reply: chatbotReply});
  
})

// This function takes a prompt as an argument, converts it to lower case, then compares it to every keyword in
// responseMap and returns the reply if successful, or a fallback response if no match.
function findReply(prompt){
  const lower = prompt.toLowerCase();
  for (let response of responseMap) {
    if (response.keywords.some(keyword => lower.includes(keyword))) return response.reply;
  }
  return "Sorry, I don't understand that question. Please try again."
}

module.exports = app