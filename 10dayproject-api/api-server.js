const e = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./schemas/post')
require('dotenv').config();
const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
app.get('/posts', pagninatedResults(Post), (req, res) => {
    res.json(res.pagninatedResults)
})
const db = mongoose.connection;
db.once('open', async () => {
    if (await Post.countDocuments().exec() > 0) return;
    Promise.all([
        Post.create({ title: "Title 1" }),
        Post.create({ title: "Title 2" }),
        Post.create({ title: "Title 3" }),
        Post.create({ title: "Title 4" }),
        Post.create({ title: "Title 5" }),
        Post.create({ title: "Title 6" }),
        Post.create({ title: "Title 7" }),
        Post.create({ title: "Title 8" }),
        Post.create({ title: "Title 9" }),
        Post.create({ title: "Title 10" }),
        Post.create({ title: "Title 11" }),
        Post.create({ title: "Title 12" }),
    ]).then(() => console.log("Added Posts success"))
})

function pagninatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (startIndex > 0){ // Have previous page
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }
    if (endIndex < await model.countDocuments().exec()){
        results.next = {
            page: page + 1,
            limit: limit
        };
    }
    try {
        results.results = await model.find().limit(limit).skip(startIndex).exec();
        res.pagninatedResults = results;
        next();
    }
    catch (err) {
        res.status(500).json({ message: e.message })
    }
    }
}


app.listen(3000, () => {
    console.log('Listening to port 3000...')
});
