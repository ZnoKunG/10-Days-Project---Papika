const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema);