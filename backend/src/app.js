const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/chat', chatRoutes);

module.exports = app