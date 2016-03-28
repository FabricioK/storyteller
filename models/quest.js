/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var questSchema = mongoose.Schema({
    nome: String,
    date: { type: Date, default: Date.now },
    cenario_id: Number,
    exp: Number,
    content : String
});

var Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;