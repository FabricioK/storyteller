/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var npcSchema = mongoose.Schema({
    nome: String,
    date: { type: Date, default: Date.now },
    level: Number,
    gender: String,
    unknowText: String,
    knowText: String,
    Temperament: String
});

var NPC = mongoose.model('NPC', npcSchema);

module.exports = NPC;