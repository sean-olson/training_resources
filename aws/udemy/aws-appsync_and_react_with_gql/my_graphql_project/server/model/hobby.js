const mongoose = require('mongoose')

const hobby_schema = new mongoose.Schema({
    title: String,
    description: String,
    user_id: String,
})

module.exports = mongoose.model('Hobby', hobby_schema)
