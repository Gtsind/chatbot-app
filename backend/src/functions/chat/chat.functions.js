const responsesV2 = require("../../../data/responsesV2");
const { responseMap, funFacts } = require("../../../data/responses");
const DEFAULT_RESPONSE =
  "Sorry, I don't understand that question. Please try again.";

/* 
  This function takes a prompt as an argument, converts it to lower case, then compares it to every keyword in
  responseMap and returns the reply if successful, or a fallback response if no match.
*/
function findReply(prompt) {
  const lower = prompt.toLowerCase();
  if (lower === "tell me a fun fact!") {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }

  for (let response of responseMap) {
    if (response.keywords.some((keyword) => lower.includes(keyword))) {
      return response.reply;
    }
  }
  return DEFAULT_RESPONSE;
}

//This function validates user prompt, returns an object with a boolean field and an error message in case an error occurs.
function validatePrompt(prompt) {
  if (prompt === undefined || prompt === null) {
    return { valid: false, error: "Missing Prompt!" };
  }

  if (typeof prompt !== "string") {
    return { valid: false, error: "Prompt must be a string!" };
  }

  return { valid: true };
}

/* 
  This function takes a user prompt and returns the most suitable response from a predefined set of keyword-based responses (responsesV2).
  If the prompt is exactly "tell me a fun fact!", it returns a random fun fact. Otherwise, it searches through all available responses,
  scoring each based on how many of its associated keywords appear in the prompt.
  If multiple responses have the same top score, it randomly selects one of them.
  If no keywords match, it returns a default fallback response.
*/
function findReplyV2(prompt) {
  const promptLower = prompt.toLowerCase();

  if (promptLower === "tell me a fun fact!") {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const key in responsesV2) {
    const { keywords, reply } = responsesV2[key];
    let score = 0;

    for (const keyword of keywords) {
      if (promptLower.includes(keyword.toLowerCase())) {
        score++;
        console.log(score);
      }
    }

    if (score > 0) {
      if (score > bestScore) {
        bestScore = score;
        bestMatch = reply;
      }
      if (score === bestScore) {
        // randomly select new or old
        bestMatch = Math.random() < 0.5 ? reply : bestMatch;
      }
    }
  }

  if (bestMatch === null) {
    return DEFAULT_RESPONSE;
  }

  return bestMatch;
}

module.exports = { findReply, validatePrompt, findReplyV2 };
