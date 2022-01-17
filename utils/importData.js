require('dotenv').config();

const fs = require('fs');

const Post = require('../models/Post');


const connectDb = require('../config/db');

connectDb();


const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'));


const importData = async () => {
    try {
        await Post.create(posts);
        console.log(`data successfully loaded🤪`);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



const deleteData = async () => {
    try {
        await Post.deleteMany({});
        console.log(`Data successfully deleted😆`);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData()
}