const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const activitySchema = new Schema({
    id: Number,
    activity_id: Number,
    comment: String
})

const ModelClass = mongoose.model('comments', activitySchema);

module.exports = ModelClass;