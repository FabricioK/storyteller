/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var agendaSchema = mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now },
    date_event : { type: Date, default: Date.now },
    content: String
});

var Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;
