const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// 1 => middlewares
app.use(cors());
app.use(express.json());

// 2 => routes

// 3 => mongodb_connection
mongoose.connect('mongodb://127.0.0.1:27017/auth')
    .then(() => console.log('connected'))
    .catch((error) => console.error('error', error));

// 4 => global error handling

// 5 => server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
