# Chatbot App

A simple chatbot web application where users can ask questions and receive responses based on predefined keyword mappings. Built with Angular/TailwindCSS on the frontend and Node.js/Express on the backend.

---

## How to run

### 🖥 Backend

1. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   The server runs on [http://localhost:3001](http://localhost:3001) by default.

---

### 💻 Frontend

1. **Navigate to the frontend folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the Angular app:**
   ```bash
   ng serve
   ```
   The app runs on [http://localhost:4200](http://localhost:4200) by default.

---

## How to test

### Backend

Tests are written using `jest` and `supertest`.

To run backend tests:

```bash
npm test
```

Tests cover:

- Prompt validation
- Response matching
- Error handling for invalid/missing inputs

---

## Optimization

- Refactored backend to separate routing (`chat.routes.js`) from business logic (`chat.service.js`)
- Used a clean module-based architecture for chat functionality
- Implemented auto-scroll on new messages for a better UX
- Simulated bot response by adding typing indicators and small delay
- Button toggles recommended questions for better user interaction

---

## Future Work

- Add persistent chat history (localStorage or database)
- Implement authentication with Google login option and user profiles
- Support richer content in messages
- Write unit and integration tests for the Angular app
