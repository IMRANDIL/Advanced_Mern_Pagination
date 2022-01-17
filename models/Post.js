const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title.']
    },
    author: {
        type: String,
        required: [true, 'Please provide an author.']
    },
    body: {
        type: String,
        required: [true, 'Please Provide a body.']
    }
});


const Post = mongoose.model('post', postSchema);

module.exports = Post;