const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: String,
    date: {
        type: Date,
        default: Date.now,
      },
})

module.exports  = mongoose.model('Comment',commentSchema);