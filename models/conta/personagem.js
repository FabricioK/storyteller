/* global Debug */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var personagemSchema = mongoose.Schema({
    nome: String,
    date: { type: Date, default: Date.now },
    level : Number
});

var Personagem = mongoose.model('Personagem', personagemSchema);

module.exports = Personagem;
