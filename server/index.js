const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userModel = require('./models/user');
// 1 => middlewares
app.use(cors());
app.use(express.json());

// 2 => routes
app.post('/signup',(req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));

})
// 3 => mongodb_connection
mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => console.log('connected'))
    .catch((error) => console.error('error', error));

// 4 => global error handling

// 5 => server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
