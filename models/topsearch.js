const mongoose = require('mongoose');

var wordsList = mongoose.Schema({
    topWordsdSearchList: Array,
});

module.exports = mongoose.model('wordssearchs', wordsList);