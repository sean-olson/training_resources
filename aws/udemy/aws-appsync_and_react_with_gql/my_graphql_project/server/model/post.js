const mongoose = require('mongoose')

const post_schema = new mongoose.Schema({
    name: String,
    comment: String,
    user_id: String,
})

module.exports = mongoose.model('Post', post_schema)
