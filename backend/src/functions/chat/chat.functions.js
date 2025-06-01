const responseMap = require("../../../data/responses");

// This function takes a prompt as an argument, converts it to lower case, then compares it to every keyword in
// responseMap and returns the reply if successful, or a fallback response if no match.
function findReply(prompt) {
  const lower = prompt.toLowerCase();
  for (let response of responseMap) {
    if (response.keywords.some((keyword) => lower.includes(keyword))) {
      return response.reply;
    }
  }
  return "Sorry, I don't understand that question. Please try again.";
}

//This functions validates user prompt, returns an object with a boolean field and an error message in case an error occurs.
function validatePrompt(prompt) {
  if (prompt === undefined || prompt === null) {
    return { valid: false, error: "Missing Prompt!" };
  }

  if (typeof prompt !== "string") {
    return { valid: false, error: "Prompt must be a string!" };
  }

  return { valid: true };
}

module.exports = { findReply, validatePrompt };
