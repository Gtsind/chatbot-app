# Resume Chatbot App

A simple chatbot web application where users can ask questions and receive responses based on predefined keyword mappings. Built with Angular/TailwindCSS on the frontend and Node.js/Express on the backend.

1. On *load* the user is presented with an input to type their own question AND with a button (bubble) w/ label "Show Questions".
   - Clicking on "Show questions" presents the user with a set of predefined ones, clicking on one of them will submit the given question to the server-side to be answered
   - Typing and hitting "Send" will act the same.
2. When a question has been sent, the user can see the related question on their message-list screen, and a loading animation until the response has arrived. Additionally, the input field is disabled (along with the send button - look at future work for more related to this).
3. When a question arrives on the server side, we are looking for specific keywords and based on the matched ones we determine which predefined answer should be sent as a response.
4. The reponse arrives in the angular app, and at that point is added to the messages array and displayed to the user.
5. The view resets and awaits for a new question (manually typed or selected from predefined ones). 


Note: a fake delay has been added in the angular app, when processing the server-response, to give the user the confidence that we are actually acting on the related information (along with demonstrating the loading handling e.g. loading dots, disabling input etc.)

## How to run

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables (in reality this is optional, there are default fallbacks):**
   ```bash
   # In the backend directory
   cp .env.example .env
   ```
   This will create a `.env` file with the necessary environment variables. Make sure to update any values if needed.

3. **Start both frontend and backend servers:**
   ```bash
   npm run start
   ```

The application will be available at:
- Frontend: [http://localhost:4200](http://localhost:4200)
- Backend: [http://localhost:3001](http://localhost:3001)

### Additional Commands

- **Clean up all node_modules:**
   ```bash
   npm run cleanup
   ```
   This will remove all `node_modules` directories from the root, backend, and frontend folders. Useful for doing a clean reinstall of dependencies.

## How to test

### Backend

Tests are written using `jest` and `supertest`.

To run backend tests:

```bash
cd backend && npm test
```

Tests cover:

- Prompt validation
- Response matching
- Error handling for invalid/missing inputs


### File structure (simplified)


```
chatbot-app
 ┣ backend
 ┃ ┣ data
 ┃ ┃ ┗ responses.js
 ┃ ┣ src
 ┃ ┃ ┣ functions
 ┃ ┃ ┃ ┗ chat
 ┃ ┃ ┃ ┃ ┗ chat.functions.js
 ┃ ┃ ┣ routes
 ┃ ┃ ┃ ┗ chat.routes.js
 ┃ ┃ ┣ services
 ┃ ┃ ┃ ┗ chat.service.js
 ┃ ┃ ┣ app.js
 ┃ ┃ ┣ app.test.js
 ┃ ┃ ┗ server.js
 ┃ ┣ .env
 ┃ ┣ .env.example
 ┃ ┣ package-lock.json
 ┃ ┗ package.json
 ┣ frontend
 ┃ ┣ public
 ┃ ┃ ┗ favicon.ico
 ┃ ┣ src
 ┃ ┃ ┣ app
 ┃ ┃ ┃ ┣ components
 ┃ ┃ ┃ ┃ ┣ predefined-questions
 ┃ ┃ ┃ ┃ ┃ ┣ predefined-questions.css
 ┃ ┃ ┃ ┃ ┃ ┣ predefined-questions.html
 ┃ ┃ ┃ ┃ ┃ ┣ predefined-questions.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ predefined-questions.ts
 ┃ ┃ ┃ ┃ ┣ response-container
 ┃ ┃ ┃ ┃ ┃ ┣ response-container.css
 ┃ ┃ ┃ ┃ ┃ ┣ response-container.html
 ┃ ┃ ┃ ┃ ┃ ┣ response-container.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ response-container.ts
 ┃ ┃ ┃ ┃ ┗ user-input-component
 ┃ ┃ ┃ ┃ ┃ ┣ user-input-component.css
 ┃ ┃ ┃ ┃ ┃ ┣ user-input-component.html
 ┃ ┃ ┃ ┃ ┃ ┣ user-input-component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ user-input-component.ts
 ┃ ┃ ┃ ┣ shared
 ┃ ┃ ┃ ┃ ┣ interfaces
 ┃ ┃ ┃ ┃ ┃ ┣ chatbot-response.interface.ts
 ┃ ┃ ┃ ┃ ┃ ┗ message.interface.ts
 ┃ ┃ ┃ ┃ ┣ services
 ┃ ┃ ┃ ┃ ┃ ┣ chat-service.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ chat-service.ts
 ┃ ┃ ┃ ┃ ┗ utilities
 ┃ ┃ ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┃ ┃ ┗ sleep.ts
 ┃ ┃ ┃ ┣ app.config.ts
 ┃ ┃ ┃ ┣ app.css
 ┃ ┃ ┃ ┣ app.html
 ┃ ┃ ┃ ┣ app.routes.ts
 ┃ ┃ ┃ ┣ app.spec.ts
 ┃ ┃ ┃ ┗ app.ts
 ┃ ┃ ┣ environments
 ┃ ┃ ┃ ┣ environment.development.ts
 ┃ ┃ ┃ ┗ environment.ts
 ┃ ┃ ┣ index.html
 ┃ ┃ ┣ main.ts
 ┃ ┃ ┗ styles.css
 ┃ ┣ .editorconfig
 ┃ ┣ .gitignore
 ┃ ┣ .postcssrc.json
 ┃ ┣ README.md
 ┃ ┣ angular.json
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┣ tsconfig.app.json
 ┃ ┣ tsconfig.json
 ┃ ┗ tsconfig.spec.json
 ┣ .gitignore
 ┣ README.md
 ┣ package-lock.json
 ┗ package.json

```

<br>

### Tech stack

- Angular v20
- Node.JS
- Express.JS
- Jest

### Environmental Variables

Frontend: 

| Name | Description  |
| ------- | --- |
| `apiURL` | local server uri|

Backend: 

| Name | Description  |
| ------- | --- |
| `PORT` | local server port|


## Optimization

- Refactored backend to separate routing (`chat.routes.js`) from business logic (`chat.service.js`)
- Used a clean module-based architecture for chat functionality
- Implemented auto-scroll on new messages for a better UX
- Simulated bot response by adding typing indicators and small delay
- Button toggles recommended questions for better user interaction

## Future Work

- Add persistent chat history, make past conversations available for users to access them at a later stage
   - This requires routes & functions on the server-side, along with a DB to store conversations (e.g. MongoDB)
- Implement authentication with Google login option and user profiles
- Support richer content in messages
- Probably add some kind of scoring related to determining which answer is best suited for the given question, e.g. adding weights to keywords
- Write unit and integration tests for the Angular app
- Better error handling
- Add a cancel/stop button along with the "send button" in case the user wants to abort processing the current question and ask a new one
