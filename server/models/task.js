const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: String,
    text: String
});

module.exports = mongoose.model('task', taskSchema);  
