const express = require('express');
require('dotenv').config();
const app = express();

const connectDb = require('./config/db');
connectDb()
const cors = require('cors');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());









const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`);
})