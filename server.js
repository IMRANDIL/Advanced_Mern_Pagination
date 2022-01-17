const express = require('express');
require('dotenv').config();
const app = express();

const connectDb = require('./config/db');
connectDb()
const cors = require('cors');
const PostRoute = require('./routes/PostRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/posts', PostRoute)









const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`);
})