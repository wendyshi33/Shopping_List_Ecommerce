var mongoose = require('mongoose');

module.exports = mongoose.model('buyingList', {
    text: {
        type: String,
        default: ''
    }
});