const conversationContainer = document.getElementById('response-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', fetchServerResponse);

userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') fetchServerResponse();
});

async function fetchServerResponse() {
  console.log("Button clicked.");
  const userPrompt = userInput.value.trim();
  if (!userPrompt) return ;

  conversationContainer.innerHTML += `
    <div class="flex justify-end mb-4">
      <div class="bg-blue-500 text-white p-4 rounded-lg max-w-xs shadow-xl">
        ${userPrompt}
      </div>
    </div>
  `;
  conversationContainer.scrollTop = conversationContainer.scrollHeight;

  try {
  const response = await fetch("http://localhost:3001/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: userPrompt })
  });

  userInput.value = "";

  if(!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  };
  
  const data = await response.json();
  if (response) console.log("Response arrived!", data);

  displayChatbotResponse(data);

  } catch (err) {
      console.error("Failed to fetch.", err);
  }
}

function displayChatbotResponse(data) {
  conversationContainer.innerHTML += `
  <div class="flex justify-start">
    <div class="bg-gray-200 text-black p-4 rounded-xl max-w-xs shadow-xl">
      ${data.reply}
    </div>
  </div>
  `;
  conversationContainer.scrollTop = conversationContainer.scrollHeight;
}

