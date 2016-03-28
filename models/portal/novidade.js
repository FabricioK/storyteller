/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var novidadeSchema = mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now },
    date_event : { type: Date, default: Date.now },
    content: String
});

var Novidade = mongoose.model('Novidade', novidadeSchema);

module.exports = Novidade;
